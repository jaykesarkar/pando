"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3573],{72032:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(81648),s=n(45721),a=n(31825),i=n(61471),o="grid_cC7H";function l(e){return s.createElement("li",(0,a.a)({colSpan:2}),s.createElement(i.Z,e,e.children))}function p(e){const{figma:r,github:n}=e,{className:i,...p}=(0,a.g)({cols:12,gap:8});return s.createElement("ul",(0,t.Z)({className:`${i} ${o}`},p),n&&s.createElement(l,{href:n},"View on Github"),r&&s.createElement(l,{href:r},"Figma Design"))}},27505:function(e,r,n){n(45721)},61471:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(45721),s=n(94697),a=n(23038),i=n(31026),o=n(6115);function l(e){const{href:r}=e,n=(0,s.g)({href:r}),l=(0,a.g)(n.iconOptions),p=r.includes("github")?i.Z:o.Z;return t.createElement("a",n.link,t.createElement(p,l),e.children)}},77557:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=n(81648),s=(n(45721),n(70167)),a=n(72032);n(27505);const i={tags:["async loading","inline loading"],title:"Circular Progress"},o=void 0,l={unversionedId:"reference/components/circular-progress",id:"version-0.4.1/reference/components/circular-progress",title:"Circular Progress",description:"Used to display the progress status for a task that takes a long time or",source:"@site/versioned_docs/version-0.4.1/reference/components/circular-progress.mdx",sourceDirName:"reference/components",slug:"/reference/components/circular-progress",permalink:"/docs/reference/components/circular-progress",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/circular-progress.mdx",tags:[{label:"async loading",permalink:"/docs/tags/async-loading"},{label:"inline loading",permalink:"/docs/tags/inline-loading"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["async loading","inline loading"],title:"Circular Progress"},sidebar:"reference",previous:{title:"Checkbox",permalink:"/docs/reference/components/checkbox"},next:{title:"Confirm Dialog",permalink:"/docs/reference/components/confirm-dialog"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Circular Progress",id:"basic-circular-progress",level:3},{value:"Indeterminate (loading) State",id:"indeterminate-loading-state",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Loading",id:"loading",level:3},{value:"Text",id:"text",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:c};function g(e){let{components:r,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to display the progress status for a task that takes a long time or consists of several steps within a page."),(0,s.kt)("admonition",{title:"Not for page loading",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Circular Progress ",(0,s.kt)("strong",{parentName:"p"},"should not be used for initial page loading"),". Check out the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/learn-pando/design-patterns/page-loading"},"Page Loading")," design pattern for more information.")),(0,s.kt)(a.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/CircularProgress",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCircularProgressProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressOptions {\n  ariaLabel: string\n  kind?: 'determinate' | 'indeterminate'\n  max?: number\n  min?: number\n  now?: number\n  size?: 'xs' | 'm'\n}\n\ngetCircularProgressProps(options?: CircularProgressOptions)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"SVG Box"),(0,s.kt)("li",{parentName:"ol"},"Base Circle"),(0,s.kt)("li",{parentName:"ol"},"Now Cirlce"),(0,s.kt)("li",{parentName:"ol"},"Label")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-circular-progress"},"Basic Circular Progress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CircularProgress() {\n  const progressProps = getCircularProgressProps({\n    ariaLabel: 'Example progress',\n    now: 50,\n  })\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  )\n}\n")),(0,s.kt)("h3",{id:"indeterminate-loading-state"},"Indeterminate (loading) State"),(0,s.kt)("p",null,"This state should be used when the user needs updated content ",(0,s.kt)("strong",{parentName:"p"},"within a page")," that has already been loaded."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CircularProgress() {\n  const progressProps = getCircularProgressProps({\n    ariaLabel: 'Loading new courses.',\n    kind: 'indeterminate',\n  })\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  )\n}\n")),(0,s.kt)("h3",{id:"sizes"},"Sizes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CircularProgress() {\n  const xsProgressProps = getCircularProgressProps({\n    ariaLabel: 'Xtra small circular progress',\n    now: 25,\n    size: 'xs',\n  })\n  const mProgressProps = getCircularProgressProps({\n    ariaLabel: 'Xtra small circular progress',\n    now: 50,\n    size: 'm',\n  })\n\n  return (\n    <div\n      data-site-override=\"alignGridCenter\"\n      {...getGridProps({ colSpan: 12, gap: 16 })}\n    >\n      <div {...getGridItemProps({ colSpan: 1 })}>\n        <div {...xsProgressProps.containerProps}>\n          <svg {...xsProgressProps.svgBoxProps}>\n            <circle {...xsProgressProps.baseCircleProps} />\n            <circle {...xsProgressProps.nowCircleProps} />\n          </svg>\n        </div>\n      </div>\n\n      <div {...getGridItemProps({ colSpan: 2 })}>\n        <div {...mProgressProps.containerProps}>\n          <svg {...mProgressProps.svgBoxProps}>\n            <circle {...mProgressProps.baseCircleProps} />\n            <circle {...mProgressProps.nowCircleProps} />\n          </svg>\n        </div>\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Circular Progress size rules."',title:'"Circular',Progress:!0,size:!0,'rules."':!0},"{\n  xs: 'Should only be used when the default size (M) is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"getCircularProps(options?: CircularProgressOptions)\n")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options"),": An ariaLabel property that accepts a String value to add accessbility support to the elements. An optional kind property that accepts a String value of ",(0,s.kt)("inlineCode",{parentName:"li"},"'determinate' | 'indeterminate'")," to determine the animation of the SVG progress elements. Optional min, max, or now properties that accept a Number value to set the parameters for styling the progress amount. An optional size property that accepts a String value of ",(0,s.kt)("inlineCode",{parentName:"li"},"'xs' | 'm'")," to determine the size styling of the Circular Progress.")),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("p",null,"An Object matching the ",(0,s.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("h3",{id:"loading"},"Loading"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use Circular Progress to display an update of information to a ",(0,s.kt)("strong",{parentName:"p"},"specific part of a previously loaded page"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use the Circular Progress to show page load progress. Instead, use a Skeleton."),(0,s.kt)("h3",{id:"text"},"Text"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use text describing the progress in close proximity."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use text or other elements within the Circular Progress."),(0,s.kt)("h3",{id:"sizing"},"Sizing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Circular Progress."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,s.kt)("em",{parentName:"p"},"unless")," it is a ",(0,s.kt)("strong",{parentName:"p"},"last resort"),"."),(0,s.kt)("h2",{id:"accessbility"},"Accessbility"),(0,s.kt)("p",null,"The Pando Circular Progress combined with semantic HTML allow the Circular Progress to be fully accessible and screen-readable."))}g.isMDXComponent=!0},31825:function(e,r,n){n.d(r,{a:function(){return c},g:function(){return p}});var t=n(39112),s=n(58105),a=n(50114);const i="gridCSS-module_gridContainer__sQmao",o="gridCSS-module_gridItem__nVMyV";(0,a.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="ps-grid";function p(e){const r=(0,s.g)(e);return{...(0,s.c)(r),...(0,t.c)(l,i)}}function c(e){const r=(0,s.a)(e);return{...(0,s.b)(r),...(0,t.c)("ps-grid-item",o)}}},58105:function(e,r,n){n.d(r,{a:function(){return a},b:function(){return o},c:function(){return i},g:function(){return s}});const t={6:.375,8:.5,12:.75,16:1,32:2};function s(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function a(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function i(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${t[e.gap]}rem`}}}function o(e){const{colSpan:r,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${r} / span ${n} / span ${r}`}}:{style:{gridColumn:`span ${r} / span ${r}`}}}}}]);