!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault(),async function(){let e={email:document.getElementById("email").value,password:document.getElementById("password").value};console.log(e);let t=await fetch("http://localhost:3000/api/users/login",{mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{console.log(e.headers)}).then(e=>console.log(e.json()));fetch("http://localhost:3000/api/users/login",{mode:"cors",method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify(e)}),console.log(t.status+"--"+t.headers.get("x-auth-token"))}()}))}]);