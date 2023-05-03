"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6021],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(81648),o=(n(45721),n(70167));const a={tags:["MUI","Chakra","Styled-components"],title:"Integrations"},s=void 0,i={unversionedId:"learn/learn-pando/third-party",id:"learn/learn-pando/third-party",title:"Integrations",description:"If you are a team that loves using component libraries that already exist, but want to reap the benefits of the Pando styling, we provide mutliple ways to create or extend your favorite component library's theme.",source:"@site/docs/learn/learn-pando/third-party.mdx",sourceDirName:"learn/learn-pando",slug:"/learn/learn-pando/third-party",permalink:"/docs/next/learn/learn-pando/third-party",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/third-party.mdx",tags:[{label:"MUI",permalink:"/docs/next/tags/mui"},{label:"Chakra",permalink:"/docs/next/tags/chakra"},{label:"Styled-components",permalink:"/docs/next/tags/styled-components"}],version:"current",lastUpdatedBy:"Patsy",frontMatter:{tags:["MUI","Chakra","Styled-components"],title:"Integrations"},sidebar:"learn",previous:{title:"Using with Next 13",permalink:"/docs/next/learn/learn-pando/next13"},next:{title:"Accessibility",permalink:"/docs/next/learn/about-pando/a11y"}},l={},p=[{value:"CSS Style Objects",id:"css-style-objects",level:2},{value:"CSS Template Literals",id:"css-template-literals",level:2},{value:"JS Style Objects",id:"js-style-objects",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are a team that loves using component libraries that already exist, but want to reap the benefits of the Pando styling, we provide mutliple ways to create or extend your favorite component library's theme."),(0,o.kt)("admonition",{title:"Pitfall",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Not all UI libraries are equal. Please be responsible in choosing a UI library. Try to find a tool like Pando that is accessbile to all users.")),(0,o.kt)("h2",{id:"css-style-objects"},"CSS Style Objects"),(0,o.kt)("p",null,"Out of the box, Headless-styles exports all of our CSS styles as Javascript Objects to make it as easy as possible to extend 3rd party component libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/customization/theming/"},"MUI"),", ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Chakra"),", or whatever the next big library is (ask again next year)."),(0,o.kt)("p",null,"To use our Style Objects, use the naming pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"<component>Styles")," to import from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/styles")," sub-path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using Style Objects to extend the Chakra theme" showLineNumbers {1,6,8}',title:'"Using',Style:!0,Objects:!0,to:!0,extend:!0,the:!0,Chakra:!0,'theme"':!0,showLineNumbers:!0,"{1,6,8}":!0},"import { buttonStyles } from '@pluralsight/headless-styles/styles'\nimport { extendTheme } from '@chakra-ui/react'\n\nconst theme = {\n  button: {\n    baseStyles: buttonStyles.btnBase,\n    variants: {\n      text: buttonStyles.textButton,\n      ...\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Most of the common UI libraries support this pattern, so you should be able to use this example whether you use MUI or any other UI component library."),(0,o.kt)("p",null,"Additionally, our Style Objects use the nested selector pattern that is accepted by most libraries. You will need to validate which rules the integration you plan on using implements in order to ensure that you will not need to update the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of what a Style Object may look like"',title:'"Example',of:!0,what:!0,a:!0,Style:!0,Object:!0,may:!0,look:!0,'like"':!0},"actionButton: {\n  backgroundColor: 'var(--ps-action-background)',\n  color: 'var(--ps-action-text)',\n  '&:hover:not(:disabled)': {\n    backgroundColor: 'var(--ps-action-background-hover)',\n  },\n  '&:active:not(:disabled)': {\n    backgroundColor: 'var(--ps-action-background-active)',\n  },\n},\n")),(0,o.kt)("h2",{id:"css-template-literals"},"CSS Template Literals"),(0,o.kt)("p",null,"If you are using a library like ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")," or ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion")," to manage component composition, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cssProps")," property shipped in our JS APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using cssProps to style a button with SC" showLineNumbers {1,5}',title:'"Using',cssProps:!0,to:!0,style:!0,a:!0,button:!0,with:!0,'SC"':!0,showLineNumbers:!0,"{1,5}":!0},"import { getJSButtonProps } from '@pluralsight/headless-styles'\nimport styled from 'styled-components'\n\nconst ActionButton = styled.button`\n  ${getJSButtonProps().button.cssProps}\n`\n")),(0,o.kt)("h2",{id:"js-style-objects"},"JS Style Objects"),(0,o.kt)("p",null,"If you would like to have access to all styling and accessbility for compatibility with Server Components, you can just the JS API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'showLineNumbers title="Return value for any JS API"',showLineNumbers:!0,title:'"Return',value:!0,for:!0,any:!0,JS:!0,'API"':!0},"interface JSAPIReturnProps {\n  a11yProps?: Record<string, string>\n  cssProps: TemplateLiteralString\n  keyframes?: CSS.Properties\n  styles: Record<CSS.properties, string>\n}\n")),(0,o.kt)("p",null,"Here is an example where we are using the TextLink JS API with a Next 13 Server Component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="A TextLink Server Component."',showLineNumbers:!0,title:'"A',TextLink:!0,Server:!0,'Component."':!0},"import {\n  getJSTextLinkProps,\n  getJSIconprops,\n} from '@pluralsight/headless-styles'\nimport type { TextLinkOptions } from '@pluralsight/headless-styles/types'\nimport { ExternalLinkIcon } from '@pluralsight/icons'\nimport Link from 'next/link'\nimport { type PropsWithChildren } from 'react'\n\nexport default function TextLink(props: PropsWithChildren<TextLinkOptions>) {\n  const { href } = props\n  const linkProps = getJSTextLinkProps({\n    href,\n  })\n  const isExternalLink = linkProps?.iconOptions\n  const iconProps = isExternalLink ? getJSIconProps(linkProps.iconOptions) : {}\n\n  return (\n    <Link style={linkProps.styles} {...linkProps.link}>\n      {props.children}\n      {isExternalLink && (\n        <ExternalLinkIcon {...iconProps.a11yProps} style={iconProps.styles} />\n      )}\n    </Link>\n  )\n}\n")))}u.isMDXComponent=!0}}]);