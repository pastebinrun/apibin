(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3n3j":function(t,n,e){"use strict";function r(t,n,e){return(n=function(t){var n=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.r(n),e.d(n,"default",(function(){return s}));var i=e("hosL"),o="pre__5yGRS",l=e("f/Op");class s extends i.Component{constructor(...t){super(...t),r(this,"controller",new AbortController),r(this,"state",{code:null}),r(this,"copyLink",(t=>{t.preventDefault(),navigator.clipboard.writeText(this.getLink())}))}getLink(){const{id:t}=this.props;return`https://pastebin.run/${t}`}async componentWillMount(){const{id:t}=this.props,{signal:n}=this.controller;this.setState({code:await(await fetch(`${l.a}${t}.txt`,{signal:n})).text()})}componentWillUnmount(){this.controller.abort()}render(t,{code:n}){return Object(i.h)("div",null,Object(i.h)("div",null,"Share link: ",Object(i.h)("input",{readonly:!0,value:this.getLink()})," ",Object(i.h)("button",{onClick:this.copyLink},"Copy link")),null===n?"Loading…":Object(i.h)("pre",{class:o},Object(i.h)("code",null,n)))}}},"f/Op":function(t,n){"use strict";n.a="https://pastebin.run/"}}]);
//# sourceMappingURL=route-paste.chunk.7813f.esm.js.map