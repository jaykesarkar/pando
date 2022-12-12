"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88164],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77907:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(88795),o="tabItem_C7m6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},98568:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(60953),r=n(45721),o=n(88795),l=n(63631),s=n(99595),i=n(2825),u=n(13554),p="tabList_C4Ea",c="tabItem_W41a";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,f=e.values,h=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,S=(0,r.useState)(y),x=S[0],C=S[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=w[h];null!=I&&I!==x&&k.some((function(e){return e.value===I}))&&C(I)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==x&&(E(t),C(a),null!=h&&T(h,String(a)))},j=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;n=null!=(o=O[l])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onClick:P},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},68159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(60953),r=n(59005),o=(n(45721),n(70167)),l=n(98568),s=n(77907),i=["components"],u={sidebar_position:1,tags:["Development","Installation","Fonts","Normalize","Setup","Assets"],title:"Installation"},p=void 0,c={unversionedId:"development/getting-started/installation",id:"version-0.3.1-beta/development/getting-started/installation",title:"Installation",description:"Use Pluralsight's UI suite and get the best developer experience for your team.",source:"@site/versioned_docs/version-0.3.1-beta/development/getting-started/installation.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/installation",permalink:"/docs/development/getting-started/installation",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/development/getting-started/installation.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Installation",permalink:"/docs/tags/installation"},{label:"Fonts",permalink:"/docs/tags/fonts"},{label:"Normalize",permalink:"/docs/tags/normalize"},{label:"Setup",permalink:"/docs/tags/setup"},{label:"Assets",permalink:"/docs/tags/assets"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Installation","Fonts","Normalize","Setup","Assets"],title:"Installation"},sidebar:"development",next:{title:"Usage",permalink:"/docs/development/getting-started/usage"}},m={},d=[{value:"Basic Use",id:"basic-use",level:2},{value:"Responsive meta tag",id:"responsive-meta-tag",level:2},{value:"PS TT Commons font",id:"ps-tt-commons-font",level:2},{value:"Normalize.css",id:"normalizecss",level:2},{value:"Using custom fonts",id:"using-custom-fonts",level:3},{value:"Module Support",id:"module-support",level:2},{value:"Typescript",id:"typescript",level:2}],f={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("strong",null,(0,o.kt)("p",{className:"page-subheadline",markdown:"1"},"Use Pluralsight's UI suite and get the best developer experience for your team.")),(0,o.kt)("p",null,"Pluralsight Design is available as a set of multiple npm packages for web and our ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package is also compatable with iOS, Swift, Android, and Kotlin."),(0,o.kt)("p",null,"Each package has a different purpose in terms of flexibility. You will ",(0,o.kt)("em",{parentName:"p"},"rarely")," need all of them and probably only just one or two most."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum Flexibility:")," use ",(0,o.kt)("a",{parentName:"li",href:"/docs/development/tokens/intro"},"Design Tokens"),", our foundational package that delivers our themes and is used internally in Headless-styles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Most Flexibility:")," use ",(0,o.kt)("a",{parentName:"li",href:"/docs/development/headless-styles/intro"},"Headless Styles"),", our package which delivers component styles & accessibility helpers for ",(0,o.kt)("strong",{parentName:"li"},"any")," component or UI library combination."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimum Flexibility:")," use the following packages that cater to a specific framework:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Icons:")," our ",(0,o.kt)("a",{parentName:"li",href:"/docs/development/icons/intro"},"Icons")," package delivers a broad range of icons for most common use cases (SVG, React, and Svelte)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"React-utils:")," our ",(0,o.kt)("a",{parentName:"li",href:"/docs/development/react-utils/use-focus-trap"},"React Utils")," package delivers custom hooks and helper functions specifically for the React library to help improve both the customer and devloper experience.")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Design Tokens")," and ",(0,o.kt)("strong",{parentName:"p"},"Headless-styles")," require our Font and Normalize setup for the best experience (see below).")),(0,o.kt)("h2",{id:"basic-use"},"Basic Use"),(0,o.kt)("p",null,"For the entire kitchen sink up front, just install the Headless-styles and Icons packages."),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,o.kt)("h2",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,o.kt)("p",null,"Pluralsight Design is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," element in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n')),(0,o.kt)("h2",{id:"ps-tt-commons-font"},"PS TT Commons font"),(0,o.kt)("p",null,"Our packages were developed with PS TT Commons (Pluralsight brand font) in mind. For the best results, install via an HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag in your ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"\n/>\n')),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"fonts.css")," file declares both the ",(0,o.kt)("strong",{parentName:"p"},"brand and a code font"),". We are only preloading the brand font since it's the most common used font across all of our products and teams. This will help boost performance and prevent FOUC."),(0,o.kt)("p",null,"Additionally, each Headless-style helper uses a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide"},"variable font")," property to provide all weights programmatically. ",(0,o.kt)("strong",{parentName:"p"},"IE 11 does not support variable fonts"),", so any IE users will get the sans-serif fallback."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to add the font resources ",(0,o.kt)("strong",{parentName:"p"},"before")," ",(0,o.kt)("a",{parentName:"p",href:"#normalizecss"},"normalize.css")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," to prevent UI issues.")),(0,o.kt)("h2",{id:"normalizecss"},"Normalize.css"),(0,o.kt)("p",null,"Headless-styles and custom theming ",(0,o.kt)("strong",{parentName:"p"},"depend on our normalize.css")," file to be used in your project. This file adds our CSS resets, typography styles, design-tokens, and our themes."),(0,o.kt)("p",null,"To add the normalize file, simply copy and paste the ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," content below into your ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag - ",(0,o.kt)("em",{parentName:"p"},"after")," the font sources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"\n/>\n')),(0,o.kt)("h3",{id:"using-custom-fonts"},"Using custom fonts"),(0,o.kt)("p",null,"Not interested in using the PS TT Commons font? Simply leave out the ",(0,o.kt)("a",{parentName:"p",href:"#ps-tt-commons-font"},"font imports")," and instead use your own font declaration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of using a custom font"',title:'"Example',of:!0,using:!0,a:!0,custom:!0,'font"':!0},"html {\n  font-family: 'Some custom font', sans-serif;\n  font-feature-settings: 'tnum' on, 'lnum' on;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1.5;\n  text-size-adjust: 100%;\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"All of our Headless Styles style functions use ",(0,o.kt)("inlineCode",{parentName:"p"},"font-family: inherit")," so it is important you do not leave out this step unless you prefer to use the default browser font family.")),(0,o.kt)("h2",{id:"module-support"},"Module Support"),(0,o.kt)("p",null,"All of our packages support both Tree-shaking via ES-Modules or CommonJS use cases. Additionally, we also provide both minified code for production environments and non-minified (with source-maps) for developer environments."),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"All of our packages are built using Typescript and include delcarations for enhanced IDE experiences."))}h.isMDXComponent=!0}}]);