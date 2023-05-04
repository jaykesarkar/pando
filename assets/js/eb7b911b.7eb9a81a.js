"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6952],{72032:function(n,e,t){t.d(e,{Z:function(){return p}});var o=t(81648),a=t(45721),s=t(71397),i=t(61471),r="grid_cC7H";function l(n){return a.createElement("li",(0,s.a)({colSpan:2}),a.createElement(i.Z,n,n.children))}function p(n){const{figma:e,github:t}=n,{className:i,...p}=(0,s.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${i} ${r}`},p),t&&a.createElement(l,{href:t},"View on Github"),e&&a.createElement(l,{href:e},"Figma Design"))}},27505:function(n,e,t){t(45721)},61471:function(n,e,t){t.d(e,{Z:function(){return l}});var o=t(45721),a=t(64965),s=t(4094),i=t(31026),r=t(6115);function l(n){const{href:e}=n,t=(0,a.g)({href:e}),l=(0,s.g)(t.iconOptions),p=e.includes("github")?i.Z:r.Z;return o.createElement("a",t.link,o.createElement(p,l),n.children)}},82980:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var o=t(81648),a=(t(45721),t(70167)),s=t(72032);t(27505);const i={tags:["lazy loading","large lists"],title:"Pagination"},r=void 0,l={unversionedId:"reference/components/pagination",id:"reference/components/pagination",title:"Pagination",description:"Used to navigate between large lists of data.",source:"@site/docs/reference/components/pagination.mdx",sourceDirName:"reference/components",slug:"/reference/components/pagination",permalink:"/docs/next/reference/components/pagination",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/pagination.mdx",tags:[{label:"lazy loading",permalink:"/docs/next/tags/lazy-loading"},{label:"large lists",permalink:"/docs/next/tags/large-lists"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["lazy loading","large lists"],title:"Pagination"},sidebar:"reference",previous:{title:"Modal",permalink:"/docs/next/reference/components/modal"},next:{title:"Popover",permalink:"/docs/next/reference/components/popover"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Show More Example",id:"show-more-example",level:3},{value:"Newer/Older Example",id:"newerolder-example",level:3},{value:"Pagination Bar",id:"pagination-bar",level:3},{value:"Smaller Bar with Icon Buttons",id:"smaller-bar-with-icon-buttons",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Accessibility",id:"accessibility",level:2}],u={toc:c};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to navigate between large lists of data."),(0,a.kt)(s.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Pagination",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getPaginationProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PaginationOptions {\n  size?: 'm' | 'l'\n}\n\ngetPaginationProps(options?: PaginationOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { PaginationOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Text (optional)"),(0,a.kt)("li",{parentName:"ol"},"Select (optional)"),(0,a.kt)("li",{parentName:"ol"},"Button Group (optional)"),(0,a.kt)("li",{parentName:"ol"},"Button(s)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"show-more-example"},"Show More Example"),(0,a.kt)("p",null,"For user opt-in lazy-loading approach."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ShowMoreButton(props) {\n  const styles = getPaginationProps()\n  const buttonProps = getButtonProps(styles.buttonOptions)\n\n  return (\n    <button {...buttonProps.button} onClick={props.handleFetchMoreData}>\n      Show more\n    </button>\n  )\n}\n")),(0,a.kt)("h3",{id:"newerolder-example"},"Newer/Older Example"),(0,a.kt)("p",null,"For a modern pagination approach which displays the current data first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationButtons(props) {\n  const styles = getPaginationProps()\n  const buttonProps = getButtonProps(styles.buttonOptions)\n\n  return (\n    <div {...styles.buttonGroup}>\n      <button\n        {...buttonProps.button}\n        disabled={props.noNewData}\n        onClick={props.handleFetchNewerData}\n      >\n        Newer\n      </button>\n      <button\n        {...buttonProps.button}\n        disabled={props.noOldData}\n        onClick={props.handleFetchOlderData}\n      >\n        Older\n      </button>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"pagination-bar"},"Pagination Bar"),(0,a.kt)("p",null,"For the allowing the most options to the user, but only ideal for Desktop layouts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationBar() {\n  const [rowOption, setRowOption] = useState('')\n  const styles = getPaginationProps()\n  const selectStyles = getSelectProps({\n    ...styles.selectOptions,\n    id: 'row-count',\n    name: 'row_count',\n    value: rowOption,\n  })\n  const iconProps = getIconProps(selectStyles.iconOptions)\n  const buttonProps = getButtonProps(styles.buttonOptions)\n\n  function handleSelectChange(e) {\n    setRowOption(e.target.value)\n  }\n\n  return (\n    <div {...styles.container}>\n      <span {...styles.text}>\n        <strong>1-25</strong> of 1,2345\n      </span>\n      <div {...selectStyles.fieldWrapper}>\n        <div {...selectStyles.selectWrapper}>\n          <select\n            {...selectStyles.select}\n            onChange={handleSelectChange}\n            style={{ marginTop: 'initial' }}\n          >\n            <option value=\"5\">5 Rows</option>\n            <option value=\"10\">10 Rows</option>\n            <option value=\"25\">25 Rows</option>\n          </select>\n          <span {...selectStyles.iconWrapper}>\n            <ChevronDownIcon {...iconProps} />\n          </span>\n        </div>\n      </div>\n      <div {...styles.buttonGroup}>\n        <button {...buttonProps.button} disabled>\n          Newer\n        </button>\n        <button {...buttonProps.button}>Older</button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h4",{id:"smaller-bar-with-icon-buttons"},"Smaller Bar with Icon Buttons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationBar() {\n  const [rowOption, setRowOption] = useState('')\n  const styles = getPaginationProps({ size: 'm' })\n  const selectStyles = getSelectProps({\n    ...styles.selectOptions,\n    id: 'row-count',\n    name: 'row_count',\n    value: rowOption,\n  })\n  const iconProps = getIconProps(selectStyles.iconOptions)\n  const buttonProps = getIconButtonProps(styles.iconButtonOptions)\n  const buttonIconProps = getIconProps(buttonProps.iconOptions)\n\n  function handleSelectChange(e) {\n    setRowOption(e.target.value)\n  }\n\n  return (\n    <div {...styles.container}>\n      <span {...styles.text}>\n        <strong>1-25</strong> of 1,2345\n      </span>\n      <div {...selectStyles.fieldWrapper}>\n        <div {...selectStyles.selectWrapper}>\n          <select\n            {...selectStyles.select}\n            onChange={handleSelectChange}\n            style={{ marginTop: 'initial' }}\n          >\n            <option value=\"5\">5 Rows</option>\n            <option value=\"10\">10 Rows</option>\n            <option value=\"25\">25 Rows</option>\n          </select>\n          <span {...selectStyles.iconWrapper}>\n            <ChevronDownIcon {...iconProps} />\n          </span>\n        </div>\n      </div>\n      <div {...styles.buttonGroup}>\n        <button {...buttonProps.button} disabled>\n          <CaretLeftIcon {...buttonIconProps} />\n        </button>\n        <button {...buttonProps.button}>\n          <CaretRightIcon {...buttonIconProps} />\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getPaginationProps(options?: PaginationOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A size property accepting ",(0,a.kt)("inlineCode",{parentName:"li"},"'m' | 'l'")," to determine sizes for the Pagination elements.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Also returns ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonOptions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"selectOptions"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"iconButtonOptions")," to be passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"getButtonProps"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getSelectProps"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"getIconButtonProps"),", respectively."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Show More Button if you have a simple list that can be lazy-loaded."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Pagination Bar if you have small amounts of data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the newer/older Buttons if you have a multi-page list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the newer/older Buttons if you have a small list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Pagination Bar for a desktop layout."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Pagination Bar for a mobile layout."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Pagination, Select and Button APIs combined with semantic HTML allow the Pagination to be fully accessible and screen-readable."))}d.isMDXComponent=!0},71397:function(n,e,t){t.d(e,{a:function(){return c},g:function(){return p}});var o=t(1801),a=t(23909),s=t(31519);const i="gridCSS-module_gridContainer__sQmao",r="gridCSS-module_gridItem__nVMyV";(0,s.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function p(n){const e=(0,a.g)(n);return{...(0,a.c)(e),...(0,o.c)(l,i,...e.classNames)}}function c(n){const e=(0,a.a)(n);return{...(0,a.b)(e),...(0,o.c)(`${l}-item`,r,...e.classNames)}}},23909:function(n,e,t){t.d(e,{a:function(){return s},b:function(){return r},c:function(){return i},g:function(){return a}});const o={6:.375,8:.5,12:.75,16:1,32:2};function a(n){return{classNames:(null==n?void 0:n.classNames)??[],cols:(null==n?void 0:n.cols)??12,gap:(null==n?void 0:n.gap)??16,rows:(null==n?void 0:n.rows)??1}}function s(n){return{classNames:(null==n?void 0:n.classNames)??[],colSpan:(null==n?void 0:n.colSpan)??12,rowSpan:(null==n?void 0:n.rowSpan)??null}}function i(n){return{style:{gridTemplateRows:`repeat(${n.rows}, 1fr)`,gridTemplateColumns:`repeat(${n.cols}, 1fr)`,gap:`${o[n.gap]}rem`}}}function r(n){const{colSpan:e,rowSpan:t}=n;return t?{style:{gridArea:`span ${t} / span ${e} / span ${t} / span ${e}`}}:{style:{gridColumn:`span ${e} / span ${e}`}}}}}]);