var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,c=l||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,f,u,l,s=0,c=!1,d=!1,y=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,s=t,f=e.apply(i,n)}function O(e){var n=e-l,i=e-s;return void 0===l||n>=t||n<0||d&&i>=a}function h(){var e,n,i,o=g();if(O(o))return w(o);u=setTimeout(h,(e=o-l,n=o-s,i=t-e,d?v(i,a-n):i))}function w(e){return(u=void 0,y&&o)?j(e):(o=r=void 0,f)}function T(){var e,n=g(),i=O(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return s=e=l,u=setTimeout(h,t),c?j(e):f;if(d)return u=setTimeout(h,t),j(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=b(t)||0,p(i)&&(c=!!i.leading,a=(d="maxWait"in i)?m(b(i.maxWait)||0,t):a,y="trailing"in i?!!i.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,o=l=r=u=void 0},T.flush=function(){return void 0===u?f:w(g())},T}(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(){let e={email:y.email.value,message:y.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500)),window.addEventListener("DOMContentLoaded",()=>{let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);y.email.value=t.email,y.message.value=t.message}}),y.addEventListener("submit",e=>{e.preventDefault();let t={email:y.email.value,message:y.message.value};console.log("Form Data:",t),localStorage.removeItem("feedback-form-state"),y.reset()});
//# sourceMappingURL=03-feedback.38338ba2.js.map