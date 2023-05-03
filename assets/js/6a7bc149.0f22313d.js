"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5304],{72032:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(81648),o=n(45721),l=n(71397),r=n(61471),s="grid_cC7H";function i(e){return o.createElement("li",(0,l.a)({colSpan:2}),o.createElement(r.Z,e,e.children))}function p(e){const{figma:t,github:n}=e,{className:r,...p}=(0,l.g)({cols:12,gap:8});return o.createElement("ul",(0,a.Z)({className:`${r} ${s}`},p),n&&o.createElement(i,{href:n},"View on Github"),t&&o.createElement(i,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),o=n(64965),l=n(4094),r=n(31026),s=n(6115);function i(e){const{href:t}=e,n=(0,o.g)({href:t}),i=(0,l.g)(n.iconOptions),p=t.includes("github")?r.Z:s.Z;return a.createElement("a",n.link,a.createElement(p,i),e.children)}},95400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var a=n(81648),o=(n(45721),n(70167)),l=n(72032);n(27505);const r={tags:["dropdown","field","form"],title:"Select"},s=void 0,i={unversionedId:"reference/components/select",id:"reference/components/select",title:"Select",description:"Used to allow a user to select a value from a list of options.",source:"@site/docs/reference/components/select.mdx",sourceDirName:"reference/components",slug:"/reference/components/select",permalink:"/docs/next/reference/components/select",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/select.mdx",tags:[{label:"dropdown",permalink:"/docs/next/tags/dropdown"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Patsy",frontMatter:{tags:["dropdown","field","form"],title:"Select"},sidebar:"reference",previous:{title:"Radio",permalink:"/docs/next/reference/components/radio"},next:{title:"Skeleton",permalink:"/docs/next/reference/components/skeleton"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Select",id:"basic-select",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>getSelectProps</code>",id:"getselectprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>getSelectOptionProps</code>",id:"getselectoptionprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to allow a user to select a value from a list of options."),(0,o.kt)(l.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Select",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  getSelectProps,\n  getSelectOptionProps,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SelectOptions {\n  describedBy?: string\n  disabled?: boolean\n  kind?: 'default' | 'icon'\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 'm' | 'l'\n  type: 'text' | 'email' | 'password' | 'tel' | 'url'\n  value: string\n}\n\ngetSelectProps(options?: SelectOptions)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SelectOptionOptions {\n  placeholder?: string\n  value?: string\n}\n\ngetSelectOptionProps(options?: SelectOptionOptions)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import type {\n  SelectOptions,\n  SelectOptionOptions,\n} from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Select"),(0,o.kt)("li",{parentName:"ol"},"Icon"),(0,o.kt)("li",{parentName:"ol"},"Option")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-select"},"Basic Select"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicSelect() {\n  const fruitList = [\n    'apple',\n    'orange',\n    'banana',\n    'strawberry',\n    'grape',\n    'blueberry',\n    'raspberry',\n  ]\n  const [fruit, setFruit] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const selectLabel = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: 'chosen-fruit',\n    value: 'Select fruit',\n  })\n  const selectProps = getSelectProps({\n    ...fieldOptions,\n    id: 'chosen-fruit',\n    name: 'fruit_item',\n    value: fruit,\n  })\n  const iconProps = getIconProps(selectProps.iconOptions)\n\n  function handleChange(e) {\n    setFruit(e.target.value)\n  }\n\n  return (\n    <div {...selectProps.fieldWrapper}>\n      <label {...selectLabel}>{selectLabel.value}</label>\n      <div {...selectProps.selectWrapper}>\n        <select {...selectProps.select} onChange={handleChange}>\n          {!fruit && (\n            <option\n              {...getSelectOptionProps({ placeholder: 'Choose fruit' })}\n            />\n          )}\n          {fruitList.map((value) => (\n            <option key={value} {...getSelectOptionProps({ value })}>\n              {value}\n            </option>\n          ))}\n        </select>\n        <span {...selectProps.iconWrapper}>\n          <ChevronDownIcon {...iconProps} />\n        </span>\n      </div>\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)("p",null,"The Select shares the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/components/radio#states"},"same UI states")," as every field in Pando."),(0,o.kt)("admonition",{title:"Form field and state",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain accessbility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"getselectprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSelectProps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getSelectProps(options?: SelectOptions)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": A boolean value for the properties of disabled, invalid, readOnly, and required which manage the state of the field. A String value for properties describedBy, id, name, placeholder, and value which create a11y properties for the Input. A property kind that accepts a String value ",(0,o.kt)("inlineCode",{parentName:"li"},"'default' | 'icon'")," to determine the styling rules for the input within the context of adding an Icon within the field. A property of type that accepts a String value of ",(0,o.kt)("inlineCode",{parentName:"li"},"'text' | 'email' | 'password' | 'tel' | 'url'")," that sets the type property for the Input. A size property that accepts a String value of ",(0,o.kt)("inlineCode",{parentName:"li"},"'m' | 'l'")," to determine the size styling for the Input.")),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object matching the ",(0,o.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the label element. Additionally, it returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"iconOptions")," property to pass into the Icon API."),(0,o.kt)("h3",{id:"getselectoptionprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSelectOptionProps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getSelectOptionProps(options?: SelectOptionOptions)\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": A string value for properties placeholder and value to determine a11y props for the Select Option element.")),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"An Object matching the ",(0,o.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the Select element."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a ",(0,o.kt)("strong",{parentName:"p"},"hidden label")," when using a Select within a Table Cell."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," exclude a label when using a Select within a Table Cell, which is not accessible."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Select when the list of options exceeds 5 items."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Select when the list of options is less than 5 items. Instead, use a Radio group."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Select when a single option choice is needed from a user."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Select to navigate to another location. Instead use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/components/menu"},"Menu"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Modal with a Checkbox List when you need to use a multi-select field."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use Select to create a multi-select field."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the styles provided by the Select Option to keep the experience native to the OS/Browser."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," re-style or fake a Select Option which is not accessbile and creates a poor user experience for all platforms."),(0,o.kt)("h2",{id:"accessbility"},"Accessbility"),(0,o.kt)("p",null,"The Pando Select, and Icon APIs combined with semantic HTML allow the Select to be fully accessible and screen-readable."))}d.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return c},g:function(){return p}});var a=n(1801),o=n(23909),l=n(31519);const r="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,l.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const i="pando-grid";function p(e){const t=(0,o.g)(e);return{...(0,o.c)(t),...(0,a.c)(i,r,...t.classNames)}}function c(e){const t=(0,o.a)(e);return{...(0,o.b)(t),...(0,a.c)(`${i}-item`,s,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return l},b:function(){return s},c:function(){return r},g:function(){return o}});const a={6:.375,8:.5,12:.75,16:1,32:2};function o(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function l(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function r(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);