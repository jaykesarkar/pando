"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1182],{80087:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){void 0===e&&(e=o);const t=e.type??o.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",i={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:a[t],style:i},e.children)}},72032:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(81648),a=n(45721),o=n(71397),i=n(61471),s="grid_cC7H";function l(e){return a.createElement("li",(0,o.a)({colSpan:2}),a.createElement(i.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:i,...c}=(0,o.g)({cols:12,gap:8});return a.createElement("ul",(0,r.Z)({className:`${i} ${s}`},c),n&&a.createElement(l,{href:n},"View on Github"),t&&a.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},36878:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(45721),a=n(80087),o=n(81648),i=n(51362),s=n(24642),l=n(342);var c=function(e){const{control:t,fieldOptions:n}=(0,i.g)(e),a=(0,s.g)({...e,...n}),{value:c,...d}=(0,l.g)({...n,htmlFor:e.id,size:e.size,value:e.label});return r.createElement("div",t,r.createElement("div",a.wrapper,r.createElement("label",d,c),r.createElement("label",a.switchContainer,r.createElement("input",(0,o.Z)({},a.input,{onClick:e.onClick})),r.createElement("span",a.switchTrack,r.createElement("span",a.switchThumb)))))};var d=function(){const[e,t]=(0,r.useState)(!1);return r.createElement(a.Z,{type:"grid",gridColumns:"2",columnGap:"5rem",justifyContent:"start"},r.createElement(c,{id:"checked-example",label:"checked:",checked:!0}),r.createElement(c,{id:"disabled-example",label:"disabled:",disabled:!0}),r.createElement(c,{id:"invalid-example",label:"invalid:",invalid:!0}),r.createElement(c,{id:"readonly-example",label:"readonly:",readonly:!0}),r.createElement(c,{id:"required-example",label:"required:",required:!0,checked:e,onClick:function(e){t(e.target.checked)}}))}},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(45721),a=n(64965),o=n(4094),i=n(31026),s=n(6115);function l(e){const{href:t}=e,n=(0,a.g)({href:t}),l=(0,o.g)(n.iconOptions),c=t.includes("github")?i.Z:s.Z;return r.createElement("a",n.link,r.createElement(c,l),e.children)}},48497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(81648),a=(n(45721),n(70167)),o=n(36878),i=n(72032);n(27505);const s={tags:["toggle","single-select","field","form"],title:"Switch"},l=void 0,c={unversionedId:"reference/components/switch",id:"reference/components/switch",title:"Switch",description:"Used as an alternative to the Checkbox for choosing between enabled and",source:"@site/docs/reference/components/switch.mdx",sourceDirName:"reference/components",slug:"/reference/components/switch",permalink:"/docs/next/reference/components/switch",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/switch.mdx",tags:[{label:"toggle",permalink:"/docs/next/tags/toggle"},{label:"single-select",permalink:"/docs/next/tags/single-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Patsy",frontMatter:{tags:["toggle","single-select","field","form"],title:"Switch"},sidebar:"reference",previous:{title:"Skeleton",permalink:"/docs/next/reference/components/skeleton"},next:{title:"Table",permalink:"/docs/next/reference/components/table"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Switch",id:"basic-switch",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used as an alternative to the Checkbox for choosing between enabled and disabled states."),(0,a.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Switch",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSwitchProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SwitchOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 's' | 'm'\n  value: string\n}\n\ngetSwitchProps(options?: SwitchOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { SwitchOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Input"),(0,a.kt)("li",{parentName:"ol"},"Track"),(0,a.kt)("li",{parentName:"ol"},"Thumb"),(0,a.kt)("li",{parentName:"ol"},"Label")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-switch"},"Basic Switch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicSwitch() {\n  const [checked, setChecked] = useState(false)\n  const { control, fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <div {...control}>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SwitchSizes() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n  const smallSwitchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n    size: 's',\n  })\n  const smallLabelProps = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <form>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n\n      <div {...smallSwitchProps.wrapper}>\n        <label {...smallLabelProps}>{smallLabelProps.value}</label>\n        <label {...smallSwitchProps.switchContainer}>\n          <input {...smallSwitchProps.input} onClick={handleChange} />\n          <span {...smallSwitchProps.switchTrack}>\n            <span {...smallSwitchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </form>\n  )\n}\n")),(0,a.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Switch size rules."',title:'"Switch',size:!0,'rules."':!0},"{\n  s: 'Use in condensed areas where the default size is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,a.kt)("h3",{id:"states"},"States"),(0,a.kt)(o.Z,{mdxType:"SwitchStates"}),(0,a.kt)("admonition",{title:"Form field and state",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain accessbility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getSwitchProps(options?: SwitchOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Switch state. An id and optional name property that accept a String value which connected accessbility properties from the label to the Switch. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Switch state. A value property that accepts a String for form submission. An optional size property that accepts a String value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'s' | 'm'")," to determine the styling of the Switch elements relative to the size.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"layout"},"Layout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use multiple Switches in a vertical list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use multiple Switches in a single row."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Switch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Switch inline without a Label. Instead use a hidden Label."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use a Switch for giving users an way to opt-in to an optional feature."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Switch for collecting consent. Instead us a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/checkbox"},"Checkbox"),"."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Switch API combined with semantic HTML allow the Switch to be fully accessible and screen-readable."))}m.isMDXComponent=!0},51362:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(1801),a=n(57953),o=n(31519);const i={formControlBase:"formControlCSS-module_formControlBase__Q1Q7H",rowFormControl:"formControlCSS-module_rowFormControl__ek6X- formControlCSS-module_formControlBase__Q1Q7H",colFormControl:"formControlCSS-module_colFormControl__jC13A formControlCSS-module_formControlBase__Q1Q7H"};(0,o.s)(".formControlCSS-module_formControlBase__Q1Q7H{align-items:center;display:flex;gap:1rem;position:relative;width:100%}.formControlCSS-module_formControlBase__Q1Q7H[disabled]{opacity:.5}.formControlCSS-module_colFormControl__jC13A{align-items:flex-start;flex-direction:column}");function s(e){const{groupType:t,direction:n,...o}=(0,a.g)(e),{directionClass:s}=(0,a.a)(n);return{control:{...{role:t},disabled:o.disabled,...(0,r.c)("ps-form-control",i.formControlBase,i[s])},fieldOptions:o}}},57953:function(e,t,n){function r(e){return{directionClass:`${e}FormControl`}}function a(e){return{direction:(null==e?void 0:e.direction)??"row",disabled:(null==e?void 0:e.disabled)??!1,groupType:(null==e?void 0:e.groupType)??"group",invalid:(null==e?void 0:e.invalid)??!1,readOnly:(null==e?void 0:e.readOnly)??!1,required:(null==e?void 0:e.required)??!1}}n.d(t,{a:function(){return r},g:function(){return a}})},342:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(1801),a=n(12170),o=n(31519);const i={defaultFormLabel:"formLabelCSS-module_defaultFormLabel__xDgsw",hiddenFormLabel:"formLabelCSS-module_hiddenFormLabel__Im12t"};(0,o.s)(".formLabelCSS-module_defaultFormLabel__xDgsw{-webkit-margin-end:0;align-items:center;display:flex;font-family:inherit;font-size:1rem;gap:.75rem;margin-bottom:0;margin-inline-end:0;opacity:1;text-align:start;-webkit-user-select:none;-moz-user-select:none;user-select:none}.formLabelCSS-module_hiddenFormLabel__Im12t{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}");function s(e){const{htmlFor:t,value:n,...o}=(0,a.g)(e),s=(0,a.a)(n,o.required),{labelClass:l}=(0,a.b)(o.kind);return{htmlFor:t,...s,...(0,r.c)("ps-form-label",i[l])}}},12170:function(e,t,n){function r(e){return{labelClass:`${e}FormLabel`}}function a(e){return{htmlFor:(null==e?void 0:e.htmlFor)??"",kind:(null==e?void 0:e.kind)??"default",required:(null==e?void 0:e.required)??!1,value:(null==e?void 0:e.value)??"Form label"}}function o(e,t){let n=e;return t&&(n=`${e} (required)`),{value:n}}n.d(t,{a:function(){return o},b:function(){return r},g:function(){return a}})},71397:function(e,t,n){n.d(t,{a:function(){return d},g:function(){return c}});var r=n(1801),a=n(23909),o=n(31519);const i="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,o.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function c(e){const t=(0,a.g)(e);return{...(0,a.c)(t),...(0,r.c)(l,i,...t.classNames)}}function d(e){const t=(0,a.a)(e);return{...(0,a.b)(t),...(0,r.c)(`${l}-item`,s,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return o},b:function(){return s},c:function(){return i},g:function(){return a}});const r={6:.375,8:.5,12:.75,16:1,32:2};function a(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function o(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function i(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${r[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}},3145:function(e,t,n){n.d(t,{s:function(){return r}});const r={wrapper:{alignItems:"center",display:"flex",gap:"0.875rem"},container:{display:"inline-block",lineHeight:"0",position:"relative",verticalAlign:"middle"},input:{border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px","&:focus + .track":{outline:"3px solid var(--ps-action-border-focus)",outlineOffset:"2px"},"&:focus:not(:focus-visible) + .track":{boxShadow:"none",outline:"none"}},thumb:{background:"var(--ps-action-text)",borderRadius:"inherit",height:"var(--ps-thumb-size)",transitionDuration:"200ms",transitionProperty:"transform",width:"var(--ps-thumb-size)","&[data-checked='true']":{transform:"translateX(calc(var(--ps-track-width) - var(--ps-track-height)))"}},track:{"--ps-thumb-size":"1.25rem","--ps-track-height":"1.5rem","--ps-track-width":"3rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}},track_data_checked__true:{"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-action-background-hover)"}},track_data_invalid__true:{"&:hover":{background:"var(--ps-danger-surface)"}},sTrack:{"--ps-thumb-size":"0.75rem","--ps-track-height":"1rem","--ps-track-width":"2rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}},mTrack:{"--ps-thumb-size":"1.25rem","--ps-track-height":"1.5rem","--ps-track-width":"3rem",background:"var(--ps-background)",borderRadius:"1000px",boxSizing:"border-box",cursor:"pointer",display:"inline-flex",flexShrink:"0",height:"var(--ps-track-height)",justifyContent:"flex-start",padding:"2px",transitionDuration:"150ms",transitionProperty:"background, background-color, border-color, transform",width:"var(--ps-track-width)","&:is([disabled], [data-readonly='true'])":{cursor:"not-allowed"},"&:not([disabled], [data-readonly='true']):hover":{background:"var(--ps-background-hover)"},"&[data-checked='true']":{background:"var(--ps-action-background)"},"&[data-invalid='true']":{background:"var(--ps-danger-surface)"}}}},69459:function(e,t,n){n.d(t,{T:function(){return s},a:function(){return o},b:function(){return i},c:function(){return d},g:function(){return c},i:function(){return l}});var r=n(59315),a=n(3145);const o="--ps-track-height",i="--ps-track-width",s="--ps-thumb-size";function l(e,t){return"s"===e?a.s.sTrack[t]:a.s.track[t]}function c(e){return{...(0,r.g)(e),size:(null==e?void 0:e.size)??"m"}}function d(e){const t=(0,r.b)(e);return{wrapper:{},input:{...t.input,role:"switch",type:"checkbox"},switchContainer:{},switchTrack:{...t.control},switchThumb:{...t.container}}}},24642:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(1801),a=n(69459),o=n(31519);const i={wrapper:"switchCSS-module_wrapper__6r7cx",container:"switchCSS-module_container__Ba6jo",input:"switchCSS-module_input__Ht-0K",thumb:"switchCSS-module_thumb__2YsZc",track:"switchCSS-module_track__knc3o",sTrack:"switchCSS-module_sTrack__3FRoI switchCSS-module_track__knc3o",mTrack:"switchCSS-module_mTrack__MoJF- switchCSS-module_track__knc3o"};(0,o.s)(".switchCSS-module_wrapper__6r7cx{align-items:center;display:flex;gap:.875rem}.switchCSS-module_container__Ba6jo{display:inline-block;line-height:0;position:relative;vertical-align:middle}.switchCSS-module_input__Ht-0K{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.switchCSS-module_thumb__2YsZc{background:var(--ps-action-text);border-radius:inherit;height:var(--ps-thumb-size);transition-duration:.2s;transition-property:transform;width:var(--ps-thumb-size)}.switchCSS-module_track__knc3o{--ps-thumb-size:1.25rem;--ps-track-height:1.5rem;--ps-track-width:3rem;background:var(--ps-background);border-radius:1000px;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--ps-track-height);justify-content:flex-start;padding:2px;transition-duration:.15s;transition-property:background,background-color,border-color,transform;width:var(--ps-track-width)}.switchCSS-module_track__knc3o:is([disabled],[data-readonly=true]){cursor:not-allowed}.switchCSS-module_track__knc3o:not([disabled],[data-readonly=true]):hover{background:var(--ps-background-hover)}.switchCSS-module_input__Ht-0K:focus+.switchCSS-module_track__knc3o{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.switchCSS-module_input__Ht-0K:focus:not(:focus-visible)+.switchCSS-module_track__knc3o{box-shadow:none;outline:none}.switchCSS-module_thumb__2YsZc[data-checked=true]{transform:translateX(calc(var(--ps-track-width) - var(--ps-track-height)))}.switchCSS-module_track__knc3o[data-checked=true]{background:var(--ps-action-background)}.switchCSS-module_track__knc3o[data-checked=true]:not([disabled],[data-readonly=true]):hover{background:var(--ps-action-background-hover)}.switchCSS-module_track__knc3o[data-invalid=true]{background:var(--ps-danger-surface)}.switchCSS-module_track__knc3o[data-invalid=true]:hover{background:var(--ps-danger-surface)}.switchCSS-module_sTrack__3FRoI{--ps-thumb-size:0.75rem;--ps-track-height:1rem;--ps-track-width:2rem}");function s(e){const t=(0,a.g)(e),{size:n}=t,o=(0,a.c)(t),s=`${n}Track`;return{...o,wrapper:(0,r.c)("ps-switch-wrapper",i.wrapper),input:{...o.input,...(0,r.c)("ps-switch-input",i.input)},switchContainer:(0,r.c)("ps-switch-container",i.container),switchTrack:{...o.switchTrack,...(0,r.c)("ps-switch-track",i[s])},switchThumb:{...o.switchThumb,...(0,r.c)("ps-switch-thumb",i.thumb)}}}}}]);