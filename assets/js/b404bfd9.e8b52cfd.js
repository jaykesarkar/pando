"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74197],{70167:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(45721);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91621:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(60953),l=a(59005),r=(a(45721),a(70167)),i=["components"],o={tags:["design","row","column","tabular"],title:"Table"},u=void 0,s={unversionedId:"design/components/table",id:"design/components/table",title:"Table",description:"Description",source:"@site/docs/design/components/table.md",sourceDirName:"design/components",slug:"/design/components/table",permalink:"/docs/next/design/components/table",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/components/table.md",tags:[{label:"design",permalink:"/docs/next/tags/design"},{label:"row",permalink:"/docs/next/tags/row"},{label:"column",permalink:"/docs/next/tags/column"},{label:"tabular",permalink:"/docs/next/tags/tabular"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["design","row","column","tabular"],title:"Table"},sidebar:"design",previous:{title:"Switch",permalink:"/docs/next/design/components/switch"},next:{title:"Tabs",permalink:"/docs/next/design/components/tabs"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Table cell",id:"table-cell",level:3},{value:"Table column",id:"table-column",level:3},{value:"Table",id:"table",level:3},{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:3},{value:"Content",id:"content",level:3},{value:"Row style",id:"row-style",level:3},{value:"Alignment",id:"alignment",level:3},{value:"States",id:"states",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns",id:"related-patterns",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3}],p={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Tables are used to organize and display large data sets."),(0,r.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,r.kt)("h3",{id:"table-cell"},"Table cell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Checkbox"),(0,r.kt)("li",{parentName:"ul"},"Text"),(0,r.kt)("li",{parentName:"ul"},"Sort arrow"),(0,r.kt)("li",{parentName:"ul"},"Division line")),(0,r.kt)("h3",{id:"table-column"},"Table column"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table cells")),(0,r.kt)("h3",{id:"table"},"Table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table Body"),(0,r.kt)("li",{parentName:"ul"},"Table Header",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Caption"))),(0,r.kt)("li",{parentName:"ul"},"Table Footer")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use tables for any tabular data that requires 2 axis: rows and columns."),(0,r.kt)("li",{parentName:"ul"},"Tables allow users to easily scan and analyze large amounts of complex data.")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Header",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Column (or row) header cells, these define the contents of the columns or rows."))),(0,r.kt)("li",{parentName:"ul"},"Data",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data cells contain the content and data that will be repeated throughout a column or row.")))),(0,r.kt)("h3",{id:"content"},"Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Text",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alphanumeric-only content"))),(0,r.kt)("li",{parentName:"ul"},"Button",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cells that contain actionable buttons. These cells allow for up to 2 default buttons and/or icon button."))),(0,r.kt)("li",{parentName:"ul"},"Badge",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays 1 Badge component"))),(0,r.kt)("li",{parentName:"ul"},"Leading icon",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A data or header cell with a leading icon, often used as a checkbox."))),(0,r.kt)("li",{parentName:"ul"},"Trailing icon",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A data or header cell with a trailing icon, often a sorting arrow."))),(0,r.kt)("li",{parentName:"ul"},"Double icon",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A data or header cell with a leading and trailing icon.")))),(0,r.kt)("h3",{id:"row-style"},"Row style"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Condensed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"use when presenting a table as part of a larger dashboard or page."))),(0,r.kt)("li",{parentName:"ul"},"Regular",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used in most cases."))),(0,r.kt)("li",{parentName:"ul"},"Relaxed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use in full-screen environments, when the table is the main or only presentation method on the page.")))),(0,r.kt)("h3",{id:"alignment"},"Alignment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Numerical data"),": Right aligned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Textual data"),": Left aligned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buttons"),": Center aligned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Badges"),": Left aligned"),(0,r.kt)("li",{parentName:"ul"},"Align headers with their related data")),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rows of the table will change their surface color on hover/focus, to help with traversing and reading data.")),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tables should be reserved for more complex data, usually consisting of 3-4 columns and multiple rows."),(0,r.kt)("li",{parentName:"ul"},"Provide a 1-2 line description of the table content to allow all users to gain context about the data."),(0,r.kt)("li",{parentName:"ul"},"Is a table the best pattern for your use case? Consider a Definition list if you are merely displaying key/value or term/description pairs."),(0,r.kt)("li",{parentName:"ul"},"Allow for filtering and ordering when comparison is not a priority.")),(0,r.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not rely on tables merely for their layout. Ensure they are used only for tabular data display.")),(0,r.kt)("h3",{id:"related-patterns"},"Related patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pagination (table)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Place table pagination controls above the table for easier and more visible access.")))),(0,r.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,r.kt)("h3",{id:"microcopy"},"Microcopy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use sentence casing for all header and data cells."),(0,r.kt)("li",{parentName:"ul"},"Wrap content in cells if needed (though, this is discouraged if avoidable), do not truncate.")),(0,r.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include units of measurement symbols (e.g. $) in column headers so that they do not need to be repeated in the data cells."),(0,r.kt)("li",{parentName:"ul"},"Use consistent decimals throughout an entire table.")))}m.isMDXComponent=!0}}]);