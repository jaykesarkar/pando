"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1059],{24217:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},36965:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(59005),l=n(45721),s=n(95971),r=["children","icon"];function i(e){var t=e.children,n=e.icon,i=(0,a.Z)(e,r),o=(0,s.qW)(i),d=o.badge,c=o.iconWrapper,p=o.iconOptions;return l.createElement("span",d,n&&l.createElement("span",c,l.createElement(n,(0,s.L1)(p))),t)}},3501:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(60853),s=n(22534),r=n(36965);function i(){return a.createElement(l.Z,null,a.createElement(r.Z,{icon:s.Z},"Default"),a.createElement(r.Z,{icon:s.Z,sentiment:"action"},"Action"),a.createElement(r.Z,{icon:s.Z,usage:"outline"},"Outline"))}},76948:function(e,t,n){n.d(t,{E:function(){return s},_:function(){return r}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n<span {....badge}>\n  <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>\n  Badge with Icon\n</span>")}function r(){return a.createElement(l.Z,null,"import { getBadgeProps, getIconProps } from '@pluralsight/headless-styles'\nimport { PlaceholderIcon } from '@pluralsight/icons'\n\nexport default function BadgeSize() {\n  const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n  return (\n    <span {....badge}>\n      <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>\n      Badge with Icon\n    </span>\n  );\n}")}},44025:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l=n(60853),s=n(36965);function r(){return a.createElement(l.Z,null,a.createElement(s.Z,{usage:"outline"},"S (Default)"),a.createElement(s.Z,{usage:"outline",size:"xs"},"XS"))}},45712:function(e,t,n){n.d(t,{X:function(){return s},i:function(){return r}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"<span {...getBadgeProps().badge}>Default (s)</span>\n<span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>")}function r(){return a.createElement(l.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BadgeSize() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default (s)</span>\n      <span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>\n    </div>\n  );\n}")}},56687:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l=n(60853),s=n(36965);function r(){return a.createElement(l.Z,null,a.createElement(s.Z,null,"Filled (Default)"),a.createElement(s.Z,{usage:"outline"},"Outline"))}},81116:function(e,t,n){n.d(t,{k:function(){return s},s:function(){return r}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"<span {...getBadgeProps().badge}>Default</span>\n<span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>")}function r(){return a.createElement(l.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BadgeUsage() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default</span>\n      <span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>\n    </div>\n  );\n}")}},83246:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l=n(60853),s=n(36965);function r(){return a.createElement(l.Z,null,a.createElement(s.Z,null,"Default"),a.createElement(s.Z,{sentiment:"action"},"Action"))}},48033:function(e,t,n){n.d(t,{A:function(){return r},J:function(){return s}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"<span {...getBadgeProps().badge}>Default</span>\n<span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>")}function r(){return a.createElement(l.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BasicBadges() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default</span>\n      <span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>\n    </div>\n  );\n}")}},60853:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){var t,n;void 0===e&&(e=s);var r=null!=(t=e.type)?t:s.type,i=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",o={alignItems:e.alignItems,gridTemplateColumns:i,justifyContent:e.justifyContent,textAlign:null!=(n=e.textAlign)?n:"center"};return a.createElement("div",{className:l[r],style:o},e.children)}},26652:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(60953),l=n(59005),s=n(45721),r=n(95971),i="button_sEkW",o="chakra_ow8e",d="chakraCircle_c8Xz",c="list_rMMG",p="listItem_bLPI",u="icon_nzIq",g="svelteBackground_c8BA",m="svelteOutline_tdvb",h=["className"],v=s.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 24 24"},s.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=s.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 1024 1024"},s.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=s.createElement("svg",{"aria-hidden":"true",className:""+u,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),s.createElement("path",{className:g,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:v,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:s.createElement("svg",{"aria-hidden":"true",className:u+" "+o,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},s.createElement("rect",{className:d,width:"582",height:"582",rx:"291"}),s.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:s.createElement("svg",{"aria-hidden":"true",className:u,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}},B={size:"m",usage:"text"};function y(e){var t=k.results[e.techId],n=(0,r.Bb)(B).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return s.createElement("a",{"aria-label":t.label,className:n+" "+i,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function x(e){var t=e.techId,n=Object.assign({},(0,r.Bb)(B)).button,o=n.className,d=(0,l.Z)(n,h);return s.createElement("button",(0,a.Z)({className:o+" "+i,onClick:e.onToggleShow,title:k.results[t].label},d),s.createElement(N,{tabId:t}))}function N(e){return k.results[e.tabId].icon}function w(e){var t=e.techId;return s.createElement("li",{className:p},"source"===t?s.createElement(x,{onToggleShow:e.onToggleShow,techId:t}):s.createElement(y,{techId:t,href:e.sandboxList[t]},s.createElement(N,{tabId:t})))}function P(e){return s.createElement("ul",{className:c},k.items.map((function(t){return s.createElement(w,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function E(e){var t=(0,s.useState)(!1),n=t[0],a=t[1];return s.createElement("div",null,s.createElement(P,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var Z=(0,s.memo)(E)},94880:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),l=n(95971),s=n(24217),r=n(96122);function i(e){var t=e.href,n=(0,l.j8)({href:t}),i=(0,l.L1)(n.iconOptions),o=t.includes("github")?s.Z:r.Z;return a.createElement("a",n.link,a.createElement(o,i),e.children)}},80858:function(e,t,n){var a=n(45721),l=n(95971),s=n(38756),r=n(22534),i=Object.assign({React:a},a,{getButtonProps:l._m,getIconProps:l.L1,getPaginationProps:l.Dx,getSelectProps:l.gQ,ChevronDownIcon:s.Z,PlaceholderIcon:r.Z});t.Z=i},75929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return B},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return y}});var a=n(60953),l=n(59005),s=(n(45721),n(70167)),r=n(83246),i=n(48033),o=n(56687),d=n(81116),c=n(44025),p=n(45712),u=n(3501),g=n(76948),m=n(94880),h=n(26652),v=["components"],f={tags:["Development","Packages","Components","Headless Styles","Badge"]},b=void 0,k={unversionedId:"development/headless-styles/Badge",id:"version-0.1.0-alpha/development/headless-styles/Badge",title:"Badge",description:"The Badge is used to highlight a category for quick recognition.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/Badge.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Badge",permalink:"/docs/development/headless-styles/Badge",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/Badge.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Badge",permalink:"/docs/tags/badge"}],version:"0.1.0-alpha",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Badge"]},sidebar:"development",previous:{title:"Avatar",permalink:"/docs/development/headless-styles/Avatar"},next:{title:"Button",permalink:"/docs/development/headless-styles/Button"}},B={},y=[{value:"Import",id:"import",level:2},{value:"Basic Badge",id:"basic-badge",level:2},{value:"Badge Usage Options",id:"badge-usage-options",level:2},{value:"Badge Sizes",id:"badge-sizes",level:2},{value:"Badge with icon",id:"badge-with-icon",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"BadgeOptions",id:"badgeoptions",level:3},{value:"Props",id:"props",level:2},{value:"BadgeProps",id:"badgeprops",level:3},{value:"JSBadgeProps",id:"jsbadgeprops",level:3},{value:"Guides",id:"guides",level:2},{value:"Badge color guide",id:"badge-color-guide",level:3}],x={toc:y};function N(e){var t=e.components,n=(0,l.Z)(e,v);return(0,s.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Badge is used to highlight a category for quick recognition."),(0,s.kt)(m.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Badge",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getBadgeProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("h2",{id:"basic-badge"},"Basic Badge"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two sentiments: default (default) and action."),(0,s.kt)(r.Z,{mdxType:"BasicBadge"}),(0,s.kt)(h.Z,{fullCode:(0,s.kt)(i.A,{mdxType:"BasicBadgeFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,s.kt)(i.J,{mdxType:"BasicBadgePreview"})),(0,s.kt)("h2",{id:"badge-usage-options"},"Badge Usage Options"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two usage options: filled (default) and outline."),(0,s.kt)(o.Z,{mdxType:"BadgeUsage"}),(0,s.kt)(h.Z,{fullCode:(0,s.kt)(d.s,{mdxType:"BadgeUsageFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,s.kt)(d.k,{mdxType:"BadgeUsagePreview"})),(0,s.kt)("h2",{id:"badge-sizes"},"Badge Sizes"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two size options: xs and s (default)."),(0,s.kt)(c.Z,{mdxType:"BadgeSize"}),(0,s.kt)(h.Z,{fullCode:(0,s.kt)(p.i,{mdxType:"BadgeSizeFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,s.kt)(p.X,{mdxType:"BadgeSizePreview"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"iconOptions")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"iconWrapper")," ",(0,s.kt)("a",{parentName:"p",href:"#badgeprops"},"props")," are only available for the ",(0,s.kt)("strong",{parentName:"p"},"small size")," option. This is to avoid displaying icons that are un-readable due to the sizing.")),(0,s.kt)("h2",{id:"badge-with-icon"},"Badge with icon"),(0,s.kt)("p",null,"To make the Badge more visual, we provide a set of ",(0,s.kt)("inlineCode",{parentName:"p"},"iconOptions")," that are returned from the helper."),(0,s.kt)(u.Z,{mdxType:"BadgeIcon"}),(0,s.kt)(h.Z,{fullCode:(0,s.kt)(g._,{mdxType:"BadgeIconFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,s.kt)(g.E,{mdxType:"BadgeIconPreview"})),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getBadgeProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#badgeoptions"},"BadgeOptions")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"sentiment"),": 'default'",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"usage:")," filled",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"size:")," 's'"),(0,s.kt)("td",{parentName:"tr",align:null},"Get badge styles.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getJSBadgeProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#badgeoptions"},"BadgeOptions")),(0,s.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,s.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API.")))),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"badgeoptions"},"BadgeOptions"),(0,s.kt)("p",null,"This interface is available as an ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeOptions {\n  sentiment?: 'default' | 'action'\n  usage?: 'filled' | 'outline'\n  size?: 'xs' | 's'\n  tech?: 'svelte'\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { BadgeOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("h3",{id:"badgeprops"},"BadgeProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  badge: {\n    className: string\n  }\n  iconWrapper: {\n    className: string\n  }\n}\n")),(0,s.kt)("h3",{id:"jsbadgeprops"},"JSBadgeProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSBadgeProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  badge: {\n    cssProps: string\n    styles: Record<CSSProps, string>\n  }\n  iconWrapper: {\n    cssProps: string\n    styles: Record<CSSProps, string>\n  }\n}\n")),(0,s.kt)("h2",{id:"guides"},"Guides"),(0,s.kt)("h3",{id:"badge-color-guide"},"Badge color guide"),(0,s.kt)("p",null,"Badge colors are relative to the ",(0,s.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,s.kt)("inlineCode",{parentName:"p"},"sentiment")," to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro"},(0,s.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface BadgeColorGuide {\n  default: 'var(--ps-surface-medium)'\n  action: 'var(--ps-action-background)'\n  outline: 'transparent'\n}\n")))}N.isMDXComponent=!0}}]);