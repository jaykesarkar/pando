"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85428],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(60953),o=n(59005),l=(n(45721),n(70167)),r=["components"],i={tags:["form","tick","label","group","checked"],title:"Checkbox"},s=void 0,c={unversionedId:"design/components/checkbox",id:"version-0.1.0-alpha/design/components/checkbox",title:"Checkbox",description:"Description",source:"@site/versioned_docs/version-0.1.0-alpha/design/components/checkbox.md",sourceDirName:"design/components",slug:"/design/components/checkbox",permalink:"/docs/0.1.0-alpha/design/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/design/components/checkbox.md",tags:[{label:"form",permalink:"/docs/0.1.0-alpha/tags/form"},{label:"tick",permalink:"/docs/0.1.0-alpha/tags/tick"},{label:"label",permalink:"/docs/0.1.0-alpha/tags/label"},{label:"group",permalink:"/docs/0.1.0-alpha/tags/group"},{label:"checked",permalink:"/docs/0.1.0-alpha/tags/checked"}],version:"0.1.0-alpha",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["form","tick","label","group","checked"],title:"Checkbox"},sidebar:"design",previous:{title:"Button",permalink:"/docs/0.1.0-alpha/design/components/button"},next:{title:"Confirm Dialog",permalink:"/docs/0.1.0-alpha/design/components/confirm-dialog"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and don\u2019ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Interactions",id:"interactions",level:3},{value:"States",id:"states",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"A small list of multi-select options."),(0,l.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Container",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Label"),(0,l.kt)("li",{parentName:"ul"},"Checkbox-group",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Checkbox"),(0,l.kt)("li",{parentName:"ul"},"Checkbox-target"),(0,l.kt)("li",{parentName:"ul"},"Label",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional flag"))))),(0,l.kt)("li",{parentName:"ul"},"Helper text")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Checkbox when users can select all, one, or none of the available options."),(0,l.kt)("li",{parentName:"ul"},"Checkbox can be used as a stand-alone option, e.g. when asking a user to agree to certain services or statements."),(0,l.kt)("li",{parentName:"ul"},"Checkboxes are used as part of a checkbox-group, and have a group Label and optional helper text assigned to them."),(0,l.kt)("li",{parentName:"ul"},"If necessary, use a Legend to provide further context to multiple groups of Checkboxes or the choices available within a group."),(0,l.kt)("li",{parentName:"ul"},"By default, in most occasions, leave all Checkboxes unchecked. A scenario where checked-by-default makes sense includes viewing preselected options in a profile."),(0,l.kt)("li",{parentName:"ul"},"Labels always trail the Checkbox-target. For similar situations where the UI dictates a left-aligned label - and the option is not part of a larger, related list - consider using a switch."),(0,l.kt)("li",{parentName:"ul"},"Note that the label will be interactive and will trigger the checkbox as well, providing a larger tap target for the user.")),(0,l.kt)("h3",{id:"dos-and-donts"},"Dos and don\u2019ts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Do not use Checkboxes to navigate a user to another part of the experience. Utilize text links for navigation."),(0,l.kt)("li",{parentName:"ul"},"Do always provide an accompanying label and, in many cases, accompanying helper text as part of the checkbox-group as well."),(0,l.kt)("li",{parentName:"ul"},"Do always stack Checkboxes in a group to provide better scannability for the user."),(0,l.kt)("li",{parentName:"ul"},"Do not use Checkboxes as UI for showing or hiding content. Instead consider using a Switch or other control."),(0,l.kt)("li",{parentName:"ul"},"Do not include links inside of checkbox labels, they are not allowed and will not work properly. Place supplementary content adjacent to the checkbox element.")),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List options in a logical order:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"most likely to least likely to be selected"),(0,l.kt)("li",{parentName:"ul"},"simplest to most complex operation"),(0,l.kt)("li",{parentName:"ul"},"least to most risk"),(0,l.kt)("li",{parentName:"ul"},"Avoid alphabetizing options as this is not localizable.")))),(0,l.kt)("h3",{id:"interactions"},"Interactions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Unchecked:")," The Checkbox option is not selected, and/or as a parent of a nested list of Checkbox options, all options in the nested list are also not selected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Indeterminant:")," As the parent option of a nested group of options, at least one option is selected within the nested list."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Checked:")," The option is selected, and/or as a parent of a nested list of Checkbox options, all options in the nested list are also selected.")),(0,l.kt)("h3",{id:"states"},"States"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default"),(0,l.kt)("li",{parentName:"ul"},"Hover"),(0,l.kt)("li",{parentName:"ul"},"Focus"),(0,l.kt)("li",{parentName:"ul"},"Disabled"),(0,l.kt)("li",{parentName:"ul"},"Invalid")),(0,l.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,l.kt)("h3",{id:"microcopy"},"Microcopy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Labels for Checkboxes use sentence case.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Exceptions include acronyms (all capitals), proper nouns, or site sections (title-case)."))),(0,l.kt)("li",{parentName:"ul"},"Do not end in punctuation unless you are using a full sentence."),(0,l.kt)("li",{parentName:"ul"},'When using to confirm user consent, start the label with \u201cI\u201d, e.g. "I consent to receive email notifications from Pluralsight."')),(0,l.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Checkbox labels should be clear and concise. If a full sentence is needed, keep it short (approx. 40-50 characters, or 10 words)."),(0,l.kt)("li",{parentName:"ul"},"Frame labels positively, e.g. \u201cTurn on notifications\u201d rather than \u201cTurn off notifications\u201d.")))}m.isMDXComponent=!0}}]);