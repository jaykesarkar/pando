"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4950],{80194:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},98791:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},40736:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const r={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function l(e){void 0===e&&(e=r);const t=e.type??r.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",l={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[t],style:l},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return s},C9:function(){return d},ZP:function(){return u}});var a=n(45721),i=n(84140),r="linkList_sLwJ",l="linkItem_ESvF";function o(e){return a.createElement("li",{className:l},a.createElement(i.Z,e,e.children))}function s(e){return a.createElement(o,{href:e.href},e.children??"View on Github")}function c(e){return a.createElement(o,{href:e.href},"View on Figma")}function d(e){return a.createElement("ul",{className:r},e.children)}function u(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:r},n&&a.createElement(s,{href:n}),t&&a.createElement(c,{href:t}))}},45945:function(e,t,n){n(45721)},92587:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(45721),i=n(80631),r=n(43262),l=n(40736),o=n(81648),s=n(87771),c=n(17109),d=n(11164);function u(e){const{onClick:t,...n}=e,r=(0,i.Y)({disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,required:e.required}),l=(0,d.B)({...r,...n}),{checked:u,...m}=l.input;return a.createElement("div",l.radioContainer,a.createElement(s.d,{when:t,fallback:a.createElement("input",(0,o.Z)({},m,{defaultChecked:u}))},a.createElement("input",(0,o.Z)({},m,{onChange:t,checked:u}))),a.createElement("span",l.radioControl),a.createElement(c._,{htmlFor:e.id},e.label))}function m(){return a.createElement(i.s,null,a.createElement(r.P,{col:"1 / span 6"},a.createElement(u,{checked:!0,id:"checked",label:"Checked"})))}function p(){return a.createElement(i.s,{disabled:!0},a.createElement(r.P,{col:"1 / span 6"},a.createElement(u,{id:"disabled",label:"Disabled"})))}function f(){return a.createElement(i.s,{invalid:!0},a.createElement(r.P,{col:"1 / span 6"},a.createElement(u,{id:"invalid",label:"Invalid"})))}function h(){return a.createElement(i.s,{readOnly:!0},a.createElement(r.P,{col:"1 / span 6"},a.createElement(u,{id:"readOnly",label:"Read only"})))}function g(){return a.createElement(i.s,{required:!0},a.createElement(r.P,{col:"1 / span 6"},a.createElement(u,{id:"required",label:"Required"})))}var v=function(){return a.createElement(l.Z,null,a.createElement(r.r,{"data-site-override":"initialTextAlign",cols:12,gap:16},a.createElement(m,null),a.createElement(p,null),a.createElement(f,null),a.createElement(h,null),a.createElement(g,null)))}},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),i=n(45097),r=n(88544),l=n(98791),o=n(80194);function s(e){const{href:t}=e,n=(0,r.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?l.Z:o.Z;return a.createElement(i.h,e,a.createElement(s,n),e.children)}},13331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(81648),i=(n(45721),n(70167)),r=n(92587),l=n(15566);n(45945);const o={tags:["single-select","field","form"],title:"Radio"},s=void 0,c={unversionedId:"reference/components/radio",id:"reference/components/radio",title:"Radio",description:"Used when when only one choice may be selected from a series of options.",source:"@site/docs/reference/components/radio.mdx",sourceDirName:"reference/components",slug:"/reference/components/radio",permalink:"/docs/next/reference/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/radio.mdx",tags:[{label:"single-select",permalink:"/docs/next/tags/single-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["single-select","field","form"],title:"Radio"},sidebar:"reference",previous:{title:"Prompt Dialog",permalink:"/docs/next/reference/components/prompt-dialog"},next:{title:"Select",permalink:"/docs/next/reference/components/select"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Radio",id:"basic-radio",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used when when only one choice may be selected from a series of options."),(0,i.kt)(l.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Radio",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getRadioProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RadioOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  value: string\n}\n\ngetRadioProps(options?: RadioOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { RadioOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Control"),(0,i.kt)("li",{parentName:"ol"},"Input"),(0,i.kt)("li",{parentName:"ol"},"Label")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-radio"},"Basic Radio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Radio() {\n  const radioProps = getRadioProps({\n    checked: true,\n    id: \'radio:1\',\n  })\n  const { checked, ...inputProps } = radioProps.input\n\n  return (\n    <FormControlProvider>\n      <div role="radiogroup">\n        <div {...radioProps.radioContainer}>\n          <input {...inputProps} defaultChecked={checked} />\n          <span {...radioProps.radioControl} />\n          <Label htmlFor="radio:1">Basic example</Label>\n        </div>\n      </div>\n    </FormControlProvider>\n  )\n}\n')),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)(r.Z,{mdxType:"RadioStates"}),(0,i.kt)("admonition",{title:"Form field and state",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getRadioProps(options?: RadioOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Radio state. An id and optional name property that accept a String value which connected Accessibility properties from the label to the Radio. A checked property that accepts a Boolean value to determine the styling of the Radio state. A value property that accepts a String for form submission.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"layout"},"Layout"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use multiple Radios in a vertical list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use multiple Radios in a single row."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Radio."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Radio inline without a Label."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use a Radio for giving users a group of options from which they can select a single item."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Radio for showing/hiding content."),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando Radio, and Icon APIs combined with semantic HTML allow the Radio to be fully accessible and screen-readable."))}p.isMDXComponent=!0}}]);