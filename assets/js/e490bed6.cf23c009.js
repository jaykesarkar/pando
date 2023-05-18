"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[333],{40736:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=s);const t=e.type??s.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:r},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return p},fK:function(){return c},C9:function(){return u},ZP:function(){return m}});var o=n(81648),a=n(45721),s=n(39063),r=n(84140),i="grid_cC7H";function l(e){return a.createElement("li",(0,s.a)({colSpan:3}),a.createElement(r.Z,e,e.children))}function c(e){return a.createElement(l,{href:e.href},e.children??"View on Github")}function p(e){return a.createElement(l,{href:e.href},"View on Figma")}function u(e){const{className:t,...n}=(0,s.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${t} ${i}`},n),e.children)}function m(e){const{figma:t,github:n}=e,{className:r,...l}=(0,s.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${r} ${i}`},l),n&&a.createElement(c,{href:n}),t&&a.createElement(p,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(45721),a=n(55500),s=n(99752),r=n(44651),i=n(3158);function l(e){const{href:t}=e,n=(0,s.g)({ariaHidden:!0,size:"s"}),l=t.includes("github")?r.Z:i.Z;return o.createElement(a.h,e,o.createElement(l,n),e.children)}},88339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return Z},contentTitle:function(){return x},default:function(){return H},frontMatter:function(){return I},metadata:function(){return B},toc:function(){return D}});var o=n(81648),a=n(45721),s=n(70167),r=n(77674),i=n(57615),l=n(40736),c=n(80322),p=n(22527),u=n(31753),m=n(31221),d=n(49621),g=n(99752),h=n(11763),f=n(44838);function k(e){const t=(0,g.g)(e.iconOptions);switch(e.sentiment){case"success":return a.createElement(c.Z,t);case"warning":return a.createElement(p.Z,t);case"danger":return a.createElement(u.Z,t);default:return a.createElement(m.Z,t)}}function T(e){const{children:t,onClose:n,onUndo:s,sentiment:r,...i}=e,l=(0,h.g)({sentiment:r,...i}),c=(0,f.g)(l.closeButtonOptions);return a.createElement("div",l.wrapper,a.createElement("div",l.container,a.createElement("span",l.iconWrapper,a.createElement(k,{sentiment:r,iconOptions:l.iconOptions})),a.createElement("section",l.section,t),s&&a.createElement("div",null,a.createElement("button",(0,o.Z)({},(0,h.b)(r),{onClick:s}),"Undo")),a.createElement("span",l.closeIconWrapper,a.createElement("button",(0,o.Z)({},c.button,{onClick:n}),a.createElement(d.Z,(0,g.g)(c.iconOptions))))))}function b(e){const t=(0,h.a)();return a.createElement("p",(0,o.Z)({},t,{"data-site-override":"clearMargin"}),a.createElement("strong",null,e.children))}function v(e){return a.createElement(T,{sentiment:"success",onClose:e.onClose},a.createElement(b,null,"Success"),a.createElement("p",null,"This is a description of something that happened."))}function C(e){return a.createElement(T,{sentiment:"info",onClose:e.onClose,onUndo:()=>null},a.createElement("p",null,"A channel has been added."))}function P(e){return a.createElement(T,{sentiment:"warning",onClose:e.onClose,onUndo:()=>null},a.createElement(b,null,"Warning"),a.createElement("p",null,"This is a description of something that happened."))}function y(e){return a.createElement(T,{sentiment:"danger",onClose:e.onClose},a.createElement(b,null,"Danger"),a.createElement("p",null,"A channel has been deleted."))}function N(){const[e,t]=(0,a.useState)(!1);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,i.g)().button,{onClick:function(){t(!0)}}),"Show Toast"),e&&(0,r.createPortal)(a.createElement(T,{sentiment:"info",onClose:function(){t(!1)}},a.createElement(b,null,"Channel updated"),a.createElement("p",{"data-site-override":"clearMargin"},"Your channel has been bookmarked.")),document.body))}function w(){const[e,t]=(0,a.useState)({info:!1,success:!1,warning:!1,danger:!1});function n(n){t({...e,[n]:!0})}function s(n){t({...e,[n]:!1})}return a.createElement(l.Z,{justifyContent:"space-between"},a.createElement("button",(0,o.Z)({},(0,i.g)({usage:"outline"}).button,{onClick:()=>n("info")}),"Show Info"),a.createElement("button",(0,o.Z)({},(0,i.g)().button,{onClick:()=>n("success")}),"Show Success"),a.createElement("button",(0,o.Z)({},(0,i.g)({usage:"text"}).button,{onClick:()=>n("warning")}),"Show Warning"),a.createElement("button",(0,o.Z)({},(0,i.g)({sentiment:"danger"}).button,{onClick:()=>n("danger")}),"Show Danger"),e.info&&(0,r.createPortal)(a.createElement(C,{onClose:()=>s("info")}),document.body),e.success&&(0,r.createPortal)(a.createElement(v,{onClose:()=>s("success")}),document.body),e.warning&&(0,r.createPortal)(a.createElement(P,{onClose:()=>s("warning")}),document.body),e.danger&&(0,r.createPortal)(a.createElement(y,{onClose:()=>s("danger")}),document.body))}var E=n(15566);n(45945);const I={tags:["notification","message"],title:"Toast"},x=void 0,B={unversionedId:"reference/components/toast",id:"reference/components/toast",title:"Toast",description:"Used to interrupt the user with a short message in response to an action.",source:"@site/docs/reference/components/toast.mdx",sourceDirName:"reference/components",slug:"/reference/components/toast",permalink:"/docs/next/reference/components/toast",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/toast.mdx",tags:[{label:"notification",permalink:"/docs/next/tags/notification"},{label:"message",permalink:"/docs/next/tags/message"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["notification","message"],title:"Toast"},sidebar:"reference",previous:{title:"Text Link",permalink:"/docs/next/reference/components/text-link"},next:{title:"Tooltip",permalink:"/docs/next/reference/components/tooltip"}},Z={},D=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Toast",id:"basic-toast",level:3},{value:"Toast Status",id:"toast-status",level:3},{value:"Status Icon Mapping",id:"status-icon-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"getToastContainerProps",id:"gettoastcontainerprops",level:3},{value:"Paramters",id:"paramters",level:4},{value:"Returns",id:"returns",level:4},{value:"getToastHeadingProps",id:"gettoastheadingprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getToastButtonProps",id:"gettoastbuttonprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],A={toc:D};function H(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a short message in response to an action."),(0,s.kt)(E.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Toast",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  unstable_getToastContainerProps as getToastContainerProps,\n  unstable_getToastHeadingProps as getToastHeadingProps,\n  unstable_getToastButtonProps as getToastButtonProps,\n} from '@pluralsight/headless-styles'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ToastOptions } from '@pluralsight/headless-styles'\n")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Wrapper"),(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"Icon"),(0,s.kt)("li",{parentName:"ol"},"Heading (optional)"),(0,s.kt)("li",{parentName:"ol"},"Text (optional)"),(0,s.kt)("li",{parentName:"ol"},"Action Button (optional)"),(0,s.kt)("li",{parentName:"ol"},"Close Button")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-toast"},"Basic Toast"),(0,s.kt)(N,{mdxType:"BasicToast"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Toast Component."',showLineNumbers:!0,title:'"Toast','Component."':!0},"import {\n  CheckCircleIcon,\n  CloseIcon,\n  DangerDiamondIcon,\n  InfoCircleIcon,\n  WarningTriangleIcon,\n} from '@pluralsight/icons'\nimport {\n  getIconButtonProps,\n  getIconProps,\n  unstable_getToastButtonProps as getToastButtonProps,\n  unstable_getToastContainerProps as getToastContainerProps,\n  unstable_getToastHeadingProps as getToastHeadingProps,\n} from '@pluralsight/headless-styles'\n\nfunction MatchToastIcon(props) {\n  const iconProps = getIconProps(props.iconOptions)\n\n  switch (props.sentiment) {\n    case 'success':\n      return <CheckCircleIcon {...iconProps} />\n\n    case 'warning':\n      return <WarningTriangleIcon {...iconProps} />\n\n    case 'danger':\n      return <DangerDiamondIcon {...iconProps} />\n\n    case 'info':\n    default:\n      return <InfoCircleIcon {...iconProps} />\n  }\n}\n\nexport function Toast(props) {\n  const { children, onClose, onUndo, sentiment, ...toastOptions } = props\n  const toastProps = getToastContainerProps({ sentiment, ...toastOptions })\n  const closeBtnProps = getIconButtonProps(toastProps.closeButtonOptions)\n\n  return (\n    <div {...toastProps.wrapper} style={{ top: 'initial' }}>\n      <div {...toastProps.container}>\n        <span {...toastProps.iconWrapper}>\n          <MatchToastIcon\n            sentiment={sentiment}\n            iconOptions={toastProps.iconOptions}\n          />\n        </span>\n\n        <section {...toastProps.section}>{children}</section>\n\n        {onUndo && (\n          <div>\n            <button {...getToastButtonProps(sentiment)} onClick={onUndo}>\n              Undo\n            </button>\n          </div>\n        )}\n\n        <span {...toastProps.closeIconWrapper}>\n          <button {...closeBtnProps.button} onClick={onClose}>\n            <CloseIcon {...getIconProps(closeBtnProps.iconOptions)} />\n          </button>\n        </span>\n      </div>\n    </div>\n  )\n}\n\nexport function ToastHeading(props) {\n  const headingProps = getToastHeadingProps()\n  return (\n    <p {...headingProps}>\n      <strong>{props.children}</strong>\n    </p>\n  )\n}\n\nexport function SuccessToast(props) {\n  return (\n    <Toast sentiment=\"success\" onClose={props.onClose}>\n      <ToastHeading>Success</ToastHeading>\n      <p>This is a description of something that happened.</p>\n    </Toast>\n  )\n}\n\nexport function InfoToast(props) {\n  return (\n    <Toast sentiment=\"info\" onClose={props.onClose} onUndo={() => null}>\n      <p>A channel has been added.</p>\n    </Toast>\n  )\n}\n\nexport function WarningToast(props) {\n  return (\n    <Toast sentiment=\"warning\" onClose={props.onClose} onUndo={() => null}>\n      <ToastHeading>Warning</ToastHeading>\n      <p>This is a description of something that happened.</p>\n    </Toast>\n  )\n}\n\nexport function DangerToast(props) {\n  return (\n    <Toast sentiment=\"danger\" onClose={props.onClose}>\n      <ToastHeading>Danger</ToastHeading>\n      <p>A channel has been deleted.</p>\n    </Toast>\n  )\n}\n")),(0,s.kt)("h3",{id:"toast-status"},"Toast Status"),(0,s.kt)(w,{mdxType:"ToastStatus"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Info"),": Brings awareness to important information and sets expectations for the user."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Success"),": Provides the user with positive confirmation of a successfully performed action or series of steps."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Warning"),": Helps users avoid error situations and should communicate important or time-sensitive states of the system."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Danger"),": Alerts of a problem that has already occurred, as a result of user actions.")),(0,s.kt)("h4",{id:"status-icon-mapping"},"Status Icon Mapping"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Icons recommended to use with each status."',title:'"Icons',recommended:!0,to:!0,use:!0,with:!0,each:!0,'status."':!0},"const AdmonitionIconMap = {\n  info: 'InfoCircleIcon',\n  success: 'CheckCircleIcon',\n  warning: 'WarningTriangleIcon',\n  danger: 'DangerDiamondIcon',\n}\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("h3",{id:"gettoastcontainerprops"},"getToastContainerProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function getToastContainerProps(options?: ToastOptions): ReturnProps\n")),(0,s.kt)("h4",{id:"paramters"},"Paramters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ToastOptions {\n  sentiment: 'info' | 'success' | 'warning' | 'danger'\n}\n")),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An Object containing the ",(0,s.kt)("a",{parentName:"li",href:"#anatomy"},"anatomy")," parts fo the Toast containing the Wrapper, Container, Section, and Icon wrappers."),(0,s.kt)("li",{parentName:"ol"},"A className list for each anatomy part (#1) which includes an unused class conisting of the naming pattern ",(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-${anatomyPart}"),"."),(0,s.kt)("li",{parentName:"ol"},"A11y properties for each anatomy part (#1).")),(0,s.kt)("h3",{id:"gettoastheadingprops"},"getToastHeadingProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function getToastHeadingProps(): ReturnProps\n")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"This function does not accept any parameters."),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An Object containing a className list which includes an unused class consisting of the naming pattern ",(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-heading"),".")),(0,s.kt)("h3",{id:"gettoastbuttonprops"},"getToastButtonProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function getToastButtonProps(): ReturnProps\n")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("p",null,"This function does not accept any parameters."),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An Object containing a className list which includes an unused class consisting of the naming pattern ",(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-button"),".")),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("p",null,"Toasts are to be used to interrupt the user's task with a short, important, critical or warning message."),(0,s.kt)("h3",{id:"patterns"},"Patterns"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the Toast when there is an important short message to convey to the user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use the Toast when you convey a verbose message (larger than 50 characters)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," keep Toast layout unaltered."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Toast."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do"),' use a "undo" action button when the action is reversible.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't"),' use a "undo" action button when the action is irreversible.'),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Toast by using multiple times at once."),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"The Pando Toast, Button, and Icon APIs combined with semantic HTML allow the Toast to be fully accessible and screen-readable."))}H.isMDXComponent=!0}}]);