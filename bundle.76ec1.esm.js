!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1,4:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home",4:"route-paste"}[t]||t)+".chunk."+{2:"24ebf",3:"2b0ac",4:"bb259"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(s=l[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===i||a===u))return e()}var _=document.getElementsByTagName("style");for(c=0;c<_.length;c++){var s;if((a=(s=_[c]).getAttribute("data-href"))===i||a===u)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(n){if(f.onerror=f.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[t],f.parentNode.removeChild(f),r(c)}},f.href=u,document.head.appendChild(f)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-about",3:"route-home",4:"route-paste"}[t]||t)+".chunk."+{2:"0bff7",3:"6aa67",4:"34918"}[t]+".esm.js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(_);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var _=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/apibin/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({"/Mq+":function(t,e,n){"use strict";function r(t,e){E.options.__h&&E.options.__h(A,t,S||e),S=0;var n=A.__H||(A.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return S=1,function(t,e,n){var o=r(x++,2);return o.t=t,o.__c||(o.__=[n?n(e):a(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=A),o.__}(a,t)}function i(){for(var t;t=w.shift();)if(t.__P)try{t.__H.__h.forEach(u),t.__H.__h.forEach(l),t.__H.__h=[]}catch(e){t.__H.__h=[],E.options.__e(e,t.__v)}}function u(t){var e=A,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),A=e}function l(t){var e=A;t.__c=t.__(),A=e}function c(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}function _(t,e){for(var n in e)t[n]=e[n];return t}function s(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var a=l[c].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=h(t.replace(o,"")),e=h(e||"");for(var _=Math.max(t.length,e.length),s=0;s<_;s++)if(e[s]&&":"===e[s].charAt(0)){var f=e[s].replace(/(^:|[+*?]+$)/g,""),p=(e[s].match(/[+*?]+$/)||M)[0]||"",d=~p.indexOf("+"),v=~p.indexOf("*"),m=t[s]||"";if(!m&&!v&&(p.indexOf("?")<0||d)){r=!1;break}if(u[f]=decodeURIComponent(m),d||v){u[f]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&u}function f(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function p(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:h(t.props.path).map(d).join("")}(t),t.props}function h(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function d(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function v(){var t,e,n,i=function(t){var e=A.context[t.__c],n=r(x++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(A)),e.props.value):t.__}(V);if(i===q){var u=o()[1];t=function(){return I.push(u),function(){return I.splice(I.indexOf(u),1)}},e=[],n=r(x++,3),!E.options.__s&&c(n.__H,e)&&(n.__=t,n.__H=e,A.__H.__h.push(n))}return[i,y]}function m(){var t;return""+((t=F&&F.location?F.location:F&&F.getCurrentLocation?F.getCurrentLocation():"undefined"!=typeof location?location:R).pathname||"")+(t.search||"")}function y(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=W.length;e--;)if(W[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),F&&F[e]?F[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),g(t)}function g(t){for(var e=!1,n=0;n<W.length;n++)W[n].routeTo(t)&&(e=!0);return e}function b(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return y(e)}}function k(t){return t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault(),!1}function C(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)){var e=t.target;do{if("a"===e.localName&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(b(e))return k(t)}}while(e=e.parentNode)}}function O(t){t.history&&(F=t.history),this.state={url:t.url||m()}}n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return v}));var x,A,j,P,E=n("hosL"),S=0,w=[],L=E.options.__b,T=E.options.__r,H=E.options.diffed,U=E.options.__c,N=E.options.unmount;E.options.__b=function(t){A=null,L&&L(t)},E.options.__r=function(t){T&&T(t),x=0;var e=(A=t.__c).__H;e&&(j===A?(e.__h=[],A.__h=[],e.__.forEach((function(t){t.__H&&(t.__H=void 0)}))):(e.__h.forEach(u),e.__h.forEach(l),e.__h=[])),j=A},E.options.diffed=function(t){H&&H(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==w.push(e)&&P===E.options.requestAnimationFrame||((P=E.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),D&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);D&&(e=requestAnimationFrame(n))})(i)),A=null,j=null},E.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||l(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],E.options.__e(n,t.__v)}})),U&&U(t,e)},E.options.unmount=function(t){N&&N(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),e&&E.options.__e(e,n.__v))};var D="function"==typeof requestAnimationFrame,M={},R={},W=[],I=[],F=null,q={url:m()},V=Object(E.createContext)(q),$=!1;_(O.prototype=new E.Component,{shouldComponentUpdate:function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},canRoute:function(t){var e=Object(E.toChildArray)(this.props.children);return void 0!==this.g(e,t)},routeTo:function(t){this.setState({url:t});var e=this.canRoute(t);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var t=this;$||($=!0,F||addEventListener("popstate",(function(){g(m())})),addEventListener("click",C)),W.push(this),F&&(this.u=F.listen((function(e){var n=e.location||e;t.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),W.splice(W.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(t,e){t=t.filter(p).sort(f);for(var n=0;n<t.length;n++){var r=t[n],o=s(e,r.props.path,r.props);if(o)return[r,o]}},render:function(t,e){var n,r,o=t.onChange,i=e.url,u=this.c,l=this.g(Object(E.toChildArray)(t.children),i);if(l&&(r=Object(E.cloneElement)(l[0],_(_({url:i,matches:n=l[1]},n),{key:void 0,ref:void 0}))),i!==(u&&u.url)){_(q,u=this.c={url:i,previous:u&&u.url,current:r,path:r?r.props.path:null,matches:n}),u.router=this,u.active=r?[r]:[];for(var c=I.length;c--;)I[c]({});"function"==typeof o&&o(u)}return Object(E.h)(V.Provider,{value:u},r)}});var B=function(t){return Object(E.h)("a",_({onClick:C},t))}},QfWi:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t){function e(){var t=a(b.location.hash.substr(1)),e=t.pathname,n=t.search,r=t.hash,o=k.state||{};return[o.idx,v({pathname:void 0===e?"/":e,search:void 0===n?"":n,hash:void 0===r?"":r,state:o.usr||null,key:o.key||"default"})]}function n(){if(C)E.call(C),C=null;else{var t=p.Pop,n=e(),r=n[0];if(E.length){if(null!=r){var o=A-r;o&&(C={action:t,location:n[1],retry:function(){d(-1*o)}},d(o))}}else h(t)}}function o(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var n=b.location.href,r=n.indexOf("#");e=-1===r?n:n.slice(0,r)}return e}()+"#"+("string"==typeof t?t:c(t))}function _(t,e){return void 0===e&&(e=null),v(r({pathname:j.pathname,hash:"",search:""},"string"==typeof t?a(t):t,{state:e,key:l()}))}function s(t,e){return[{usr:t.state,key:t.key,idx:e},o(t)]}function f(t,e,n){return!E.length||(E.call({action:t,location:e,retry:n}),!1)}function h(t){O=t;var n=e();A=n[0],P.call({action:O,location:j=n[1]})}function d(t){k.go(t)}void 0===t&&(t={});var g=t.window,b=void 0===g?document.defaultView:g,k=b.history,C=null;b.addEventListener(y,n),b.addEventListener("hashchange",(function(){c(e()[1])!==c(j)&&n()}));var O=p.Pop,x=e(),A=x[0],j=x[1],P=u(),E=u();null==A&&k.replaceState(r({},k.state,{idx:A=0}),"");var S={get action(){return O},get location(){return j},createHref:o,push:function t(e,n){var r=p.Push,o=_(e,n);if(f(r,o,(function(){t(e,n)}))){var i=s(o,A+1),u=i[0],l=i[1];try{k.pushState(u,"",l)}catch(t){b.location.assign(l)}h(r)}},replace:function t(e,n){var r=p.Replace,o=_(e,n);if(f(r,o,(function(){t(e,n)}))){var i=s(o,A);k.replaceState(i[0],"",i[1]),h(r)}},go:d,back:function(){d(-1)},forward:function(){d(1)},listen:function(t){return P.push(t)},block:function(t){var e=E.push(t);return 1===E.length&&b.addEventListener(m,i),function(){e(),E.length||b.removeEventListener(m,i)}}};return S}function i(t){t.preventDefault(),t.returnValue=""}function u(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function c(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,o=void 0===r?"":r,i=t.hash,u=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(n+="#"===u.charAt(0)?u:"#"+u),n}function a(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _(t){var e=t.className,n=t.activeClass,r=t.activeClassName,o=t.path,i=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}(t,g),u=Object(d.e)()[0],l=o&&u.path&&Object(d.c)(u.path,o,{})||Object(d.c)(u.url,i.href,{}),c=i.class||e||"",a=l&&(n||r)||"";return i.class=c+(c&&a&&" ")+a,Object(h.h)(d.a,i)}function s(t,e){if("string"==typeof t.type)return null;const n=t.__;if(!n)return;let r=n.__k;if(r){Array.isArray(r)||(r=[r]);let e=r.indexOf(t);-1===e&&(e=r.length);for(let t=e;t--;){const e=r[t],n=e&&e.__e||s(e,!0);if(n)return n}}return e?void 0:s(n)}function f(t){function e(){h.Component.call(this),n||(this.componentWillMount=()=>{t((t=>{n=t&&t.default||t,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=t=>{if(n)return Object(h.h)(n,t);const e=s(this.__v),r=e&&e.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(h.h)(r.localName,{dangerouslySetInnerHTML:A})}}let n;return e.preload=t,(e.prototype=new h.Component).constructor=e,e}n.r(e);var p,h=n("hosL"),d=n("/Mq+");!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(p||(p={}));var v=function(t){return t},m="beforeunload",y="popstate",g=["className","activeClass","activeClassName","path"],b="header__OVZyn",k="active__r+Z6z";var C=()=>Object(h.h)("header",{class:b},Object(h.h)("h1",null,Object(h.h)(_,{href:"/"},"apibin")),Object(h.h)("nav",null,Object(h.h)(_,{activeClassName:k,href:"/"},"Home"),Object(h.h)(_,{activeClassName:k,href:"/about"},"About"),Object(h.h)("a",{href:"https://github.com/pastebinrun/apibin"},"Source code"))),O="contents__3veGA";var x=({children:t})=>Object(h.h)("div",{class:O},t);const A={};var j=f((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),P=f((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),E=f((function(t){n.e(4).then(function(){var e=n("QicU");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=()=>Object(h.h)("div",{id:"app"},Object(h.h)(C,null),Object(h.h)(x,null,Object(h.h)(d.b,{history:o()},Object(h.h)(j,{path:"/"}),Object(h.h)(P,{path:"/about"}),Object(h.h)(E,{path:"/:id"}))))},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=H.vnode&&H.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function _(t,e){if(null==e)return t.__?_(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?_(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||R!==H.debounceRendering)&&((R=H.debounceRendering)||M)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?_(i):u,i.__h),O(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,l,a,s,f){var p,h,v,y,g,b,k,O=r&&r.__k||F,x=O.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(y=n.__k[p]=null==(y=e[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(c,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=O[p])||v&&y.key==v.key&&y.type===v.type)O[p]=void 0;else for(h=0;h<x;h++){if((v=O[h])&&y.key==v.key&&y.type===v.type){O[h]=void 0;break}v=null}C(t,y,v=v||I,o,i,l,a,s,f),g=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=d(y,s,t):s=m(t,y,v,O,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=_(v))}for(n.__e=b,p=x;p--;)null!=O[p]&&("function"==typeof n.type&&null!=O[p].__e&&O[p].__e==n.__d&&(n.__d=_(r,p+1)),j(O[p],O[p]));if(k)for(p=0;p<k.length;p++)A(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):m(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||q.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](H.event?H.event(t):t)}function k(t){this.l[t.type+!0](H.event?H.event(t):t)}function C(t,e,n,o,i,u,l,_,s){var f,p,d,v,m,y,g,b,k,C,O,A,j,E=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,_=e.__e=n.__e,e.__h=null,u=[_]),(f=H.__b)&&f(e);try{t:if("function"==typeof E){if(b=e.props,k=(f=E.contextType)&&o[f.__c],C=f?k?k.props.value:f.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?e.__c=p=new E(b,C):(e.__c=p=new a(b,C),p.constructor=E,p.render=P),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(b,p.__s))),v=p.props,m=p.state,d)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}if(p.context=C,p.props=b,p.__v=e,p.__P=t,O=H.__r,A=0,"prototype"in E&&E.prototype.render)p.state=p.__s,p.__d=!1,O&&O(e),f=p.render(p.props,p.state,p.context);else do{p.__d=!1,O&&O(e),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),j=null!=f&&f.type===c&&null==f.key?f.props.children:f,h(t,Array.isArray(j)?j:[j],e,n,o,i,u,l,_,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,s);(f=H.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=_,e.__h=!!s,u[u.indexOf(_)]=null),H.__e(t,e,n)}}function O(t,e){H.__c&&H.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){H.__e(t,e.__v)}}))}function x(t,e,n,r,i,u,l,c){var a,s,f,p=n.props,d=e.props,v=e.type,m=0;if("svg"===v&&(i=!0),null!=u)for(;m<u.length;m++)if((a=u[m])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){t=a,u[m]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,c=!1}if(null===v)p===d||c&&t.data===d||(t.data=d);else{if(u=u&&T.call(t.childNodes),s=(p=n.props||I).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!c){if(null!=u)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,d,p,i,c),f)e.__k=[];else if(m=e.props.children,h(t,Array.isArray(m)?m:[m],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&_(n,0),c),null!=u)for(m=u.length;m--;)null!=u[m]&&o(u[m]);c||("value"in d&&void 0!==(m=d.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&g(t,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==t.checked&&g(t,"checked",m,p.checked,!1))}return t}function A(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){H.__e(t,n)}}function j(t,e,n){var r,i;if(H.unmount&&H.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||A(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){H.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}function E(t,e,n){var r,o,u;H.__&&H.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(c,null,[t]),o||I,I,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?T.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function S(t,e){E(t,e,S)}function w(t,e,n){var o,i,l,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];return arguments.length>2&&(c.children=arguments.length>3?T.call(arguments,2):n),u(t.type,c,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return E})),n.d(e,"hydrate",(function(){return S})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return N})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return w})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return H}));var T,H,U,N,D,M,R,W,I={},F=[],q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=F.slice,H={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},U=0,N=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},a.prototype.render=c,D=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=t=>t&&t.default?t.default:t,c=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=l(n("QfWi")),r={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(r=JSON.parse(decodeURI(u.innerHTML)).preRenderData||r);const a={preRenderData:r};r.url&&c(r.url);i(o(e,{CLI_DATA:a}),document.body,t)};0,e()}}});
//# sourceMappingURL=bundle.76ec1.esm.js.map