if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const b=e=>a(e,r),f={module:{uri:r},exports:d,require:b};i[r]=Promise.all(s.map((e=>f[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"1ca08332a8fd64415461538a01fa0920"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"00dc3061267bd6f6935b4469c6e1b41c"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"8f0d56a4b0954989ed2e0b6d72805aed"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"6dbc0be463841b05eecb81dafcaf124b"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"cccafed201695b0689baab27bc83cf71"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"244545a5f1218a8f9793448b12df07d2"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"358658515ce5d47690bbcb9d9c6a313a"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"341ad27720f03e61ed63f9b1e97e8476"},{url:"about/index.html",revision:"c67fe6fd59a8e56e835d49c1624ad605"},{url:"archives/2022/07/index.html",revision:"0c7e61a8138a5e3cbef90f1dff34aeef"},{url:"archives/2022/10/index.html",revision:"49515720c7e6a8a1bf4468f9f02b32c2"},{url:"archives/2022/index.html",revision:"3928bc739e61431e711a96e73109cd88"},{url:"archives/2023/01/index.html",revision:"d946d30f5982716d3c57570e2ac2a040"},{url:"archives/2023/02/index.html",revision:"f0c66073f541c45d06ad9f606db7a766"},{url:"archives/2023/03/index.html",revision:"10b853c2321283a1ba7a73b69eb3573f"},{url:"archives/2023/index.html",revision:"9218709f84bba998f2c16222392871d5"},{url:"archives/index.html",revision:"bfe9eaa743b53ac35745e698f554469e"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"d0d10a8dac8f08b3120c3633755504d6"},{url:"categories/index.html",revision:"2411f4209dae024406f635e5d656ff22"},{url:"categories/技术分享/index.html",revision:"45ab7a5bb4a2a78c3a27b38da667fc00"},{url:"categories/旧科技-Review/index.html",revision:"9c237a42757b88b6adeffad8a0c7af9a"},{url:"categories/旧科技-改造优化/index.html",revision:"0eebe539df0b19bc89ba33f613c41b1b"},{url:"categories/杂谈/index.html",revision:"086c0b048af168887e3f14e252cabd8d"},{url:"categories/资源分享/index.html",revision:"7ea60448a12911d0a209bbedc08ec61b"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/index.css",revision:"40faa69b0b5919160aa6d516ff3c581e"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/default.png",revision:"5df848560d4c409795b8b48d71d0ddab"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f3344198936a64e927c68f611d081c24"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index-1.html",revision:"bd31fe847d5b93f4edff28ebf58abdea"},{url:"tags/index.html",revision:"690fb6725ab8b696ac5a311d56a17c97"},{url:"tags/技术分享/index.html",revision:"2d744e9c8399656fe12f1e3a2c6bed13"},{url:"tags/旧科技-Review/index.html",revision:"7d0449332a0b475e8f6f09bf0802ae23"},{url:"tags/旧科技-改造优化/index.html",revision:"d93545789127b3b9c13c602b17ace979"},{url:"tags/杂谈/index.html",revision:"ea53d224926993a242e9fe44876ff19f"},{url:"tags/资源分享/index.html",revision:"cdc821d619bdcef4b94fe9d53edfc563"}],{})}));
//# sourceMappingURL=service-worker.js.map