"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1182],{6115:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z"})})}},31026:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},67235:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:a[t],style:o},e.children)}},95428:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(81648),a=n(45721),i=n(17493),o=n(69477),s="grid_cC7H";function l(e){return a.createElement("li",(0,i.a)({colSpan:2}),a.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,r.Z)({className:`${o} ${s}`},c),n&&a.createElement(l,{href:n},"View on Github"),t&&a.createElement(l,{href:t},"Figma Design"))}},25302:function(e,t,n){n(45721)},24469:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(45721),a=n(67235),i=n(81648),o=n(78338),s=n(17727),l=n(39636);var c=function(e){const{control:t,fieldOptions:n}=(0,o.g)(e),a=(0,s.g)({...e,...n}),{value:c,...d}=(0,l.g)({...n,htmlFor:e.id,size:e.size,value:e.label});return r.createElement("div",t,r.createElement("div",a.wrapper,r.createElement("label",d,c),r.createElement("label",a.switchContainer,r.createElement("input",(0,i.Z)({},a.input,{onClick:e.onClick})),r.createElement("span",a.switchTrack,r.createElement("span",a.switchThumb)))))};var d=function(){const[e,t]=(0,r.useState)(!1);return r.createElement(a.Z,{type:"grid",gridColumns:"2",columnGap:"5rem",justifyContent:"start"},r.createElement(c,{id:"checked-example",label:"checked:",checked:!0}),r.createElement(c,{id:"disabled-example",label:"disabled:",disabled:!0}),r.createElement(c,{id:"invalid-example",label:"invalid:",invalid:!0}),r.createElement(c,{id:"readonly-example",label:"readonly:",readonly:!0}),r.createElement(c,{id:"required-example",label:"required:",required:!0,checked:e,onClick:function(e){t(e.target.checked)}}))}},69477:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(45721),a=n(60146),i=n(59280),o=n(31026),s=n(6115);function l(e){const{href:t}=e,n=(0,a.g)({href:t}),l=(0,i.g)(n.iconOptions),c=t.includes("github")?o.Z:s.Z;return r.createElement("a",n.link,r.createElement(c,l),e.children)}},24497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(81648),a=(n(45721),n(70167)),i=n(24469),o=n(95428);n(25302);const s={tags:["toggle","single-select","field","form"],title:"Switch"},l=void 0,c={unversionedId:"reference/components/switch",id:"reference/components/switch",title:"Switch",description:"Used as an alternative to the Checkbox for choosing between enabled and",source:"@site/docs/reference/components/switch.mdx",sourceDirName:"reference/components",slug:"/reference/components/switch",permalink:"/docs/next/reference/components/switch",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/switch.mdx",tags:[{label:"toggle",permalink:"/docs/next/tags/toggle"},{label:"single-select",permalink:"/docs/next/tags/single-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["toggle","single-select","field","form"],title:"Switch"},sidebar:"reference",previous:{title:"Skeleton",permalink:"/docs/next/reference/components/skeleton"},next:{title:"Table",permalink:"/docs/next/reference/components/table"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Switch",id:"basic-switch",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used as an alternative to the Checkbox for choosing between enabled and disabled states."),(0,a.kt)(o.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Switch",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSwitchProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SwitchOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 's' | 'm'\n  value: string\n}\n\ngetSwitchProps(options?: SwitchOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { SwitchOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Input"),(0,a.kt)("li",{parentName:"ol"},"Track"),(0,a.kt)("li",{parentName:"ol"},"Thumb"),(0,a.kt)("li",{parentName:"ol"},"Label")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-switch"},"Basic Switch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicSwitch() {\n  const [checked, setChecked] = useState(false)\n  const { control, fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <div {...control}>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SwitchSizes() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n  const smallSwitchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n    size: 's',\n  })\n  const smallLabelProps = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <form>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n\n      <div {...smallSwitchProps.wrapper}>\n        <label {...smallLabelProps}>{smallLabelProps.value}</label>\n        <label {...smallSwitchProps.switchContainer}>\n          <input {...smallSwitchProps.input} onClick={handleChange} />\n          <span {...smallSwitchProps.switchTrack}>\n            <span {...smallSwitchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </form>\n  )\n}\n")),(0,a.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Switch size rules."',title:'"Switch',size:!0,'rules."':!0},"{\n  s: 'Use in condensed areas where the default size is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,a.kt)("h3",{id:"states"},"States"),(0,a.kt)(i.Z,{mdxType:"SwitchStates"}),(0,a.kt)("admonition",{title:"Form field and state",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain accessbility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getSwitchProps(options?: SwitchOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Switch state. An id and optional name property that accept a String value which connected accessbility properties from the label to the Switch. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Switch state. A value property that accepts a String for form submission. An optional size property that accepts a String value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'s' | 'm'")," to determine the styling of the Switch elements relative to the size.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"layout"},"Layout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use multiple Switches in a vertical list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use multiple Switches in a single row."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Switch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Switch inline without a Label. Instead use a hidden Label."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use a Switch for giving users an way to opt-in to an optional feature."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Switch for collecting consent. Instead us a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/checkbox"},"Checkbox"),"."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Switch API combined with semantic HTML allow the Switch to be fully accessible and screen-readable."))}h.isMDXComponent=!0},78338:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(89020),a=n(3189),i=n(26730);const o={formControlBase:"formControlCSS-module_formControlBase__Q1Q7H",rowFormControl:"formControlCSS-module_rowFormControl__ek6X- formControlCSS-module_formControlBase__Q1Q7H",colFormControl:"formControlCSS-module_colFormControl__jC13A formControlCSS-module_formControlBase__Q1Q7H"};(0,i.s)(".formControlCSS-module_formControlBase__Q1Q7H{align-items:center;display:flex;gap:1rem;position:relative;width:100%}.formControlCSS-module_formControlBase__Q1Q7H[disabled]{opacity:.5}.formControlCSS-module_colFormControl__jC13A{align-items:flex-start;flex-direction:column}");function s(e){const{groupType:t,direction:n,...i}=(0,a.g)(e),{directionClass:s}=(0,a.a)(n);return{control:{...{role:t},disabled:i.disabled,...(0,r.c)("ps-form-control",o.formControlBase,o[s])},fieldOptions:i}}},3189:function(e,t,n){function r(e){return{directionClass:`${e}FormControl`}}function a(e){return{direction:(null==e?void 0:e.direction)??"row",disabled:(null==e?void 0:e.disabled)??!1,groupType:(null==e?void 0:e.groupType)??"group",invalid:(null==e?void 0:e.invalid)??!1,readOnly:(null==e?void 0:e.readOnly)??!1,required:(null==e?void 0:e.required)??!1}}n.d(t,{a:function(){return r},g:function(){return a}})},39636:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(89020),a=n(57995),i=n(26730);const o={defaultFormLabel:"formLabelCSS-module_defaultFormLabel__xDgsw",hiddenFormLabel:"formLabelCSS-module_hiddenFormLabel__Im12t"};(0,i.s)(".formLabelCSS-module_defaultFormLabel__xDgsw{-webkit-margin-end:0;align-items:center;display:flex;font-family:inherit;font-size:1rem;gap:.75rem;margin-bottom:0;margin-inline-end:0;opacity:1;text-align:start;-webkit-user-select:none;-moz-user-select:none;user-select:none}.formLabelCSS-module_hiddenFormLabel__Im12t{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}");function s(e){const{htmlFor:t,value:n,...i}=(0,a.g)(e),s=(0,a.a)(n,i.required),{labelClass:l}=(0,a.b)(i.kind);return{htmlFor:t,...s,...(0,r.c)("ps-form-label",o[l])}}},57995:function(e,t,n){function r(e){return{labelClass:`${e}FormLabel`}}function a(e){return{htmlFor:(null==e?void 0:e.htmlFor)??"",kind:(null==e?void 0:e.kind)??"default",required:(null==e?void 0:e.required)??!1,value:(null==e?void 0:e.value)??"Form label"}}function i(e,t){let n=e;return t&&(n=`${e} (required)`),{value:n}}n.d(t,{a:function(){return i},b:function(){return r},g:function(){return a}})},22410:function(e,t,n){n.d(t,{s:function(){return r}});const r={wrapper:{alignItems:"center",display:"flex",gap:"0.875rem"},container:{display:"inline-block",lineHeight:"0",position:"relative",verticalAlign:"middle"},input:{border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px","&:focus + .track":{outline:"3px solid var(--ps-action-border-focus)",outlineOffset:"2px"},"&:focus:not(:focus-visible) + .track":{boxShadow:"none",outline:"none"}},thumb:{background:"var(--ps-action-text)",borderRadius:"inherit",height:"var(--ps-thumb-size)",transitionDuration:"200ms",transitionProperty:"transform",width:"var(--ps-thumb-size)","&[data-checked='true']":{transform:"translateX(calc(var(--ps-track-width) - var(--ps-track-height)))"}},track:{"--ps-thumb-size":"1.25rem","--ps-track-height":"1.5rem","--ps-track-width":"3rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}},track_data_checked__true:{"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-action-background-hover)"}},track_data_invalid__true:{"&:hover":{background:"var(--ps-danger-surface)"}},sTrack:{"--ps-thumb-size":"0.75rem","--ps-track-height":"1rem","--ps-track-width":"2rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}},mTrack:{"--ps-thumb-size":"1.25rem","--ps-track-height":"1.5rem","--ps-track-width":"3rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}}}},44068:function(e,t,n){n.d(t,{T:function(){return s},a:function(){return i},b:function(){return o},c:function(){return d},g:function(){return c},i:function(){return l}});var r=n(93216),a=n(22410);const i="--ps-track-height",o="--ps-track-width",s="--ps-thumb-size";function l(e,t){return"s"===e?a.s.sTrack[t]:a.s.track[t]}function c(e){return{...(0,r.g)(e),size:(null==e?void 0:e.size)??"m"}}function d(e){const t=(0,r.a)(e);return{wrapper:{},input:{...t.input,type:"checkbox"},switchContainer:{},switchTrack:{...t.control},switchThumb:{...t.container}}}},17727:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(89020),a=n(44068),i=n(26730);const o={wrapper:"switchCSS-module_wrapper__6r7cx",container:"switchCSS-module_container__Ba6jo",input:"switchCSS-module_input__Ht-0K",thumb:"switchCSS-module_thumb__2YsZc",track:"switchCSS-module_track__knc3o",sTrack:"switchCSS-module_sTrack__3FRoI switchCSS-module_track__knc3o",mTrack:"switchCSS-module_mTrack__MoJF- switchCSS-module_track__knc3o"};(0,i.s)(".switchCSS-module_wrapper__6r7cx{align-items:center;display:flex;gap:.875rem}.switchCSS-module_container__Ba6jo{display:inline-block;line-height:0;position:relative;vertical-align:middle}.switchCSS-module_input__Ht-0K{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.switchCSS-module_thumb__2YsZc{background:var(--ps-action-text);border-radius:inherit;height:var(--ps-thumb-size);transition-duration:.2s;transition-property:transform;width:var(--ps-thumb-size)}.switchCSS-module_track__knc3o{--ps-thumb-size:1.25rem;--ps-track-height:1.5rem;--ps-track-width:3rem;background:var(--ps-background);border-radius:1000px;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--ps-track-height);justify-content:flex-start;padding:2px;transition-duration:.15s;transition-property:background,background-color,border-color,transform;width:var(--ps-track-width)}.switchCSS-module_track__knc3o:is([disabled],[data-readonly=true]){cursor:not-allowed}.switchCSS-module_track__knc3o:not([disabled],[data-readonly=true]):hover{background:var(--ps-background-hover)}.switchCSS-module_input__Ht-0K:focus+.switchCSS-module_track__knc3o{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.switchCSS-module_input__Ht-0K:focus:not(:focus-visible)+.switchCSS-module_track__knc3o{box-shadow:none;outline:none}.switchCSS-module_thumb__2YsZc[data-checked=true]{transform:translateX(calc(var(--ps-track-width) - var(--ps-track-height)))}.switchCSS-module_track__knc3o[data-checked=true]{background:var(--ps-action-background)}.switchCSS-module_track__knc3o[data-checked=true]:not([disabled],[data-readonly=true]):hover{background:var(--ps-action-background-hover)}.switchCSS-module_track__knc3o[data-invalid=true]{background:var(--ps-danger-surface)}.switchCSS-module_track__knc3o[data-invalid=true]:hover{background:var(--ps-danger-surface)}.switchCSS-module_sTrack__3FRoI{--ps-thumb-size:0.75rem;--ps-track-height:1rem;--ps-track-width:2rem}");function s(e){const t=(0,a.g)(e),{size:n}=t,i=(0,a.c)(t),s=`${n}Track`;return{...i,wrapper:(0,r.c)("ps-switch-wrapper",o.wrapper),input:{...i.input,...(0,r.c)("ps-switch-input",o.input)},switchContainer:(0,r.c)("ps-switch-container",o.container),switchTrack:{...i.switchTrack,...(0,r.c)("ps-switch-track",o[s])},switchThumb:{...i.switchThumb,...(0,r.c)("ps-switch-thumb",o.thumb)}}}}}]);