"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71],{80087:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=s);const t=e.type??s.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:r[t],style:o},e.children)}},72032:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),r=n(45721),s=n(31825),o=n(61471),i="grid_cC7H";function l(e){return r.createElement("li",(0,s.a)({colSpan:2}),r.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,s.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${o} ${i}`},c),n&&r.createElement(l,{href:n},"View on Github"),t&&r.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},5014:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(81648),r=n(45721),s=n(18934);const o="setActive",i="setFocus",l="setRefList",c="setTabFocus";function u(e,t){e({type:c,idx:t})}function d(e){return e?0:-1}function p(e,t){switch(t.type){case o:return e.tabList.reduce(((e,n)=>{const a=n===t.id,r=`${n}:panel`;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],"aria-selected":a,tabIndex:d(a)}},panels:{...e.panels,[r]:{...e.panels[r],"aria-hidden":!a,"aria-expanded":a,tabIndex:d(a)}}}}),e);case i:return e.tabList.reduce(((e,n,a)=>{const r=a===t.idx;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],tabIndex:d(r)}}}}),e);case l:return{...e,refList:[...e.refList,t.el]};case c:return{...e,tabFocus:t.idx};default:throw new Error("Unable to update useTabs state due to an internal error.")}}var b=n(86521);const m=(0,r.createContext)({panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null});function f(e){const{data:t}=e,n=(0,r.useMemo)((()=>t.reduce(((e,t,n)=>{const{id:a}=t,r=0===n,s=`${a}:panel`;return{...e,tabList:[...e.tabList,a],tabs:{...e.tabs,[a]:{"aria-selected":!!r,"aria-controls":s,id:a,label:t.label,role:"tab",tabIndex:r?0:-1}},panelList:[...e.panelList,s],panels:{...e.panels,[s]:{"aria-expanded":!!r,"aria-hidden":!r,"aria-labelledby":a,id:s,role:"tabpanel",tabIndex:r?0:-1}}}}),{panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null})),[t]),[a,s]=(0,r.useReducer)(p,n),o=(0,r.useMemo)((()=>({...a,dispatch:s})),[a,s]);return(0,b.jsx)(m.Provider,{value:o,children:e.children})}function g(){const{dispatch:e,refList:t,tabList:n,tabFocus:a}=(0,r.useContext)(m),s=(0,r.useCallback)((t=>{const r=t.key,s=n.length;if("ArrowRight"===r){const t=a+1;if(t>=s)return void u(e,0);u(e,t)}else if("ArrowLeft"===r){const t=a-1;if(t<0)return void u(e,s-1);u(e,t)}}),[e,n,a]);return(0,r.useEffect)((()=>{a>=0&&(!function(e,t){e({type:i,idx:t})}(e,a),t[a]?.focus())}),[e,t,a]),(0,r.useMemo)((()=>({onKeyDown:s,tabList:n})),[s,n])}function h(e){const t=(0,r.useRef)(null),{dispatch:n,tabList:a,tabs:s}=(0,r.useContext)(m),{onClick:i}={onClick:e?.onClick??null};const c=(0,r.useCallback)((e=>{const t=e.currentTarget.id;i&&i(t),function(e,t){e({type:o,id:t})}(n,t),u(n,a.indexOf(t))}),[n,i,a]);return(0,r.useEffect)((()=>{null!==t.current&&function(e,t){e({type:l,el:t})}(n,t.current)}),[n]),(0,r.useMemo)((()=>({onClick:c,ref:t,tabs:s})),[c,s])}var v=n(80087),k=[{id:"1",label:"Tab 1",children:{id:"1:panel"}},{id:"2",label:"Tab 2",children:{id:"2:panel"}},{id:"3",label:"Tab 3",children:{id:"3:panel"}},{id:"4",label:"Tab 4",children:{id:"4:panel"}}];const _=(0,s.g)();function w(){return r.createElement("div",_.wrapper,r.createElement(y,null),r.createElement(T,null))}function y(){const{onKeyDown:e,tabList:t}=g();return r.createElement("div",(0,a.Z)({},_.tabList,{onKeyDown:e}),t.map((e=>r.createElement(S,{id:e,key:e}))))}function S(e){const{tabs:t,...n}=h(),s=t[e.id];return r.createElement("button",(0,a.Z)({},_.tab,n,s),s.label)}function T(){const e=function(){const{panelList:e}=(0,r.useContext)(m);return(0,r.useMemo)((()=>({panelList:e})),[e])}();return r.createElement("div",_.panelWrapper,e.panelList.map((e=>r.createElement(C,{id:e,key:e}))))}function C(e){const{panels:t}=function(){const{panels:e}=(0,r.useContext)(m);return(0,r.useMemo)((()=>({panels:e})),[e])}(),n=t[e.id];return r.createElement("div",(0,a.Z)({},_.tabPanel,n),n.id," Content")}var L=function(){return r.createElement(v.Z,null,r.createElement(f,{data:k},r.createElement(w,null)))}},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(94697),s=n(23038),o=n(31026),i=n(6115);function l(e){const{href:t}=e,n=(0,r.g)({href:t}),l=(0,s.g)(n.iconOptions),c=t.includes("github")?o.Z:i.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},42798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(81648),r=(n(45721),n(70167)),s=n(5014),o=n(72032);n(27505);const i={tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},l=void 0,c={unversionedId:"reference/components/tabs",id:"version-0.4.1/reference/components/tabs",title:"Tabs",description:"Used to alternate between content views within the same context.",source:"@site/versioned_docs/version-0.4.1/reference/components/tabs.mdx",sourceDirName:"reference/components",slug:"/reference/components/tabs",permalink:"/docs/reference/components/tabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/tabs.mdx",tags:[{label:"vertical tabs",permalink:"/docs/tags/vertical-tabs"},{label:"horizontal tabs",permalink:"/docs/tags/horizontal-tabs"},{label:"view toggle",permalink:"/docs/tags/view-toggle"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},sidebar:"reference",previous:{title:"Table",permalink:"/docs/reference/components/table"},next:{title:"Tag",permalink:"/docs/reference/components/tag"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to alternate between content views within the same context."),(0,r.kt)(o.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tabs",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTabsProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps(options?: TabsOptions)\n")),(0,r.kt)("admonition",{title:"Use with the tabs hook",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This API controls only the styling. To add functionality to your Tabs components, combine it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/react-hooks/useTabs"},"useTabs hook family"),".")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"List"),(0,r.kt)("li",{parentName:"ol"},"Tab"),(0,r.kt)("li",{parentName:"ol"},"Panel Container"),(0,r.kt)("li",{parentName:"ol"},"Panel")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,r.kt)(s.Z,{mdxType:"BasicTabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Tabs family components."',showLineNumbers:!0,title:'"Tabs',family:!0,'components."':!0},"import { getTabsProps } from '@pluralsight/headless-styles'\nimport {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\nimport data from './tabs.data'\n\nconst tabStyles = getTabsProps()\n\nfunction Tabs() {\n  return (\n    <div {...tabStyles.wrapper}>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tabStyles.tab} {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div {...tabStyles.panelWrapper}>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return (\n    <div {...tabStyles.tabPanel} {...data}>\n      {data.id} Content\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <TabsProvider data={data}>\n      <Tabs />\n    </TabsProvider>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps()\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"There are no parameters required for this component."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use Tabs when you need to display different content relative to the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use Tabs to navigate to different areas of a page or app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs restricted to a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use present multiple rows of Tabs."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," restrict the use of Tabs to once per page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Tabs within the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs located on top of the panel content it is displaying."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," position the Tabs or realign them outside of the default top-left positioning."),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Tabs API combined with semantic HTML allow the Tabs to be fully accessible and screen-readable."))}b.isMDXComponent=!0},31825:function(e,t,n){n.d(t,{a:function(){return u},g:function(){return c}});var a=n(39112),r=n(58105),s=n(50114);const o="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,s.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="ps-grid";function c(e){const t=(0,r.g)(e);return{...(0,r.c)(t),...(0,a.c)(l,o)}}function u(e){const t=(0,r.a)(e);return{...(0,r.b)(t),...(0,a.c)("ps-grid-item",i)}}},58105:function(e,t,n){n.d(t,{a:function(){return s},b:function(){return i},c:function(){return o},g:function(){return r}});const a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function s(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function i(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}},93118:function(e,t,n){function a(e){return{size:(null==e?void 0:e.size)??"m"}}function r(e){return{sizeClass:`${e}Tab`}}function s(){return{tabList:{role:"tablist"},tab:{"aria-selected":!1,role:"tab",tabIndex:-1},tabPanel:{"aria-expanded":!0,"aria-hidden":!1,role:"tabpanel"},panelWrapper:{},wrapper:{}}}n.d(t,{a:function(){return r},c:function(){return s},g:function(){return a}})},18934:function(e,t,n){n.d(t,{g:function(){return l}});var a=n(39112),r=n(93118),s=n(50114);const o={tabWrapper:"tabsCSS-module_tabWrapper__8RDj6",tabList:"tabsCSS-module_tabList__cmFYs",tabBase:"tabsCSS-module_tabBase__9Opdb",mTab:"tabsCSS-module_mTab__oyUZE tabsCSS-module_tabBase__9Opdb",sTab:"tabsCSS-module_sTab__3UOSe tabsCSS-module_tabBase__9Opdb",tabPanel:"tabsCSS-module_tabPanel__mr7dW"};(0,s.s)('.tabsCSS-module_tabWrapper__8RDj6{width:100%}.tabsCSS-module_tabList__cmFYs{-webkit-overflow-scrolling:touch;-webkit-padding-after:1rem;background-image:linear-gradient(to top,transparent 0,transparent 1rem,var(--ps-border-weak) 1.0625rem,var(--ps-border-weak) 1.125rem,transparent 1.1875rem,transparent 100%);border-radius:6px;display:flex;overflow-y:auto;padding:5px;padding-block-end:1rem}.tabsCSS-module_tabBase__9Opdb{-webkit-margin-end:2rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;border-radius:6px;color:var(--ps-action-text-weak);cursor:pointer;font-family:inherit;font-size:1rem;font-variation-settings:"wght" 500;font-weight:500;height:4rem;margin-inline-end:2rem;padding:0;position:relative;white-space:nowrap}.tabsCSS-module_sTab__3UOSe{-webkit-margin-end:1.5rem;font-size:.875rem;height:3rem;margin-inline-end:1.5rem}.tabsCSS-module_tabBase__9Opdb:after{background-color:var(--ps-background-hover);border-radius:2px 2px 0 0;bottom:.125rem;content:"";display:block;height:0;left:0;margin-top:1.125rem;position:absolute;right:0;transition:height .15s ease-in-out,background-color .25s ease-in-out;width:100%}.tabsCSS-module_sTab__3UOSe:after{margin-top:.72rem}.tabsCSS-module_tabBase__9Opdb:hover:after{height:.25rem}.tabsCSS-module_tabBase__9Opdb[aria-selected=true]{color:var(--ps-action-text-inverse)}.tabsCSS-module_tabBase__9Opdb[aria-selected=true]:after{background-color:var(--ps-action-border);height:.25rem}.tabsCSS-module_tabPanel__mr7dW{border-radius:6px;width:100%}.tabsCSS-module_tabPanel__mr7dW[aria-hidden=true]{display:none}.tabsCSS-module_tabBase__9Opdb:focus,.tabsCSS-module_tabList__cmFYs:focus,.tabsCSS-module_tabPanel__mr7dW:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.tabsCSS-module_tabBase__9Opdb:focus:not(:focus-visible),.tabsCSS-module_tabList__cmFYs:focus:not(:focus-visible),.tabsCSS-module_tabPanel__mr7dW:focus:not(:focus-visible){box-shadow:none;outline:none}');const i="ps-tabs";function l(e){const t=(0,r.g)(e),n=(0,r.c)(),{sizeClass:s}=(0,r.a)(t.size);return{...n,wrapper:{...n.wrapper,...(0,a.c)(`${i}-wrapper`,o.tabWrapper)},tabList:{...n.tabList,...(0,a.c)(`${i}-list`,o.tabList)},tab:{...n.tab,...(0,a.c)(i,o[s])},tabPanel:{...n.tabPanel,...(0,a.c)(`${i}-tabPanel`,o.tabPanel)}}}}}]);