"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48859],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(60953),r=n(59005),a=(n(45721),n(70167)),i=["components"],l={tags:["design","tooltip","dialog","modal","overlay"],title:"Popover"},s=void 0,p={unversionedId:"design/components/popover",id:"version-0.3.1-beta/design/components/popover",title:"Popover",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/popover.md",sourceDirName:"design/components",slug:"/design/components/popover",permalink:"/docs/design/components/popover",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/popover.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"tooltip",permalink:"/docs/tags/tooltip"},{label:"dialog",permalink:"/docs/tags/dialog"},{label:"modal",permalink:"/docs/tags/modal"},{label:"overlay",permalink:"/docs/tags/overlay"}],version:"0.3.1-beta",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["design","tooltip","dialog","modal","overlay"],title:"Popover"},sidebar:"design",previous:{title:"Pagination",permalink:"/docs/design/components/pagination"},next:{title:"Progress",permalink:"/docs/design/components/progress"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:2},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"An non-modal overlay with brief, additional content."),(0,a.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Title"),(0,a.kt)("li",{parentName:"ol"},"Content"),(0,a.kt)("li",{parentName:"ol"},"Close button"),(0,a.kt)("li",{parentName:"ol"},"Arrow")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Popovers should be used to display additional details or information about an element on a page."),(0,a.kt)("li",{parentName:"ul"},"Popovers should be used sparingly, and only with non-essential information to help users that are not familiar with the user interface."),(0,a.kt)("li",{parentName:"ul"},"Allowed Popover triggers include text and icons such as info-circle."),(0,a.kt)("li",{parentName:"ul"},"Associated with a trigger, Popovers do not prevent other actions on the page by the user."),(0,a.kt)("li",{parentName:"ul"},"Width and height of the Popover container can change according to its contents. It is recommended to keep width below 4 columns wide."),(0,a.kt)("li",{parentName:"ul"},"Popover arrows can be placed in 12 different locations around the edge of the Popover container."),(0,a.kt)("li",{parentName:"ul"},"The arrow should always point to the trigger element."),(0,a.kt)("li",{parentName:"ul"},"A title/heading should be supplied with the Popover, even if it is not displayed visually.")),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Popover can be closed by:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Interacting with the close icon button"),(0,a.kt)("li",{parentName:"ul"},"Interacting with the trigger element"),(0,a.kt)("li",{parentName:"ul"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Esc")," key on the keyboard"),(0,a.kt)("li",{parentName:"ul"},"Opening another Popover, Modal, or Dialog"))),(0,a.kt)("li",{parentName:"ul"},"Popovers can only be displayed one at a time."),(0,a.kt)("li",{parentName:"ul"},"Popovers stay open until a user closes them or opens another dialog, even if the user scrolls them out of view."),(0,a.kt)("li",{parentName:"ul"},"A Popover should always be displayed inside of the viewport, and placement should be adjusted accordingly if needed.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Popovers capture focus, and maintain this capture until closed.")),(0,a.kt)("h2",{id:"dos-and-donts"},"Dos and don'ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do not use Popovers to contain actionable buttons such as confirmations. Use Confirm Dialog for this."),(0,a.kt)("li",{parentName:"ul"},"Do not overload Popovers with content. If content exceeds 4 columns, use a Modal.")),(0,a.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,a.kt)("h3",{id:"microcopy"},"Microcopy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Popover headings should use sentence casing."),(0,a.kt)("li",{parentName:"ul"},"Ensure all popover content uses proper capitalization and punctuation, and should be written as complete sentences.")))}m.isMDXComponent=!0}}]);