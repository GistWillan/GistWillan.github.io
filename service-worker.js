if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"e383e1058461b8dfc601f49f48baed0f"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"6adbc7027899bb00cd7cbf3ec2678fc2"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"76b3406e8babf3fa566db70f0b01cc7b"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"fd064811356e82398fed6e789b9f0682"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"aa7c6867061892b6aa98bd6431726f57"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"f2aad225c912d883560d9f06949be202"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"6911ab2e9336d614503cde9f5cc020d1"},{url:"2023/02/24/苹果全家桶生态体验/index.html",revision:"fe397ed09b81453144e41a5c9cbef76f"},{url:"2023/02/27/提升真的有那么大么？——A15架构分析/index.html",revision:"f5949ddd8f2e187bc9a660a99621b8b7"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"cb9b29b06e543c30e361384a9dbb4bf6"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"76a16f8d4339c8e17d44ba89bf252ad3"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"f10b31db84bdcb604c94c70f7fec0c9d"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"7bfb16659dd9d72a73b6d6f17c702fe3"},{url:"2023/03/12/小屏手机爱好者福音——iPhoneSE3在2023年的使用体验/index.html",revision:"f5c73e8505194803677e0d9dea5789f6"},{url:"2023/03/16/必须要联网使用的系统一定就一无是处么？-ChromeOS使用体验/index.html",revision:"096d0abb47177af50885377ce5c4a35a"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"edaf11b5b74e7237528f0d30fa5d0705"},{url:"2023/04/14/在2023年折腾iPhone4s-本文实时更新/index.html",revision:"1a5a52a031dc735b005bed443ce9e904"},{url:"2023/04/18/在2023年折腾Lumia640-本文实时更新/index.html",revision:"4b31e0623e74f2341d3eeff93394fb70"},{url:"2023/04/19/在Lumia设备上安装WindowsRT8-1/index.html",revision:"40d07ba6f65e8f33f4bd91e2939da137"},{url:"2023/07/01/iPad最强钉子户-iPad-Air2在2023年的使用体验/index.html",revision:"eb1649e568dfbdd098bf979262db63f5"},{url:"404.html",revision:"36cfed6bfa3c90b0dbffe8e011b8c60d"},{url:"about/index.html",revision:"202554bb095e2ed7eecea9e69ed73acf"},{url:"anzhiyu/random.js",revision:"b782d2a127a87d1cff52667f0469997d"},{url:"archives/2022/07/index.html",revision:"99127d645af5f432eb4f2e421d11b2bf"},{url:"archives/2022/10/index.html",revision:"3c16dfeed8f285160c4cbb74fb4bf0d0"},{url:"archives/2022/12/index.html",revision:"c81a3d8abd493be079b8c7b80f233796"},{url:"archives/2022/index.html",revision:"8681ad537d1c5a8a2da8b91333c42d11"},{url:"archives/2023/01/index.html",revision:"d369daff4886043316a5b1134016c130"},{url:"archives/2023/02/index.html",revision:"86dc802f03adbbf1db5410dc00a66fb1"},{url:"archives/2023/03/index.html",revision:"55fd2523c9ff70606952b0a15f1d4d9e"},{url:"archives/2023/04/index.html",revision:"9cfc3c9bbfbefba3b7e7f0007a7028c5"},{url:"archives/2023/07/index.html",revision:"6e7805e9d92ca43832bea33113f4c15d"},{url:"archives/2023/index.html",revision:"96b094352fcf085a9778dd03b1079078"},{url:"archives/2023/page/2/index.html",revision:"e9eedc353ca79d067c23cb59a4dde8fb"},{url:"archives/index.html",revision:"cbbc842d0986196c20ec8ac011a75e31"},{url:"archives/page/2/index.html",revision:"814cd1fbadd589a80db2ba43fe9f6cfd"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"ecdfceb1f8893f099e03d15de19eda05"},{url:"categories/index.html",revision:"e7e12bdf2ed4faf86d643d41998f247b"},{url:"categories/使用体验/index.html",revision:"c8373d3280863db8b308b86d370f9f83"},{url:"categories/技术分享/index.html",revision:"6e2f8d03081edee450e516b40d96e4ac"},{url:"categories/旧科技-Review/index.html",revision:"f59971027d44d08179a50131b1bf15bf"},{url:"categories/旧科技-改造优化/index.html",revision:"2ae9fd57a58a9595eded0c15e443a97b"},{url:"categories/杂谈/index.html",revision:"60da5ff11ac42625b97c8ed61ab597b5"},{url:"categories/架构分析/index.html",revision:"753582c11c0d14d4c309537b135ae6bb"},{url:"categories/资源分享/index.html",revision:"283f8a9faf727da7ada5bb7a8b3aff84"},{url:"categories/资源分享/系统分享/index.html",revision:"8c8d1e18312387822bfdf80293441325"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"7882a8f4a1066263093110c0f8064078"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"f1df57bde16372ab3371d7d5a0c6729f"},{url:"google631b4e94ec9f717f.html",revision:"8d39f03a77e7d61e774a8aa1681cd54e"},{url:"images/4s1.jpg",revision:"30de90ce3e03d829a4c9a4b57704f403"},{url:"images/4s2.jpg",revision:"c2ec06c70a28ce77d6c08eb19acb80cb"},{url:"images/632f0dd8f33c6.webp",revision:"077162aebb2c4ab4e8ed1633fd4e865f"},{url:"images/6398862649585.webp",revision:"7eec2417e23497e9e8458b2364b41422"},{url:"images/639886315d658.webp",revision:"94d50ec41fff0476ac3650e6c6178dea"},{url:"images/639886403d472.webp",revision:"c72bfec7821849252ea32b7e4747ea4b"},{url:"images/6398864e572ed.webp",revision:"a410766d05aa6c967e3f7292f30e0f55"},{url:"images/63988658aa1b1.webp",revision:"b19fe457756765b7f1c0a53ebc0ee0eb"},{url:"images/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/A15.jpg",revision:"aceff6c6795fb4334590093e4c04baf8"},{url:"images/A151.jpg",revision:"d8f656329c71e983201cdc7e096f31ac"},{url:"images/air2appstore.png",revision:"3302b4cf9913a29c4457c7debaee1329"},{url:"images/air2games.png",revision:"13023cabc8e8939c3de0f2aaf7e21d51"},{url:"images/air2music.png",revision:"b5bdd04f5c813e4348699cc7bfec3ca1"},{url:"images/air2tt.png",revision:"fe577bb2a473a33d97345951e0d3f692"},{url:"images/air2video.png",revision:"2bcbe0b2c4115b60529455ab737d6f7f"},{url:"images/airpods.jpg",revision:"b12789584b3d2170a7e4229e0aff750f"},{url:"images/airpods1.jpg",revision:"6f1d6dccb645e42a6d32c8fa674ed90d"},{url:"images/alldone.jpg",revision:"a98d73d032fbd89f8db99d31e7412d36"},{url:"images/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/apb.jpg",revision:"6d287535218060721508f1752d79aa17"},{url:"images/appc.jpg",revision:"11692eb5952f5a3b369566e4a7d99fa2"},{url:"images/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/AppleCover.jpg",revision:"217632a77e59a5465861e7cac3a5205a"},{url:"images/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/batocera.png",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/bili.png",revision:"cd10e928394183471f8bab812a3e2a5d"},{url:"images/ChromeOS.jpg",revision:"f384363ca280ba465d5ae1f751ccee41"},{url:"images/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/comparewithse3.jpg",revision:"93b412f8e4d9de217cb47b33c6c3dba6"},{url:"images/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/donedown.jpg",revision:"5bcd46eacebe01e6b45cd7b93258ee12"},{url:"images/edu.png",revision:"4e345287aef2072ad2d203f950755dc8"},{url:"images/fenpin.png",revision:"850706003363fde2e9cdac13ebdd689b"},{url:"images/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/games.png",revision:"e2af4ddf627cb25c972ba5e1b815b7fa"},{url:"images/gpt1.png",revision:"ead634fc24b0028008b5a26c3804336e"},{url:"images/gpt2.png",revision:"c73ce30e6c0ec81fb1852b65aa0065d9"},{url:"images/huilv.jpg",revision:"c0c5d2e4cd4ee9d584c309a5879be06c"},{url:"images/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/i4jail.png",revision:"52387563e6cbd263362cf566a9e46b2e"},{url:"images/i4jail1.png",revision:"51b68ddc6ca2b9e7abacd4a59fe9ea25"},{url:"images/i4zs.png",revision:"6c69d3b108a8bbd77f20997583751640"},{url:"images/ip4d.jpg",revision:"71fd776d5a4acc1d94f0d305ab5f73d6"},{url:"images/ip4jailmac.png",revision:"bed56427bffc4d052ed3c382da8e62b7"},{url:"images/iPadAir2Cover.jpg",revision:"9b17b47c8061c9facf4961116680e5df"},{url:"images/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/iPhone4s2023.jpg",revision:"1e3625b9c7229600cc79e3c6862f6b77"},{url:"images/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/jail1.png",revision:"8bb9f94524b7b4a6d276b9e532c6ee12"},{url:"images/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/jiangji.jpg",revision:"9b9ec3fc1e4ae85ed3f08a480ccd8352"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/lumia1111.png",revision:"e0e62cf7941297098276c25ff9fac0af"},{url:"images/lumia1234.png",revision:"e17d06a28ceb2e98d2d47f8374f72563"},{url:"images/Lumia6401.jpg",revision:"77212d1b89b46cfd508a9cf0402c8b1c"},{url:"images/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/lumiacover1.jpg",revision:"f7cff447665cb428665138e13bb13e6a"},{url:"images/lumiadone.jpg",revision:"11d644a63a9ee0294383f63585fc01a8"},{url:"images/macmini.jpg",revision:"d169476ef4cb1cddcb317bf889c9edfd"},{url:"images/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/macosicons.png",revision:"7e1aed44d289e6f83071976a67254f05"},{url:"images/miku.jpg",revision:"34dc62c975a36589c8a5b902702c9ab2"},{url:"images/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/nf.jpg",revision:"eedd68b66578aa670423332d8f19323e"},{url:"images/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/occover.jpg",revision:"91691b270df1a8ddf7de1c275759b76a"},{url:"images/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/phigros.png",revision:"81c8a7b6bca2b9fe0bdea5b231e88b9e"},{url:"images/psc.webp",revision:"5b5d8b30b6f80b0b7a8426032b65a448"},{url:"images/psc1.jpg",revision:"ba930bdbd615c59804ec21a43c2cc575"},{url:"images/SE3.jpg",revision:"c61d74cb155ba9c1ec75bdacc5564d92"},{url:"images/sjm1.png",revision:"ed1ff4d18d57a5648a486fae63541402"},{url:"images/sjm2.png",revision:"6a8052b1d08d7e7e8a1aafa326664651"},{url:"images/sjm3.png",revision:"6c554cfc8f0d3a8516bc284c38dd0f4b"},{url:"images/steamlink1.png",revision:"37a53ad7f2463c574f58629db1790935"},{url:"images/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/upgrade.jpg",revision:"447ace15119ff9b2a04e842625495c21"},{url:"images/Ventura1.jpg",revision:"5c98ff8456539731fc1660145969cb78"},{url:"images/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/wp123.png",revision:"eeacc39c49d5147876e2f845bb0413e7"},{url:"images/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/wwdc231.png",revision:"e54494be2e771ecc21ef33a1e2188c8a"},{url:"images/wwdc232.png",revision:"98c01122208598462120389516de3152"},{url:"images/ytb.png",revision:"eff8acbad9a813d2b8a7b2c8f88f5610"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"dc958662788649b6a74b8579ea28a3c6"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/chat.png",revision:"7c0128d67bacb90c9a0b53f63b0dea17"},{url:"img/cloud.png",revision:"bb216c2102b72d8b50750b12350c7025"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/default.png",revision:"9922ca8f18f1209af241cb64bb1b67f5"},{url:"img/default1.png",revision:"92dffc2ca7cc1711969d9f30084baade"},{url:"img/default10.png",revision:"f7dcd4047f465e8f546b153ea66c3e66"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gistwillan.jpg",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"56ff65c5baf4d7d935b66685417f88c6"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"img/wechat.jpg",revision:"1a26f31a6cc2eb33d66a3ff86f88bb52"},{url:"img/wordpress.png",revision:"00249e8675690a9ce68efc3855463f44"},{url:"index.html",revision:"e4a601ba94aa5d3e197342b545677e66"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"b574ba660784ed76e9a6ffc4394b7315"},{url:"page/2/index.html",revision:"2da8ee8767d87bcfb3947a5f4753e70d"},{url:"tags/index-1.html",revision:"94fdf90e5ce40ea83051d7ef1d331be2"},{url:"tags/index.html",revision:"afd178bce36fada74443f26792978077"},{url:"tags/使用体验/index.html",revision:"59e76d00260adbf8a3705952a548b9c3"},{url:"tags/技术分享/index.html",revision:"f2cb38e354582369f30b745995a3b4d1"},{url:"tags/旧科技-Review/index.html",revision:"e31ed094a999262ea8584e5a8318f42b"},{url:"tags/旧科技-改造优化/index.html",revision:"bd7f7b288ac7886712765b9581c6284d"},{url:"tags/杂谈/index.html",revision:"6cf7e5d676b5600aedebb6533ca94d37"},{url:"tags/架构分析/index.html",revision:"1ef14bc30366fe39bddad001862bc8ae"},{url:"tags/系统分享/index.html",revision:"392d3288ff532ab5ff2f424cf349d40b"},{url:"tags/资源分享/index.html",revision:"38cc1170cad4a7dfc271ab9ce93d1f48"}],{})}));
//# sourceMappingURL=service-worker.js.map
