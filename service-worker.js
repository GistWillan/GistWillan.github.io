if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>a(e,r),f={module:{uri:r},exports:s,require:b};i[r]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(d(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"ce2cc087633c63be374aade1c3959ce6"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"85f55bfdb1b003f178c74d846b94f049"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"76f0af8c4665cda2be16e31d40a3b148"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"5de003cfa2bdd319f4b84b45d338a205"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"2d2c3be59939a549002a2c5b459a25cf"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"45faf5c06faf914b82b933866eefb90f"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"38d22eb26124a986c165667c28fc38c3"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"d57dfaadc656319c07ad3de8659c9197"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"04b172cb3e52153f10f89aa113ceab90"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"51528b821b9ff64aea15318bda6210e4"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"5812cb6c50a3257a6434dcb48980a7cf"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"800aea90ab8f8684e10d7f908b28f3c4"},{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/07/index.html",revision:"da488af5b4e796046eb59ba8269348ca"},{url:"archives/2022/10/index.html",revision:"60e27a6bac7076956e4a00851b2af5a5"},{url:"archives/2022/12/index.html",revision:"af484cd1f9df37b6a70cba91c7fdc57c"},{url:"archives/2022/index.html",revision:"4170b1a98c4aa41038196f77718bc342"},{url:"archives/2023/01/index.html",revision:"dd450a6cc332ee5317b4967af7826e86"},{url:"archives/2023/02/index.html",revision:"5f47d47decf477a91bbcb5fe9a8e27ab"},{url:"archives/2023/03/index.html",revision:"8815c94b308ec7ac6f457f9c93f2dff7"},{url:"archives/2023/index.html",revision:"98e5bbe933fcedb90cf65259862ff069"},{url:"archives/index.html",revision:"bb451442ce8acfa640353d597277d1f9"},{url:"archives/page/2/index.html",revision:"4270b9c6fac1e6342061aa449108b6b4"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/使用体验/index.html",revision:"ab80a8d7be5853af7bf4ba361ad6f718"},{url:"categories/技术分享/index.html",revision:"1220e83c80cfff8b07d54899d2a3e4f9"},{url:"categories/旧科技-Review/index.html",revision:"dbde7017d936afbabd3335b6a39a118e"},{url:"categories/旧科技-改造优化/index.html",revision:"bbd2a86d33a49c72ad99698a319378a5"},{url:"categories/杂谈/index.html",revision:"b5be6d61dd9cc8d1756cf0e37f8b32d8"},{url:"categories/资源分享/index.html",revision:"15da4fff72b13fbb8a5cb49ac85676db"},{url:"categories/资源分享/系统分享/index.html",revision:"7b15be3aa27fd13540f86416beac60ca"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"1253952b8ca2eef849f7b65f8af7d68b"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/wave.css",revision:"42b062ba4f5586197e4263750431032f"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/batocera.png",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/occover.jpg",revision:"91691b270df1a8ddf7de1c275759b76a"},{url:"images/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/default.png",revision:"5df848560d4c409795b8b48d71d0ddab"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"47f5beb1497033322d7268964f3d2772"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/index.html",revision:"772230f3f44dd137112c47d89aabc890"},{url:"tags/index-1.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/使用体验/index.html",revision:"8517ea2b8593bb1dfa64605b9e34c69d"},{url:"tags/技术分享/index.html",revision:"c86a8c81da2db52853e57b2065479874"},{url:"tags/旧科技-Review/index.html",revision:"fedf7726c7a8f30ca849d19a9ad26e84"},{url:"tags/旧科技-改造优化/index.html",revision:"7e6fa9b4cff1628f7e7a1800e912752d"},{url:"tags/杂谈/index.html",revision:"29e42445aa7f159b71d84d8542875765"},{url:"tags/系统分享/index.html",revision:"d93735b067c21f17b1bcbe8c8284a91e"},{url:"tags/资源分享/index.html",revision:"c50105afc08efa57cbfef48e380ece43"}],{})}));
//# sourceMappingURL=service-worker.js.map
