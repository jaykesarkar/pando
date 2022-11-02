"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77907:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),r=n(88795),l="tabItem_C7m6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},98568:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),r=n(45721),l=n(88795),o=n(63631),s=n(99595),i=n(2825),u=n(13554),c="tabList_C4Ea",p="tabItem_W41a";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,g=e.values,f=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),T=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,r.useState)(k),O=N[0],I=N[1],E=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=T[f];null!=Z&&Z!==O&&v.some((function(e){return e.value===Z}))&&I(Z)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==O&&(j(t),I(a),null!=f&&x(f,String(a)))},D=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onClick:P},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},50794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(60953),r=n(59005),l=(n(45721),n(70167)),o=n(98568),s=n(77907),i=["components"],u={sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"],title:"Usage"},c=void 0,p={unversionedId:"development/getting-started/usage",id:"development/getting-started/usage",title:"Usage",description:"Learn about the use case for each package we offer.",source:"@site/docs/development/getting-started/usage.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/usage",permalink:"/docs/next/development/getting-started/usage",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/usage.md",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Usage",permalink:"/docs/next/tags/usage"},{label:"Getting Started",permalink:"/docs/next/tags/getting-started"},{label:"Web",permalink:"/docs/next/tags/web"},{label:"React Native",permalink:"/docs/next/tags/react-native"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"],title:"Usage"},sidebar:"development",previous:{title:"Installation",permalink:"/docs/next/development/getting-started/installation"},next:{title:"Supported Platforms",permalink:"/docs/next/development/getting-started/platforms"}},d={},m=[{value:"Design Tokens",id:"design-tokens",level:2},{value:"Headless Styles",id:"headless-styles",level:2},{value:"Button Example",id:"button-example",level:3},{value:"Icons",id:"icons",level:2},{value:"React Utils",id:"react-utils",level:2}],g={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("strong",null,(0,l.kt)("p",{className:"page-subheadline",markdown:"1"},"Learn about the use case for each package we offer.")),(0,l.kt)("h2",{id:"design-tokens"},"Design Tokens"),(0,l.kt)("p",null,"This package is meant for one purpose - ",(0,l.kt)("strong",{parentName:"p"},"deliver a solution that has the most flexibility there is to offer for UI development.")),(0,l.kt)("p",null,"Design tokens comes with a few things at the foundational level: ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"our normalize CSS Reset"),", our ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#ps-tt-commons-font"},"font declarations"),", and our Design-tokens and custom themes."),(0,l.kt)("p",null,"If you want full control of your UI and just need a lightweight and reliable custom theming solution, Design Tokens has you covered."),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,l.kt)("h2",{id:"headless-styles"},"Headless Styles"),(0,l.kt)("p",null,"Headless Styles is built with the intention of allowing the most flexibilty in a component or native project base. This means we give you ",(0,l.kt)("em",{parentName:"p"},"helper functions")," that will return an Object which delivers styles and a11y properties."),(0,l.kt)("p",null,'This means that you have full control of your component design without having to worry about the "annoying bits" (i.e. styles and a11y).'),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles\n")))),(0,l.kt)("h3",{id:"button-example"},"Button Example"),(0,l.kt)("p",null,"Here's a quick example using React to create a custom Button:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/CancelButton.jsx"',title:'"components/CancelButton.jsx"'},"import { getButtonProps } from '@pluralsight/headless-styles\n\nconst cancelBtnProps = getButtonProps({\n  sentiment: 'danger'\n})\n\nexport default function CancelButton(props) {\n  const { children, ...btnProps } = props\n\n  return (\n    <button {...btnProps} {...cancelBtnProps.button}>\n      {children}\n    </button>\n  )\n}\n")),(0,l.kt)("p",null,"The above code will render a fully styled and accessible Button when combined with our ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup"),"."),(0,l.kt)("h2",{id:"icons"},"Icons"),(0,l.kt)("p",null,"Our Icons package was created to deliver icons for a wide range of use cases: Plain SVG, React, or Svelte components. This package can also be combined with Headless-styles if you want to build components that use an enhanced visual exprience."),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/icons\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/icons\n")))),(0,l.kt)("h2",{id:"react-utils"},"React Utils"),(0,l.kt)("p",null,"This utility package is just for the React users who are looking to reduce their codebase and help make their components more accessible. In this library, we deliver custom hooks that do anything from ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-focus-trap"},"enhancing a modal experience")," to better image loading."),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/react-utils\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/react-utils\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"React-utils is compatible with React 18 and concurrent mode. \ud83d\ude0e")))}f.isMDXComponent=!0}}]);