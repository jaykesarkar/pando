import prettier from 'prettier'
import path from 'path'
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import indentObject from '../utils/indentLine'

const generatedDisclaimer = `// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!
\n
`

const writeToFile = (outPath, convertedCss, outputType) => {
  let fileOutPath = outPath

  // Case: "SplitFile": Export input object key, values as exports to separate file
  if (outputType === 'splitFile') {
    // Create dir for generated split files
    if (path.extname(fileOutPath)) {
      fileOutPath = fileOutPath.slice(0, -3)
    } else {
      fileOutPath = path.join(fileOutPath, convertedCss.filename)
    }

    if (!existsSync(fileOutPath)) {
      mkdirSync(fileOutPath)
    }

    Object.entries(convertedCss.contents).forEach((key) => {
      const body = indentObject(key[1], 2)

      writeFileSync(path.join(fileOutPath, `${key[0]}.ts`), 'export default ')
      appendFileSync(path.join(fileOutPath, `${key[0]}.ts`), body)
    })
  } else {
    // Create file for generated simple file
    if (!path.extname(fileOutPath)) {
      fileOutPath = path.join(fileOutPath, `${convertedCss.filename}.ts`)
    }

    if (outputType === 'shakeFile') {
      // Case: "ShakeFile": Export input object key, values as exports to file
      writeFileSync(fileOutPath, '')
      Object.entries(convertedCss.contents).forEach((key) => {
        appendFileSync(
          fileOutPath,
          `export const ${key[0]} = ${JSON.stringify(key[1])};\n`
        )
      })
    } else {
      // Case: "File": Export input object to file
      const { imports, output } = buildComposedOutput(convertedCss.contents)
      const prettierOptions = prettier.resolveConfig.sync(fileOutPath)
      const fileContents =
        generatedDisclaimer + imports + '\nexport default' + output

      writeFileSync(
        fileOutPath,
        prettier.format(fileContents, {
          ...prettierOptions,
          parser: 'typescript',
        })
      )
    }
  }
}

export default writeToFile

// By this time, the composes setup should be complete for this function
// to finish the job by adding the remaining file imports to the TS file
function buildComposedOutput(body) {
  const importMap = new Map()
  let output = '{\n'

  for (const [className, value] of Object.entries(body)) {
    output += buildTopLevelSelectorOutput(className, value, importMap)
  }

  output += '}'

  let imports = [...importMap.entries()].map(
    ([file, name]) => `import ${name} from "${file}"`
  )

  return {
    imports: imports.join('\n') + '\n',
    output,
  }
}

function handleNestedProperties(value, importMap) {
  const classEntry = {
    directEntries: {},
    externalEntries: [],
  }

  for (const [innerSelector, innerValue] of Object.entries(value)) {
    if (innerSelector === 'composes' && Array.isArray(innerValue)) {
      innerValue.forEach((composeValue) => {
        const externalCompose = getExternalComposeFileAndValue(composeValue)

        if (externalCompose) {
          classEntry.externalEntries.push(
            getExternalEntry(externalCompose, importMap)
          )
        }
      })
      continue
    }

    classEntry.directEntries[innerSelector] = innerValue
  }
  return classEntry
}

function getExternalComposeFileAndValue(composes) {
  const match = composes.match(/(.+) from '(.+)'/)
  if (match) {
    const [, valueName, file] = match

    return { valueName, file }
  }

  return null
}

function getExternalEntry(externalCompose, importMap) {
  const { valueName, file } = externalCompose
  // Paths we need to support:
  // './*.module.css'
  // '../components/X/*.module.css'
  const moduleReg = /^(.*)\/(.+)\.module\.css/
  let generatedImportFileName = file.replace(
    moduleReg,
    '../$1/generated/$2.module'
  )
  let importName

  if (importMap.has(generatedImportFileName)) {
    importName = importMap.get(generatedImportFileName)
  } else {
    importName = file.match(moduleReg)[2]
    importMap.set(generatedImportFileName, importName)
  }

  return `${importName}.${valueName}`
}

function buildTopLevelSelectorOutput(className, value, importMap) {
  const classEntry = handleNestedProperties(value, importMap)
  let output = `${JSON.stringify(className)}:`

  if (classEntry.externalEntries) {
    output += classEntry.externalEntries.reduce(
      (prev, current) => (prev += `...${current},\n`),
      '{\n'
    )
  } else {
    output += '{\n'
  }

  for (const [property, value] of Object.entries(classEntry.directEntries)) {
    const stringifiedPropName = JSON.stringify(property)

    if (classEntry.externalEntries.length && typeof value === 'object') {
      output += `${stringifiedPropName}:{\n`

      output += classEntry.externalEntries.reduce(
        (prev, current) =>
          (prev += `// @ts-ignore\n...${current}[${stringifiedPropName}],\n`),
        ''
      )

      for (const [innerKey, innerValue] of Object.entries(value)) {
        output += `${JSON.stringify(innerKey)}: ${JSON.stringify(
          innerValue
        )},\n`
      }
      output += '},\n'
    } else {
      output += `${stringifiedPropName}: ${JSON.stringify(value, null, 2)},\n`
    }
  }

  output += '},\n'
  return output
}
