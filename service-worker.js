if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const b=e=>a(e,r),f={module:{uri:r},exports:d,require:b};i[r]=Promise.all(s.map((e=>f[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"c46e3c04dd02dab8e5c0319e31b8ca68"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"3fc2b8ef66d98b444b3379a4c343d4fa"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"edae8698c1c804d7e04348a54d225016"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"bdf66016459ff04c77804814ff0d6185"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"0fec667ef5966f80e1ee2ec41b951acd"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"48735191414e1e70069bf9a5abaf1f79"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"e6eb9d6786060bf8c839bef4fab80397"},{url:"about/index.html",revision:"b27e078f60ff95ab5316343eee93206b"},{url:"archives/2022/07/index.html",revision:"3283336346ab01d6633979559fe406c3"},{url:"archives/2022/10/index.html",revision:"fad5037120ab0fe276d8471c3a83c01c"},{url:"archives/2022/index.html",revision:"83676b5308a593eee3ab5fb1fbfd201b"},{url:"archives/2023/01/index.html",revision:"85a4ce43fc7ace78d324488f8fbc99b8"},{url:"archives/2023/02/index.html",revision:"5bf05a589842bbc687b3290eac2e0371"},{url:"archives/2023/03/index.html",revision:"7411b0937c497170bad21180c8eb3474"},{url:"archives/2023/index.html",revision:"96bfd523bc42d3ff460c12ce48cd9cfc"},{url:"archives/index.html",revision:"b14fa54da6fb79d342e8f3bf2818ff61"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/旧科技-Review/index.html",revision:"e4ffd0ddb4a8bd73e34bb6547dd410cf"},{url:"categories/旧科技-改造优化/index.html",revision:"6c29c95efaee2b6d08b0d1d4b56704f0"},{url:"categories/杂谈/index.html",revision:"c6d7758a1fe9358dea32971036791d56"},{url:"categories/资源分享/index.html",revision:"f8ef8a07cd965a3c9ca32fd084fa5bd5"},{url:"css/costum.css",revision:"4a714e0de99f24043077648a2aa0a93b"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/highlight.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/index.css",revision:"17b15ca5852fabe9b567d5df5e015da7"},{url:"css/main.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/top.css",revision:"1689219215aaaf7c31c5c4aa2467b6da"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/default.png",revision:"5df848560d4c409795b8b48d71d0ddab"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"d058c0a688b2bb3747c7f335c3166cc4"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/fireworks.js",revision:"ab12b6c1c8c0942e41b90899a979b322"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/旧科技-Review/index.html",revision:"bc70a963328f8580819e7c156b11ce32"},{url:"tags/旧科技-改造优化/index.html",revision:"0e2ee100b4f5f76850a1a6f35627294d"},{url:"tags/杂谈/index.html",revision:"be73ee0b93dea2f195d81ed081600ca2"},{url:"tags/资源分享/index.html",revision:"cc10b14275721b1ba0329e193f9dd221"}],{})}));
//# sourceMappingURL=service-worker.js.map
