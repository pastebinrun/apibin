(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{YD9F:function(e,t,a){"use strict";function n(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var i=a("hosL"),o=a("/Mq+"),r="submit__vnIeA",u="full__MJ9ac",s=a("f/Op");t.default=class extends i.Component{constructor(...e){var t;super(...e),t=this,n(this,"state",{code:"",expiration:"PT1H",languages:[],language:"plaintext"}),n(this,"onLanguageChange",(e=>this.setState({language:e.target.value}))),n(this,"onExpirationChange",(e=>this.setState({expiration:e.target.value}))),n(this,"onTextareaChange",(e=>this.setState({code:e.target.value}))),n(this,"onSubmit",(async function(e){e.preventDefault();const{code:a,expiration:n,language:i}=t.state,r=await fetch(`${s.a}api/v1/pastes`,{body:new URLSearchParams({code:a,expiration:n,language:i}),method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}});Object(o.d)(`/${await r.text()}`)}))}async componentWillMount(){this.setState({languages:await(await fetch(`${s.a}api/v1/languages`)).json()})}render(e,{expiration:t,code:a,languages:n,language:o}){return Object(i.h)("form",{onSubmit:this.onSubmit},Object(i.h)("label",null,"Language: ",Object(i.h)("select",{value:o,onInput:this.onLanguageChange},n.map((({identifier:e,name:t})=>Object(i.h)("option",{value:e},t)))))," ",Object(i.h)("label",null,"Expires: ",Object(i.h)("select",{value:t,onInput:this.onExpirationChange},Object(i.h)("option",{value:"PT1H"},"1 hour"),Object(i.h)("option",{value:"P1D"},"1 day"),Object(i.h)("option",{value:"P7D"},"1 week"),Object(i.h)("option",null,"Never"))),Object(i.h)("button",{class:r,type:"submit"},"Share"),Object(i.h)("textarea",{class:u,required:!0,onInput:this.onTextareaChange},a))}}},"f/Op":function(e,t){"use strict";t.a="https://pastebin.run/"}}]);
//# sourceMappingURL=route-home.chunk.3f34d.esm.js.map