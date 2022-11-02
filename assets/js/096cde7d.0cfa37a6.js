"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9908],{24217:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},40299:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"checkmark",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"m9.59 14.58-2.818-2.818a.5.5 0 0 0-.706 0l-.71.704a.5.5 0 0 0-.003.708h.002l3.881 3.882a.5.5 0 0 0 .707 0l9.293-9.292a.5.5 0 0 0 0-.708l-.703-.702a.5.5 0 0 0-.707 0L9.59 14.58Z"})})}},83597:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"indeterminate icon",...e,children:(0,a.jsx)("path",{d:"M18.5 13h-13a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Z"})})}},95835:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(95971),o=n(60853),s=n(3195);function i(){var e=(0,l.Np)().control,t=(0,a.useState)({email:!1,sms:!1}),n=t[0],i=t[1];function c(e){var t=e.target;i((function(e){var n;return Object.assign({},e,((n={})[t.value]=t.checked,n))}))}return a.createElement(o.Z,null,a.createElement("div",e,a.createElement(s.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",onClick:c,name:"contact",checked:n.email}),a.createElement(s.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",onClick:c,name:"contact",checked:n.sms}),a.createElement(s.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",onClick:c,name:"contact",checked:n.phone})))}},44703:function(e,t,n){n.d(t,{V:function(){return s},k:function(){return o}});var a=n(45721),l=n(63467);function o(){return a.createElement(l.Z,null,"const checkbox = getCheckboxProps()\nconst { value, ...labelProps } = getFormLabelProps()\nconst icon = getIconProps(checkbox.iconOptions)\n\n<label {...checkbox.checkboxContainer}>\n  <input {...checkbox.input} onChange={props.onClick} />\n  <span {...checkbox.checkboxControl}>\n    {checkbox.input.checked && <CheckIcon {...icon} />}\n  </span>\n  <span {...labelProps}>{value}</span>\n</label>")}function s(){return a.createElement(l.Z,null,"import {\n  getCheckboxProps,\n  getFormControlProps,\n  getIconProps,\n  getFormLabelProps,\n} from '@pluralsight/headless-styles'\nimport { CheckIcon } from '@pluralsight/icons'\n\nexport default function Checkbox(props) {\n  const { fieldOptions } = getFormControlProps({ ...props })\n  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...props,\n    value: props.label,\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={props.onClick} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <CheckIcon {...icon} />}\n      </span>\n      <span {...labelProps}>{value}</span>\n    </label>\n  )\n}")}},3195:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(60953),l=n(59005),o=n(45721),s=n(95971),i=n(83597),c=n(40299),r=["value"],d=["checked"];function m(e){var t=e.checked,n=(0,s.L1)(e.iconOptions);return t?"true"===e.indeterminate?o.createElement(i.Z,n):o.createElement(c.Z,n):null}function p(e){var t=e.onClick,n=(0,s.Np)(Object.assign({},e)).fieldOptions,i=(0,s.A_)(Object.assign({},n,e)),c=(0,s.HI)(Object.assign({},e,{value:e.label})),p=c.value,u=(0,l.Z)(c,r),h=i.input,k=h.checked,b=(0,l.Z)(h,d);return o.createElement("label",i.checkboxContainer,t&&o.createElement("input",(0,a.Z)({},b,{checked:k,onChange:e.onClick})),!t&&o.createElement("input",(0,a.Z)({},b,{defaultChecked:k})),o.createElement("span",i.checkboxControl,o.createElement(m,{checked:k,iconOptions:i.iconOptions,indeterminate:i.input.indeterminate})),o.createElement("span",u,p))}},52767:function(e,t,n){var a=n(60953),l=n(59005),o=n(45721),s=n(95971),i=n(60853),c=n(3195),r=["value"],d=["value"],m=["value"],p=["value"],u=["value"],h={justifyContent:"space-between",width:"100%"};function k(){var e=(0,s.Np)(),t=e.control,n=e.fieldOptions,i=(0,s.HI)({htmlFor:"checked-example",value:"checked:"}),d=i.value,m=(0,l.Z)(i,r);return o.createElement("div",(0,a.Z)({},t,{style:Object.assign({},h)}),o.createElement("label",m,d),o.createElement(c.Z,(0,a.Z)({},n,{checked:!0})))}function b(){var e=(0,s.Np)(),t=e.control,n=e.fieldOptions,i=(0,s.HI)({htmlFor:"indeterminate-example",value:"indeterminate:"}),r=i.value,m=(0,l.Z)(i,d);return o.createElement("div",(0,a.Z)({},t,{style:Object.assign({},h)}),o.createElement("label",m,r),o.createElement(c.Z,(0,a.Z)({},n,{checked:!0,indeterminate:!0})))}function v(){var e=(0,s.Np)({disabled:!0}),t=e.control,n=e.fieldOptions,i=(0,s.HI)({htmlFor:"disabled-exampled",value:"disabled:"}),r=i.value,d=(0,l.Z)(i,m);return o.createElement("div",(0,a.Z)({},t,{style:Object.assign({},h)}),o.createElement("label",d,r),o.createElement(c.Z,n))}function g(){var e=(0,s.Np)({invalid:!0}),t=e.control,n=e.fieldOptions,i=(0,s.HI)({htmlFor:"invalid-exampled",value:"invalid:"}),r=i.value,d=(0,l.Z)(i,p);return o.createElement("div",(0,a.Z)({},t,{style:h}),o.createElement("label",d,r),o.createElement(c.Z,(0,a.Z)({},n,{checked:!0})))}function x(){var e=(0,s.Np)({readOnly:!0}),t=e.control,n=e.fieldOptions,i=(0,s.HI)({htmlFor:"readOnly-exampled",value:"readOnly:"}),r=i.value,d=(0,l.Z)(i,u);return o.createElement("div",(0,a.Z)({},t,{style:Object.assign({},h)}),o.createElement("label",d,r),o.createElement(c.Z,n))}function f(e){var t=(0,s.Np)({required:!0}),n=t.control,l=t.fieldOptions,i=(0,s.HI)({htmlFor:"required-exampled",value:""});return o.createElement("div",(0,a.Z)({},n,{style:Object.assign({},h)}),o.createElement("label",i,"required:"),o.createElement(c.Z,(0,a.Z)({},l,{checked:e.checked,onClick:e.onClick})))}t.Z=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return o.createElement(i.Z,null,o.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 5rem",width:"75%"}},o.createElement(k,null),o.createElement(v,null),o.createElement(g,null),o.createElement(x,null),o.createElement(f,{checked:t,onClick:function(e){n(e.target.checked)}}),o.createElement(b,null)))}},55103:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(60853),o=n(3195),s=n(10554);function i(){return a.createElement(l.Z,{textAlign:"initial"},a.createElement("ul",{className:s.Z.list},a.createElement("li",null,a.createElement(o.Z,{value:"all-selected",id:"all-selected",label:"Select all",name:"select-all",indeterminate:!0,checked:!0})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",name:"contact",checked:!1})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",name:"contact",checked:!1})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",name:"contact",checked:!0}))))}},74492:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(60853),o=n(3195),s=n(10554);function i(){return a.createElement(l.Z,{textAlign:"initial"},a.createElement("ul",{className:s.Z.list},a.createElement("li",null,a.createElement(o.Z,{value:"all-selected",id:"all-selected",label:"Select all",name:"select-all",checked:!0})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",name:"contact",checked:!0})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",name:"contact",checked:!0})),a.createElement("li",{className:s.Z.listItem},a.createElement(o.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",name:"contact",checked:!0}))))}},60853:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),l={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function s(e){var t,n;void 0===e&&(e=o);var s=null!=(t=e.type)?t:o.type,i=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",c={alignItems:e.alignItems,gridTemplateColumns:i,justifyContent:e.justifyContent,textAlign:null!=(n=e.textAlign)?n:"center"};return a.createElement("div",{className:l[s],style:c},e.children)}},26652:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(60953),l=n(59005),o=n(45721),s=n(95971),i="button_sEkW",c="chakra_ow8e",r="chakraCircle_c8Xz",d="list_rMMG",m="listItem_bLPI",p="icon_nzIq",u="svelteBackground_c8BA",h="svelteOutline_tdvb",k=["className"],b=o.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 24 24"},o.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),v=o.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 1024 1024"},o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),g=o.createElement("svg",{"aria-hidden":"true",className:""+p,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:h,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),o.createElement("path",{className:u,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var x={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:b,id:"source",href:"",label:"Show full source"},styled:{icon:v,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:o.createElement("svg",{"aria-hidden":"true",className:p+" "+c,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},o.createElement("rect",{className:r,width:"582",height:"582",rx:"291"}),o.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:o.createElement("svg",{"aria-hidden":"true",className:p,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:g,id:"svelte",label:"View Svelte"}}},f={size:"m",usage:"text"};function C(e){var t=x.results[e.techId],n=(0,s.Bb)(f).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return o.createElement("a",{"aria-label":t.label,className:n+" "+i,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function y(e){var t=e.techId,n=Object.assign({},(0,s.Bb)(f)).button,c=n.className,r=(0,l.Z)(n,k);return o.createElement("button",(0,a.Z)({className:c+" "+i,onClick:e.onToggleShow,title:x.results[t].label},r),o.createElement(N,{tabId:t}))}function N(e){return x.results[e.tabId].icon}function E(e){var t=e.techId;return o.createElement("li",{className:m},"source"===t?o.createElement(y,{onToggleShow:e.onToggleShow,techId:t}):o.createElement(C,{techId:t,href:e.sandboxList[t]},o.createElement(N,{tabId:t})))}function Z(e){return o.createElement("ul",{className:d},x.items.map((function(t){return o.createElement(E,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function w(e){var t=(0,o.useState)(!1),n=t[0],a=t[1];return o.createElement("div",null,o.createElement(Z,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var I=(0,o.memo)(w)},94880:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(95971),o=n(24217),s=n(96122);function i(e){var t=e.href,n=(0,l.j8)({href:t}),i=(0,l.L1)(n.iconOptions),c=t.includes("github")?o.Z:s.Z;return a.createElement("a",n.link,a.createElement(c,i),e.children)}},80858:function(e,t,n){var a=n(45721),l=n(95971),o=n(38756),s=n(22534),i=Object.assign({React:a},a,{getButtonProps:l._m,getIconProps:l.L1,getPaginationProps:l.Dx,getSelectProps:l.gQ,ChevronDownIcon:o.Z,PlaceholderIcon:s.Z});t.Z=i},23226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return g}});var a=n(60953),l=n(59005),o=(n(45721),n(70167)),s=n(95835),i=n(44703),c=n(55103),r=n(74492),d=n(52767),m=n(94880),p=n(26652),u=["components"],h={tags:["Development","Packages","Components","Headless Styles","Checkbox"]},k=void 0,b={unversionedId:"development/headless-styles/Checkbox",id:"version-0.1.0-alpha/development/headless-styles/Checkbox",title:"Checkbox",description:"The getCheckboxProps helper is used when a user needs to select multiple values from options.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/Checkbox.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Checkbox",permalink:"/docs/development/headless-styles/Checkbox",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/Checkbox.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Checkbox",permalink:"/docs/tags/checkbox"}],version:"0.1.0-alpha",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Checkbox"]},sidebar:"development",previous:{title:"Button",permalink:"/docs/development/headless-styles/Button"},next:{title:"Circular Progress",permalink:"/docs/development/headless-styles/CircularProgress"}},v={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"Select all checkbox list state",id:"select-all-checkbox-list-state",level:4},{value:"State depending behavior",id:"state-depending-behavior",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"CheckboxOptions",id:"checkboxoptions",level:3},{value:"FieldOptions",id:"fieldoptions",level:3},{value:"Props",id:"props",level:2},{value:"CheckboxProps",id:"checkboxprops",level:3},{value:"JSCheckboxProps",id:"jscheckboxprops",level:3}],x={toc:g};function f(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCheckboxProps")," helper is used when a user needs to select multiple values from options."),(0,o.kt)(m.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Checkbox",mdxType:"ViewSourceLink"},"View source"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"The Checkboxes must always be accompanied by a label (i.e. see ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/FormControl"},"getFormLabelProps"),")."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,o.kt)(s.Z,{mdxType:"BasicCheckbox"}),(0,o.kt)(p.Z,{fullCode:(0,o.kt)(i.V,{mdxType:"BasicCheckboxFullPreview"}),sandboxList:{chakra:"ps-react-chakra-w5cyts",joy:"basic-mui-evcjvj",styled:"sc-7f8dpo",svelte:"ps-svelte-pgwm8l"},mdxType:"LiveExampleTabs"},(0,o.kt)(i.k,{mdxType:"BasicCheckboxPreview"})),(0,o.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"indeterminate")," option when you are displaying a list of items that indicate the user has selected ",(0,o.kt)("strong",{parentName:"p"},"some")," items in the list, but not all."),(0,o.kt)(c.Z,{mdxType:"IndeterminateCheckbox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [options, setOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst checkedItems = Object.keys(options).map((optionItem) => (\n  return options[optionItem]\n))\nconst allChecked = checkedItems.every(Boolean)\n// highlight-next-line\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Due to the nature of ",(0,o.kt)("inlineCode",{parentName:"p"},"indeterminate")," not being an attribute for the native ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," tag, (only a CSS psuedo-selector: ",(0,o.kt)("inlineCode",{parentName:"p"},":indeterminate"),") the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.indeterminate")," value returned from the checkbox helper is a ",(0,o.kt)("strong",{parentName:"p"},"boolean String"),".")),(0,o.kt)("h4",{id:"select-all-checkbox-list-state"},"Select all checkbox list state"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"checked")," option when you are displaying a list of items that indicate the user has selected ",(0,o.kt)("strong",{parentName:"p"},"all")," items in the list."),(0,o.kt)(r.Z,{mdxType:"SelectAllCheckbox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [options, setOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst checkedItems = Object.keys(options).map((optionItem) => (\n  return options[optionItem]\n))\n// highlight-next-line\nconst allChecked = checkedItems.every(Boolean)\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked\n")),(0,o.kt)("h3",{id:"state-depending-behavior"},"State depending behavior"),(0,o.kt)("p",null,"States like ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," have an impact on the usability of a Checkbox and on the styles, except for ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"required"),". These values should come from the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFormControlProps")," helper."),(0,o.kt)(d.Z,{mdxType:"CheckboxStates"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getCheckboxProps")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options"),": ",(0,o.kt)("a",{parentName:"td",href:"#checkboxoptions"},"CheckboxOptions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"kind"),": 'strong'"),(0,o.kt)("td",{parentName:"tr",align:null},"Get checkbox styles for CSS usage.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getJSCheckboxProps")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options"),": ",(0,o.kt)("a",{parentName:"td",href:"#checkboxoptions"},"CheckboxOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,o.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"checkboxoptions"},"CheckboxOptions"),(0,o.kt)("p",null,"This interface is available as an ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxOptions extends FieldOptions {\n  checked: boolean\n  direction?: Direction\n  id: string\n  indeterminate?: boolean\n  name?: string\n  tech?: Tech\n  value: string\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { CheckboxOptions } from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h3",{id:"fieldoptions"},"FieldOptions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldOptions {\n  disabled?: boolean\n  invalid?: boolean\n  readOnly?: boolean\n  required?: boolean\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"checkboxprops"},"CheckboxProps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxProps {\n  input: {\n    'aria-disabled': boolean\n    'aria-invalid': boolean\n    checked: boolean\n    disabled: boolean\n    id: string\n    indeterminate: string\n    name: string\n    type: 'checkbox'\n    value: string\n    className: string\n  }\n  checkboxContainer: {\n    'data-checked': boolean\n    'data-disabled': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    className: string\n  }\n  checkboxControl: {\n    'aria-hidden': true\n    'data-checked': boolean\n    'data-disabled': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    className: string\n  }\n}\n")),(0,o.kt)("h3",{id:"jscheckboxprops"},"JSCheckboxProps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSCheckboxProps {\n  input: {\n    a11yProps: {\n      'aria-disabled': boolean\n      'aria-invalid': boolean\n      checked: boolean\n      disabled: boolean\n      id: string\n      indeterminate: string\n      name: string\n      type: 'checkbox'\n      value: string\n      className: string\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  checkboxContainer: {\n    a11yProps: {\n      'data-checked': boolean\n      'data-disabled': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  checkboxControl: {\n    a11yProps: {\n      'aria-hidden': true\n      'data-checked': boolean\n      'data-disabled': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n}\n")))}f.isMDXComponent=!0},10554:function(e,t){t.Z={list:"list_q4Tv",listItem:"listItem_xz9e"}}}]);