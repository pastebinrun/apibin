(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{AAwS:function(t){t.exports={pre:"pre__Jr3XJ"}},QicU:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}e.r(n),e.d(n,"default",(function(){return p}));var o=e("hosL"),i=e("AAwS"),c=e.n(i),u=e("f/Op"),p=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).controller=new AbortController,n.state={code:null},n.copyLink=function(t){t.preventDefault(),navigator.clipboard.writeText(n.getLink())},n}var e,i;i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,r(e,i);var p=n.prototype;return p.getLink=function(){return"https://pastebin.run/"+this.props.id},p.componentWillMount=function(){return new Promise(function(t,n){return Promise.resolve(fetch(""+u.a+this.props.id+".txt",{signal:this.controller.signal})).then(function(e){try{return Promise.resolve(e.text()).then(function(e){try{return this.setState({code:e}),t()}catch(t){return n(t)}}.bind(this),n)}catch(t){return n(t)}}.bind(this),n)}.bind(this))},p.componentWillUnmount=function(){this.controller.abort()},p.render=function(t,n){var e=n.code;return Object(o.h)("div",null,Object(o.h)("div",null,"Share link: ",Object(o.h)("input",{readonly:!0,value:this.getLink()})," ",Object(o.h)("button",{onClick:this.copyLink},"Copy link")),null===e?"Loading…":Object(o.h)("pre",{class:c.a.pre},Object(o.h)("code",null,e)))},n}(o.Component)},"f/Op":function(t,n){"use strict";n.a="https://pastebin.run/"}}]);
//# sourceMappingURL=route-paste.chunk.3492a.js.map