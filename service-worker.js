if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>a(e,r),f={module:{uri:r},exports:s,require:b};i[r]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"2671ae81b29e3bc352d100716cfd7b57"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"845a464e3f063f447b3e8a240a1daf2f"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"f9e7b10d40cf548b57bcf9774a9e95b0"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"73b8df38a777c9e892c9cf532aa1ce65"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"d0c3741aff7bd63d63b4e4d211aa3a7a"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"42daded9c7e6ec8c8a57ad9c82bf937d"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"6f9e201f14a3d44bee644f48b229ad7c"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"dc4e717551639fb1ad3b477cd89c58cf"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"543c32d83ee76051b97143b8958a2554"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"c10a22ae8fb270acd51e68bfef050c5a"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"7650fa36bd1eb26f8f6d036f2be1ce38"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"86d7a4f8b4557e0601efb1709b383ac2"},{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/07/index.html",revision:"4d0fe03e669fc91c6c2dbb2c003d2188"},{url:"archives/2022/10/index.html",revision:"bc876256a87385156553bed51b04e83c"},{url:"archives/2022/12/index.html",revision:"796f632f554909cd956b42ce3b93c360"},{url:"archives/2022/index.html",revision:"a9b0bae3b31cc5fa02c703caad3aa4e5"},{url:"archives/2023/01/index.html",revision:"35a0eedca75a7e0273039d822afef73b"},{url:"archives/2023/02/index.html",revision:"6b8d9ee3174de3e4d84ba4aeec258382"},{url:"archives/2023/03/index.html",revision:"d0a965d30074692bf1839f5526ba6645"},{url:"archives/2023/index.html",revision:"51224ac5df8b7cdae18705e0a74900dc"},{url:"archives/index.html",revision:"a306cca0cb24f025d8f0a79a00ac38dd"},{url:"archives/page/2/index.html",revision:"215de5d10224c495b377cff9ec7c8450"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/使用体验/index.html",revision:"2b4cfd3ffafb02e6f0e23412091599cd"},{url:"categories/技术分享/index.html",revision:"13e88020066dfdcb0956d3f6eee105f9"},{url:"categories/旧科技-Review/index.html",revision:"b269e6fcca72253e572940f0370f22c6"},{url:"categories/旧科技-改造优化/index.html",revision:"ecda9665e144aa10549cf01f6a68e364"},{url:"categories/杂谈/index.html",revision:"b36c36664b5fb4d9bba0b1d6a5fad526"},{url:"categories/资源分享/index.html",revision:"dbebcd786347f249d3d756f344d6b3bd"},{url:"categories/资源分享/系统分享/index.html",revision:"76d22bf562a5ac9b8c90584432679ad2"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/index.css",revision:"1253952b8ca2eef849f7b65f8af7d68b"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/wave.css",revision:"42b062ba4f5586197e4263750431032f"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/batocera.png",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/occover.jpg",revision:"91691b270df1a8ddf7de1c275759b76a"},{url:"images/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/default.png",revision:"5df848560d4c409795b8b48d71d0ddab"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"df843e7c48a05258de28b031b7b80472"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/index.html",revision:"22c2324c1a135e34801a623305242aaf"},{url:"tags/index-1.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/使用体验/index.html",revision:"c67aa74cc59697afaeb7d4021d726769"},{url:"tags/技术分享/index.html",revision:"bed6a46feb8b06a81e5d57fb83602e0b"},{url:"tags/旧科技-Review/index.html",revision:"6288d51992b410afc7632a59d1fd72b6"},{url:"tags/旧科技-改造优化/index.html",revision:"c60da1b5f301f1bfffda491048418b71"},{url:"tags/杂谈/index.html",revision:"cdf08da65b7c2167197e62d22621bff8"},{url:"tags/系统分享/index.html",revision:"85debdf19546cb5ed1a2dea165ffb6a9"},{url:"tags/资源分享/index.html",revision:"70042075235b31d8b63fa967144a26ee"}],{})}));
//# sourceMappingURL=service-worker.js.map
