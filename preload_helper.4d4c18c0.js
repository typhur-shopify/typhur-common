!function(){"use strict";var t="/@typhur-shopify:ui/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"typhur","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.9ab490f3.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.c9660c2e.async.js",65],["173.e8c51481.chunk.css",173],["173.2e998e84.async.js",173],["packages___typhur-shopify:ui__src__components__Alert__index.md.8ef6aba0.async.js",467],["nm__dumi__theme-default__layouts__DocLayout__index.ebc5dd76.async.js",519],["dumi__tmp-production__dumi__theme__ContextWrapper.0dd3861e.async.js",923],["docs__index.md.7be62a6f.async.js",935],["docs__guide.md.b8f77b6f.async.js",937]],"r":{"/*":[2,3,4,5,7,8],"/":[9,4,5,7,8],"/guide":[10,4,5,7,8],"/~demos/:id":[0,1,8],"/components/alert":[6,4,5,7,8]}},{publicPath:"/@typhur-shopify:ui/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();