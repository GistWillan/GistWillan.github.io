if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"ffe135ce86b24350ecf7bb46efa5bb4f"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"49cebddc167a627fc7df6510ed7a2959"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"c2a84e82766c14179c25c35befbe402b"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"de9200db0ad2a796efdced6ff9790d67"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"1d651343b10f86c8570ec3cc11b04431"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"4c0ca82f4823d526d3afe55646cd3814"},{url:"2023/02/24/苹果全家桶生态体验/index.html",revision:"0645a36053c237d2c785cb0b7290aacc"},{url:"2023/02/27/提升真的有那么大么？——A15架构分析/index.html",revision:"ddb68011d8900dec2abc703a34f9c46d"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"7f1029968b9df343755113bef156f1fe"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"27a3a7938e289d0c817862806155f38a"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"4d4c371919dc02b7573fa68816e647b5"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"3ab47c6cd078bb0704c75c9512f994bd"},{url:"2023/03/12/小屏手机爱好者福音——iPhoneSE3在2023年的使用体验/index.html",revision:"1d69ca3c07d9398e5046d0e683a056a0"},{url:"2023/03/16/必须要联网使用的系统一定就一无是处么？-ChromeOS使用体验/index.html",revision:"bfc0f303079326b7a1e150cb1984829f"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"d20234d50396171bc53ebb1e7d54fe89"},{url:"2023/04/14/在2023年折腾iPhone4s-本文实时更新/index.html",revision:"c090f4bcb551e2045e92609dcf9c41af"},{url:"2023/04/18/在2023年折腾Lumia640-本文实时更新/index.html",revision:"90be17d8517d1eb2eb66c678b46a7803"},{url:"2023/04/19/在Lumia设备上安装WindowsRT8-1/index.html",revision:"aff33111d61832970998caca0c00ecaf"},{url:"2023/07/01/iPad最强钉子户-iPad-Air2在2023年的使用体验/index.html",revision:"b8272723ba3a1f9ddfe1ef3ce6670b21"},{url:"2023/08/01/ChromeOS在国内必定小众？FydeOS使用体验/index.html",revision:"64eff12c9e3836c7c12c8146988ae093"},{url:"2023/09/12/苹果2023秋季发布会简单总结/index.html",revision:"a9a0e51d8f9a94e790fa93bc06471a5d"},{url:"2023/10/01/免费ChatGPT网站列表/index.html",revision:"b75ce42a3601502e63d658c20692ce37"},{url:"2023/12/17/旧版macOS软件安装包分享/index.html",revision:"dba5f8db23279131811beea3f9f5e11b"},{url:"2023/12/17/旧版Windows软件安装包分享/index.html",revision:"3584a134e4fe485d947871dced4e45c5"},{url:"404.html",revision:"4d90f82336553f637f08594969961ee4"},{url:"about/index.html",revision:"c040dfdf12d68f041f228e63a87e2381"},{url:"anzhiyu/random.js",revision:"a942395053c9d869eb6ac4efd909888e"},{url:"archives/2022/07/index.html",revision:"08305244e1c099e43703e490bf32341f"},{url:"archives/2022/10/index.html",revision:"481bb2b0520d93fb665ea7144f2aadc6"},{url:"archives/2022/12/index.html",revision:"e46782b9bd3898e226cca5375016e86e"},{url:"archives/2022/index.html",revision:"3fd4f488033779e754d1f27b542df85e"},{url:"archives/2023/01/index.html",revision:"0aa89a31c5b30ddc310411c8275abbc4"},{url:"archives/2023/02/index.html",revision:"0423fd44ffacb3c48089f43b61f63213"},{url:"archives/2023/03/index.html",revision:"4570d33001b88154af5fe48d3ea09066"},{url:"archives/2023/04/index.html",revision:"aba9ff2c38af6d8bad1ac5c233644fc6"},{url:"archives/2023/07/index.html",revision:"bd7cf20bc570559da4ea60c5cb836d38"},{url:"archives/2023/08/index.html",revision:"509efb22e60eaf524f64c7a79f46f593"},{url:"archives/2023/09/index.html",revision:"77ef69c3f412e1911562d15b5c7f2f6a"},{url:"archives/2023/10/index.html",revision:"09fd0bcf50679619ef6d1d56d60f157b"},{url:"archives/2023/12/index.html",revision:"df29b8859a325c28082b18a2270d4112"},{url:"archives/2023/index.html",revision:"2117ab0419489283640814fe89ee0bc5"},{url:"archives/2023/page/2/index.html",revision:"03601aab085add947234328dc1dafc7b"},{url:"archives/index.html",revision:"d86b24bb59ed04b47c07fdc73e83585a"},{url:"archives/page/2/index.html",revision:"13c0762c62d9b12dcadb17b60ecfa896"},{url:"archives/page/3/index.html",revision:"4c0b49f438ca963d50c24512bb8d73cf"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"3f9bd084e01b7403bc4b5bacf934f01d"},{url:"categories/index.html",revision:"d20558a73e9222fc3bc266a8bbe43833"},{url:"categories/使用体验/index.html",revision:"628ce549faffedff09f7791a425cfc51"},{url:"categories/使用体验/系统体验/index.html",revision:"6b161792e413b9e2d1226619ae16e289"},{url:"categories/总结/index.html",revision:"c7ae8b9d6d86cee2d471cbeb0afdd613"},{url:"categories/总结/苹果/index.html",revision:"157cff5e108d61a5a6fe66bb857bc8d0"},{url:"categories/技术分享/index.html",revision:"c76514dc2fc3163d8415e1bc3cad7ebc"},{url:"categories/旧科技-Review/index.html",revision:"06b2559dbfd318803059c3b442c3b36e"},{url:"categories/旧科技-改造优化/index.html",revision:"5cb1cda7a0ce93313422f19bd4340a8e"},{url:"categories/架构分析/index.html",revision:"16a25383b3ed0f17d66289608549b5cd"},{url:"categories/资源分享/index.html",revision:"7252d73a243a3265ec355be4af4218d9"},{url:"categories/资源分享/系统分享/index.html",revision:"85f696936ef2b6db7aac8473ddf04fd7"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"053258ceff8c78e9f9a46ff1a0e95cbb"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"769f150db1804648b2aecb592f652bc8"},{url:"essay/index.html",revision:"c527683ed452db9ddb0f9c1dd098779e"},{url:"images/1/lumiadone.jpg",revision:"11d644a63a9ee0294383f63585fc01a8"},{url:"images/1/sjm1.png",revision:"ed1ff4d18d57a5648a486fae63541402"},{url:"images/1/sjm2.png",revision:"6a8052b1d08d7e7e8a1aafa326664651"},{url:"images/1/sjm3.png",revision:"6c554cfc8f0d3a8516bc284c38dd0f4b"},{url:"images/11/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/11/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/12/ChromeFyde.png",revision:"9d4149c7e379ff57731998abb700fd60"},{url:"images/12/clashfydeos.png",revision:"8f656cd00b522431484f1d73ef549f05"},{url:"images/12/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/12/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/12/fydeosandroid.png",revision:"d59c79ebd6ee822607bcf2095bbf6a58"},{url:"images/12/fydeosmd.png",revision:"b5468277973d55b64fc32d9f28da2a6d"},{url:"images/12/fydeosplaystore.png",revision:"875f989556fcc5d7cf5c104556b23321"},{url:"images/12/fydeossscs.png",revision:"50516b64dee55992ce4ad4f1484bedde"},{url:"images/13/A151.jpg",revision:"d8f656329c71e983201cdc7e096f31ac"},{url:"images/14/air2appstore.png",revision:"3302b4cf9913a29c4457c7debaee1329"},{url:"images/14/air2games.png",revision:"13023cabc8e8939c3de0f2aaf7e21d51"},{url:"images/14/air2music.png",revision:"b5bdd04f5c813e4348699cc7bfec3ca1"},{url:"images/14/air2tt.png",revision:"fe577bb2a473a33d97345951e0d3f692"},{url:"images/14/air2video.png",revision:"2bcbe0b2c4115b60529455ab737d6f7f"},{url:"images/14/clock.png",revision:"d8f607835d8db14a13c8ff36d710fec9"},{url:"images/14/comparewithse3.jpg",revision:"93b412f8e4d9de217cb47b33c6c3dba6"},{url:"images/14/fenpin.png",revision:"850706003363fde2e9cdac13ebdd689b"},{url:"images/15/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/17/15.jpg",revision:"3968298514253d52c12a967e91fbe3be"},{url:"images/17/15Pro.jpg",revision:"aa7d84432729954f436f53b7685556a9"},{url:"images/17/a17pro.jpg",revision:"321bc8095022290659d36d083e366d9c"},{url:"images/17/s9.jpg",revision:"56abd2378d08a171b1b7f1b130762236"},{url:"images/17/ultra.jpg",revision:"d6b4f225c170850cd1af8475d0ab457d"},{url:"images/18/预览截图1.png",revision:"27e171faa04adad0c750575cf00f777e"},{url:"images/18/预览截图2.png",revision:"bf43495068947a581ebf4e4cddb9e8a2"},{url:"images/19/预览截图3.png",revision:"46d5c2487c6ccbcba9e9ad8843a71789"},{url:"images/2/alldone.jpg",revision:"a98d73d032fbd89f8db99d31e7412d36"},{url:"images/2/donedown.jpg",revision:"5bcd46eacebe01e6b45cd7b93258ee12"},{url:"images/2/i4jail.png",revision:"52387563e6cbd263362cf566a9e46b2e"},{url:"images/2/i4jail1.png",revision:"51b68ddc6ca2b9e7abacd4a59fe9ea25"},{url:"images/2/i4zs.png",revision:"6c69d3b108a8bbd77f20997583751640"},{url:"images/2/ip4d.jpg",revision:"71fd776d5a4acc1d94f0d305ab5f73d6"},{url:"images/2/ip4jailmac.png",revision:"bed56427bffc4d052ed3c382da8e62b7"},{url:"images/2/jiangji.jpg",revision:"9b9ec3fc1e4ae85ed3f08a480ccd8352"},{url:"images/2/upgrade.jpg",revision:"447ace15119ff9b2a04e842625495c21"},{url:"images/3/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/4/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/5/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/5/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/6/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/6/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/6/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/6/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/6/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/6/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/7/Batocera.jpg",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/7/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/8/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/8/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/8/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/8/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/8/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/9/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/9/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/9/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/9/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/9/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/9/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/9/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/about/632f0dd8f33c6.webp",revision:"077162aebb2c4ab4e8ed1633fd4e865f"},{url:"images/about/6398862649585.webp",revision:"7eec2417e23497e9e8458b2364b41422"},{url:"images/about/639886315d658.webp",revision:"94d50ec41fff0476ac3650e6c6178dea"},{url:"images/about/639886403d472.webp",revision:"c72bfec7821849252ea32b7e4747ea4b"},{url:"images/about/6398864e572ed.webp",revision:"a410766d05aa6c967e3f7292f30e0f55"},{url:"images/about/63988658aa1b1.webp",revision:"b19fe457756765b7f1c0a53ebc0ee0eb"},{url:"images/about/edu.png",revision:"81d3c012e238c04c1e8675bb50a7505a"},{url:"images/cover/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/cover/A15.jpg",revision:"aceff6c6795fb4334590093e4c04baf8"},{url:"images/cover/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/cover/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/cover/apple.jpg",revision:"6cd5657e6970b60f02e1dda486f1a801"},{url:"images/cover/AppleCover.jpg",revision:"217632a77e59a5465861e7cac3a5205a"},{url:"images/cover/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/cover/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/cover/chatgpt.png",revision:"1c8bb0d04adc8e54ba92e9308351bbca"},{url:"images/cover/ChromeOS.jpg",revision:"f384363ca280ba465d5ae1f751ccee41"},{url:"images/cover/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/cover/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/cover/iPadAir2Cover.jpg",revision:"9b17b47c8061c9facf4961116680e5df"},{url:"images/cover/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/cover/iPhone4s2023.jpg",revision:"1e3625b9c7229600cc79e3c6862f6b77"},{url:"images/cover/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/cover/Lumia6401.jpg",revision:"77212d1b89b46cfd508a9cf0402c8b1c"},{url:"images/cover/lumiacover1.jpg",revision:"f7cff447665cb428665138e13bb13e6a"},{url:"images/cover/mappcover.png",revision:"685f617a5983d3265e4dac579e94afbd"},{url:"images/cover/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/cover/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/cover/SE3.jpg",revision:"c61d74cb155ba9c1ec75bdacc5564d92"},{url:"images/cover/WindowsCover.png",revision:"f83cec0835554484f5941d45e70400bf"},{url:"images/equ/airpodspro2.png",revision:"4c5675810507c59d11b9618a6a32b529"},{url:"images/equ/imac.png",revision:"8a1357ca6540f4093038386685dc4003"},{url:"images/equ/ipadmini.png",revision:"99e9cee21176e721d79b44e8e8ed8fcd"},{url:"images/equ/ipadpro.png",revision:"6ebf9f2ed05a91cf60945fe6ac7e270f"},{url:"images/equ/iphone15.png",revision:"205bbc371ea68c7bad7cf33f1f12b596"},{url:"images/equ/iphonese2022.png",revision:"4fa428173cad221d56c3da7edfc0b300"},{url:"images/equ/m2macmini.png",revision:"b016b209d42a965a45d9fcf7cc5cfacd"},{url:"images/equ/mbp.png",revision:"86696af5c3c7b4e5c9d578565243f5c6"},{url:"images/equ/samsungm7.png",revision:"759a706e232ce46ffdf8b92c038f646d"},{url:"images/equ/studiodisplay.png",revision:"d0c41e22501ce89d07014d45df45130e"},{url:"images/essay/1.png",revision:"f37d3495539fc21a9e8984245ce87f86"},{url:"images/essay/2.png",revision:"e2c4ce7b5f819ac84e8ee3ac18a49df8"},{url:"images/essay/3.png",revision:"6ba2c0561b9847769673aa5f2ce20b5f"},{url:"images/essay/4s1.jpg",revision:"30de90ce3e03d829a4c9a4b57704f403"},{url:"images/essay/4s2.jpg",revision:"c2ec06c70a28ce77d6c08eb19acb80cb"},{url:"images/essay/a17pro.jpg",revision:"a2615dbc65064d8e4e2d8206e93d6ae4"},{url:"images/essay/airpods.jpg",revision:"b12789584b3d2170a7e4229e0aff750f"},{url:"images/essay/airpods1.jpg",revision:"6f1d6dccb645e42a6d32c8fa674ed90d"},{url:"images/essay/ap2023.jpg",revision:"0e1521cad1713be801df694251c50888"},{url:"images/essay/apb.jpg",revision:"6d287535218060721508f1752d79aa17"},{url:"images/essay/apm1.png",revision:"670834f1184ce93694bb1c0cec297870"},{url:"images/essay/apm2.png",revision:"5fd75aa2ed8ee62c7bc3d3c209fdc174"},{url:"images/essay/apms.jpg",revision:"afd767d1524d3389d425c48ec4412c88"},{url:"images/essay/appc.jpg",revision:"11692eb5952f5a3b369566e4a7d99fa2"},{url:"images/essay/bing.png",revision:"1f6806b27e8feb02d74ab00fb8e69008"},{url:"images/essay/gpt1.png",revision:"ead634fc24b0028008b5a26c3804336e"},{url:"images/essay/gpt2.png",revision:"c73ce30e6c0ec81fb1852b65aa0065d9"},{url:"images/essay/huilv.jpg",revision:"c0c5d2e4cd4ee9d584c309a5879be06c"},{url:"images/essay/macmini.jpg",revision:"d169476ef4cb1cddcb317bf889c9edfd"},{url:"images/essay/miku.jpg",revision:"34dc62c975a36589c8a5b902702c9ab2"},{url:"images/essay/nf.jpg",revision:"eedd68b66578aa670423332d8f19323e"},{url:"images/essay/phigros.png",revision:"81c8a7b6bca2b9fe0bdea5b231e88b9e"},{url:"images/essay/psc.webp",revision:"5b5d8b30b6f80b0b7a8426032b65a448"},{url:"images/essay/psc1.jpg",revision:"ba930bdbd615c59804ec21a43c2cc575"},{url:"images/essay/se2022.jpg",revision:"2cee7610f8499efc3dc86df17b4da499"},{url:"images/essay/Ventura1.jpg",revision:"5c98ff8456539731fc1660145969cb78"},{url:"images/essay/wwdc231.png",revision:"e54494be2e771ecc21ef33a1e2188c8a"},{url:"images/essay/wwdc232.png",revision:"98c01122208598462120389516de3152"},{url:"images/isfp.svg",revision:"2b1f635d6cdea7f73c1a97e736a23f54"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/macosicons.png",revision:"7e1aed44d289e6f83071976a67254f05"},{url:"images/top/ipadair2.png",revision:"610bede736b2d8a226e2aac8eb3cb14e"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"523e265108d70c2b63de96f0ec22f34a"},{url:"img/blog.png",revision:"899ec0680f7e15dab5b5f8dcd8037824"},{url:"img/chat.png",revision:"4f75e9fd2ad1afbab937286e0f5aacff"},{url:"img/cloud.png",revision:"bb216c2102b72d8b50750b12350c7025"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/default1.png",revision:"816b20577e5213512dcc1563639856d6"},{url:"img/default10.png",revision:"6253d6a22ac90d3556116091db16a6ba"},{url:"img/default101.png",revision:"f7dcd4047f465e8f546b153ea66c3e66"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gistwillan.jpg",revision:"523e265108d70c2b63de96f0ec22f34a"},{url:"img/home.png",revision:"afd3326c2fff61083c32ecb6213618e6"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"56ff65c5baf4d7d935b66685417f88c6"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"img/study.png",revision:"1050046ab2938fc403dde65f59b95f08"},{url:"img/wordpress.png",revision:"4870ad6ce6cf9d88c60aa9ec4ac62de2"},{url:"img/wxpay.png",revision:"3b46af2396dc77222288ca254d814cb9"},{url:"img/zfb.jpg",revision:"95f85c6fd0113714e5e4423392a89c58"},{url:"index.html",revision:"f61ccba448ed4f123c434c1c00584dd5"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"67241f68a924680da7451e44cbad8ff9"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"efcd29fcb3084e0e222d8bf2643fe2ac"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"f0f75bac8a95931f9df7a01404f45251"},{url:"page/2/index.html",revision:"22ada44ca358aac6dec15747e5baf118"},{url:"page/3/index.html",revision:"10eaa02b003ba553739c234c7f3ff8d0"},{url:"tags/index-1.html",revision:"f48bbaa2ada3bf95791efbbe4915dc3a"},{url:"tags/index.html",revision:"fb5996b98c2b5ab0dac4a0ebbef5b5bc"},{url:"tags/使用体验/index.html",revision:"ae3ba0d0929340697319b50eb5228743"},{url:"tags/总结/index.html",revision:"c46aa1aff2f682c1be21b9cc2bb6c766"},{url:"tags/技术分享/index.html",revision:"e394bba69b79262fe32000c81fa583d3"},{url:"tags/旧科技-Review/index.html",revision:"dd6ee4d17c83cf322e85fa513d8d5231"},{url:"tags/旧科技-改造优化/index.html",revision:"07100cb620ebda33e44a732c4f6969df"},{url:"tags/架构分析/index.html",revision:"faf24215f88382b04f32810f8f7da68b"},{url:"tags/系统体验/index.html",revision:"9592dfb4684abbc440c394e6c2809e5f"},{url:"tags/系统分享/index.html",revision:"1a2bc9fca3c8e5d6aeda00552b2c7348"},{url:"tags/苹果/index.html",revision:"28ce72d7234fd705534332c95bfc0df9"},{url:"tags/资源分享/index.html",revision:"eb36dac526418abe20b5652aee9fca5c"}],{})}));
//# sourceMappingURL=service-worker.js.map
