if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const l=e=>t(e,n),u={module:{uri:n},exports:o,require:l};s[n]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(i(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"loremipsum"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/test/css/app.17e8abce.css",revision:null},{url:"/test/img/banner-bg.f6065eae.jpg",revision:null},{url:"/test/img/ordering-bg.a7c390ff.png",revision:null},{url:"/test/index.html",revision:"8aed17f16767685557d4e5bd22da5624"},{url:"/test/js/app.00fa079d.js",revision:null},{url:"/test/js/chunk-vendors.6e65629d.js",revision:null},{url:"/test/manifest.json",revision:"95050d0fe72f2f5dfb63709e84ab55c2"},{url:"/test/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
