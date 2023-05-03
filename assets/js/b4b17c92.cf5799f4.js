"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1016],{72032:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(81648),a=n(45721),i=n(71397),o=n(61471),s="grid_cC7H";function l(e){return a.createElement("li",(0,i.a)({colSpan:2}),a.createElement(o.Z,e,e.children))}function d(e){const{figma:t,github:n}=e,{className:o,...d}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,r.Z)({className:`${o} ${s}`},d),n&&a.createElement(l,{href:n},"View on Github"),t&&a.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(45721),a=n(64965),i=n(4094),o=n(31026),s=n(6115);function l(e){const{href:t}=e,n=(0,a.g)({href:t}),l=(0,i.g)(n.iconOptions),d=t.includes("github")?o.Z:s.Z;return r.createElement("a",n.link,r.createElement(d,l),e.children)}},54505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(81648),a=(n(45721),n(70167)),i=n(72032);n(27505);const o={tags:["app frame","aside","equal col","row","layout"],title:"Grid"},s=void 0,l={unversionedId:"reference/components/grid",id:"version-0.4.1/reference/components/grid",title:"Grid",description:"Used to display content in a grid layout.",source:"@site/versioned_docs/version-0.4.1/reference/components/grid.mdx",sourceDirName:"reference/components",slug:"/reference/components/grid",permalink:"/docs/reference/components/grid",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/grid.mdx",tags:[{label:"app frame",permalink:"/docs/tags/app-frame"},{label:"aside",permalink:"/docs/tags/aside"},{label:"equal col",permalink:"/docs/tags/equal-col"},{label:"row",permalink:"/docs/tags/row"},{label:"layout",permalink:"/docs/tags/layout"}],version:"0.4.1",lastUpdatedBy:"Patsy",frontMatter:{tags:["app frame","aside","equal col","row","layout"],title:"Grid"},sidebar:"reference",previous:{title:"Form Label",permalink:"/docs/reference/components/form-label"},next:{title:"Icon Button",permalink:"/docs/reference/components/icon-button"}},d={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic 2 Column Layout",id:"basic-2-column-layout",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>getGridProps</code>",id:"getgridprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>getGridItemProps</code>",id:"getgriditemprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Accessbility",id:"accessbility",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to display content in a grid layout."),(0,a.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Grid",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GridOptions {\n  cols?: number\n  gap?: 6 | 8 | 12 | 16 | 32\n  rows?: number\n}\n\ngetGridProps(options?: GridOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GridItemOptions {\n  colSpan?: number\n  rowSpan?: number\n}\n\ngetGridItemProps(options?: GridItemOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type {\n  GridOptions,\n  GridItemOptions,\n} from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Grid"),(0,a.kt)("li",{parentName:"ol"},"Grid Item")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-2-column-layout"},"Basic 2 Column Layout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function TwoColLayout() {\n  function getGridItemStyles(options) {\n    const styles = getGridItemProps(options)\n    return {\n      style: {\n        ...styles.style,\n        backgroundColor: 'var(--ps-surface-strong)',\n        borderRadius: '6px',\n        height: '11rem',\n        marginBottom: '1rem',\n        padding: '1rem',\n      },\n    }\n  }\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 32 })}>\n      <div {...getGridItemStyles({ colSpan: 9 })}>main section</div>\n      <div {...getGridItemStyles({ colSpan: 3 })}>sidebar</div>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"getgridprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"getGridProps")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getGridProps(options?: GridOptions)\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A Number value for properties cols and rows which determine the grid layout axes. A Number value for the property gap of ",(0,a.kt)("inlineCode",{parentName:"li"},"6 | 8 | 12 | 16 | 32")," which determines the gap size for the grid.")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the label element. Additionally, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," property that adds dynamic styling based on the options provided."),(0,a.kt)("h3",{id:"getgriditemprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"getGridItemProps")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getGridItemProps(options?: GridItemOptions)\n")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A Number value for properties colSpan and rowSpan which determine the styling for the columns and rows span used for the grid item.")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the Grid element. Additionally, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," property that adds dynamic styling based on the options provided."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"There are no behavior patterns required for the Grid."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Grid & GridItem APIs combined with semantic HTML allow the Grid & GridItems to be fully accessible and screen-readable."))}u.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return d}});var r=n(1801),a=n(23909),i=n(31519);const o="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,i.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function d(e){const t=(0,a.g)(e);return{...(0,a.c)(t),...(0,r.c)(l,o,...t.classNames)}}function p(e){const t=(0,a.a)(e);return{...(0,a.b)(t),...(0,r.c)(`${l}-item`,s,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return i},b:function(){return s},c:function(){return o},g:function(){return a}});const r={6:.375,8:.5,12:.75,16:1,32:2};function a(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function i(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${r[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);