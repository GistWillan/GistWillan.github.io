if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"9711d3f761dcd2d67fc0491bc3f46a1b"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"ce719e9e820484ce780ec30bb604dd73"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"683f83c4852b7ca40e129f2c737534f3"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"a8cd25a0c9abcc1ff4ef279658e63dfd"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"8f22d727588354f5ce101e86c48271d7"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"354c3ac817f8a9b00ce0a34aaf4edcf6"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"d565c5a7783b35d6c989f6c774fcd47a"},{url:"2023/02/24/苹果全家桶生态体验/index.html",revision:"55df9aa9c7b7c251bd93846bd4f9a002"},{url:"2023/02/27/提升真的有那么大么？——A15架构分析/index.html",revision:"4e872aa8d174b2863abfa5e7ef56beba"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"23ec4169a1e6616fbd23af1df4fc146d"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"22383f221cc858793cbeba6e5d3441ce"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"c3e545c4db75fa588f603a5a42d3841f"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"01e7f061132bd8f838332774ff41ff29"},{url:"2023/03/12/小屏手机爱好者福音——iPhoneSE3在2023年的使用体验/index.html",revision:"f45146cdf0357e8df8afb3579d5c41f5"},{url:"2023/03/16/必须要联网使用的系统一定就一无是处么？-ChromeOS使用体验/index.html",revision:"7403816a6fd0b38ed4baa59575639967"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"bb1c32b13fc2092d56062b2cd331b0a1"},{url:"2023/04/14/在2023年折腾iPhone4s-本文实时更新/index.html",revision:"549589bb7c0f31e6693deb945604a121"},{url:"2023/04/18/在2023年折腾Lumia640-本文实时更新/index.html",revision:"de8ae982f1a3513b3c54d1bc4d65581b"},{url:"2023/04/19/在Lumia设备上安装WindowsRT8-1/index.html",revision:"50c41005e346d5b235a4968d99ea9408"},{url:"2023/07/01/iPad最强钉子户-iPad-Air2在2023年的使用体验/index.html",revision:"88c9bbc27a7c0cc16df7a493bfdffcff"},{url:"2023/08/01/ChromeOS在国内必定小众？FydeOS使用体验/index.html",revision:"eb39ac3fc92ace7441330898bd291bc6"},{url:"2023/09/12/苹果2023秋季发布会简单总结/index.html",revision:"63c79cbf5874c3625d4b232208979eb5"},{url:"2023/10/01/免费ChatGPT网站列表/index.html",revision:"745ea9d233293245f3f2d2639f4dd38e"},{url:"404.html",revision:"85794c0ef42cf7c278d908a2d45e0baa"},{url:"about/index.html",revision:"e353dfabad62db36cee9c94759f38192"},{url:"album/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"anzhiyu/random.js",revision:"7cb7b0bcfb2b965a3370d76b6551a57d"},{url:"archives/2022/07/index.html",revision:"a29b17b7a6acba516f88c7d53b738edf"},{url:"archives/2022/10/index.html",revision:"d3156c45bc0decf602a2322fc1b4d1de"},{url:"archives/2022/12/index.html",revision:"414e4f818c1e342ee199bc596593f89e"},{url:"archives/2022/index.html",revision:"6802d8d7a99a372f7a40540072b0711e"},{url:"archives/2023/01/index.html",revision:"0870d0ca61f580b1ab566931967c7f7c"},{url:"archives/2023/02/index.html",revision:"c338cfd9e94b6a0008af07ea72f31f35"},{url:"archives/2023/03/index.html",revision:"e56de60252fa244204b5f555169f698f"},{url:"archives/2023/04/index.html",revision:"243f3193d6c19fc5e0921624fdcf1f53"},{url:"archives/2023/07/index.html",revision:"c82f44727b01a0fc2c244da956ad8261"},{url:"archives/2023/08/index.html",revision:"476be695374482a53eec760c050efd30"},{url:"archives/2023/09/index.html",revision:"82944969868784beca3088ed3065d572"},{url:"archives/2023/10/index.html",revision:"da9889e478ea74242e205c1b5b04b0a4"},{url:"archives/2023/index.html",revision:"b065bc4336c7fa4775dbea85e40f3127"},{url:"archives/2023/page/2/index.html",revision:"725eeb803d8fcff73969f122c80df29f"},{url:"archives/index.html",revision:"8a2293293d6635a81086dabb9782718e"},{url:"archives/page/2/index.html",revision:"fde4402d593d726b0afb365cfe05ad3f"},{url:"archives/page/3/index.html",revision:"9c27fb24e641e53d338c11690e5aca78"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"a96eed9aa7da62359c0a3e3b5f28ccba"},{url:"categories/index.html",revision:"62e93f1b659197acda45a2eacb846758"},{url:"categories/使用体验/index.html",revision:"945c60269e9352dfb388dbbcc6cfc8ec"},{url:"categories/使用体验/系统体验/index.html",revision:"8f26d7590d6b3a329b6e536f05fff0c5"},{url:"categories/总结/index.html",revision:"f79605e1808e5c72da33e8a394311956"},{url:"categories/总结/苹果/index.html",revision:"225c0cc24f0ee8d37f644e2d3e283fb7"},{url:"categories/技术分享/index.html",revision:"ceee60cdb27bdcbefeea9c6268c002ee"},{url:"categories/旧科技-Review/index.html",revision:"77a381eb24766aa8a5d623994050d1b7"},{url:"categories/旧科技-改造优化/index.html",revision:"dc58e83bd20ae5d4630cff78e8f513a4"},{url:"categories/杂谈/index.html",revision:"b61b148da76a7effe2006adb02b455ce"},{url:"categories/架构分析/index.html",revision:"02cd08b210ca391761f41871d9a57369"},{url:"categories/资源分享/index.html",revision:"baf47cd9612f3f06e7e3fcae60e7d759"},{url:"categories/资源分享/系统分享/index.html",revision:"0e9928a6e883254a1e857c65be13ddd5"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"053258ceff8c78e9f9a46ff1a0e95cbb"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"d2f70e6c33e2f99d36a16b61ead1e35e"},{url:"essay/index.html",revision:"b0762b5addf3b175a7dfd3ed9c2c137b"},{url:"images/1/lumiadone.jpg",revision:"11d644a63a9ee0294383f63585fc01a8"},{url:"images/1/sjm1.png",revision:"ed1ff4d18d57a5648a486fae63541402"},{url:"images/1/sjm2.png",revision:"6a8052b1d08d7e7e8a1aafa326664651"},{url:"images/1/sjm3.png",revision:"6c554cfc8f0d3a8516bc284c38dd0f4b"},{url:"images/10/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/11/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/11/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/12/ChromeFyde.png",revision:"9d4149c7e379ff57731998abb700fd60"},{url:"images/12/clashfydeos.png",revision:"8f656cd00b522431484f1d73ef549f05"},{url:"images/12/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/12/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/12/fydeosandroid.png",revision:"d59c79ebd6ee822607bcf2095bbf6a58"},{url:"images/12/fydeosmd.png",revision:"b5468277973d55b64fc32d9f28da2a6d"},{url:"images/12/fydeosplaystore.png",revision:"875f989556fcc5d7cf5c104556b23321"},{url:"images/12/fydeossscs.png",revision:"50516b64dee55992ce4ad4f1484bedde"},{url:"images/13/A151.jpg",revision:"d8f656329c71e983201cdc7e096f31ac"},{url:"images/14/air2appstore.png",revision:"3302b4cf9913a29c4457c7debaee1329"},{url:"images/14/air2games.png",revision:"13023cabc8e8939c3de0f2aaf7e21d51"},{url:"images/14/air2music.png",revision:"b5bdd04f5c813e4348699cc7bfec3ca1"},{url:"images/14/air2tt.png",revision:"fe577bb2a473a33d97345951e0d3f692"},{url:"images/14/air2video.png",revision:"2bcbe0b2c4115b60529455ab737d6f7f"},{url:"images/14/clock.png",revision:"d8f607835d8db14a13c8ff36d710fec9"},{url:"images/14/comparewithse3.jpg",revision:"93b412f8e4d9de217cb47b33c6c3dba6"},{url:"images/14/fenpin.png",revision:"850706003363fde2e9cdac13ebdd689b"},{url:"images/15/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/17/15.jpg",revision:"3968298514253d52c12a967e91fbe3be"},{url:"images/17/15Pro.jpg",revision:"aa7d84432729954f436f53b7685556a9"},{url:"images/17/a17pro.jpg",revision:"321bc8095022290659d36d083e366d9c"},{url:"images/17/s9.jpg",revision:"56abd2378d08a171b1b7f1b130762236"},{url:"images/17/ultra.jpg",revision:"d6b4f225c170850cd1af8475d0ab457d"},{url:"images/2/alldone.jpg",revision:"a98d73d032fbd89f8db99d31e7412d36"},{url:"images/2/donedown.jpg",revision:"5bcd46eacebe01e6b45cd7b93258ee12"},{url:"images/2/i4jail.png",revision:"52387563e6cbd263362cf566a9e46b2e"},{url:"images/2/i4jail1.png",revision:"51b68ddc6ca2b9e7abacd4a59fe9ea25"},{url:"images/2/i4zs.png",revision:"6c69d3b108a8bbd77f20997583751640"},{url:"images/2/ip4d.jpg",revision:"71fd776d5a4acc1d94f0d305ab5f73d6"},{url:"images/2/ip4jailmac.png",revision:"bed56427bffc4d052ed3c382da8e62b7"},{url:"images/2/jiangji.jpg",revision:"9b9ec3fc1e4ae85ed3f08a480ccd8352"},{url:"images/2/upgrade.jpg",revision:"447ace15119ff9b2a04e842625495c21"},{url:"images/3/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/4/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/5/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/5/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/6/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/6/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/6/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/6/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/6/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/6/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/7/Batocera.jpg",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/7/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/8/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/8/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/8/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/8/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/8/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/9/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/9/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/9/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/9/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/9/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/9/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/9/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/about/632f0dd8f33c6.webp",revision:"077162aebb2c4ab4e8ed1633fd4e865f"},{url:"images/about/6398862649585.webp",revision:"7eec2417e23497e9e8458b2364b41422"},{url:"images/about/639886315d658.webp",revision:"94d50ec41fff0476ac3650e6c6178dea"},{url:"images/about/639886403d472.webp",revision:"c72bfec7821849252ea32b7e4747ea4b"},{url:"images/about/6398864e572ed.webp",revision:"a410766d05aa6c967e3f7292f30e0f55"},{url:"images/about/63988658aa1b1.webp",revision:"b19fe457756765b7f1c0a53ebc0ee0eb"},{url:"images/about/edu.png",revision:"81d3c012e238c04c1e8675bb50a7505a"},{url:"images/cover/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/cover/A15.jpg",revision:"aceff6c6795fb4334590093e4c04baf8"},{url:"images/cover/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/cover/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/cover/apple.jpg",revision:"7efdc64c07ed0013adef6e9c28943192"},{url:"images/cover/AppleCover.jpg",revision:"217632a77e59a5465861e7cac3a5205a"},{url:"images/cover/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/cover/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/cover/chatgpt.png",revision:"1c8bb0d04adc8e54ba92e9308351bbca"},{url:"images/cover/ChromeOS.jpg",revision:"f384363ca280ba465d5ae1f751ccee41"},{url:"images/cover/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/cover/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/cover/iPadAir2Cover.jpg",revision:"9b17b47c8061c9facf4961116680e5df"},{url:"images/cover/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/cover/iPhone4s2023.jpg",revision:"1e3625b9c7229600cc79e3c6862f6b77"},{url:"images/cover/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/cover/Lumia6401.jpg",revision:"77212d1b89b46cfd508a9cf0402c8b1c"},{url:"images/cover/lumiacover1.jpg",revision:"f7cff447665cb428665138e13bb13e6a"},{url:"images/cover/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/cover/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/cover/SE3.jpg",revision:"c61d74cb155ba9c1ec75bdacc5564d92"},{url:"images/equ/airpodspro2.png",revision:"4c5675810507c59d11b9618a6a32b529"},{url:"images/equ/ipadprom1.png",revision:"6ebf9f2ed05a91cf60945fe6ac7e270f"},{url:"images/equ/iphone15.png",revision:"205bbc371ea68c7bad7cf33f1f12b596"},{url:"images/equ/iphonese2022.png",revision:"4fa428173cad221d56c3da7edfc0b300"},{url:"images/equ/m2macmini.png",revision:"b016b209d42a965a45d9fcf7cc5cfacd"},{url:"images/equ/mbp14m2p.png",revision:"fd8dc1d19ca03343b6be7fe6939d2763"},{url:"images/equ/samsungm7.png",revision:"759a706e232ce46ffdf8b92c038f646d"},{url:"images/essay/1.png",revision:"f37d3495539fc21a9e8984245ce87f86"},{url:"images/essay/2.png",revision:"e2c4ce7b5f819ac84e8ee3ac18a49df8"},{url:"images/essay/3.png",revision:"6ba2c0561b9847769673aa5f2ce20b5f"},{url:"images/essay/4s1.jpg",revision:"30de90ce3e03d829a4c9a4b57704f403"},{url:"images/essay/4s2.jpg",revision:"c2ec06c70a28ce77d6c08eb19acb80cb"},{url:"images/essay/a17pro.jpg",revision:"a2615dbc65064d8e4e2d8206e93d6ae4"},{url:"images/essay/airpods.jpg",revision:"b12789584b3d2170a7e4229e0aff750f"},{url:"images/essay/airpods1.jpg",revision:"6f1d6dccb645e42a6d32c8fa674ed90d"},{url:"images/essay/ap2023.jpg",revision:"0e1521cad1713be801df694251c50888"},{url:"images/essay/apb.jpg",revision:"6d287535218060721508f1752d79aa17"},{url:"images/essay/apm1.png",revision:"670834f1184ce93694bb1c0cec297870"},{url:"images/essay/apm2.png",revision:"5fd75aa2ed8ee62c7bc3d3c209fdc174"},{url:"images/essay/apms.jpg",revision:"afd767d1524d3389d425c48ec4412c88"},{url:"images/essay/appc.jpg",revision:"11692eb5952f5a3b369566e4a7d99fa2"},{url:"images/essay/bing.png",revision:"1f6806b27e8feb02d74ab00fb8e69008"},{url:"images/essay/gpt1.png",revision:"ead634fc24b0028008b5a26c3804336e"},{url:"images/essay/gpt2.png",revision:"c73ce30e6c0ec81fb1852b65aa0065d9"},{url:"images/essay/huilv.jpg",revision:"c0c5d2e4cd4ee9d584c309a5879be06c"},{url:"images/essay/macmini.jpg",revision:"d169476ef4cb1cddcb317bf889c9edfd"},{url:"images/essay/miku.jpg",revision:"34dc62c975a36589c8a5b902702c9ab2"},{url:"images/essay/nf.jpg",revision:"eedd68b66578aa670423332d8f19323e"},{url:"images/essay/phigros.png",revision:"81c8a7b6bca2b9fe0bdea5b231e88b9e"},{url:"images/essay/psc.webp",revision:"5b5d8b30b6f80b0b7a8426032b65a448"},{url:"images/essay/psc1.jpg",revision:"ba930bdbd615c59804ec21a43c2cc575"},{url:"images/essay/se2022.jpg",revision:"2cee7610f8499efc3dc86df17b4da499"},{url:"images/essay/Ventura1.jpg",revision:"5c98ff8456539731fc1660145969cb78"},{url:"images/essay/wwdc231.png",revision:"e54494be2e771ecc21ef33a1e2188c8a"},{url:"images/essay/wwdc232.png",revision:"98c01122208598462120389516de3152"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/macosicons.png",revision:"7e1aed44d289e6f83071976a67254f05"},{url:"images/top/ipadair2.png",revision:"610bede736b2d8a226e2aac8eb3cb14e"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"dc958662788649b6a74b8579ea28a3c6"},{url:"img/avatar.png",revision:"523e265108d70c2b63de96f0ec22f34a"},{url:"img/blog.png",revision:"899ec0680f7e15dab5b5f8dcd8037824"},{url:"img/chat.png",revision:"38bb3f8fc43dd29b334dca6237a25064"},{url:"img/cloud.png",revision:"bb216c2102b72d8b50750b12350c7025"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/default10.png",revision:"f7dcd4047f465e8f546b153ea66c3e66"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gistwillan.jpg",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/home.png",revision:"afd3326c2fff61083c32ecb6213618e6"},{url:"img/indexsite.png",revision:"5b40c77bd072a16697327d97a15daf7b"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"56ff65c5baf4d7d935b66685417f88c6"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"img/study.png",revision:"1050046ab2938fc403dde65f59b95f08"},{url:"img/wechat.jpg",revision:"1a26f31a6cc2eb33d66a3ff86f88bb52"},{url:"img/wordpress.png",revision:"00249e8675690a9ce68efc3855463f44"},{url:"index.html",revision:"7630c9a35d83b8dc33cf280e78f15a00"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"67241f68a924680da7451e44cbad8ff9"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"efcd29fcb3084e0e222d8bf2643fe2ac"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"10bd795de2eba007515813802fba6858"},{url:"page/2/index.html",revision:"20df4f4d4d44778ba8906fc0e3fa0248"},{url:"page/3/index.html",revision:"e514cb3342986708316609da90f29128"},{url:"tags/index-1.html",revision:"1d49bad1bac0f4e5caaaf084122f511e"},{url:"tags/index.html",revision:"f85c53c72578c4269e09a7beebd8908a"},{url:"tags/使用体验/index.html",revision:"f699294a62d843340c500d4c4930e128"},{url:"tags/总结/index.html",revision:"62cbecc1997c9953a027f72ef167b219"},{url:"tags/技术分享/index.html",revision:"5acdac9007afd0afd77cbff15a4aae91"},{url:"tags/旧科技-Review/index.html",revision:"1a41b30b02af32324c95d7da2a902ca0"},{url:"tags/旧科技-改造优化/index.html",revision:"7d7aad356ecf9fc1063d7beb65028a45"},{url:"tags/杂谈/index.html",revision:"3806e24b8cda5411762d47b1f6374330"},{url:"tags/架构分析/index.html",revision:"b580c736647ffa183e9abc1490ba2e12"},{url:"tags/系统体验/index.html",revision:"b5cd5dfa49f386364df77797ddf1122b"},{url:"tags/系统分享/index.html",revision:"8861000447d4e430d8aaa3846dbaf0ba"},{url:"tags/苹果/index.html",revision:"9dbd75cee9fed281f647e57b02bb07c3"},{url:"tags/资源分享/index.html",revision:"c792ca80940c0c1d92dc9184e03db190"}],{})}));
//# sourceMappingURL=service-worker.js.map
