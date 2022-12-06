"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18006],{70167:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(45721);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=l,k=s["".concat(d,".").concat(g)]||s[g]||u[g]||r;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69960:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(60953),l=n(59005),r=(n(45721),n(70167)),i=["components"],o={tags:["design","type","fonts","code","headings","line lengths"],title:"Typography"},d=void 0,p={unversionedId:"design/foundations/typography",id:"design/foundations/typography",title:"Typography",description:"Description",source:"@site/docs/design/foundations/typography.md",sourceDirName:"design/foundations",slug:"/design/foundations/typography",permalink:"/docs/next/design/foundations/typography",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/foundations/typography.md",tags:[{label:"design",permalink:"/docs/next/tags/design"},{label:"type",permalink:"/docs/next/tags/type"},{label:"fonts",permalink:"/docs/next/tags/fonts"},{label:"code",permalink:"/docs/next/tags/code"},{label:"headings",permalink:"/docs/next/tags/headings"},{label:"line lengths",permalink:"/docs/next/tags/line-lengths"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["design","type","fonts","code","headings","line lengths"],title:"Typography"},sidebar:"design",previous:{title:"Color",permalink:"/docs/next/design/foundations/color"},next:{title:"Grammar & mechanics",permalink:"/docs/next/design/content/grammar"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Font families",id:"font-families",level:2},{value:"PS TT Commons",id:"ps-tt-commons",level:3},{value:"DM Mono",id:"dm-mono",level:3},{value:"Font sizes",id:"font-sizes",level:2},{value:"Body copy font sizes",id:"body-copy-font-sizes",level:3},{value:"Headings",id:"headings",level:3},{value:"Code font sizes",id:"code-font-sizes",level:3},{value:"Line lengths",id:"line-lengths",level:2}],s={toc:u};function g(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Clarify an information hierarchy, accessibly communicate content, and express our brand with these typographic choices."),(0,r.kt)("h2",{id:"font-families"},"Font families"),(0,r.kt)("h3",{id:"ps-tt-commons"},"PS TT Commons"),(0,r.kt)("p",null,"Pluralsight's default font family for the web is a custom font called ",(0,r.kt)("strong",{parentName:"p"},"PS TT Commons"),"."),(0,r.kt)("p",null,"Internally, we are using a variable font to provide all weights programmatically. This drastically reduces the number of network requests and overall page weight dedicated to fonts. Browsers that do not support variable fonts will get the system ",(0,r.kt)("inlineCode",{parentName:"p"},"sans-serif")," fallback."),(0,r.kt)("h3",{id:"dm-mono"},"DM Mono"),(0,r.kt)("p",null,"For code examples and code blocks, we use ",(0,r.kt)("strong",{parentName:"p"},"DM Mono"),", a monospace font."),(0,r.kt)("h2",{id:"font-sizes"},"Font sizes"),(0,r.kt)("h3",{id:"body-copy-font-sizes"},"Body copy font sizes"),(0,r.kt)("p",null,"Six font sizes are used in this system, with the default font size set to ",(0,r.kt)("inlineCode",{parentName:"p"},"16px"),". Each size is available in 2 weights and also in an underline style for links."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Font family"),(0,r.kt)("th",{parentName:"tr",align:null},"Font weight"),(0,r.kt)("th",{parentName:"tr",align:null},"Font size"),(0,r.kt)("th",{parentName:"tr",align:null},"Use for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"12px"),(0,r.kt)("td",{parentName:"tr",align:null},"Smallest text for labels, smallest descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"12px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"12px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"14px"),(0,r.kt)("td",{parentName:"tr",align:null},"Card titles, subtitles, smaller descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"14px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"14px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"16px"),(0,r.kt)("td",{parentName:"tr",align:null},"Default body copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"16px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"16px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"18px"),(0,r.kt)("td",{parentName:"tr",align:null},"Long form text, subheadings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"18px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"18px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"20px"),(0,r.kt)("td",{parentName:"tr",align:null},"Large labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"20px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"20px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2xl"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"24px"),(0,r.kt)("td",{parentName:"tr",align:null},"Large, emphasized text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2xl underline"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"500 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"24px"),(0,r.kt)("td",{parentName:"tr",align:null},"Linked text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2xl bold"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"700 (Bold)"),(0,r.kt)("td",{parentName:"tr",align:null},"24px"),(0,r.kt)("td",{parentName:"tr",align:null},"Strong text")))),(0,r.kt)("p",null,"Default line-height is currently set to ",(0,r.kt)("inlineCode",{parentName:"p"},"150%")," for all."),(0,r.kt)("h3",{id:"headings"},"Headings"),(0,r.kt)("p",null,"Heading styles are chosen to match HTML heading hierarchies, and establish a consistent visual language for the UI. Ensure page structures are set up to decrease the heading level - much like an outline - as the page or document grows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style"),(0,r.kt)("th",{parentName:"tr",align:null},"Font family"),(0,r.kt)("th",{parentName:"tr",align:null},"Font weight"),(0,r.kt)("th",{parentName:"tr",align:null},"Font size"),(0,r.kt)("th",{parentName:"tr",align:null},"Line height"),(0,r.kt)("th",{parentName:"tr",align:null},"Use for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 1"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"40px"),(0,r.kt)("td",{parentName:"tr",align:null},"110%"),(0,r.kt)("td",{parentName:"tr",align:null},"Page headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 2"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"32px"),(0,r.kt)("td",{parentName:"tr",align:null},"125%"),(0,r.kt)("td",{parentName:"tr",align:null},"Section headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 3"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"24px"),(0,r.kt)("td",{parentName:"tr",align:null},"125%"),(0,r.kt)("td",{parentName:"tr",align:null},"Nested section headings, sidebar section headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 4"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"18px"),(0,r.kt)("td",{parentName:"tr",align:null},"125%"),(0,r.kt)("td",{parentName:"tr",align:null},"Nested sidebar section headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 5"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"16px"),(0,r.kt)("td",{parentName:"tr",align:null},"125%"),(0,r.kt)("td",{parentName:"tr",align:null},"Smaller in-content labels and headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading 6"),(0,r.kt)("td",{parentName:"tr",align:null},"PS TT Commons"),(0,r.kt)("td",{parentName:"tr",align:null},"600 (DemiBold)"),(0,r.kt)("td",{parentName:"tr",align:null},"14px"),(0,r.kt)("td",{parentName:"tr",align:null},"150%"),(0,r.kt)("td",{parentName:"tr",align:null},"Smallest, in-content labels and headings")))),(0,r.kt)("h3",{id:"code-font-sizes"},"Code font sizes"),(0,r.kt)("p",null,"Code styles are available in 4 sizes, each with 2 weights."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style"),(0,r.kt)("th",{parentName:"tr",align:null},"Font family"),(0,r.kt)("th",{parentName:"tr",align:null},"Font weight"),(0,r.kt)("th",{parentName:"tr",align:null},"Font size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"18px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l strong"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"18px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"16px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m strong"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"16px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"14px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s strong"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"14px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"12px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs strong"),(0,r.kt)("td",{parentName:"tr",align:null},"DM Mono"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"12px")))),(0,r.kt)("h2",{id:"line-lengths"},"Line lengths"),(0,r.kt)("p",null,"Wide lines of text can be difficult for people to read, and reuire increased focus. While there is no way to measure a perfect line length for everyone, a general rule of 60-100 characters is often cited as a best practice."),(0,r.kt)("p",null,"When designing, this should be taken into consideration according to font size and responsive layout. Users may change the width and size of their viewports, as well as their font-size, thereby altering the perceived line length."))}g.isMDXComponent=!0}}]);