"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6094],{72032:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),i=n(45721),s=n(71397),r=n(61471),o="grid_cC7H";function l(e){return i.createElement("li",(0,s.a)({colSpan:2}),i.createElement(r.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:r,...c}=(0,s.g)({cols:12,gap:8});return i.createElement("ul",(0,a.Z)({className:`${r} ${o}`},c),n&&i.createElement(l,{href:n},"View on Github"),t&&i.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),i=n(64965),s=n(4094),r=n(31026),o=n(6115);function l(e){const{href:t}=e,n=(0,i.g)({href:t}),l=(0,s.g)(n.iconOptions),c=t.includes("github")?r.Z:o.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},79843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(81648),i=(n(45721),n(70167)),s=n(72032);n(27505);const r={tags:["Meta data","Static Tag"],title:"Badge"},o=void 0,l={unversionedId:"reference/components/badge",id:"version-0.4.1/reference/components/badge",title:"Badge",description:"Used to highlight a category in a non-interactive way for quick recognition.",source:"@site/versioned_docs/version-0.4.1/reference/components/badge.mdx",sourceDirName:"reference/components",slug:"/reference/components/badge",permalink:"/docs/reference/components/badge",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/badge.mdx",tags:[{label:"Meta data",permalink:"/docs/tags/meta-data"},{label:"Static Tag",permalink:"/docs/tags/static-tag"}],version:"0.4.1",lastUpdatedBy:"Patsy",frontMatter:{tags:["Meta data","Static Tag"],title:"Badge"},sidebar:"reference",previous:{title:"Avatar",permalink:"/docs/reference/components/avatar"},next:{title:"Button",permalink:"/docs/reference/components/button"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Badges",id:"basic-badges",level:3},{value:"Badge with icon",id:"badge-with-icon",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Types",id:"types",level:3},{value:"States",id:"states",level:3},{value:"Static/Action Scenarios",id:"staticaction-scenarios",level:3},{value:"Accessbility",id:"accessbility",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to highlight a category in a non-interactive way for quick recognition."),(0,i.kt)(s.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Badge",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getBadgeProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeOptions {\n  sentiment?: 'default'\n  usage?: 'filled' | 'outline'\n  size?: 'xs' | 's'\n}\n\ngetBadgeProps(options?: BadgeOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { BadgeOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Icon (optional)"),(0,i.kt)("li",{parentName:"ol"},"Label")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-badges"},"Basic Badges"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicBadges() {\n  const gridItem = getGridItemProps({ colSpan: 1 })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...gridItem}>\n        <span {...getBadgeProps().badge}>default</span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ usage: 'filled' }).badge}>filled</span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ usage: 'outline' }).badge}>outline</span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"badge-with-icon"},"Badge with icon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BadgeWithIcon() {\n  const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...getGridItemProps({ colSpan: 2 })}>\n        <span {...badge}>\n          <span {...iconWrapper}>\n            <PlaceholderIcon {...getIconProps(iconOptions)} />\n          </span>\n          Badge with Icon\n        </span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BadgeSize() {\n  const gridItem = getGridItemProps({ colSpan: 1 })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...gridItem}>\n        <span {...getBadgeProps({ size: 'xs' }).badge}>xs badge</span>\n      </div>\n      <div {...gridItem}>\n        <span {...getBadgeProps().badge}>s (default)</span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Badge size rules."',title:'"Badge',size:!0,'rules."':!0},"{\n  xs: 'For smaller/tighter experiences where the default size (s) cannot be supported.',\n  s: 'Should be used in most, if not all cases.'\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getBadgeProps(options?: BadgeOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": A String value of a theme sentiment ",(0,i.kt)("inlineCode",{parentName:"li"},"'default'")," which determines the styling color theme produced. An optional usage property that accepts a String value of ",(0,i.kt)("inlineCode",{parentName:"li"},"'filled' | 'outline'")," to determine the styling. An optional size property that accepts a String value of either ",(0,i.kt)("inlineCode",{parentName:"li"},"'xs' | 's'")," to display the size styles.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and an ",(0,i.kt)("inlineCode",{parentName:"p"},"iconWrapper")," property to spread on the wrapper element containing the Icon."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the filled Badge as the default use case for all badges."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," change the color of the Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do"),' use the outline Badge as the "low priority" use case for a badge.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use the outline Badge as the default use case."),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,i.kt)("em",{parentName:"p"},"unless")," it is a ",(0,i.kt)("strong",{parentName:"p"},"last resort"),"."),(0,i.kt)("h3",{id:"staticaction-scenarios"},"Static/Action Scenarios"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Badge as a non-interactive element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," link to new pages, or use any other interactive actions for a Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the sentiment colors or a custom color option."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use any color in the action sentiment theme category."),(0,i.kt)("h2",{id:"accessbility"},"Accessbility"),(0,i.kt)("p",null,"The Pando Badge, and Icon APIs combined with semantic HTML allow the Badge to be fully accessible and screen-readable."))}u.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return c}});var a=n(1801),i=n(23909),s=n(31519);const r="gridCSS-module_gridContainer__sQmao",o="gridCSS-module_gridItem__nVMyV";(0,s.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function c(e){const t=(0,i.g)(e);return{...(0,i.c)(t),...(0,a.c)(l,r,...t.classNames)}}function p(e){const t=(0,i.a)(e);return{...(0,i.b)(t),...(0,a.c)(`${l}-item`,o,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return s},b:function(){return o},c:function(){return r},g:function(){return i}});const a={6:.375,8:.5,12:.75,16:1,32:2};function i(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function s(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function r(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function o(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);