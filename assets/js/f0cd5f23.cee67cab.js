"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4455],{61471:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(45721),r=a(64965),o=a(4094),i=a(31026),s=a(6115);function u(e){const{href:t}=e,a=(0,r.g)({href:t}),u=(0,o.g)(a.iconOptions),l=t.includes("github")?i.Z:s.Z;return n.createElement("a",a.link,n.createElement(l,u),e.children)}},14749:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(81648),r=(a(45721),a(70167)),o=a(61471);const i={tags:["React","Dates","DatePicker"],title:"useAutoFormatDate"},s=void 0,u={unversionedId:"reference/react-hooks/useAutoFormatDate",id:"reference/react-hooks/useAutoFormatDate",title:"useAutoFormatDate",description:"A hook for auto-formatting and validating a text input value to match a short",source:"@site/docs/reference/react-hooks/useAutoFormatDate.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useAutoFormatDate",permalink:"/docs/next/reference/react-hooks/useAutoFormatDate",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useAutoFormatDate.mdx",tags:[{label:"React",permalink:"/docs/next/tags/react"},{label:"Dates",permalink:"/docs/next/tags/dates"},{label:"DatePicker",permalink:"/docs/next/tags/date-picker"}],version:"current",lastUpdatedBy:"Patsy",frontMatter:{tags:["React","Dates","DatePicker"],title:"useAutoFormatDate"},sidebar:"reference",previous:{title:"Tooltip",permalink:"/docs/next/reference/components/tooltip"},next:{title:"useEscToClose",permalink:"/docs/next/reference/react-hooks/useEscToClose"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My Dates are showing up incorrectly",id:"my-dates-are-showing-up-incorrectly",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"A hook for auto-formatting and validating a text input value to match a short date."),(0,r.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useAutoFormatDate.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useAutoFormatDate } from '@pluralsight/react-utils'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Options {\n  pattern?: ['m', 'd', 'Y'] | ['d', 'm', 'Y']\n  value?: string\n}\n\nuseAutoFormatDate(options?: Options)\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutoFormatDate")," at the top level of your component to provide an automatically formatted date value to your text input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2,9}",showLineNumbers:!0,"{2,9}":!0},"function DateInput(props) {\n  const inputFormatProps = useAutoFormatDate()\n  const { fieldOptions } = getFormControlProps(props)\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'birthdate',\n    name: 'birthdate',\n    placeholder: inputFormatProps.placeholder,\n    value: inputFormatProps.value,\n  })\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <input {...inputProps.input} onChange={inputFormatProps.onChange} />\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": Object that accepts a ",(0,r.kt)("inlineCode",{parentName:"li"},"pattern")," property that accepts a String Array value of a Date Pattern along with a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," property that accepts a String to set an ",(0,r.kt)("strong",{parentName:"li"},"initial value"),".")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object containing a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property of a ",(0,r.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/#/formatting?id=presets"},"short date")," String and an ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," event handler to attach to your input element."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"my-dates-are-showing-up-incorrectly"},"My Dates are showing up incorrectly"),(0,r.kt)("p",null,"Make sure you are passing an accepted format option. If you are using Typescript, the types will be available to help prevent this from happening."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure your format option is valid."),(0,r.kt)("li",{parentName:"ol"},"If you are passing in an initial value, make sure it is valid.")))}m.isMDXComponent=!0}}]);