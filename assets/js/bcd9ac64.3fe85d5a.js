"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3856],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(20411);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15196:function(e,t,n){n.d(t,{ETn:function(){return c.Z},Ncx:function(){return f.Z},NeF:function(){return o.Z},Oqj:function(){return b.Z},T67:function(){return v.Z},Two:function(){return O.Z},VpB:function(){return p.Z},XCv:function(){return a.Z},Xl7:function(){return d.Z},_8t:function(){return I.Z},cMR:function(){return S.Z},dTc:function(){return i.Z},h0n:function(){return g.Z},jJm:function(){return s.Z},nQG:function(){return w.Z},o1U:function(){return r.Z},o_L:function(){return l.Z},pJl:function(){return N.Z},r7p:function(){return C.Z},rE2:function(){return y.Z},tEF:function(){return m.Z},tvw:function(){return k.Z},uMt:function(){return h.Z},vdY:function(){return x.Z},xbZ:function(){return u.Z}});var a=n(49517),o=n(15191),r=n(39642),s=n(6198),i=n(24817),l=n(46269),u=n(62164),c=n(65346),p=n(33312),d=n(71122),m=n(46137),h=n(26336),f=n(49882),v=n(98554),g=n(90564),k=n(51164),b=n(60889),y=n(86736),w=n(21604),O=n(62847),N=n(83127),I=n(34391),S=n(60511),x=n(40880),C=n(61025)},12083:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(60953),o=n(59005),r=(n(20411),n(70167)),s=["components"],i={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is pre-release documention for the ",(0,r.kt)("strong",{parentName:"p"},"experimental")," version of the ",(0,r.kt)("strong",{parentName:"p"},"headless-styles")," package.")))}l.isMDXComponent=!0},44295:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(20411),o=n(88795),r="tabItem_ccOm";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},98681:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),o=n(20411),r=n(88795),s=n(13642),i=n(79514),l=n(36385),u=n(23223),c="tabList_vnoP",p="tabItem_NMaj";function d(e){var t,n,s=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,N=w.setTabGroupChoices,I=(0,o.useState)(y),S=I[0],x=I[1],C=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var B=O[f];null!=B&&B!==S&&k.some((function(e){return e.value===B}))&&x(B)}var T=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==S&&(D(t),x(a),null!=f&&N(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=C.indexOf(e.currentTarget)+1;n=null!=(a=C[o])?a:C[0];break;case"ArrowLeft":var r,s=C.indexOf(e.currentTarget)-1;n=null!=(r=C[s])?r:C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:T,onClick:T},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},74839:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(20411),o=n(76785),r=n(29989),s=n(15196),i="icon_t5Zl",l="npmIcon_uVGz icon_t5Zl",u="link_GZb0";var c=a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),p=(0,o.getButtonProps)({kind:"weak",size:"s"}).className,d=(0,r.L)({size:"s"});function m(e){var t="github"===e.icon,n=t?i:l,o=t?a.createElement(s.ETn,d):c;return a.createElement("a",{className:p+" "+u,href:e.href,rel:"noopener",target:"_blank"},a.createElement("span",{className:n},o)," ",e.children)}},64134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return f}});var a=n(60953),o=n(59005),r=(n(20411),n(70167)),s=n(98681),i=n(44295),l=n(74839),u=n(12083),c=["components"],p={sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},d="Intro",m={unversionedId:"development/headless-styles/intro",id:"development/headless-styles/intro",title:"Intro",description:"Install Pluralsight's headless UI framework that works with any library or",source:"@site/docs/development/headless-styles/intro.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/intro",permalink:"/docs/development/headless-styles/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/intro.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Chakra",permalink:"/docs/tags/chakra"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},sidebar:"development",previous:{title:"Colors",permalink:"/docs/development/tokens/colors"},next:{title:"Alert",permalink:"/docs/development/headless-styles/Alert"}},h={},f=[{value:"npm",id:"npm",level:2},{value:"Headless design",id:"headless-design",level:2},{value:"Examples",id:"examples",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"CSS &amp; CSS-in-JS",id:"css--css-in-js",level:2},{value:"Themeing",id:"themeing",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"CSS-in-JS",id:"css-in-js",level:3},{value:"Chakra UI",id:"chakra-ui",level:3},{value:"Recommendation",id:"recommendation",level:2},{value:"z-index values",id:"z-index-values",level:2}],v={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro"},"Intro"),(0,r.kt)(u.ZP,{mdxType:"ReleaseNote"}),(0,r.kt)("p",{className:"page-subheadline",markdown:"1"},"Install Pluralsight's headless UI framework that works with any library or tech stack."),(0,r.kt)(l.Z,{href:"https://www.npmjs.com/package/@pluralsight/headless-styles",mdxType:"ViewSourceLink"},"@pluralsight/headless-styles"),(0,r.kt)("h2",{id:"npm"},"npm"),(0,r.kt)("p",null,"To use Headless Styles install the package with your preferred manager."),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles@alpha\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles@alpha\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some component examples use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/icons/intro"},"Icons")," package. Not all components require icons, so we do not include it in the above install recommendation.")),(0,r.kt)("h2",{id:"headless-design"},"Headless design"),(0,r.kt)("p",null,"The Headless Styles library is a component-less tool that allows you to obtain all the styles needed for components without dictating a tech-stack for your team to use. This means that you can theoretically use any combination of technology (i.e. React, Svelte, MUI, etc.) and the library should still work successfully for your team."),(0,r.kt)("p",null,"Having said that, it will always be impossible to cover every single use case so if your team comes across an instance where the styles are not matching the doc examples, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+"},"file a bug report")," so we can make sure that use case is covered."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"For each component, we provide mutliple examples using the most popular libraries. Out of the box, we provide examples for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"styled-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mui.com/"},"MUI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://svelte.dev/"},"Svelte"))),(0,r.kt)("p",null,"If there is an additional library you would like to see provided in the examples, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/polls"},"start a poll")," and if it receives enough support, we will be happy to add it in. \ud83d\ude04"),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Headless Styles requires the use of our fonts and normalize setup. Please see the ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation"},"installation guide")," for more information.")),(0,r.kt)("h2",{id:"css--css-in-js"},"CSS & CSS-in-JS"),(0,r.kt)("p",null,"Each of our Headless Styles components will deliver APIs for both CSS and CSS-in-JS use cases. Both APIs also come with some requirements for your project that you should be aware of for the most success."),(0,r.kt)("h3",{id:"themeing"},"Themeing"),(0,r.kt)("p",null,"Internally, we use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro"},"Design Tokens")," to control all the colors presented. Our suite comes with ",(0,r.kt)("a",{parentName:"p",href:"../tokens/colors#themes"},"multiple themes")," that work natively for ",(0,r.kt)("strong",{parentName:"p"},"CSS environments"),". This means that if your team uses CSS-in-JS, you will need to include a ",(0,r.kt)("a",{parentName:"p",href:"#css-in-js"},"provider")," to use theming."),(0,r.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,r.kt)("p",null,"For the CSS APIs, we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," which allow us to deliver the best experience regarding performance and scalability. Most tools come with CSS module support baked in (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS"),", ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),")."),(0,r.kt)("p",null,"If you are using a bundler with a custom config via ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," (or any other), you will need to make sure you add a ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/css-loader/#modules"},"loader")," which should be available for any tool you are using."),(0,r.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,r.kt)("p",null,'Our CSS-in-JS APIs source a generated style Object we create internally which delivers the "dark" theme by default. If you want to use a custom theme, please see our ',(0,r.kt)("a",{parentName:"p",href:"../tokens/colors#js-custom-theming"},"theme customization")," in the Tokens docs."),(0,r.kt)("p",null,'The easiest solution is to just extend this library with whatever tool you prefer to use (i.e. React, styled-components, etc.) by following each components "extending" section example.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you would like the Design System to provide a ThemeProvider solution, please contribute to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/198"},"discussion poll"),".")),(0,r.kt)("h3",{id:"chakra-ui"},"Chakra UI"),(0,r.kt)("p",null,"We prefer not to cater to frameworks (which is the reason we designed this package the way we have). However, Chakra does provide a way for us to deliver ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/theming/component-style"},"style objects")," to overwrite their UI while not having to add it as a dependency to ours. \ud83d\udca5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Because of this, all of our "components" will return Chakra style objects instead of using a prop-getter function.')),(0,r.kt)("p",null,"If you use Chakra, please be mindful of this and all the examples we provide (which should work in your favor)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="How to use with Chakra"',title:'"How',to:!0,use:!0,with:!0,'Chakra"':!0},"import { theme } from '@chakra-ui/react'\nimport { chakraPSTheme } from '@pluralsight/headless-styles'\n\nconst theme = extendTheme(chakraPSTheme)\n")),(0,r.kt)("p",null,"Once you add the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," you can use Chakra-UI components and the ones our Web UI Kit supports will automatically be styled for you!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some components (like the ",(0,r.kt)("a",{parentName:"p",href:"./Skeleton"},"Skeleton"),") will require some additional configuration setup to the theme config (see the Chakra example) due to the nature of Chakra being tightly coupled with Emotion.")),(0,r.kt)("h2",{id:"recommendation"},"Recommendation"),(0,r.kt)("p",null,"Our recommendation for the best user experience is to ",(0,r.kt)("strong",{parentName:"p"},"stay 3rd-party free")," and just stick with your Native library (i.e. React, Svelte, etc.) which will yield the best experience of our library."),(0,r.kt)("p",null,"Having said that, we know people are very passionate about UI libraries and believe they must be used in a project. Whatever your decision is, Headless-Styles aims to work with as many libraries as possible - there just may be a little extra work you will have to put in, whether updating ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," or customizing for CSS animations."),(0,r.kt)("p",null,"This is due to our decision to stay as light-weight as possible and not require any additional requirements for you to use our project (i.e. you will not have to install any other package to use any of our libraries)."),(0,r.kt)("h2",{id:"z-index-values"},"z-index values"),(0,r.kt)("p",null,"In the headless-styles package, we use a structured layering map to organize our ",(0,r.kt)("inlineCode",{parentName:"p"},"z-index")," values. Here is the map we use for our API."),(0,r.kt)("p",null,"For our map, we use the following strategy of reserving the 1k range values for our API and the ",(0,r.kt)("inlineCode",{parentName:"p"},"50")," value for non-important style values (borders, etc.). This gives your product the freedom to use the 100-999 range which is more than enough for 99% of scenarios."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CSS z-index values"',title:'"CSS',"z-index":!0,'values"':!0},"const zIndexMap = {\n  hide: -1,\n  auto: 'auto',\n  base: 0,\n  decorator: 50, // psuedo elements, etc. for borders or other\n  dropdown: 1000,\n  sticky: 1100,\n  banner: 1200,\n  overlay: 1300,\n  modal: 1400,\n  popover: 1500,\n  toast: 1600,\n  tooltip: 1700,\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend staying in the 100-999 range for your team's projects when using our suite. This will allow your code-base to scale better and reduce risks of UI bugs throughout the lifetime of the project.")))}g.isMDXComponent=!0},72171:function(e,t,n){n.r(t),t.default={base:"base_wio1",text:"text_w_xh base_wio1",textWeak:"textWeak_cadN base_wio1",weak:"weak_qYjr base_wio1",medium:"medium_BAVg base_wio1",strong:"strong_xnJJ base_wio1",xs:"xs_EJvw base_wio1",s:"s_ukm4 base_wio1",m:"m_Fwuo base_wio1",l:"l_IDrC base_wio1",textDanger:"textDanger_eIuT base_wio1",mediumDanger:"mediumDanger_bfnZ base_wio1",strongDanger:"strongDanger_hJy3 base_wio1",baseIconButton:"baseIconButton_q3Te",defaultIconButton:"defaultIconButton_O6NZ baseIconButton_q3Te",roundIconButton:"roundIconButton_i5eo baseIconButton_q3Te",light:"light_zlU4"}},76785:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonProps=t.getDangerButtonProps=void 0;const a=n(94550),o=n(86827),r=n(48326),s=(0,a.__importDefault)(n(72171));function i(e,t){return Object.assign(Object.assign({},(0,o.createClassProp)(e,t)),{type:"button"})}t.getDangerButtonProps=function(e){const t=(0,r.getDefaultDangerOptions)(e),{kind:n,size:a}=t,o=`${n}Danger`;return i(t.tech,{defaultClass:`ps-danger-btn ${s.default[o]} ${s.default[a]}`,svelteClass:`base ${n}Danger ${a}`})},t.getButtonProps=function(e){const t=(0,r.getDefaultOptions)(e),{kind:n,size:a}=t;return i(t.tech,{defaultClass:`ps-btn ${s.default[n]} ${s.default[a]}`,svelteClass:`base ${n} ${a}`})}},48326:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getIconButtonReturnProps=t.getButtonIconOptions=t.getDefaultDangerIconButtonOptions=t.defaultDangerIconButtonOptions=t.getDefaultIconButtonOptions=t.defaultIconButtonOptions=t.getDefaultDangerOptions=t.defaultDangerButtonOptions=t.getDefaultOptions=t.defaultButtonOptions=void 0,t.defaultButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultOptions=function(e){var n,a,o;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultButtonOptions.tech}},t.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultDangerOptions=function(e){var n,a,o;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultDangerButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultDangerButtonOptions.tech}},t.defaultIconButtonOptions={kind:"text",size:"m",tech:"",variant:"default",ariaLabel:""},t.getDefaultIconButtonOptions=function(e){var n,a,o,r,s;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultIconButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultIconButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultIconButtonOptions.tech,ariaLabel:null!==(r=null==e?void 0:e.ariaLabel)&&void 0!==r?r:t.defaultIconButtonOptions.ariaLabel,variant:null!==(s=null==e?void 0:e.variant)&&void 0!==s?s:t.defaultIconButtonOptions.variant}},t.defaultDangerIconButtonOptions=Object.assign(Object.assign({},t.defaultDangerButtonOptions),{variant:"default",ariaLabel:""}),t.getDefaultDangerIconButtonOptions=function(e){var n,a,o,r,s;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerIconButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultDangerIconButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultDangerIconButtonOptions.tech,ariaLabel:null!==(r=null==e?void 0:e.ariaLabel)&&void 0!==r?r:t.defaultDangerIconButtonOptions.ariaLabel,variant:null!==(s=null==e?void 0:e.variant)&&void 0!==s?s:t.defaultDangerIconButtonOptions.variant}};const n={xs:"s",s:"m",m:"m",l:"l"};function a(e,t){return{ariaHidden:!0,ariaLabel:"",size:n[e],tech:t}}t.getButtonIconOptions=a,t.getIconButtonReturnProps=function(e){return{button:{"aria-label":e.ariaLabel,type:"button"},iconOptions:a(e.size,e.tech)}}}}]);