if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const n=e=>a(e,r),b={module:{uri:r},exports:d,require:n};i[r]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/15/资源分享-macOS软件下载网站推荐/index.html",revision:"f1c09e50de4ce6d2f44027c2bcb9c89f"},{url:"2022/10/14/创建macOS启动盘/index.html",revision:"bece088236a4622554c84cd0076224ff"},{url:"2022/10/23/杂谈-个人对于未来绝对主流的猜测/index.html",revision:"78c389cae3eb00de81160fa3560eeae6"},{url:"2022/12/10/本土化的ChromeOS-系统推荐/index.html",revision:"b95f8ca13c9de1dfd6009c0bfb72cd2d"},{url:"2022/12/18/让你的PC或Mac化身游戏机-Linux系统推荐/index.html",revision:"0f1e6b6735cfc75c027149e0dd995896"},{url:"2022/12/25/开源项目分享-让老Mac安装新系统/index.html",revision:"a6e550f58409f78ce1d54aa080aa468f"},{url:"2023/01/04/技术分享-在2023年优化你的安卓中低端手机/index.html",revision:"3d5e568b30a6e13232f4e3fb6deb2f66"},{url:"2023/02/24/苹果全家桶生态体验/index.html",revision:"5c2d7434fadf6a5a9507ead15f125749"},{url:"2023/02/27/提升真的有那么大么？——A15架构分析/index.html",revision:"bacd51600ac7b419b5191e9ab8ad9cff"},{url:"2023/02/28/iPhone4s在2023年的体验/index.html",revision:"bef478cc0c4ffbefed739f507ebd1b37"},{url:"2023/03/01/入门级WindowsPhone真的就一无是处么？——微软Lumia640使用体验/index.html",revision:"ee2708243171e0da2a6a5d9d80b56315"},{url:"2023/03/01/远古安卓手机放到现在只有怀旧么？——三星GT-S7568i使用体验/index.html",revision:"e3689cf5c97784d2f0accfcf93fa7ecb"},{url:"2023/03/09/廉颇老矣，尚能饭否-iPad-mini2在2023年的使用体验/index.html",revision:"983300cdeb2acdb251e63f37573c97fd"},{url:"2023/03/12/小屏手机爱好者福音——iPhoneSE3在2023年的使用体验/index.html",revision:"ef8c9c46400ca5309d61758877973552"},{url:"2023/03/16/必须要联网使用的系统一定就一无是处么？-ChromeOS使用体验/index.html",revision:"9e6f87da9a4867295fd00c10a7a73242"},{url:"2023/03/27/简单朴素才是真-AppleMusic使用体验/index.html",revision:"bd619c47f387c8670215a22eccfb1423"},{url:"2023/04/14/在2023年折腾iPhone4s-本文实时更新/index.html",revision:"5550bdc39f293bc9ec984cb7a2e6cc62"},{url:"2023/04/18/在2023年折腾Lumia640-本文实时更新/index.html",revision:"e59daaab578e3d92d7b5da7d1b630014"},{url:"2023/04/19/在Lumia设备上安装WindowsRT8-1/index.html",revision:"7529b4d46ad28f9424e2228bd4380337"},{url:"2023/07/01/iPad最强钉子户-iPad-Air2在2023年的使用体验/index.html",revision:"56dc905bdf6e460110fd4db22ee4ecde"},{url:"2023/08/01/ChromeOS在国内必定小众？FydeOS使用体验/index.html",revision:"e9c608a515453e5b9e4c83f51c41755d"},{url:"404.html",revision:"4ec2e7b009958ead7d2097e24a14c173"},{url:"about/index.html",revision:"a039ae9e06d56598feebc4ef2efab9f4"},{url:"anzhiyu/random.js",revision:"19bada65d73df97c43a9f27f71b1cc53"},{url:"archives/2022/07/index.html",revision:"5349f7ad6b3471247422662bb44ac16b"},{url:"archives/2022/10/index.html",revision:"c3885219f76075fd7c99ae2eb7ed5521"},{url:"archives/2022/12/index.html",revision:"111ccde9cfe6077c432ee43841449a32"},{url:"archives/2022/index.html",revision:"88f944a92b00b53386b7f6430553cde3"},{url:"archives/2023/01/index.html",revision:"a2e6355084511520ed8361fdf5869038"},{url:"archives/2023/02/index.html",revision:"f0120204c8af1867d9ef60fbef69aca4"},{url:"archives/2023/03/index.html",revision:"bf4ccbd1f249786ec361fdbd4e991efb"},{url:"archives/2023/04/index.html",revision:"c13ba68506cc50513f69c605a60542e1"},{url:"archives/2023/07/index.html",revision:"a77fa57d1150d4ebbd776335def5cb84"},{url:"archives/2023/08/index.html",revision:"75b762a36642cb726d024baee0e7971d"},{url:"archives/2023/index.html",revision:"877a0020cea7a243e5550a9c6c7e34e5"},{url:"archives/2023/page/2/index.html",revision:"eac63b077ca9b242d61584fc6d74e9d3"},{url:"archives/index.html",revision:"639e12744b9281a59968cd2ff85907f6"},{url:"archives/page/2/index.html",revision:"a58b9d17f167075d7d77f7ff53bfdad8"},{url:"archives/page/3/index.html",revision:"3a5a654c2484c23e3cb9882ca15038cb"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/index-1.html",revision:"ef43f61cf11cff872f57510b1dff2d9d"},{url:"categories/index.html",revision:"5fc28135eb7a2412a6805e824110125e"},{url:"categories/使用体验/index.html",revision:"9d8f31768cdaa1966b73af13af30e715"},{url:"categories/使用体验/系统体验/index.html",revision:"b34c70c3412b00a72f879efb6a07ecd1"},{url:"categories/技术分享/index.html",revision:"6c1fe52ab422ccb4f719ead593b242d8"},{url:"categories/旧科技-Review/index.html",revision:"44a6954cae5fa366fc2cd20c01fda723"},{url:"categories/旧科技-改造优化/index.html",revision:"e3d3154f00572f8edb64da4d3700a206"},{url:"categories/杂谈/index.html",revision:"c481f452fcafce18432e0808546ed0f1"},{url:"categories/架构分析/index.html",revision:"a960d12b9d824860bee3f580725707df"},{url:"categories/资源分享/index.html",revision:"cbb6198e9b775c3b1b03d7c0e50893b3"},{url:"categories/资源分享/系统分享/index.html",revision:"4789c8da1e47a4bbaa7d65b94a588fb6"},{url:"css/costum.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/font.css",revision:"e6dacfadf5feda2ae20a2c2dbbb3582f"},{url:"css/index.css",revision:"94529bb108b50afd019e89c39f7d6514"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/style.css",revision:"f9f7785b4fb6593a493dd8324c2e27a9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b95c1658d15171312f6400d779fffc4b"},{url:"google631b4e94ec9f717f.html",revision:"29aeb30c939840cf36927686d53b8016"},{url:"images/1/lumiadone.jpg",revision:"11d644a63a9ee0294383f63585fc01a8"},{url:"images/1/sjm1.png",revision:"ed1ff4d18d57a5648a486fae63541402"},{url:"images/1/sjm2.png",revision:"6a8052b1d08d7e7e8a1aafa326664651"},{url:"images/1/sjm3.png",revision:"6c554cfc8f0d3a8516bc284c38dd0f4b"},{url:"images/10/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/11/i4.png",revision:"cacb86f9cf61b74ffc8e9b950ecfa5fe"},{url:"images/11/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/12/ChromeFyde.png",revision:"9d4149c7e379ff57731998abb700fd60"},{url:"images/12/clashfydeos.png",revision:"8f656cd00b522431484f1d73ef549f05"},{url:"images/12/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/12/FydeOS.png",revision:"c83941777d64d584437f6942db2f8621"},{url:"images/12/fydeosandroid.png",revision:"d59c79ebd6ee822607bcf2095bbf6a58"},{url:"images/12/fydeosmd.png",revision:"b5468277973d55b64fc32d9f28da2a6d"},{url:"images/12/fydeosplaystore.png",revision:"875f989556fcc5d7cf5c104556b23321"},{url:"images/12/fydeossscs.png",revision:"50516b64dee55992ce4ad4f1484bedde"},{url:"images/13/A151.jpg",revision:"d8f656329c71e983201cdc7e096f31ac"},{url:"images/14/air2appstore.png",revision:"3302b4cf9913a29c4457c7debaee1329"},{url:"images/14/air2games.png",revision:"13023cabc8e8939c3de0f2aaf7e21d51"},{url:"images/14/air2music.png",revision:"b5bdd04f5c813e4348699cc7bfec3ca1"},{url:"images/14/air2tt.png",revision:"fe577bb2a473a33d97345951e0d3f692"},{url:"images/14/air2video.png",revision:"2bcbe0b2c4115b60529455ab737d6f7f"},{url:"images/14/comparewithse3.jpg",revision:"93b412f8e4d9de217cb47b33c6c3dba6"},{url:"images/14/fenpin.png",revision:"850706003363fde2e9cdac13ebdd689b"},{url:"images/14/Weather.png",revision:"15eb285cdd7f935ee8256d24d5bca989"},{url:"images/15/macos.png",revision:"be3a25b33b710634b961ad4baff5da6d"},{url:"images/2/alldone.jpg",revision:"a98d73d032fbd89f8db99d31e7412d36"},{url:"images/2/donedown.jpg",revision:"5bcd46eacebe01e6b45cd7b93258ee12"},{url:"images/2/i4jail.png",revision:"52387563e6cbd263362cf566a9e46b2e"},{url:"images/2/i4jail1.png",revision:"51b68ddc6ca2b9e7abacd4a59fe9ea25"},{url:"images/2/i4zs.png",revision:"6c69d3b108a8bbd77f20997583751640"},{url:"images/2/ip4d.jpg",revision:"71fd776d5a4acc1d94f0d305ab5f73d6"},{url:"images/2/ip4jailmac.png",revision:"bed56427bffc4d052ed3c382da8e62b7"},{url:"images/2/jiangji.jpg",revision:"9b9ec3fc1e4ae85ed3f08a480ccd8352"},{url:"images/2/upgrade.jpg",revision:"447ace15119ff9b2a04e842625495c21"},{url:"images/3/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/4/oppoa5.jpg",revision:"ca0db0230897d25d3004d5ae50042873"},{url:"images/5/oclpgithub.png",revision:"595341e2cbb50bc44227d709a00ea416"},{url:"images/5/oclpio.png",revision:"8819ade1ed58894f8397d7948b3307fe"},{url:"images/6/desktopclock.jpg",revision:"6e3eea6afbfc767251819f318450da96"},{url:"images/6/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/6/iWork.png",revision:"99291b3b1c846864670be60cbc035e08"},{url:"images/6/mini2storge.jpg",revision:"d996170f8da920882f9b65d4ab8879c1"},{url:"images/6/steamlink2.jpg",revision:"adf11fbbf9356cd8a863bdae672597de"},{url:"images/6/Weather.jpg",revision:"9a22e02dac0aa876c3855fc6ef3eb4cd"},{url:"images/7/Batocera.jpg",revision:"7ee01804c00f0fb2fae568715bf73d39"},{url:"images/7/batoceradown.png",revision:"6a04b37e08ce11407b0a3edfcc41f79e"},{url:"images/8/ipandwp.jpg",revision:"ffe6b83a30c29359e5c924db4d7d7c1f"},{url:"images/8/LumiaCover.jpg",revision:"49c0475b488a09cb574523797e5f48c3"},{url:"images/8/msedge.jpg",revision:"afbaee222c2e6430baf630913ac6182f"},{url:"images/8/office.jpg",revision:"eb2e9110b1560acf6217c1e19abc768b"},{url:"images/8/WPbi.jpg",revision:"cd1a9b47a676149df84cd29603b7cebd"},{url:"images/9/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/9/clock.jpg",revision:"6b7992a4c1511d8ee176d402eb0d5d76"},{url:"images/9/javaemu.png",revision:"cae416008a71145cf23797a7d64cdaac"},{url:"images/9/musics.png",revision:"b23812e611355d28fefc0370d7482dc2"},{url:"images/9/musics1.png",revision:"8638a9896f13dfab64cd1a2613e2a0a8"},{url:"images/9/musics2.png",revision:"945c2fa4174c84afa8f3ab51153791da"},{url:"images/9/vias.png",revision:"53e547a8f3bf72c68b1359835500ca70"},{url:"images/about/632f0dd8f33c6.webp",revision:"077162aebb2c4ab4e8ed1633fd4e865f"},{url:"images/about/6398862649585.webp",revision:"7eec2417e23497e9e8458b2364b41422"},{url:"images/about/639886315d658.webp",revision:"94d50ec41fff0476ac3650e6c6178dea"},{url:"images/about/639886403d472.webp",revision:"c72bfec7821849252ea32b7e4747ea4b"},{url:"images/about/6398864e572ed.webp",revision:"a410766d05aa6c967e3f7292f30e0f55"},{url:"images/about/63988658aa1b1.webp",revision:"b19fe457756765b7f1c0a53ebc0ee0eb"},{url:"images/about/edu.png",revision:"4e345287aef2072ad2d203f950755dc8"},{url:"images/cover/7568i.jpg",revision:"8b72314781b45340a173d30255498f30"},{url:"images/cover/A15.jpg",revision:"aceff6c6795fb4334590093e4c04baf8"},{url:"images/cover/AndroidLogo.jpg",revision:"c372cb3117b770e732981860a5c5a007"},{url:"images/cover/apple-logo.jpg",revision:"192e1a66e3af69f11dab5f9bbc166fd2"},{url:"images/cover/AppleCover.jpg",revision:"217632a77e59a5465861e7cac3a5205a"},{url:"images/cover/applestore3rd.jpg",revision:"f06021107448ad85ab73463a388b020e"},{url:"images/cover/Batocera.jpg",revision:"fd4e567b0ef2b1fac2e69970c4c86972"},{url:"images/cover/ChromeOS.jpg",revision:"f384363ca280ba465d5ae1f751ccee41"},{url:"images/cover/Cover.jpg",revision:"77865b74e036dc4d47e908a629babdc7"},{url:"images/cover/Fyde.jpg",revision:"91d647cb599a7d0fde84945015751e53"},{url:"images/cover/iPadAir2Cover.jpg",revision:"9b17b47c8061c9facf4961116680e5df"},{url:"images/cover/ipadmini2.jpg",revision:"3737f6d28ad0d73e8a2fa65b1b7e81c4"},{url:"images/cover/iPhone4s2023.jpg",revision:"1e3625b9c7229600cc79e3c6862f6b77"},{url:"images/cover/iPhoneCover.jpg",revision:"498dd2a49ddca4036b4e28458b96676e"},{url:"images/cover/Lumia6401.jpg",revision:"77212d1b89b46cfd508a9cf0402c8b1c"},{url:"images/cover/lumiacover1.jpg",revision:"f7cff447665cb428665138e13bb13e6a"},{url:"images/cover/occ.png",revision:"13bb05396c70455d4a00d5b274d2a85d"},{url:"images/cover/OSX.jpg",revision:"09bc58ef91b8fd5efe3fe70ec19362ea"},{url:"images/cover/SE3.jpg",revision:"c61d74cb155ba9c1ec75bdacc5564d92"},{url:"images/essay/4s1.jpg",revision:"30de90ce3e03d829a4c9a4b57704f403"},{url:"images/essay/4s2.jpg",revision:"c2ec06c70a28ce77d6c08eb19acb80cb"},{url:"images/essay/airpods.jpg",revision:"b12789584b3d2170a7e4229e0aff750f"},{url:"images/essay/airpods1.jpg",revision:"6f1d6dccb645e42a6d32c8fa674ed90d"},{url:"images/essay/apb.jpg",revision:"6d287535218060721508f1752d79aa17"},{url:"images/essay/appc.jpg",revision:"11692eb5952f5a3b369566e4a7d99fa2"},{url:"images/essay/gpt1.png",revision:"ead634fc24b0028008b5a26c3804336e"},{url:"images/essay/gpt2.png",revision:"c73ce30e6c0ec81fb1852b65aa0065d9"},{url:"images/essay/huilv.jpg",revision:"c0c5d2e4cd4ee9d584c309a5879be06c"},{url:"images/essay/macmini.jpg",revision:"d169476ef4cb1cddcb317bf889c9edfd"},{url:"images/essay/miku.jpg",revision:"34dc62c975a36589c8a5b902702c9ab2"},{url:"images/essay/nf.jpg",revision:"eedd68b66578aa670423332d8f19323e"},{url:"images/essay/phigros.png",revision:"81c8a7b6bca2b9fe0bdea5b231e88b9e"},{url:"images/essay/psc.webp",revision:"5b5d8b30b6f80b0b7a8426032b65a448"},{url:"images/essay/psc1.jpg",revision:"ba930bdbd615c59804ec21a43c2cc575"},{url:"images/essay/Ventura1.jpg",revision:"5c98ff8456539731fc1660145969cb78"},{url:"images/essay/wwdc231.png",revision:"e54494be2e771ecc21ef33a1e2188c8a"},{url:"images/essay/wwdc232.png",revision:"98c01122208598462120389516de3152"},{url:"images/loading.gif",revision:"446100f374e93811b2ddf58ecd807d9a"},{url:"images/macosicons.png",revision:"7e1aed44d289e6f83071976a67254f05"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"dc958662788649b6a74b8579ea28a3c6"},{url:"img/avatar.png",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/chat.png",revision:"7c0128d67bacb90c9a0b53f63b0dea17"},{url:"img/cloud.png",revision:"bb216c2102b72d8b50750b12350c7025"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/default.png",revision:"9922ca8f18f1209af241cb64bb1b67f5"},{url:"img/default1.png",revision:"92dffc2ca7cc1711969d9f30084baade"},{url:"img/default10.png",revision:"f7dcd4047f465e8f546b153ea66c3e66"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gistwillan.jpg",revision:"0c60152ec6bc33c6d09338c6583bc4a2"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"56ff65c5baf4d7d935b66685417f88c6"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"img/wechat.jpg",revision:"1a26f31a6cc2eb33d66a3ff86f88bb52"},{url:"img/wordpress.png",revision:"00249e8675690a9ce68efc3855463f44"},{url:"index.html",revision:"bd75f95e5fc64466291f1e9f74fb9534"},{url:"js/duration.js",revision:"a496b6be75145e5cbe89fc302b1fee87"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"live2dw/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"aec9c537900f28207729e98f73ee128c"},{url:"page/2/index.html",revision:"f9a7e8fa6300449375fe4efdeb729a08"},{url:"page/3/index.html",revision:"2a5ee592fcb20868a9b499e230f4d852"},{url:"tags/index-1.html",revision:"ffc9364e9af85c1fe28359020e95879d"},{url:"tags/index.html",revision:"0ad6eb3b666ce5a052aa02a7159a30e3"},{url:"tags/使用体验/index.html",revision:"12ed5b1b2cf1ad66c06c3d67f25b9ddd"},{url:"tags/技术分享/index.html",revision:"9e014a3f0e816cf172b9cc969bdf0bd8"},{url:"tags/旧科技-Review/index.html",revision:"bf943252b2be02a3f3845aaa0e067bcb"},{url:"tags/旧科技-改造优化/index.html",revision:"8a7c76403fe98c54bd94ac0855d4c18d"},{url:"tags/杂谈/index.html",revision:"393a9a66440d299df56219e4409610b9"},{url:"tags/架构分析/index.html",revision:"fad49f2fe1690f97909fed95dacd335b"},{url:"tags/系统体验/index.html",revision:"20259b9d7c9367458aa9e4cadae1bbc0"},{url:"tags/系统分享/index.html",revision:"e75a596609390ee59828997af652cf70"},{url:"tags/资源分享/index.html",revision:"b30654563b2a4a35faf4a04a6664e651"}],{})}));
//# sourceMappingURL=service-worker.js.map
