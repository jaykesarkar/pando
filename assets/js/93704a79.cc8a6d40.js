"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{3158:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},44651:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},40736:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:r[t],style:o},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return d},fK:function(){return s},C9:function(){return u},ZP:function(){return p}});var a=n(81648),r=n(45721),i=n(39063),o=n(84140),l="grid_cC7H";function c(e){return r.createElement("li",(0,i.a)({colSpan:3}),r.createElement(o.Z,e,e.children))}function s(e){return r.createElement(c,{href:e.href},e.children??"View on Github")}function d(e){return r.createElement(c,{href:e.href},"View on Figma")}function u(e){const{className:t,...n}=(0,i.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${t} ${l}`},n),e.children)}function p(e){const{figma:t,github:n}=e,{className:o,...c}=(0,i.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${o} ${l}`},c),n&&r.createElement(s,{href:n}),t&&r.createElement(d,{href:t}))}},45945:function(e,t,n){n(45721)},34745:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(45721),r=n(40736),i=n(81648),o=n(728),l=n(87125),c=n(13164);var s=function(e){const{control:t,fieldOptions:n}=(0,o.g)(e),r=(0,l.g)({...e,...n}),{value:s,...d}=(0,c.g)({...n,htmlFor:e.id,size:e.size,value:e.label});return a.createElement("div",t,a.createElement("div",r.wrapper,a.createElement("label",d,s),a.createElement("label",r.switchContainer,a.createElement("input",(0,i.Z)({},r.input,{onClick:e.onClick})),a.createElement("span",r.switchTrack,a.createElement("span",r.switchThumb)))))};var d=function(){const[e,t]=(0,a.useState)(!1);return a.createElement(r.Z,{type:"grid",gridColumns:"2",columnGap:"5rem",justifyContent:"start"},a.createElement(s,{id:"checked-example",label:"checked:",checked:!0}),a.createElement(s,{id:"disabled-example",label:"disabled:",disabled:!0}),a.createElement(s,{id:"invalid-example",label:"invalid:",invalid:!0}),a.createElement(s,{id:"readonly-example",label:"readonly:",readonly:!0}),a.createElement(s,{id:"required-example",label:"required:",required:!0,checked:e,onClick:function(e){t(e.target.checked)}}))}},84140:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(45721),r=n(55500),i=n(99752),o=n(44651),l=n(3158);function c(e){const{href:t}=e,n=(0,i.g)({ariaHidden:!0,size:"s"}),c=t.includes("github")?o.Z:l.Z;return a.createElement(r.h,e,a.createElement(c,n),e.children)}},23276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(81648),r=(n(45721),n(70167)),i=n(34745),o=n(15566);n(45945);const l={tags:["toggle","single-select","field","form"],title:"Switch"},c=void 0,s={unversionedId:"reference/components/switch",id:"version-0.4.1/reference/components/switch",title:"Switch",description:"Used as an alternative to the Checkbox for choosing between enabled and",source:"@site/versioned_docs/version-0.4.1/reference/components/switch.mdx",sourceDirName:"reference/components",slug:"/reference/components/switch",permalink:"/docs/reference/components/switch",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/switch.mdx",tags:[{label:"toggle",permalink:"/docs/tags/toggle"},{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["toggle","single-select","field","form"],title:"Switch"},sidebar:"reference",previous:{title:"Skeleton",permalink:"/docs/reference/components/skeleton"},next:{title:"Table",permalink:"/docs/reference/components/table"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Switch",id:"basic-switch",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used as an alternative to the Checkbox for choosing between enabled and disabled states."),(0,r.kt)(o.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Switch",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSwitchProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SwitchOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 's' | 'm'\n  value: string\n}\n\ngetSwitchProps(options?: SwitchOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { SwitchOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Track"),(0,r.kt)("li",{parentName:"ol"},"Thumb"),(0,r.kt)("li",{parentName:"ol"},"Label")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-switch"},"Basic Switch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicSwitch() {\n  const [checked, setChecked] = useState(false)\n  const { control, fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <div {...control}>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"sizes"},"Sizes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SwitchSizes() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n  const smallSwitchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n    size: 's',\n  })\n  const smallLabelProps = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <form>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n\n      <div {...smallSwitchProps.wrapper}>\n        <label {...smallLabelProps}>{smallLabelProps.value}</label>\n        <label {...smallSwitchProps.switchContainer}>\n          <input {...smallSwitchProps.input} onClick={handleChange} />\n          <span {...smallSwitchProps.switchTrack}>\n            <span {...smallSwitchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Switch size rules."',title:'"Switch',size:!0,'rules."':!0},"{\n  s: 'Use in condensed areas where the default size is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)(i.Z,{mdxType:"SwitchStates"}),(0,r.kt)("admonition",{title:"Form field and state",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getSwitchProps(options?: SwitchOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Switch state. An id and optional name property that accept a String value which connected Accessibility properties from the label to the Switch. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Switch state. A value property that accepts a String for form submission. An optional size property that accepts a String value of ",(0,r.kt)("inlineCode",{parentName:"li"},"'s' | 'm'")," to determine the styling of the Switch elements relative to the size.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"layout"},"Layout"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use multiple Switches in a vertical list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Switches in a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Switch."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Switch inline without a Label. Instead use a hidden Label."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use a Switch for giving users an way to opt-in to an optional feature."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Switch for collecting consent. Instead us a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/components/checkbox"},"Checkbox"),"."),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Switch API combined with semantic HTML allow the Switch to be fully accessible and screen-readable."))}h.isMDXComponent=!0},728:function(e,t,n){n.d(t,{g:function(){return l}});var a=n(59734),r=n(17207),i=n(21605);(0,n(18067).s)(".pando_colFormControl,.pando_rowFormControl{align-items:center;display:flex;gap:1rem;position:relative;width:100%}[disabled].pando_colFormControl,[disabled].pando_rowFormControl{opacity:.5}.pando_colFormControl{align-items:flex-start;flex-direction:column}");var o=["groupType","direction"];function l(e){var t=(0,i.g)(e),n=t.groupType,l=t.direction,c=(0,a.f)(t,o),s=(0,i.a)(l).directionClass,d={role:n};return{control:(0,a._)((0,a._)({},d),{},{disabled:c.disabled},(0,r.c)("pando-form-control",s)),fieldOptions:c}}},21605:function(e,t,n){function a(e){return{directionClass:"pando_".concat(e,"FormControl")}}function r(e){var t,n,a,r,i,o;return{direction:null!==(t=null==e?void 0:e.direction)&&void 0!==t?t:"row",disabled:null!==(n=null==e?void 0:e.disabled)&&void 0!==n&&n,groupType:null!==(a=null==e?void 0:e.groupType)&&void 0!==a?a:"group",invalid:null!==(r=null==e?void 0:e.invalid)&&void 0!==r&&r,readOnly:null!==(i=null==e?void 0:e.readOnly)&&void 0!==i&&i,required:null!==(o=null==e?void 0:e.required)&&void 0!==o&&o}}n.d(t,{a:function(){return a},g:function(){return r}})},13164:function(e,t,n){n.d(t,{g:function(){return l}});var a=n(59734),r=n(17207),i=n(37189);(0,n(18067).s)(".pando_defaultFormLabel{-webkit-margin-end:0;align-items:center;display:flex;font-family:inherit;font-size:1rem;gap:.75rem;margin-bottom:0;margin-inline-end:0;opacity:1;text-align:start;-webkit-user-select:none;user-select:none}.pando_hiddenFormLabel{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}");var o=["htmlFor","value"];function l(e){var t=(0,i.g)(e),n=t.htmlFor,l=t.value,c=(0,a.f)(t,o),s=(0,i.a)(l,c.required),d=(0,i.b)(c.kind).labelClass;return(0,a._)((0,a._)({htmlFor:n},s),(0,r.c)("pando-form-label",d))}},37189:function(e,t,n){function a(e){return{labelClass:"pando_".concat(e,"FormLabel")}}function r(e){var t,n,a,r;return{htmlFor:null!==(t=null==e?void 0:e.htmlFor)&&void 0!==t?t:"",kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:"default",required:null!==(a=null==e?void 0:e.required)&&void 0!==a&&a,value:null!==(r=null==e?void 0:e.value)&&void 0!==r?r:"Form label"}}function i(e,t){var n=e;return t&&(n="".concat(e," (required)")),{value:n}}n.d(t,{a:function(){return i},b:function(){return a},g:function(){return r}})},39063:function(e,t,n){n.d(t,{a:function(){return c},g:function(){return l}});var a=n(59734),r=n(17207),i=n(68824);(0,n(18067).s)(".pando_gridContainer{display:grid;width:100%}.pando_gridItem{min-width:0}");var o="pando-grid";function l(e){var t=(0,i.g)(e),n=(0,i.c)(t);return(0,a._)((0,a._)({},n),r.c.apply(void 0,[o,"pando_gridContainer"].concat((0,a.e)(t.classNames))))}function c(e){var t=(0,i.a)(e),n=(0,i.b)(t);return(0,a._)((0,a._)({},n),r.c.apply(void 0,["".concat(o,"-item"),"pando_gridItem"].concat((0,a.e)(t.classNames))))}},68824:function(e,t,n){n.d(t,{a:function(){return i},b:function(){return l},c:function(){return o},g:function(){return r}});var a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){var t,n,a,r;return{classNames:null!==(t=null==e?void 0:e.classNames)&&void 0!==t?t:[],cols:null!==(n=null==e?void 0:e.cols)&&void 0!==n?n:12,gap:null!==(a=null==e?void 0:e.gap)&&void 0!==a?a:16,rows:null!==(r=null==e?void 0:e.rows)&&void 0!==r?r:1}}function i(e){var t,n,a;return{classNames:null!==(t=null==e?void 0:e.classNames)&&void 0!==t?t:[],colSpan:null!==(n=null==e?void 0:e.colSpan)&&void 0!==n?n:12,rowSpan:null!==(a=null==e?void 0:e.rowSpan)&&void 0!==a?a:null}}function o(e){return{style:{gridTemplateRows:"repeat(".concat(e.rows,", 1fr)"),gridTemplateColumns:"repeat(".concat(e.cols,", 1fr)"),gap:"".concat(a[e.gap],"rem")}}}function l(e){var t=e.colSpan,n=e.rowSpan;return n?{style:{gridArea:"span ".concat(n," / span ").concat(t," / span ").concat(n," / span ").concat(t)}}:{style:{gridColumn:"span ".concat(t," / span ").concat(t)}}}},80553:function(e,t,n){n.d(t,{a:function(){return o},c:function(){return l},g:function(){return i}});var a=n(59734),r=n(24452);function i(e){var t;return(0,a._)((0,a._)({},(0,r.g)(e)),{},{size:null!==(t=null==e?void 0:e.size)&&void 0!==t?t:"m"})}function o(e){return{thumbClass:"pando_".concat(e,"SwitchThumb"),trackClass:"pando_".concat(e,"SwitchTrack")}}function l(e){var t=(0,r.b)(e);return{wrapper:{},input:(0,a._)((0,a._)({},t.input),{},{role:"switch",type:"checkbox"}),switchContainer:{},switchTrack:(0,a._)({},t.control),switchThumb:(0,a._)({},t.container)}}},87125:function(e,t,n){n.d(t,{g:function(){return l}});var a=n(59734),r=n(17207),i=n(80553);(0,n(18067).s)(".pando_mSwitchTrack:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]),.pando_sSwitchTrack:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]){cursor:not-allowed}.pando_switchWrapper{align-items:center;display:flex;gap:.875rem}.pando_switchContainer{display:inline-block;line-height:0;position:relative;vertical-align:middle}.pando_switchInput{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pando_mSwitchThumb,.pando_sSwitchThumb{background:var(--ps-action-text-weak);border-radius:inherit;transition-duration:.2s;transition-property:background,-webkit-transform;transition-property:transform,background;transition-property:transform,background,-webkit-transform}[data-checked=true].pando_mSwitchThumb,[data-checked=true].pando_sSwitchThumb{background:var(--ps-action-text);-webkit-transform:translateX(0) scale(1);transform:translateX(0) scale(1)}[data-invalid=true].pando_mSwitchThumb,[data-invalid=true].pando_sSwitchThumb{background:var(--ps-danger-background)}[data-invalid=true][data-checked=true].pando_mSwitchThumb,[data-invalid=true][data-checked=true].pando_sSwitchThumb{background:var(--ps-danger-text-inverse)}.pando_mSwitchTrack,.pando_sSwitchTrack{align-items:center;border:1px solid var(--ps-action-border);border-radius:1000px;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;justify-content:flex-end;transition-duration:.15s;transition-property:background,border-color,-webkit-transform;transition-property:background,border-color,transform;transition-property:background,border-color,transform,-webkit-transform}[data-checked=true].pando_mSwitchTrack,[data-checked=true].pando_sSwitchTrack{background:var(--ps-action-background);border-color:var(--ps-action-background)}[data-invalid=true].pando_mSwitchTrack,[data-invalid=true].pando_sSwitchTrack{border-color:var(--ps-danger-border)}[data-invalid=true][data-checked=true].pando_mSwitchTrack,[data-invalid=true][data-checked=true].pando_sSwitchTrack{background:var(--ps-danger-background);border-color:var(--ps-danger-background)}.pando_mSwitchTrack:hover:not([disabled],[data-readonly=true])[data-checked=true],.pando_sSwitchTrack:hover:not([disabled],[data-readonly=true])[data-checked=true]{background:var(--ps-action-background-hover);border-color:var(--ps-action-background-hover)}.pando_mSwitchTrack:hover:not([disabled],[data-readonly=true])[data-invalid=true][data-checked=true],.pando_sSwitchTrack:hover:not([disabled],[data-readonly=true])[data-invalid=true][data-checked=true]{background:var(--ps-danger-background-hover);border-color:var(--ps-danger-background-hover)}.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover>.pando_mSwitchThumb,.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover>.pando_sSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover>.pando_mSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover>.pando_sSwitchThumb{background:var(--ps-action-text-inverse)}.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-checked=true]>.pando_mSwitchThumb,.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-checked=true]>.pando_sSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-checked=true]>.pando_mSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-checked=true]>.pando_sSwitchThumb{background:var(--ps-action-text)}.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true]>.pando_mSwitchThumb,.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true]>.pando_sSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true]>.pando_mSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true]>.pando_sSwitchThumb{background:var(--ps-danger-background-hover)}.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true][data-checked=true]>.pando_mSwitchThumb,.pando_mSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true][data-checked=true]>.pando_sSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true][data-checked=true]>.pando_mSwitchThumb,.pando_sSwitchTrack:not([disabled],[data-readonly=true]):hover[data-invalid=true][data-checked=true]>.pando_sSwitchThumb{background:var(--ps-danger-text-inverse)}.pando_switchInput:focus+.pando_mSwitchTrack,.pando_switchInput:focus+.pando_sSwitchTrack{box-shadow:none;outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.pando_switchInput:focus:not(:focus-visible)+.pando_mSwitchTrack,.pando_switchInput:focus:not(:focus-visible)+.pando_sSwitchTrack{box-shadow:none;outline:none}.pando_mSwitchThumb{height:1.125rem;-webkit-transform:translateX(-1.4375rem) scale(.6667);transform:translateX(-1.4375rem) scale(.6667);width:1.125rem}.pando_sSwitchThumb{height:.75rem;-webkit-transform:translateX(-1rem) scale(.6667);transform:translateX(-1rem) scale(.6667);width:.75rem}.pando_mSwitchTrack{height:1.625rem;padding:3px;width:3.125rem}.pando_sSwitchTrack{height:1.125rem;padding:2px;width:2.125rem}");var o="pando-switch";function l(e){var t=(0,i.g)(e),n=t.size,l=(0,i.c)(t),c=(0,i.a)(n),s=c.thumbClass,d=c.trackClass;return(0,a._)((0,a._)({},l),{},{wrapper:(0,r.c)("".concat(o,"-wrapper"),"pando_switchWrapper"),input:(0,a._)((0,a._)({},l.input),(0,r.c)("".concat(o,"-input"),"pando_switchInput")),switchContainer:(0,r.c)("".concat(o,"-container"),"pando_switchContainer"),switchTrack:(0,a._)((0,a._)({},l.switchTrack),(0,r.c)("".concat(o,"-track"),d)),switchThumb:(0,a._)((0,a._)({},l.switchThumb),(0,r.c)("".concat(o,"-thumb"),s))})}}}]);