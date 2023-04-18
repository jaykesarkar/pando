"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2877],{72032:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(81648),l=t(45721),r=t(31825),i=t(61471),o="grid_cC7H";function s(e){return l.createElement("li",(0,r.a)({colSpan:2}),l.createElement(i.Z,e,e.children))}function p(e){const{figma:n,github:t}=e,{className:i,...p}=(0,r.g)({cols:12,gap:8});return l.createElement("ul",(0,a.Z)({className:`${i} ${o}`},p),t&&l.createElement(s,{href:t},"View on Github"),n&&l.createElement(s,{href:n},"Figma Design"))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(45721),l=t(94697),r=t(23038),i=t(31026),o=t(6115);function s(e){const{href:n}=e,t=(0,l.g)({href:n}),s=(0,r.g)(t.iconOptions),p=n.includes("github")?i.Z:o.Z;return a.createElement("a",t.link,a.createElement(p,s),e.children)}},5083:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=t(81648),l=(t(45721),t(70167)),r=t(72032);t(27505);const i={tags:["field","label","forms"],title:"Form Label"},o=void 0,s={unversionedId:"reference/components/form-label",id:"version-0.4.1/reference/components/form-label",title:"Form Label",description:"Used to display a text label for a form field.",source:"@site/versioned_docs/version-0.4.1/reference/components/form-label.mdx",sourceDirName:"reference/components",slug:"/reference/components/form-label",permalink:"/docs/reference/components/form-label",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/form-label.mdx",tags:[{label:"field",permalink:"/docs/tags/field"},{label:"label",permalink:"/docs/tags/label"},{label:"forms",permalink:"/docs/tags/forms"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["field","label","forms"],title:"Form Label"},sidebar:"reference",previous:{title:"Form Control",permalink:"/docs/reference/components/form-control"},next:{title:"Grid",permalink:"/docs/reference/components/grid"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Optional Field",id:"optional-field",level:3},{value:"Required Field",id:"required-field",level:3},{value:"Hidden Label Field",id:"hidden-label-field",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"size-xxl"},"Used to display a text label for a form field."),(0,l.kt)(r.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/FormLabel",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getFormLabelProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormLabelOptions {\n  htmlFor: string\n  kind?: 'default' | 'hidden'\n  required?: boolean\n  value: string\n}\n\ngetFormLabelProps(options?: FormLabelOptions)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { FormLabelOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Form Control"),(0,l.kt)("li",{parentName:"ol"},"Label"),(0,l.kt)("li",{parentName:"ol"},"Input"),(0,l.kt)("li",{parentName:"ol"},"Message")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,l.kt)("h3",{id:"optional-field"},"Optional Field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicFormLabel() {\n  const formId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"required-field"},"Required Field"),(0,l.kt)("admonition",{title:"Easy to understand invalid states",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To display an invalid state that is easy to understand for the user, pass in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fieldOptions")," to your Error Message component and add a WarningTriangleFilled ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/general/icons"},"Icon"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function RequiredFormLabel() {\n  const formId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    required: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"hidden-label-field"},"Hidden Label Field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicFormLabel() {\n  const formId = 'search'\n  const [searchVal, setSearchVal] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    kind: 'hidden',\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'exampleIconInput',\n    kind: 'icon',\n    name: 'icon_input',\n    placeholder: 'Search anything',\n    value: searchVal,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <span {...inputProps.iconWrapper}>\n          <SearchIcon {...getIconProps(inputProps.iconOptions)} />\n        </span>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n    </div>\n  )\n}\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"getFormLabelProps(options?: FormLabelOptions)\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": A string value for properties htmlFor and value")),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"An Object matching the ",(0,l.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the label element. Additionally, it returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property that contains the content of the label."),(0,l.kt)("h2",{id:"behavior"},"Behavior"),(0,l.kt)("h3",{id:"patterns"},"Patterns"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,l.kt)("h2",{id:"accessbility"},"Accessbility"),(0,l.kt)("p",null,"The Pando Form Label API combined with semantic HTML allow the Form Label to be fully accessible and screen-readable."))}u.isMDXComponent=!0},31825:function(e,n,t){t.d(n,{a:function(){return d},g:function(){return p}});var a=t(39112),l=t(58105),r=t(50114);const i="gridCSS-module_gridContainer__sQmao",o="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="ps-grid";function p(e){const n=(0,l.g)(e);return{...(0,l.c)(n),...(0,a.c)(s,i)}}function d(e){const n=(0,l.a)(e);return{...(0,l.b)(n),...(0,a.c)("ps-grid-item",o)}}},58105:function(e,n,t){t.d(n,{a:function(){return r},b:function(){return o},c:function(){return i},g:function(){return l}});const a={6:.375,8:.5,12:.75,16:1,32:2};function l(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function i(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function o(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);