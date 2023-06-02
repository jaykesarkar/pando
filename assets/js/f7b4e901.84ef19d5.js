"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2240],{40736:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const a={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=a);const n=e.type??a.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return i.createElement("div",{className:o[n],style:r},e.children)}},15566:function(e,n,t){t.d(n,{dS:function(){return c},fK:function(){return l},C9:function(){return m},ZP:function(){return p}});var i=t(45721),o=t(84140),a="linkList_sLwJ",r="linkItem_ESvF";function s(e){return i.createElement("li",{className:r},i.createElement(o.Z,e,e.children))}function l(e){return i.createElement(s,{href:e.href},e.children??"View on Github")}function c(e){return i.createElement(s,{href:e.href},"View on Figma")}function m(e){return i.createElement("ul",{className:a},e.children)}function p(e){const{figma:n,github:t}=e;return i.createElement("ul",{className:a},t&&i.createElement(l,{href:t}),n&&i.createElement(c,{href:n}))}},45945:function(e,n,t){t(45721)},84140:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(45721),o=t(45097),a=t(88544),r=t(98791),s=t(80194);function l(e){const{href:n}=e,t=(0,a.L)({ariaHidden:!0,size:"s"}),l=n.includes("github")?r.Z:s.Z;return i.createElement(o.h,e,i.createElement(l,t),e.children)}},84353:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return v},metadata:function(){return N},toc:function(){return A}});var i=t(81648),o=t(45721),a=t(70167),r=t(2916),s=t(93048),l=t(88544),c=t(58434),m=t(36055),p=t(23709),d=t(24155),u=t(94546);function f(e){const{sentiment:n}=e,t=(0,r.Ao)({sentiment:n}),{button:a,iconOptions:f}=(0,s.B)(t.iconButtonOptions),g=function(e){switch(e){case"success":return c.Z;case"danger":return m.Z;case"warning":return p.Z;default:return d.Z}}(n);return o.createElement("div",t.wrapper,o.createElement("span",t.iconWrapper,o.createElement(g,(0,l.L)(t.iconOptions))),o.createElement("div",t.textContainer,o.createElement("p",(0,i.Z)({},t.title,{style:{margin:0}}),o.createElement("strong",null,e.admonitionTitle)),o.createElement("small",t.description,e.description)),e.showButton&&o.createElement("button",a,o.createElement(u.Z,(0,l.L)(f))))}var g=t(40736);var h=function(){return o.createElement(g.Z,{type:"column"},o.createElement(f,{admonitionTitle:"Info admonition",description:"This is an example of an informational admonition."}),o.createElement("br",null),o.createElement(f,{admonitionTitle:"Success admonition",sentiment:"success",description:"This is an example of an success admonition."}),o.createElement("br",null),o.createElement(f,{admonitionTitle:"Warning admonition",sentiment:"warning",description:"This is an example of an warning admonition."}),o.createElement("br",null),o.createElement(f,{admonitionTitle:"Danger admonition",sentiment:"danger",description:"This is an example of an danger admonition."}))},k=t(15566);t(45945);const v={tags:["Banner"],title:"Admonition"},b=void 0,N={unversionedId:"reference/components/admonition",id:"version-0.4.1/reference/components/admonition",title:"Admonition",description:"Used to communicate a state that affects a system, feature, or page.",source:"@site/versioned_docs/version-0.4.1/reference/components/admonition.mdx",sourceDirName:"reference/components",slug:"/reference/components/admonition",permalink:"/docs/reference/components/admonition",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/admonition.mdx",tags:[{label:"Banner",permalink:"/docs/tags/banner"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Banner"],title:"Admonition"},sidebar:"reference",previous:{title:"Z-Index",permalink:"/docs/reference/general/zIndex"},next:{title:"Avatar",permalink:"/docs/reference/components/avatar"}},y={},A=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Admonition",id:"basic-admonition",level:3},{value:"Admonition Status",id:"admonition-status",level:3},{value:"Status Icon Mapping",id:"status-icon-mapping",level:4},{value:"Closable Admonition",id:"closable-admonition",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Placement",id:"placement",level:3},{value:"Status Icons",id:"status-icons",level:3},{value:"Close Button",id:"close-button",level:3},{value:"Accessibility",id:"accessibility",level:2}],I={toc:A};function w(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to communicate a state that affects a system, feature, or page."),(0,a.kt)(k.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Admonition",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getAdmonitionProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AdmonitionOptions {\n  sentiment?: 'info' | 'success' | 'warning' | 'danger'\n}\n\ngetAdmonitionProps(options?: AdmonitionOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { AdmonitionOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Status icon"),(0,a.kt)("li",{parentName:"ol"},"Title"),(0,a.kt)("li",{parentName:"ol"},"Description"),(0,a.kt)("li",{parentName:"ol"},"Close button (optional)"),(0,a.kt)("li",{parentName:"ol"},"Content button (optional)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-admonition"},"Basic Admonition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicAdmonition() {\n  const admonition = getAdmonitionProps()\n\n  return (\n    <div {...admonition.wrapper}>\n      <span {...admonition.iconWrapper}>\n        <InfoCircleIcon {...getIconProps(admonition.iconOptions)} />\n      </span>\n      <div {...admonition.textContainer}>\n        <p {...admonition.title}>\n          <strong>Info admonition</strong>\n        </p>\n        <small {...admonition.description}>\n          This is an example of an informational admonition.\n        </small>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"admonition-status"},"Admonition Status"),(0,a.kt)(h,{mdxType:"StatusAdmonition"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Info"),": Brings awareness to important information and sets expectations for the user."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Success"),": Provides the user with positive confirmation of a successfully performed action or series of steps."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Warning"),": Helps users avoid error situations and should communicate important or time-sensitive states of the system."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Danger"),": Alerts of a problem that has already occurred, as a result of user actions.")),(0,a.kt)("h4",{id:"status-icon-mapping"},"Status Icon Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Icons recommended to use with each status."',title:'"Icons',recommended:!0,to:!0,use:!0,with:!0,each:!0,'status."':!0},"const AdmonitionIconMap = {\n  info: 'InfoCircleIcon',\n  success: 'CheckCircleIcon',\n  warning: 'WarningTriangleIcon',\n  danger: 'DangerDiamondIcon',\n}\n")),(0,a.kt)("h3",{id:"closable-admonition"},"Closable Admonition"),(0,a.kt)("p",null,"To use an admonition with a close button, add in an IconButton."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Admonition() {\n  const admonition = getAdmonitionProps()\n  const { button, iconOptions } = getIconButtonProps(\n    admonition.iconButtonOptions\n  )\n\n  return (\n    <div {...admonition.wrapper}>\n      <span {...admonition.iconWrapper}>\n        <InfoCircleIcon {...getIconProps(admonition.iconOptions)} />\n      </span>\n      <div {...admonition.textContainer}>\n        <p {...admonition.title}>\n          <strong>Closable Admonition</strong>\n        </p>\n        <small {...admonition.description}>\n          This Admonition can be closed if you add a click handler to the\n          button.\n        </small>\n      </div>\n      <button {...button}>\n        <CloseIcon {...getIconProps(iconOptions)} />\n      </button>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAdmonitionProps(options?: AdmonitionOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A String value of a theme sentiment ",(0,a.kt)("inlineCode",{parentName:"li"},"'info' | 'success' | 'warning' | 'danger'")," which determines the styling color theme produced.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," proprety to pass into the Icon helper."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"placement"},"Placement"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," place at the top of the current content area, to capture the attention of users or be read as quickly as possible."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," place in the middle of a content area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," place at the beginning of a form."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," place in the middle or end of a form."),(0,a.kt)("h3",{id:"status-icons"},"Status Icons"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Icons we provide in the ",(0,a.kt)("a",{parentName:"p",href:"#admonition-status"},"status")," section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use Icons outside of the examples we provide in the ",(0,a.kt)("a",{parentName:"p",href:"#admonition-status"},"status")," section."),(0,a.kt)("h3",{id:"close-button"},"Close Button"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," include the Close button when the Admonition is communicating a real-time response or status to the user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Close button when the Admonition is static, warning, or informative messages."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Admonition, Icon, and IconButton APIs combined with semantic HTML allow the Admonition to be fully accessible and screen-readable."))}w.isMDXComponent=!0}}]);