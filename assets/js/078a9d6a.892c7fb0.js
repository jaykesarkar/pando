"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8390],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9952:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),o=n(88795),r="tabItem_U_pG";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},8157:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(81648),o=n(45721),r=n(88795),s=n(79106),i=n(39977),l=n(5548),u=n(24734);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,p]=m({queryString:n,groupId:a}),[h,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=l??h;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var y=n(93046),f=n(99941),g="tabList_ZP7c",b="tabItem_qNjf";function w(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,y.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},97382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(81648),o=(n(45721),n(70167)),r=n(8157),s=n(9952);const i={sidebar_position:2,tags:["developer installation"],title:"Add Pando to a Website"},l=void 0,u={unversionedId:"learn/get-started/installation/add-to-website",id:"learn/get-started/installation/add-to-website",title:"Add Pando to a Website",description:"You don't have to build your whole project using Pando. Adding our base Themes and Typography doesn't require installation, only takes a minute, and lets you start using beautiful styles right away!",source:"@site/docs/learn/get-started/installation/add-to-website.mdx",sourceDirName:"learn/get-started/installation",slug:"/learn/get-started/installation/add-to-website",permalink:"/docs/next/learn/get-started/installation/add-to-website",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/get-started/installation/add-to-website.mdx",tags:[{label:"developer installation",permalink:"/docs/next/tags/developer-installation"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["developer installation"],title:"Add Pando to a Website"},sidebar:"learn",previous:{title:"Installation",permalink:"/docs/next/learn/get-started/installation/"},next:{title:"Using the Figma UI Kit",permalink:"/docs/next/learn/get-started/installation/using-figma-kit"}},p={},c=[{value:"Adding Pando in one minute",id:"adding-pando-in-one-minute",level:2},{value:"Step 1: Add the fonts",id:"step-1-add-the-fonts",level:3},{value:"Step 2: Add the normalize reset",id:"step-2-add-the-normalize-reset",level:3},{value:"Step 3: Update your typography",id:"step-3-update-your-typography",level:3},{value:"Using Pando Components",id:"using-pando-components",level:2},{value:"Diving Deeper with Headless Styles",id:"diving-deeper-with-headless-styles",level:2},{value:"Step 1: Install Headless-styles &amp; Icons packages",id:"step-1-install-headless-styles--icons-packages",level:3},{value:"Step 2: Replace Icons",id:"step-2-replace-icons",level:3},{value:"Step 3: Replace Components",id:"step-3-replace-components",level:3},{value:"Try Pando with other libraries",id:"try-pando-with-other-libraries",level:2},{value:"Extending Themes",id:"extending-themes",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You don't have to build your whole project using Pando. Adding our base Themes and Typography doesn't require installation, only takes a minute, and lets you start using beautiful styles right away!"),(0,o.kt)("h2",{id:"adding-pando-in-one-minute"},"Adding Pando in one minute"),(0,o.kt)("p",null,'Pando has been designed from the start for gradual adoption. There are many teams in today\'s world that operate with "Frankenstein apps". This guide shows you how to add the foundations of Pando to an existing setup.'),(0,o.kt)("admonition",{title:"Full Migration",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to fully migrate to Pando, you can still use this guide! Just be sure to use the following steps ",(0,o.kt)("strong",{parentName:"p"},"after")," your current UI setup. When you are done - remove the old setup and you will have a pure Pando app!")),(0,o.kt)("h3",{id:"step-1-add-the-fonts"},"Step 1: Add the fonts"),(0,o.kt)("p",null,"In order to display and use the correct font, we need the browser to load it first. Hover over the code and click the copy button in the top right corner of the snippet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="Add to the root HTML head tag."',showLineNumbers:!0,title:'"Add',to:!0,the:!0,root:!0,HTML:!0,head:!0,'tag."':!0},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n')),(0,o.kt)("p",null,"This code will tell the browser to ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," the font assets, which will help boost performance in your application."),(0,o.kt)("admonition",{title:"Variable Font",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Pluralsight Commons is a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide"},"variable font")," which means that styling requires different properties than an non-variable font.")),(0,o.kt)("h3",{id:"step-2-add-the-normalize-reset"},"Step 2: Add the normalize reset"),(0,o.kt)("p",null,"Now that we have the fonts installed, paste the following into the same HTML page ",(0,o.kt)("strong",{parentName:"p"},"after")," the font installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="Add beneath the font link in the same file."',showLineNumbers:!0,title:'"Add',beneath:!0,the:!0,font:!0,link:!0,in:!0,same:!0,'file."':!0},'<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"\n/>\n')),(0,o.kt)("p",null,'These links declare the font rules and add our "built-in" themes, resets, and typography styles.'),(0,o.kt)("admonition",{title:"Pitfall",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"You may notice breaking styles and weird UI results after doing this. This is normal when combining multiple CSS foundations into an existing app. The following steps are ways to approach fixing them.")),(0,o.kt)("h3",{id:"step-3-update-your-typography"},"Step 3: Update your typography"),(0,o.kt)("p",null,"Once you've completed the first two steps, you may notice some weird styling conflicts if you are combining Pando with an existing UI library. Now is the time to update your typography to match what you need using ",(0,o.kt)("strong",{parentName:"p"},"semantic HTML"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Replace old typography with semantic HTML"',showLineNumbers:!0,title:'"Replace',old:!0,typography:!0,with:!0,semantic:!0,'HTML"':!0},'- <div className="title">Some Page Title</div>\n+ <h1>Some Page Title</h1>\n')),(0,o.kt)("p",null,"If you are using typography components, replace them with semantic HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Replace components with semantic HTML"',showLineNumbers:!0,title:'"Replace',components:!0,with:!0,semantic:!0,'HTML"':!0},"- import { P } from '@pluralsight/ps-design-system-text'\n\n- <P>Some body copy example using a component.</P>\n+ <p>Some body copy example using semantic HTML</p>\n")),(0,o.kt)("p",null,'With Pando, you don\'t have to worry about typography components or classes for most of the use cases (although we do offer "opt-in" classes for things like display headings and lists). All you have to do is use the correct HTML elements as they were intended.'),(0,o.kt)("admonition",{title:"Naturally Accessbile",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Accessbility is our highest priority in Pando, and HTML text elements are naturally accessbile, so we've built our reset around this concept. Use the correct HTML and you will get both styling and accessbility! \ud83c\udf89")),(0,o.kt)("h2",{id:"using-pando-components"},"Using Pando Components"),(0,o.kt)("admonition",{title:"WIP",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Forgive us as we continue to work hard and provide a better experience for you. More information about this section is coming soon!")),(0,o.kt)("h2",{id:"diving-deeper-with-headless-styles"},"Diving Deeper with Headless Styles"),(0,o.kt)("p",null,"If you are looking to update the styling for your components and icons, it's time to bring in our Headless-styles library."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section assumes you are familiar with package managers like ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," and ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),".")),(0,o.kt)("h3",{id:"step-1-install-headless-styles--icons-packages"},"Step 1: Install Headless-styles & Icons packages"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,o.kt)("h3",{id:"step-2-replace-icons"},"Step 2: Replace Icons"),(0,o.kt)("p",null,"Most Icon libraries are pretty flexible. Pando Icons allow you to import three different types of Icons: React (default), Svelte, or SVG."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Create a new file called Icon.tsx"',showLineNumbers:!0,title:'"Create',a:!0,new:!0,file:!0,called:!0,'Icon.tsx"':!0},"import { getIconProps } from '@pluralsight/headless-styles'\nimport type { IconOptions } from '@pluralsight/headless-styles/types'\n\ninterface IconProps extends IconOptions {\n  icon: ReactElement;\n}\n\nexport function Icon(props: IconProps) {\n  const { icon, ...iconOptions } = props\n  const El = icon\n  return <El {...getIconProps(iconOptions)} />\n}\n")),(0,o.kt)("p",null,"Now, you have an easy to use Icon component that you can refactor your code with!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Replace old Icons with your new Icon Component."',showLineNumbers:!0,title:'"Replace',old:!0,Icons:!0,with:!0,your:!0,new:!0,Icon:!0,'Component."':!0},"- import { CodeIcon } from '@pluralsight/ps-design-system-icon'\n+ import { CodeIcon } from '@pluralsight/icons'\n+ import { Icon } from './components/Icon'\n\n- <CodeIcon size={CodeIcon.sizes.medium} />\n+ <Icon icon={CodeIcon} />\n")),(0,o.kt)("h3",{id:"step-3-replace-components"},"Step 3: Replace Components"),(0,o.kt)("p",null,"Now that you have a better feel for replacing a simple component, let's repeat the process for something like a Button!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Create a new file called Button.tsx"',showLineNumbers:!0,title:'"Create',a:!0,new:!0,file:!0,called:!0,'Button.tsx"':!0},"import type { HTMLProps, PropsWithChildren } from 'react'\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\n\ninterface ButtonProps extends ButtonOptions, HTMLProps<HTMLButtonElement> {}\n\nexport function Button(props: PropsWithChildren<ButtonProps>) {\n  const { children, onClick, ...btnOptions } = props\n  const { button } = getButtonProps(btnOptions)\n\n  return (\n    <button {...button} onClick={onClick}>\n      {children}\n    </button>\n  )\n}\n")),(0,o.kt)("p",null,"Now rinse and repeat, replacing the Buttons in your app!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Replace old Buttons wiht your new Button Component."',showLineNumbers:!0,title:'"Replace',old:!0,Buttons:!0,wiht:!0,your:!0,new:!0,Button:!0,'Component."':!0},"- import Button from '@pluralsight/ps-design-system-button'\n+ import { Button } from './components/Button'\n\n- <Button appearance={Button.appearances.secondary}>Cancel</Button>\n+ <Button sentiment=\"danger\" onClick={handleCancel}>Cancel</Button>\n")),(0,o.kt)("h2",{id:"try-pando-with-other-libraries"},"Try Pando with other libraries"),(0,o.kt)("p",null,"When you natively use Pando (above), you get the immediate benefit of everything being accessible ",(0,o.kt)("strong",{parentName:"p"},"and"),' performant. However, it does come at a small cost of "owning" your own components.'),(0,o.kt)("admonition",{title:"Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Our long-term vision for Pando is to have a developer experience that is just as successful as its current result. Thus, we recognize we are not there yet and plan on releasing a "core" components library in the near future to help bridge the gap for teams that may not be comfortable "owning" components while we continue to evolve Headless-styles in the future.')),(0,o.kt)("p",null,"If you are a team that prefers using a third-party library like ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," or any other, you can easily extend another system's theme using Pando! \ud83c\udf89"),(0,o.kt)("h3",{id:"extending-themes"},"Extending Themes"),(0,o.kt)("p",null,"Out of the box, Headless-styles exports all of our CSS styles as Javascript Objects to make it as easy as possible to extend 3rd party component libraries."),(0,o.kt)("p",null,"To use our style objects, import the naming pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"<component>Styles")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/styles")," sub-path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using style Objects to extend the Chakra theme" showLineNumbers {1,6,8}',title:'"Using',style:!0,Objects:!0,to:!0,extend:!0,the:!0,Chakra:!0,'theme"':!0,showLineNumbers:!0,"{1,6,8}":!0},"import { buttonStyles } from '@pluralsight/headless-styles/styles'\nimport { extendTheme } from '@chakra-ui/react'\n\nconst theme = {\n  button: {\n    baseStyles: buttonStyles.btnBase,\n    variants: {\n      text: buttonStyles.textButton,\n      ...\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Most of modern UI libraries support this pattern, so you should be able to use this example whether you use MUI or any other UI component library."))}m.isMDXComponent=!0}}]);