/*! For license information please see 802.ee297fbe.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{60793:function(e,t,n){const r=n(49411);t.Z=function(e){return(0,r.jsx)("svg",Object.assign({"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})}))}},39347:function(e,t,n){n.r(t),t.default={psIcon:"psIcon_TnYa",sIconSize:"sIconSize_rvXB psIcon_TnYa",mIconSize:"mIconSize_mUJJ psIcon_TnYa",lIconSize:"lIconSize_b7yH psIcon_TnYa",customIconSize:"customIconSize_B4YV psIcon_TnYa"}},3067:function(e,t,n){t.L=void 0;const r=n(94550),o=n(28592),i=n(55687),a=(0,r.__importDefault)(n(39347));t.L=function(e){const t=(0,i.getDefaultIconOptions)(e),{size:n,tech:c}=t,u=(0,r.__rest)(t,["size","tech"]),l=(0,i.getA11yIconProps)(u),{sizeClass:s}=(0,i.createIconSelectorClasses)(n,t.customSize);return Object.assign(Object.assign(Object.assign({},l),(0,o.createClassProp)(c,{svelteClass:`ps-icon psIcon ${s}`,defaultClass:`ps-icon ${a.default[s]}`})),(null==e?void 0:e.customSize)&&{height:e.customSize,width:e.customSize})}},55687:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getA11yIconProps=t.getDefaultIconOptions=t.createIconSelectorClasses=t.defaultIconOptions=void 0,t.defaultIconOptions={size:"m",tech:"",ariaHidden:!1},t.createIconSelectorClasses=function(e,t){return{sizeClass:t?"customIconSize":`${e}IconSize`}},t.getDefaultIconOptions=function(e){var n,r,o;return{ariaHidden:null!==(n=null==e?void 0:e.ariaHidden)&&void 0!==n?n:t.defaultIconOptions.ariaHidden,ariaLabel:null==e?void 0:e.ariaLabel,customSize:null==e?void 0:e.customSize,size:null!==(r=null==e?void 0:e.size)&&void 0!==r?r:t.defaultIconOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultIconOptions.tech}},t.getA11yIconProps=function(e){return Object.assign(Object.assign({"aria-hidden":null==e?void 0:e.ariaHidden},(null==e?void 0:e.ariaLabel)&&{"aria-label":e.ariaLabel}),{role:"img"})}},28592:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.transformProperty=t.transformCasing=t.getSyntaxType=t.transformStyles=t.createJSProps=t.createClassProp=t.createCSSObj=t.createSvelteObj=t.createA11yProps=void 0;const r=(0,n(94550).__importDefault)(n(98118));const o={htmlFor:"for"};function i(e=""){return{class:e}}function a(e,t){return Object.assign({className:e},t)}t.createA11yProps=function(e){const{disabled:t,invalid:n,required:r,readOnly:o}=e;return{"aria-invalid":n,"data-disabled":t,"data-invalid":n,"data-readonly":o,"data-required":r,disabled:t,readOnly:o,required:r}},t.createSvelteObj=i,t.createCSSObj=a,t.createClassProp=function(e,t){return"svelte"===e?i(t.svelteClass):a(t.defaultClass)},t.createJSProps=function(e,t,n){return Object.assign({cssProps:e,styles:t},n)},t.transformStyles=function(e){return Object.keys(e).reduce(((t,n)=>{const o=function(e){return e.includes("&")?e:`${(0,r.default)(e)}:`}(n);return`\n      ${t.trim()}\n      ${o} ${i=e[n],"string"==typeof i?`${i.trim()};`:`{${Object.keys(i).reduce(((e,t)=>`\n      ${e.trim()}\n      ${(0,r.default)(t)}: ${i[t]};\n    `),"")}}`}\n    `;var i}),"").trim().replace(/^ {2,12}/gm,"")},t.getSyntaxType=function(e){return"svelte"===e?"html":"jsx"},t.transformCasing=function(e,t){return"html"===t?(0,r.default)(e):e},t.transformProperty=function(e,t){var n;const r=null!==(n=o[e])&&void 0!==n?n:"";return function(e){return"svelte"===e}(t)?r:e}},98118:function(e,t){var n=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,r=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;e.exports=t=function(e){return e.replace(n,(function(e){return"-"+e.toLowerCase()}))},t.reverse=function(e){return e.replace(r,(function(e){return e.slice(1).toUpperCase()}))}},51827:function(e,t,n){var r=n(20411),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:c.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},49411:function(e,t,n){e.exports=n(51827)},94550:function(e,t,n){n.r(t),n.d(t,{__assign:function(){return i},__asyncDelegator:function(){return O},__asyncGenerator:function(){return w},__asyncValues:function(){return g},__await:function(){return m},__awaiter:function(){return s},__classPrivateFieldGet:function(){return C},__classPrivateFieldSet:function(){return x},__createBinding:function(){return p},__decorate:function(){return c},__exportStar:function(){return d},__extends:function(){return o},__generator:function(){return f},__importDefault:function(){return I},__importStar:function(){return P},__makeTemplateObject:function(){return S},__metadata:function(){return l},__param:function(){return u},__read:function(){return v},__rest:function(){return a},__spread:function(){return b},__spreadArray:function(){return h},__spreadArrays:function(){return _},__values:function(){return y}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function _(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function h(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(u,l):s(i[0][2],n)}catch(r){s(i[0][3],r)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function O(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function g(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return j(t,e),t}function I(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);