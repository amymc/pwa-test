"use strict";(self.webpackChunkpwa_test=self.webpackChunkpwa_test||[]).push([[538],{538:function(n,e,o){o.r(e),o.d(e,{default:function(){return s}});var t=o(152),i=o(791),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;null!==o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}o(508);var c=o(184);var s=function(){var n=["iPhone","iPad","android"].includes(navigator.platform),e=i.useState(n),o=(0,t.Z)(e,2),r=o[0],a=o[1];return(0,c.jsxs)("div",{className:"App",children:["page two",r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){return a(!1)},children:"Close"}),(0,c.jsx)("p",{children:" Install this application. Tap 'Add to Homescreen'"})]})]})};!function(n){if("serviceWorker"in navigator){if(new URL("/pwa-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pwa-test","/service-worker.js");r?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):a(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):a(e,n)}))}}()},508:function(){}}]);
//# sourceMappingURL=538.dec62c5f.chunk.js.map