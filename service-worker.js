if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"fb347a13a9242d0431bd11850bc0c9d4"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"0c38e5752cb91cda5d97eb8ae4e7abf5"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"0163451abada331ebe0543b9efcf7897"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"cd36bedac90ceeecaaad7ae6092bc68b"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"d7d992bd33463efd40563c864f2c8e4c"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"451379182730f7c75149dc09b5484971"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"c7a485607a3685849c9fea6f4f26f058"},{url:"2023/02/24/苹果全家桶生态体验/index.html",revision:"6bb58cea178b84f84f5be6fd04608548"},{url:"2023/02/27/提升真的有那么大么？——A15架构分析/index.html",revision:"23346bef3e385492e70072899112dc2a"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"b366c3638f0bb4befc79f9faecae70c1"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"19ccf88d3bd572d5286d843ba8d4c3ea"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"230dcdac68a8df44fd9645009a3e1e7d"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"1c772485e74e799b8d4dc5e3815f98d0"},{url:"2023/03/12/小屏手机爱好者福音——iPhoneSE3在2023年的使用体验/index.html",revision:"6e70b700fa30dde37bee428dc71273cc"},{url:"2023/03/16/必须要联网使用的系统一定就一无是处么？-ChromeOS使用体验/index.html",revision:"da8338008cde02bf5bed246c295d2f7a"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"6320a44d35a1078c48ed5c84528bcb5d"},{url:"2023/04/14/在2023年折腾iPhone4s-本文实时更新/index.html",revision:"edb6ade2444be04affd6d30dd3d8cd88"},{url:"2023/04/18/在2023年折腾Lumia640-本文实时更新/index.html",revision:"e4c216a785ccf8ef2e177847d28f0c3d"},{url:"2023/04/19/在Lumia设备上安装WindowsRT8-1/index.html",revision:"c7016a69bf8c2ea45bd9c37fe50abf81"},{url:"404.html",revision:"1a7800c46128c97717229996832058ac"},{url:"anzhiyu/random.js",revision:"9f54cb35912f423a8db75af6d2142f81"},{url:"archives/2022/07/index.html",revision:"11b391aead63554c38eab4b4fd0b3e86"},{url:"archives/2022/10/index.html",revision:"747f55a6f4e45e1718179afac4b266cd"},{url:"archives/2022/12/index.html",revision:"d4c644acd545a6acef89a732331d68a9"},{url:"archives/2022/index.html",revision:"2801a7d0f8bb098d20ecd59a2a97f002"},{url:"archives/2023/01/index.html",revision:"9fce5adb1fec62330aae73689618558c"},{url:"archives/2023/02/index.html",revision:"de0a62bbcaa1645d0338740a9c353283"},{url:"archives/2023/03/index.html",revision:"754fff5d443c33a00d569ce8100df4d5"},{url:"archives/2023/04/index.html",revision:"0a560e028cb1cdf09d007f02ae111ca1"},{url:"archives/2023/index.html",revision:"ba29b96e216a267ba934515b8502a437"},{url:"archives/2023/page/2/index.html",revision:"412c3b5847e4862adb8ceb69f63b639b"},{url:"archives/index.html",revision:"f422f7a1ba3b9b1bf8e506da9ee35427"},{url:"archives/page/2/index.html",revision:"c2360c3e756a75a5241577dd9eb63e45"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"c5d0c5b5a05004bc6783d7ebe4ff7fa3"},{url:"categories/index.html",revision:"a48527df142b8ec03f715b955d561563"},{url:"categories/使用体验/index.html",revision:"391ad91244ca33fa02e9d07b230fc013"},{url:"categories/技术分享/index.html",revision:"3a9f9fc7598ffe728f1559678374499b"},{url:"categories/旧科技-Review/index.html",revision:"39f56d860ffec5bcd9ae52375409bda3"},{url:"categories/旧科技-改造优化/index.html",revision:"1135f6bc7d8cde3ca1d1e636632fcc1f"},{url:"categories/杂谈/index.html",revision:"547a0f864b3177c9299c8f27e45f0d65"},{url:"categories/架构分析/index.html",revision:"87d1fd0f116aaaac3ad338ace62968a1"},{url:"categories/资源分享/index.html",revision:"09c2c2eda5af88286482cc214ba3a2a5"},{url:"categories/资源分享/系统分享/index.html",revision:"d1eee9a90312ac7898a70aa646fa8848"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"50626f4450d099383c2b2502d8390187"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"f5df3f544ee2b599c91e09a6742bc885"},{url:"images/4s1.jpg",revision:"30de90ce3e03d829a4c9a4b57704f403"},{url:"images/4s2.jpg",revision:"c2ec06c70a28ce77d6c08eb19acb80cb"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/A15.jpg",revision:"aceff6c6795fb4334590093e4c04baf8"},{url:"images/A151.jpg",revision:"d8f656329c71e983201cdc7e096f31ac"},{url:"images/alldone.jpg",revision:"a98d73d032fbd89f8db99d31e7412d36"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apb.jpg",revision:"6d287535218060721508f1752d79aa17"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/AppleCover.jpg",revision:"217632a77e59a5465861e7cac3a5205a"},{url:"images/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/batocera.png",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/ChromeOS.jpg",revision:"f384363ca280ba465d5ae1f751ccee41"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/donedown.jpg",revision:"5bcd46eacebe01e6b45cd7b93258ee12"},{url:"images/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/gpt1.png",revision:"ead634fc24b0028008b5a26c3804336e"},{url:"images/gpt2.png",revision:"c73ce30e6c0ec81fb1852b65aa0065d9"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/i4jail.png",revision:"52387563e6cbd263362cf566a9e46b2e"},{url:"images/i4jail1.png",revision:"51b68ddc6ca2b9e7abacd4a59fe9ea25"},{url:"images/i4zs.png",revision:"6c69d3b108a8bbd77f20997583751640"},{url:"images/ip4d.jpg",revision:"71fd776d5a4acc1d94f0d305ab5f73d6"},{url:"images/ip4jailmac.png",revision:"bed56427bffc4d052ed3c382da8e62b7"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhone4s2023.jpg",revision:"1e3625b9c7229600cc79e3c6862f6b77"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/jail1.png",revision:"8bb9f94524b7b4a6d276b9e532c6ee12"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/jiangji.jpg",revision:"9b9ec3fc1e4ae85ed3f08a480ccd8352"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/lumia1111.png",revision:"e0e62cf7941297098276c25ff9fac0af"},{url:"images/lumia1234.png",revision:"e17d06a28ceb2e98d2d47f8374f72563"},{url:"images/Lumia6401.jpg",revision:"77212d1b89b46cfd508a9cf0402c8b1c"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/lumiacover1.jpg",revision:"f7cff447665cb428665138e13bb13e6a"},{url:"images/lumiadone.jpg",revision:"11d644a63a9ee0294383f63585fc01a8"},{url:"images/macmini.jpg",revision:"d169476ef4cb1cddcb317bf889c9edfd"},{url:"images/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/macosicons.png",revision:"7e1aed44d289e6f83071976a67254f05"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/occover.jpg",revision:"91691b270df1a8ddf7de1c275759b76a"},{url:"images/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/phigros.png",revision:"81c8a7b6bca2b9fe0bdea5b231e88b9e"},{url:"images/SE3.jpg",revision:"c61d74cb155ba9c1ec75bdacc5564d92"},{url:"images/sjm1.png",revision:"ed1ff4d18d57a5648a486fae63541402"},{url:"images/sjm2.png",revision:"6a8052b1d08d7e7e8a1aafa326664651"},{url:"images/sjm3.png",revision:"6c554cfc8f0d3a8516bc284c38dd0f4b"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/upgrade.jpg",revision:"447ace15119ff9b2a04e842625495c21"},{url:"images/Ventura1.jpg",revision:"5c98ff8456539731fc1660145969cb78"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/wp123.png",revision:"eeacc39c49d5147876e2f845bb0413e7"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/wwdc231.png",revision:"e54494be2e771ecc21ef33a1e2188c8a"},{url:"images/wwdc232.png",revision:"98c01122208598462120389516de3152"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"dc958662788649b6a74b8579ea28a3c6"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/cloud.png",revision:"bb216c2102b72d8b50750b12350c7025"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/default.png",revision:"9922ca8f18f1209af241cb64bb1b67f5"},{url:"img/default1.png",revision:"92dffc2ca7cc1711969d9f30084baade"},{url:"img/default10.png",revision:"f7dcd4047f465e8f546b153ea66c3e66"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gistwillan.jpg",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"56ff65c5baf4d7d935b66685417f88c6"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"img/wechat.jpg",revision:"1a26f31a6cc2eb33d66a3ff86f88bb52"},{url:"index.html",revision:"c9e3d542fce3d5cfbf5d852392bf0f14"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"bbb8b5179eead4555cee82d2be3a2ff0"},{url:"js/search/algolia.js",revision:"795de817ad38fd733563ed7a99cd6e45"},{url:"js/search/local-search.js",revision:"88ead59c73c8b7b76e538808e7a7480a"},{url:"js/tw_cn.js",revision:"67f620839eb1b2d1650d3ca541ad78d2"},{url:"js/utils.js",revision:"5c21a94a6cbc245bfc4271e3e9d4f53c"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/index.html",revision:"14ffa51298f2fafdb2c4f79f7b613935"},{url:"tags/index-1.html",revision:"6739439f5dbe0f54b3917fab3ecd4bcb"},{url:"tags/index.html",revision:"040c65311c8cfc3d5ad6eebb1ec634a2"},{url:"tags/使用体验/index.html",revision:"521d60a8ebfa850492ee346c03616f9c"},{url:"tags/技术分享/index.html",revision:"33ee930801455f9f10c057640b33519a"},{url:"tags/旧科技-Review/index.html",revision:"48eb51923243d29ed91d5758a00448c2"},{url:"tags/旧科技-改造优化/index.html",revision:"2b2f965edc07141107a23be0c60ebdea"},{url:"tags/杂谈/index.html",revision:"4104273ae3991bb38e8df189ecaddeea"},{url:"tags/架构分析/index.html",revision:"2c1e6e27d5c154f10b5db41bbb969095"},{url:"tags/系统分享/index.html",revision:"14c83565faede114ca352060617dbcf8"},{url:"tags/资源分享/index.html",revision:"d9ebb0dca46fda8e7d59ebfc093b8f93"}],{})}));
//# sourceMappingURL=service-worker.js.map
