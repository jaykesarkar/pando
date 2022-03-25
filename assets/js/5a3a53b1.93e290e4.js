"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6345],{3369:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return k}});var s=a(3289);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,s,r=function(e,n){if(null==e)return{};var a,s,r={},t=Object.keys(e);for(s=0;s<t.length;s++)a=t[s],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)a=t[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=s.createContext({}),i=function(e){var n=s.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=i(e.components);return s.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=i(a),k=r,g=p["".concat(u,".").concat(k)]||p[k]||d[k]||t;return a?s.createElement(g,o(o({ref:n},l),{},{components:a})):s.createElement(g,o({ref:n},l))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,o=new Array(t);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<t;i++)o[i]=a[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6935:function(e,n,a){a.d(n,{Z:function(){return r}});var s=a(3289);function r(e){var n=e.children,a=e.hidden,r=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},4433:function(e,n,a){a.d(n,{Z:function(){return l}});var s=a(5161),r=a(3289),t=a(5941),o=a(8629),c=a(2238),u="tabItem_BUXP";function i(e){var n,a,t,i=e.lazy,l=e.block,d=e.defaultValue,p=e.values,k=e.groupId,g=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=p?p:m.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(T,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(n=null!=d?d:null==(a=m.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=m[0])?void 0:t.props.value;if(null!==f&&!T.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+T.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),b=h.tabGroupChoices,B=h.setTabGroupChoices,x=(0,r.useState)(f),w=x[0],N=x[1],y=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var W=b[k];null!=W&&W!==w&&T.some((function(e){return e.value===W}))&&N(W)}var j=function(e){var n=e.currentTarget,a=y.indexOf(n),s=T[a].value;s!==w&&(S(n),N(s),null!=k&&B(k,s))},_=function(e){var n,a=null;switch(e.key){case"ArrowRight":var s=y.indexOf(e.currentTarget)+1;a=y[s]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.currentTarget)-1;a=y[r]||y[y.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},g)},T.map((function(e){var n=e.value,a=e.label,t=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return y.push(e)},onKeyDown:_,onFocus:j,onClick:j},t,{className:(0,c.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":w===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function l(e){var n=(0,t.Z)();return r.createElement(i,(0,s.Z)({key:String(n)},e))}},9666:function(e,n,a){a.r(n),a.d(n,{assets:function(){return h},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return T},metadata:function(){return f},toc:function(){return b}});var s=a(5161),r=a(9675),t=a(3289),o=a(3369),c=a(4433),u=a(6935),i={labelcontainer:"labelcontainer_EC1G",label:"label_LGml",list:"list_zgT8",item:"item_kpsV",swab:"swab_SijF",syntax:"syntax_C4sE",wrapper:"wrapper_QWnR",psBackground:"psBackground_jqT1",psBackgroundActive:"psBackgroundActive_nRxy",psBackgroundHover:"psBackgroundHover_fEfC",psBackgroundWeak:"psBackgroundWeak_riL5",psBackgroundWeakActive:"psBackgroundWeakActive_fu3X",psBackgroundWeakHover:"psBackgroundWeakHover_GJcR",psBorder:"psBorder_XoPM",psText:"psText_tJHT",psTextWeak:"psTextWeak_NPe5",psTextMedium:"psTextMedium_wDAR",psNeutralBackground:"psNeutralBackground_WIBy",psNeutralBackgroundActive:"psNeutralBackgroundActive_LR8x",psNeutralBackgroundHover:"psNeutralBackgroundHover_ogmd",psNeutralBorder:"psNeutralBorder_KPJ4",psNeutralBorderWeak:"psNeutralBorderWeak_Vgtq",psNeutralBorderStrong:"psNeutralBorderStrong_udPK",psNeutralText:"psNeutralText_YiJT",psNeutralTextWeak:"psNeutralTextWeak_T_kg",psNeutralTextMedium:"psNeutralTextMedium_kaIG",psNeutralSurface:"psNeutralSurface_KToJ",psNeutralSurfaceWeak:"psNeutralSurfaceWeak_pgqq",psNeutralSurfaceMedium:"psNeutralSurfaceMedium_vFye",psNeutralSurfaceStrong:"psNeutralSurfaceStrong_srJM",psInfoBackground:"psInfoBackground_Rlda",psInfoBackgroundActive:"psInfoBackgroundActive_YTcP",psInfoBackgroundHover:"psInfoBackgroundHover_oDzR",psInfoBackgroundWeak:"psInfoBackgroundWeak_ew5P",psInfoBorder:"psInfoBorder_KXZE",psInfoText:"psInfoText_fSqo",psInfoTextWeak:"psInfoTextWeak_bPkY",psInfoTextMedium:"psInfoTextMedium_LvZc",psSuccessBackground:"psSuccessBackground_PeC_",psSuccessBackgroundActive:"psSuccessBackgroundActive_SG9K",psSuccessBackgroundHover:"psSuccessBackgroundHover_mWcn",psSuccessBackgroundWeak:"psSuccessBackgroundWeak_YxJY",psSuccessBorder:"psSuccessBorder__YxQ",psSuccessText:"psSuccessText_Zufw",psSuccessTextWeak:"psSuccessTextWeak_aNyO",psSuccessTextMedium:"psSuccessTextMedium_CD2J",psWarningBackground:"psWarningBackground_HYV8",psWarningBackgroundActive:"psWarningBackgroundActive_dSaH",psWarningBackgroundHover:"psWarningBackgroundHover_hosA",psWarningBackgroundWeak:"psWarningBackgroundWeak_zIE4",psWarningBorder:"psWarningBorder_mhuU",psWarningText:"psWarningText_b_ay",psWarningTextWeak:"psWarningTextWeak_gXcP",psWarningTextMedium:"psWarningTextMedium_hkph",psDangerBackground:"psDangerBackground_AhjQ",psDangerBackgroundActive:"psDangerBackgroundActive_Tf3Z",psDangerBackgroundHover:"psDangerBackgroundHover_cgKI",psDangerBackgroundWeak:"psDangerBackgroundWeak_FV7Z",psDangerBorder:"psDangerBorder_XXOS",psDangerText:"psDangerText_BiW_",psDangerTextWeak:"psDangerTextWeak_yyXl",psDangerTextMedium:"psDangerTextMedium_Jc8h"},l=JSON.parse('{"categories":["default","neutral","info","success","warning","danger"],"default":{"background":{"id":"psBackground","label":"psBackground","cssToken":"--ps-background","sassToken":"$ps-background","jsToken":"psBackground"},"backgroundActive":{"id":"psBackgroundActive","label":"psBackgroundActive","cssToken":"--ps-background-active","sassToken":"$ps-background-active","jsToken":"psBackgroundActive"},"backgroundHover":{"id":"psBackgroundHover","label":"psBackgroundHover","cssToken":"--ps-background-hover","sassToken":"$ps-background-hover","jsToken":"psBackgroundHover"},"backgroundWeak":{"id":"psBackgroundWeak","label":"psBackgroundWeak","cssToken":"--ps-background-weak","sassToken":"$ps-background-weak","jsToken":"psBackgroundWeak"},"backgroundWeakActive":{"id":"psBackgroundWeakActive","label":"psBackgroundWeakActive","cssToken":"--ps-background-weak-active","sassToken":"$ps-background-weak-active","jsToken":"psBackgroundWeakActive"},"backgroundWeakHover":{"id":"psBackgroundWeakHover","label":"psBackgroundWeakHover","cssToken":"--ps-background-weak-hover","sassToken":"$ps-background-weak-hover","jsToken":"psBackgroundWeakHover"},"psBorder":{"id":"psBorder","label":"psBorder","cssToken":"--ps-border","sassToken":"$ps-border","jsToken":"psBorder"},"psText":{"id":"psText","label":"psText","cssToken":"--ps-text","sassToken":"$ps-text","jsToken":"psText"},"psTextWeak":{"id":"psTextWeak","label":"psTextWeak","cssToken":"--ps-text-weak","sassToken":"$ps-text-weak","jsToken":"psTextWeak"},"psTextMedium":{"id":"psTextMedium","label":"psTextMedium","cssToken":"--ps-text-medium","sassToken":"$ps-text-medium","jsToken":"psTextMedium"}},"neutral":{"neutralBackground":{"id":"psNeutralBackground","label":"psNeutralBackground","cssToken":"--ps-neutral-background","sassToken":"$ps-neutral-background","jsToken":"psNeutralBackground"},"neutralBackgroundActive":{"id":"psNeutralBackgroundActive","label":"psNeutralBackgroundActive","cssToken":"--ps-neutral-background-active","sassToken":"$ps-neutral-background-active","jsToken":"psNeutralBackgroundActive"},"neutralBackgroundHover":{"id":"psNeutralBackgroundHover","label":"psNeutralBackgroundHover","cssToken":"--ps-neutral-background-hover","sassToken":"$ps-neutral-background-hover","jsToken":"psNeutralBackgroundHover"},"neutralBorder":{"id":"psNeutralBorder","label":"psNeutralBorder","cssToken":"--ps-neutral-border","sassToken":"$ps-neutral-border","jsToken":"psNeutralBorder"},"neutralBorderWeak":{"id":"psNeutralBorderWeak","label":"psNeutralBorderWeak","cssToken":"--ps-neutral-border-weak","sassToken":"$ps-neutral-border-weak","jsToken":"psNeutralBorderWeak"},"neutralBorderStrong":{"id":"psNeutralBorderStrong","label":"psNeutralBorderStrong","cssToken":"--ps-neutral-border-strong","sassToken":"$ps-neutral-border-strong","jsToken":"psNeutralBorderStrong"},"neutralText":{"id":"psNeutralText","label":"neutralText","cssToken":"--ps-neutral-text","sassToken":"$ps-neutral-text","jsToken":"psNeutralText"},"neutralTextWeak":{"id":"psNeutralTextWeak","label":"neutralTextWeak","cssToken":"--ps-neutral-text-weak","sassToken":"$ps-neutral-text-weak","jsToken":"psNeutralTextWeak"},"neutralTextMedium":{"id":"psNeutralTextMedium","label":"neutralTextMedium","cssToken":"--ps-neutral-text-medium","sassToken":"$ps-neutral-text-medium","jsToken":"psNeutralTextMedium"},"neutralSurface":{"id":"psNeutralSurface","label":"psNeutralSurface","cssToken":"--ps-neutral-surface","sassToken":"$ps-neutral-surface","jsToken":"psNeutralSurface"},"surfaceWeak":{"id":"psNeutralSurfaceWeak","label":"psNeutralSurfaceWeak","cssToken":"--ps-neutral-surface-weak","sassToken":"$ps-neutral-surface-weak","jsToken":"psNeutralSurfaceWeak"},"surfaceMedium":{"id":"psNeutralSurfaceMedium","label":"psNeutralSurfaceMedium","cssToken":"--ps-neutral-surface-medium","sassToken":"$ps-neutral-surface-medium","jsToken":"psNeutralSurfaceMedium"},"surfaceStrong":{"id":"psNeutralSurfaceStrong","label":"psNeutralSurfaceStrong","cssToken":"--ps-neutral-surface-strong","sassToken":"$ps-neutral-surface-strong","jsToken":"psNeutralSurfaceStrong"}},"info":{"infoBackground":{"id":"psInfoBackground","label":"psInfoBackground","cssToken":"--ps-info-background","sassToken":"$ps-info-background","jsToken":"psInfoBackground"},"infoBackgroundActive":{"id":"psInfoBackgroundActive","label":"psInfoBackgroundActive","cssToken":"--ps-info-background-active","sassToken":"$ps-info-background-active","jsToken":"psInfoBackgroundActive"},"infoBackgroundHover":{"id":"psInfoBackgroundHover","label":"psInfoBackgroundHover","cssToken":"--ps-info-background-hover","sassToken":"$ps-info-background-hover","jsToken":"psInfoBackgroundHover"},"infoBackgroundWeak":{"id":"psInfoBackgroundWeak","label":"psInfoBackgroundWeak","cssToken":"--ps-info-background-weak","sassToken":"$ps-info-background-weak","jsToken":"psInfoBackgroundWeak"},"infoBorder":{"id":"psInfoBorder","label":"psInfoBorder","cssToken":"--ps-info-border","sassToken":"$ps-info-border","jsToken":"psInfoBorder"},"infoText":{"id":"psInfoText","label":"psInfoText","cssToken":"--ps-info-text","sassToken":"$ps-info-text","jsToken":"psInfoText"},"infoTextWeak":{"id":"psInfoTextWeak","label":"psInfoTextWeak","cssToken":"--ps-info-text-weak","sassToken":"$ps-info-text-weak","jsToken":"psInfoTextWeak"},"infoTextMedium":{"id":"psInfoTextMedium","label":"psInfoTextMedium","cssToken":"--ps-info-text-medium","sassToken":"$ps-info-text-medium","jsToken":"psInfoTextMedium"}},"success":{"successBackground":{"id":"psSuccessBackground","label":"psSuccessBackground","cssToken":"--ps-success-background","sassToken":"$ps-success-background","jsToken":"psSuccessBackground"},"successBackgroundActive":{"id":"psSuccessBackgroundActive","label":"psSuccessBackgroundActive","cssToken":"--ps-success-background-active","sassToken":"$ps-success-background-active","jsToken":"psSuccessBackgroundActive"},"successBackgroundHover":{"id":"psSuccessBackgroundHover","label":"psSuccessBackgroundHover","cssToken":"--ps-success-background-hover","sassToken":"$ps-success-background-hover","jsToken":"psSuccessBackgroundHover"},"successBackgroundWeak":{"id":"psSuccessBackgroundWeak","label":"psSuccessBackgroundWeak","cssToken":"--ps-success-background-weak","sassToken":"$ps-success-background-weak","jsToken":"psSuccessBackgroundWeak"},"successBorder":{"id":"psSuccessBorder","label":"psSuccessBorder","cssToken":"--ps-success-border","sassToken":"$ps-success-border","jsToken":"psSuccessBorder"},"successText":{"id":"psSuccessText","label":"successText","cssToken":"--ps-success-text","sassToken":"$ps-success-text","jsToken":"psSuccessText"},"successTextWeak":{"id":"psSuccessTextWeak","label":"successTextWeak","cssToken":"--ps-text-success-weak","sassToken":"$ps-text-success-weak","jsToken":"psSuccessTextWeak"},"successTextMedium":{"id":"psSuccessTextMedium","label":"successTextMedium","cssToken":"--ps-success-text-medium","sassToken":"$ps-success-text-medium","jsToken":"psSuccessTextMedium"}},"warning":{"warningBackground":{"id":"psWarningBackground","label":"pswarningBackground","cssToken":"--ps-warning-background","sassToken":"$ps-warning-background","jsToken":"psWarningBackground"},"warningBackgroundActive":{"id":"psWarningBackgroundActive","label":"pswarningBackgroundActive","cssToken":"--ps-warning-background-active","sassToken":"$ps-warning-background-active","jsToken":"psWarningBackgroundActive"},"warningBackgroundHover":{"id":"psWarningBackgroundHover","label":"pswarningBackgroundHover","cssToken":"--ps-warning-background-hover","sassToken":"$ps-warning-background-hover","jsToken":"psWarningBackgroundHover"},"warningBackgroundWeak":{"id":"psWarningBackgroundWeak","label":"pswarningBackgroundWeak","cssToken":"--ps-warning-background-weak","sassToken":"$ps-warning-background-weak","jsToken":"psWarningBackgroundWeak"},"warningBorder":{"id":"psWarningBorder","label":"pswarningBorder","cssToken":"--ps-warning-border","sassToken":"$ps-warning-border","jsToken":"psWarningBorder"},"warningText":{"id":"psWarningText","label":"warningText","cssToken":"--ps-warning-text","sassToken":"$ps-warning-text","jsToken":"psWarningText"},"warningTextWeak":{"id":"psWarningTextWeak","label":"warningTextWeak","cssToken":"--ps-text-warning-weak","sassToken":"$ps-text-warning-weak","jsToken":"psWarningTextWeak"},"warningTextMedium":{"id":"psWarningTextMedium","label":"warningTextMedium","cssToken":"--ps-warning-text-medium","sassToken":"$ps-warning-text-medium","jsToken":"psWarningTextMedium"}},"danger":{"dangerBackground":{"id":"psDangerBackground","label":"psdangerBackground","cssToken":"--ps-danger-background","sassToken":"$ps-danger-background","jsToken":"psDangerBackground"},"dangerBackgroundActive":{"id":"psDangerBackgroundActive","label":"psDangerBackgroundActive","cssToken":"--ps-danger-background-active","sassToken":"$ps-danger-background-active","jsToken":"psDangerBackgroundActive"},"dangerBackgroundHover":{"id":"psDangerBackgroundHover","label":"psDangerBackgroundHover","cssToken":"--ps-danger-background-hover","sassToken":"$ps-danger-background-hover","jsToken":"psDangerBackgroundHover"},"dangerBackgroundWeak":{"id":"psDangerBackgroundWeak","label":"psDangerBackgroundWeak","cssToken":"--ps-danger-background-weak","sassToken":"$ps-danger-background-weak","jsToken":"psDangerBackgroundWeak"},"dangerBorder":{"id":"psDangerBorder","label":"psDangerBorder","cssToken":"--ps-danger-border","sassToken":"$ps-danger-border","jsToken":"psDangerBorder"},"dangerText":{"id":"psDangerText","label":"dangerText","cssToken":"--ps-danger-text","sassToken":"$ps-danger-text","jsToken":"psDangerText"},"dangerTextWeak":{"id":"psDangerTextWeak","label":"dangerTextWeak","cssToken":"--ps-text-danger-weak","sassToken":"$ps-text-danger-weak","jsToken":"psDangerTextWeak"},"dangerTextMedium":{"id":"psDangerTextMedium","label":"dangerTextMedium","cssToken":"--ps-danger-text-medium","sassToken":"$ps-danger-text-medium","jsToken":"psDangerTextMedium"}}}');function d(e){return t.createElement("p",{className:i.label},e.children)}function p(e){var n=e.items,a=Object.keys(n);return t.createElement("section",null,t.createElement("h3",null,e.category),t.createElement("ul",{className:i.list},a.map((function(e){return t.createElement(k,(0,s.Z)({},n[e],{key:n[e].id}))}))))}function k(e){return t.createElement("li",{className:i.item},t.createElement("div",{className:i.swab+" "+i[e.id]}),t.createElement("div",{className:i.labelcontainer},t.createElement(d,null,t.createElement("span",{className:i.syntax},"CSS:")," ",e.cssToken),t.createElement(d,null,t.createElement("span",{className:i.syntax},"SASS:")," ",e.sassToken),t.createElement(d,null,t.createElement("span",{className:i.syntax},"JS:")," ",e.jsToken)))}var g=function(){return t.createElement("div",{className:i.wrapper},l.categories.map((function(e){return t.createElement(p,{category:e,items:l[e],key:e})})))},m=["components"],T={sidebar_position:2,tags:["Development","Packages","Tokens","Colors"]},v="Colors",f={unversionedId:"development/packages/tokens/colors",id:"development/packages/tokens/colors",title:"Colors",description:"This is alpha documentation for the design-tokens package.",source:"@site/docs/development/packages/tokens/colors.mdx",sourceDirName:"development/packages/tokens",slug:"/development/packages/tokens/colors",permalink:"/docs/development/packages/tokens/colors",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/tokens/colors.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Tokens",permalink:"/docs/tags/tokens"},{label:"Colors",permalink:"/docs/tags/colors"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Packages","Tokens","Colors"]},sidebar:"development",previous:{title:"Intro",permalink:"/docs/development/packages/tokens/intro"},next:{title:"Button",permalink:"/docs/development/packages/headless-styles/Button"}},h={},b=[{value:"Installation",id:"installation",level:2},{value:"List of tokens",id:"list-of-tokens",level:2},{value:"Themes",id:"themes",level:2},{value:"Example solutions for CSS-in-JS",id:"example-solutions-for-css-in-js",level:3},{value:"Custom Tokens",id:"custom-tokens",level:2},{value:"SASS tokens",id:"sass-tokens",level:3}],B={toc:b};function x(e){var n=e.components,a=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,s.Z)({},B,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"colors"},"Colors"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is ",(0,o.kt)("strong",{parentName:"p"},"alpha")," documentation for the ",(0,o.kt)("strong",{parentName:"p"},"design-tokens")," package."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(c.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens@alpha\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens@alpha\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"headless-styles")," package will consume the ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," tokens internally. Depending on which setup you use (css vs. CSS-in-JS) will either return the styles being referenced from the tokens, or the tokens themselves (CSS-in-JS only). This means ",(0,o.kt)("strong",{parentName:"p"},"you do not need to install this package")," if you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"headless-styles"),"."))),(0,o.kt)("h2",{id:"list-of-tokens"},"List of tokens"),(0,o.kt)("p",null,"These are the default values (dark) we provide. For every theme, we simply overwrite the values needed shown in this list (i.e. token names are the same for all themes)."),(0,o.kt)("p",null,"The tokens are presented in alphabetical order."),(0,o.kt)(g,{mdxType:"TokensColorMap"}),(0,o.kt)("h2",{id:"themes"},"Themes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package comes with two themes: ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dark")," (default). Themes are controlled by using CSS classes (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},".light"),") or a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-theme")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," tag. The default token values that you will receive will be for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dark")," theme. If you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," theme, simply add a class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," a parent component or ",(0,o.kt)("inlineCode",{parentName:"p"},'data-theme="light"')," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," tag for a full page switch (what we do in these docs)."),(0,o.kt)("p",null,"If you want to change the theme of a specific child, just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," class name to the parent of that component."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Themes ",(0,o.kt)("strong",{parentName:"p"},"depend on the normalize.css")," file to be used in your project. Check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/getting-started/installation#normalizecss"},"getting started")," docs to learn how to add the normalize.css file to your project."))),(0,o.kt)("h3",{id:"example-solutions-for-css-in-js"},"Example solutions for CSS-in-JS"),(0,o.kt)("p",null,"If you choose to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens"),' in a CSS-in-JS environment, we ship both the light and dark tokens. Just use the same color map we have provided above and add "Light" after the "ps" ID (i.e. ',(0,o.kt)("inlineCode",{parentName:"p"},"psBackground")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"psLightBackground"),")."),(0,o.kt)("p",null,"If you are using React, there are a number of solutions you can use to create theme switching in your project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"light")," class name or class toggle to your root element"),(0,o.kt)("li",{parentName:"ul"},"Create a state-based solution or ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," in your project"),(0,o.kt)("li",{parentName:"ul"},'Create a custom hook that dynamically imports a map of colors depending on what you pass into it (i.e. "light", "dark"). However, we do not recommend this approach for performance reasons but provide it as an example to show your creativity limits what is possible.')),(0,o.kt)("h2",{id:"custom-tokens"},"Custom Tokens"),(0,o.kt)("p",null,"Because we are limiting tokens to our semantic colors (which should provide you with anything you will more than likely ever need), your team may feel the need to extend and add additional variables to your project. In this scenario ",(0,o.kt)("strong",{parentName:"p"},"you should absolutely use static variables when you need a color/value not in the list"),". Just because we can use CSS tokens, doesn't mean we should use them for everything."),(0,o.kt)("p",null,"There's no doubt that using tokens makes life easier (for the engineer), however, when it starts to be used so much it negatively affects the customer experience - we have failed as a team. So if your team would like to define a large number of tokens to make your code seem more valuable, ",(0,o.kt)("strong",{parentName:"p"},"we highly recommend the use of SASS in your project which will produce the most performant outcome in this scenario.")),(0,o.kt)("h3",{id:"sass-tokens"},"SASS tokens"),(0,o.kt)("p",null,"SASS tokens differ from CSS variables in that they are pre-processed out of existence and into your code base. This means that when you use SASS, there are no tokens that are stored in browser memory. This is a ",(0,o.kt)("strong",{parentName:"p"},"huge")," benefit because you can essentially create as many tokens as you want with ",(0,o.kt)("strong",{parentName:"p"},"no negative side effects to performance.")))}x.isMDXComponent=!0}}]);