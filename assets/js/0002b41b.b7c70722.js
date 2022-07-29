"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[356],{85826:function(e,t,n){n.d(t,{ETn:function(){return c.Z},Ncx:function(){return m.Z},NeF:function(){return a.Z},Oqj:function(){return b.Z},T67:function(){return v.Z},Tk0:function(){return B.Z},Two:function(){return C.Z},VpB:function(){return p.Z},XCv:function(){return o.Z},Xl7:function(){return d.Z},_8t:function(){return w.Z},cMR:function(){return I.Z},dTc:function(){return u.Z},h0n:function(){return h.Z},jJm:function(){return r.Z},nQG:function(){return O.Z},o1U:function(){return s.Z},o_L:function(){return i.Z},pJl:function(){return _.Z},r7p:function(){return y.Z},rE2:function(){return D.Z},tEF:function(){return f.Z},tvw:function(){return k.Z},uMt:function(){return g.Z},vdY:function(){return x.Z},xbZ:function(){return l.Z}});var o=n(49240),a=n(65701),s=n(17307),r=n(15817),u=n(37735),i=n(94618),l=n(22638),c=n(2111),p=n(96598),d=n(37330),f=n(17650),g=n(32392),m=n(93390),v=n(70104),h=n(63353),k=n(86995),b=n(98768),B=n(91256),D=n(82986),O=n(14430),C=n(71080),_=n(67405),w=n(13582),I=n(87001),x=n(98389),y=n(57012)},74839:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(20411),a=n(80134),s=n(3230),r=n(85826),u="icon_t5Zl",i="npmIcon_uVGz icon_t5Zl",l="link_GZb0";var c=o.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),p=(0,a.getButtonProps)({kind:"weak",size:"s"}).className,d=(0,s.L)({size:"s"});function f(e){var t="github"===e.icon,n=t?u:i,a=t?o.createElement(r.ETn,d):c;return o.createElement("a",{className:p+" "+l,href:e.href,rel:"noopener",target:"_blank"},o.createElement("span",{className:n},a)," ",e.children)}},46261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var o=n(60953),a=n(59005),s=(n(20411),n(70167)),r=n(74839),u=["components"],i={tags:["Development","Packages","React","React utils","useEscToClose"]},l="useEscToClose",c={unversionedId:"development/react-utils/use-esc-to-close",id:"development/react-utils/use-esc-to-close",title:"useEscToClose",description:'A custom hook for calling a function when the user presses the "Escape" key.',source:"@site/docs/development/react-utils/use-esc-to-close.mdx",sourceDirName:"development/react-utils",slug:"/development/react-utils/use-esc-to-close",permalink:"/docs/development/react-utils/use-esc-to-close",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/react-utils/use-esc-to-close.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"React",permalink:"/docs/tags/react"},{label:"React utils",permalink:"/docs/tags/react-utils"},{label:"useEscToClose",permalink:"/docs/tags/use-esc-to-close"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","React","React utils","useEscToClose"]},sidebar:"development",previous:{title:"Intro",permalink:"/docs/development/react-utils/intro"},next:{title:"useFocusTrap",permalink:"/docs/development/react-utils/use-focus-trap"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example usage in Component",id:"example-usage-in-component",level:2}],f={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"useesctoclose"},"useEscToClose"),(0,s.kt)("p",null,'A custom hook for calling a function when the user presses the "Escape" key.'),(0,s.kt)(r.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useEscapeToClose.ts",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useEscToClose } from '@pluralsight/react-utils'\n")),(0,s.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"useEscToClose")," you only need to pass in a function returned by the ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback")," React hook."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"useEscToClose(onClose)\n")),(0,s.kt)("h2",{id:"return-value"},"Return Value"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useEscToClose")," hook does not return any values."),(0,s.kt)("h2",{id:"example-usage-in-component"},"Example usage in Component"),(0,s.kt)("p",null,"Here is an example of how you might use ",(0,s.kt)("inlineCode",{parentName:"p"},"useEscToClose")," for an Alert Dialog combined with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-focus-trap"},"useFocusTrap")," hook, and the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/intro"},"headless-styles")," package."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"When using ",(0,s.kt)("inlineCode",{parentName:"p"},"useEscToClose")," within a component, make sure you are using ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback")," to define the close Function you are passing as a parameter into the hook."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Not doing this will negatively impact performance and cause unnecessary re-rendering."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"function AlertDialog(props, triggerRef) {\n  const { onClose, ...alertProps } = props\n  const wrapperRef = useRef(null)\n  const alert = getAlertDialogProps(alertProps)\n  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {\n    cancel: alert.cancelBtnOptions,\n    primary: alert.primaryBtnOptions,\n  })\n  const { ref, onKeydown, initFocusTrap } = useFocusTrap(triggerRef)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  // highlight-next-line\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    initFocusTrap()\n  }, [initFocusTrap])\n\n  return (\n    <div {...alert.backdrop}>\n      <div {...alert.focusGuard} />\n\n      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...alert.section} ref={ref} onKeyDown={onKeydown}>\n          <header {...alert.alertTitle}>Example Alert</header>\n          <p {...alert.alertBody}>\n            Performing this action will be permanent. Are you sure you want to\n            do it?\n          </p>\n          <footer {...alert.buttonGroup}>\n            <button {...cancelBtnProps} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...primaryBtnProps}>Action</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...alert.focusGuard} />\n    </div>\n  )\n}\n\n// highlight-next-line\nconst AlertDialogEl = memo(forwardRef(NormalAlert))\n")))}g.isMDXComponent=!0},20790:function(e,t,n){n.r(t),t.default={base:"base_bn0K",text:"text_PjIp base_bn0K",textWeak:"textWeak_fDag base_bn0K",weak:"weak_VTmc base_bn0K",medium:"medium_iR70 base_bn0K",strong:"strong_Ulpx base_bn0K",xs:"xs_kuq5 base_bn0K",s:"s_XHb9 base_bn0K",m:"m_hp4P base_bn0K",l:"l_XspK base_bn0K",textDanger:"textDanger_JVSG base_bn0K",mediumDanger:"mediumDanger_oPsO base_bn0K",strongDanger:"strongDanger_VkYz base_bn0K",baseIconButton:"baseIconButton_uEx2",defaultIconButton:"defaultIconButton_lhfR baseIconButton_uEx2",roundIconButton:"roundIconButton_z_wo baseIconButton_uEx2",light:"light_ztom"}},80134:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonProps=t.getDangerButtonProps=void 0;const o=n(94550),a=n(20696),s=n(7594),r=(0,o.__importDefault)(n(20790));function u(e,t){return Object.assign(Object.assign({},(0,a.createClassProp)(e,t)),{type:"button"})}t.getDangerButtonProps=function(e){const t=(0,s.getDefaultDangerOptions)(e),{kind:n,size:o}=t,a=`${n}Danger`;return u(t.tech,{defaultClass:`ps-danger-btn ${r.default[a]} ${r.default[o]}`,svelteClass:`base ${n}Danger ${o}`})},t.getButtonProps=function(e){const t=(0,s.getDefaultOptions)(e),{kind:n,size:o}=t;return u(t.tech,{defaultClass:`ps-btn ${r.default[n]} ${r.default[o]}`,svelteClass:`base ${n} ${o}`})}},7594:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getIconButtonReturnProps=t.getButtonIconOptions=t.getDefaultDangerIconButtonOptions=t.defaultDangerIconButtonOptions=t.getDefaultIconButtonOptions=t.defaultIconButtonOptions=t.getDefaultDangerOptions=t.defaultDangerButtonOptions=t.getDefaultOptions=t.defaultButtonOptions=void 0,t.defaultButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultOptions=function(e){var n,o,a;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultButtonOptions.kind,size:null!==(o=null==e?void 0:e.size)&&void 0!==o?o:t.defaultButtonOptions.size,tech:null!==(a=null==e?void 0:e.tech)&&void 0!==a?a:t.defaultButtonOptions.tech}},t.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultDangerOptions=function(e){var n,o,a;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerButtonOptions.kind,size:null!==(o=null==e?void 0:e.size)&&void 0!==o?o:t.defaultDangerButtonOptions.size,tech:null!==(a=null==e?void 0:e.tech)&&void 0!==a?a:t.defaultDangerButtonOptions.tech}},t.defaultIconButtonOptions={kind:"text",size:"m",tech:"",variant:"default",ariaLabel:""},t.getDefaultIconButtonOptions=function(e){var n,o,a,s,r;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultIconButtonOptions.kind,size:null!==(o=null==e?void 0:e.size)&&void 0!==o?o:t.defaultIconButtonOptions.size,tech:null!==(a=null==e?void 0:e.tech)&&void 0!==a?a:t.defaultIconButtonOptions.tech,ariaLabel:null!==(s=null==e?void 0:e.ariaLabel)&&void 0!==s?s:t.defaultIconButtonOptions.ariaLabel,variant:null!==(r=null==e?void 0:e.variant)&&void 0!==r?r:t.defaultIconButtonOptions.variant}},t.defaultDangerIconButtonOptions=Object.assign(Object.assign({},t.defaultDangerButtonOptions),{variant:"default",ariaLabel:""}),t.getDefaultDangerIconButtonOptions=function(e){var n,o,a,s,r;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerIconButtonOptions.kind,size:null!==(o=null==e?void 0:e.size)&&void 0!==o?o:t.defaultDangerIconButtonOptions.size,tech:null!==(a=null==e?void 0:e.tech)&&void 0!==a?a:t.defaultDangerIconButtonOptions.tech,ariaLabel:null!==(s=null==e?void 0:e.ariaLabel)&&void 0!==s?s:t.defaultDangerIconButtonOptions.ariaLabel,variant:null!==(r=null==e?void 0:e.variant)&&void 0!==r?r:t.defaultDangerIconButtonOptions.variant}};const n={xs:"s",s:"m",m:"m",l:"l"};function o(e,t){return{ariaHidden:!0,ariaLabel:"",size:n[e],tech:t}}t.getButtonIconOptions=o,t.getIconButtonReturnProps=function(e){return{button:{"aria-label":e.ariaLabel,type:"button"},iconOptions:o(e.size,e.tech)}}}}]);