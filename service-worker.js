if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let c={};const r=e=>s(e,d),b={module:{uri:d},exports:c,require:r};a[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-7d10efd8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/2023-1-14.html-10caee1f.js",revision:"103dc8b55a6c0d46e1701898db80e52e"},{url:"assets/2023-1-14.html-d1ca7f55.js",revision:"441e0501fae50fc432c55a76a476a1e0"},{url:"assets/404.html-6d1a278c.js",revision:"517d84336467ba0c56c77fb8c1ef9ac1"},{url:"assets/404.html-8fe0cd44.js",revision:"6c6f74da3da6b65a0ac351900cc4bdd8"},{url:"assets/app-1fff8e37.js",revision:"9dc736faa1a3dba4254329e313c42dd2"},{url:"assets/auto-87bdde05.js",revision:"20ea9443720552e53e6b48154a130003"},{url:"assets/begin.html-5568f996.js",revision:"b96eb1624c47db96bacdb440c516471c"},{url:"assets/begin.html-71150c0a.js",revision:"95ace96993e396a9a8623cf126f21560"},{url:"assets/begin.html-8398cb9e.js",revision:"4e53c7fabc5a2c2718ae762ddab0a741"},{url:"assets/begin.html-a6cc53ee.js",revision:"af0f364bc067fd067ca93de5c3ce30a5"},{url:"assets/begin.html-bed67c4d.js",revision:"be33b07c2ab87c83c99992e4416a3e8d"},{url:"assets/begin.html-e7bda4ee.js",revision:"1b0b643eca6e4ad8db95f4cdbeea2bc1"},{url:"assets/command.html-0abf9881.js",revision:"4ca360d98871ce7ae07eaaea0070dd1a"},{url:"assets/command.html-302654ef.js",revision:"d0a17c51960aaff4170604b7bbf57d8c"},{url:"assets/conf.html-c7ddc8d9.js",revision:"484ec1804b0b5537f55e22554a556b6e"},{url:"assets/conf.html-f49c6164.js",revision:"7dfc81aa47399173a6771c981afcc6e2"},{url:"assets/config.html-901025b9.js",revision:"64c9d8ec9ef7c1673a9e38fe7b6ac220"},{url:"assets/config.html-ad08dd42.js",revision:"e3faa54e7e595a295a22046bc6fcc215"},{url:"assets/config.html-b7bd7dbb.js",revision:"90ecde1ef4b2bc490285cacfa348e33b"},{url:"assets/config.html-d212690e.js",revision:"83fe64a60a630c5db4efa660853cdca6"},{url:"assets/CustomDomainuptimerobot.html-387d7b1a.js",revision:"bedfbb84e9eb023c8339019b5553418d"},{url:"assets/CustomDomainuptimerobot.html-b07ab79f.js",revision:"09f891bd3c771862e9b9f2784d53a236"},{url:"assets/diagram-definition.0faef4c2-73588523.js",revision:"2d4b55a35ab3f770a64791820ee0de8d"},{url:"assets/email.html-94ef02f4.js",revision:"f3aa6f01915f626abcbcb73526bd2b3f"},{url:"assets/email.html-d4145e10.js",revision:"25018236c9e2678dceba3f25ca46059d"},{url:"assets/flowchart.parse-08db0949.js",revision:"7f2dda9a63866ed051e7457a731ff6d7"},{url:"assets/framework-e618a78f.js",revision:"f7bac63b54fbc6ba2edfa2265a387ce0"},{url:"assets/highlight.esm-f3520595.js",revision:"a825381761cdddcfa727cb3d3ad0f7a1"},{url:"assets/icon/PWA_LOGO.svg",revision:"9f135469f3cf64875e34fd1b68da2540"},{url:"assets/index-c36a3f98.js",revision:"e1e86987f1c90315a06576ff11ebc8b1"},{url:"assets/index.html-0089254f.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-03cdc9d9.js",revision:"794a07f555014bf071663f498f09deb5"},{url:"assets/index.html-04e02fdf.js",revision:"e310f0facaaf7c1bebc48e2855f12d6f"},{url:"assets/index.html-0b545b3e.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-1813975f.js",revision:"fd265159f737698b8291a7af284a9ab2"},{url:"assets/index.html-1b6e7a0f.js",revision:"1e5c72068f7450a62a3a748bdebb1c3d"},{url:"assets/index.html-25b7bc35.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-2c0f39a2.js",revision:"4e2a91ae1a5d948da7ddd34a156df5cd"},{url:"assets/index.html-47ca5313.js",revision:"2f9bc874a435bc4a85bed3d7c65edf12"},{url:"assets/index.html-49719782.js",revision:"f118e38b0a28fd9eeccde7631a35899c"},{url:"assets/index.html-49e58d6e.js",revision:"c2b0326ea481c60de5280a45d9699b0a"},{url:"assets/index.html-55074c6f.js",revision:"05d70daaaf622ae98aaf19e7c6f3b77c"},{url:"assets/index.html-5d6b1901.js",revision:"27a2b87d96972ed9094664c2d0d4ccd0"},{url:"assets/index.html-6a7e19d3.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-6abc30af.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-772ed0d5.js",revision:"4a51deea5a2dc6ed4e68aad642f92020"},{url:"assets/index.html-7830b695.js",revision:"c78a5f1c3a2e867e5cfb94a95919f25c"},{url:"assets/index.html-812ab590.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-839fd7eb.js",revision:"34dab23a51555d2bd785e820715f6ca5"},{url:"assets/index.html-8673f410.js",revision:"2726d351386d90605d6b71ed9771f2fa"},{url:"assets/index.html-86f54659.js",revision:"bd4edc563436db8236c3479bc0dcdf6d"},{url:"assets/index.html-89def6a4.js",revision:"bd1e5f9ba79fe23e3f5ffea99b5657ea"},{url:"assets/index.html-93ab6979.js",revision:"21abb699edc061cd345edf198a123c6f"},{url:"assets/index.html-a3ce8867.js",revision:"4f6eb6fee0357b27329b86d008e09e64"},{url:"assets/index.html-ac071ce1.js",revision:"24b3e9ed028b4917194086730655b2e4"},{url:"assets/index.html-b3daa44e.js",revision:"ac43fab6508cd910f0c86cf8ec89bf51"},{url:"assets/index.html-b62563d7.js",revision:"8acbf823df6a81ebb77d9abbf6dae2e5"},{url:"assets/index.html-b6ad731f.js",revision:"5c46521d1dc1dd6c7bf3a11bf59dc7ab"},{url:"assets/index.html-c211f3bb.js",revision:"11654c31fc2775f798cb22fab706b4c7"},{url:"assets/index.html-d17ed2fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d32b1b21.js",revision:"68497b2dd1f9f7d58164fa19d018fb49"},{url:"assets/index.html-d41e37f0.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d8c75289.js",revision:"82c14f3339a172210fcae08bf8105226"},{url:"assets/index.html-de4d61ad.js",revision:"a87ae5900ee969202a6a04f3f5547a7f"},{url:"assets/index.html-e5c1d4a7.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-ee60c0fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-f6799b97.js",revision:"c2acc83e509b49a46b49f87bfd199d7d"},{url:"assets/index.html-fe16e40f.js",revision:"bd1e5f9ba79fe23e3f5ffea99b5657ea"},{url:"assets/install.html-2da80071.js",revision:"b630b7eaf519ccef32fce089b1ec6cb0"},{url:"assets/install.html-484d7bde.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/install.html-5784d482.js",revision:"0e54ae5ccd389a5a976b533fc3b417ad"},{url:"assets/install.html-e0ece643.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/jingxiang.html-185279c1.js",revision:"5605e2557357b0c58c1368188110820c"},{url:"assets/jingxiang.html-f39c2247.js",revision:"f51fabae196d48191c838b2051322a7c"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-502ef1d5.js",revision:"5c465288d1c3c1b5fb15f2ce3facb5aa"},{url:"assets/math.esm-4cb70fc8.js",revision:"4a84790df5fb36ae16e26fbbebc286a4"},{url:"assets/mermaid-mindmap.esm.min-89181165.js",revision:"d8784e62b006328030b368686ba84114"},{url:"assets/mermaid.esm.min-ef7393f1.js",revision:"57da3d2fb4354fa0d480871ed8056613"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-c0aed5fe.js",revision:"77fd8ecae1a39bad1e56b9297b88bf3d"},{url:"assets/proxy.html-2e92b7d1.js",revision:"ffc07bedfb6be58d615e69278074f6f0"},{url:"assets/proxy.html-97d60ae7.js",revision:"040f6aada8948d5c6e3fbcc032bd58ea"},{url:"assets/reveal.esm-5c119aeb.js",revision:"2394821884527f6ad217c0c95c7c6698"},{url:"assets/search.esm-e8f6ca73.js",revision:"2d80dc9d31c03399ada54b934127934b"},{url:"assets/SearchResult-abcc54e0.js",revision:"03dd0268651bbd69fdebb8033ad9192d"},{url:"assets/slides.html-4afd929d.js",revision:"451899a52621197edebc3607bcc28019"},{url:"assets/slides.html-fe74822e.js",revision:"ca831becaf88dba53078dea8567f4716"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/start.html-5f400808.js",revision:"ee166cd81db2168db6f2d18b1bcc8542"},{url:"assets/start.html-a91bb263.js",revision:"22f3da2cc7571b80d3af47982ea54f32"},{url:"assets/student.html-7dcce6d7.js",revision:"cc1ef97ff6c1a746931d4b1d57e83704"},{url:"assets/student.html-e48c6bf6.js",revision:"0a22ff5b8ffeac723250a53c53893a2e"},{url:"assets/style-9a1bd2fc.css",revision:"b58bc20fa36b0fe22b487e7aa62bf242"},{url:"assets/tongyong.html-79b5ddb4.js",revision:"30b482292f3b2701bffea812de06e921"},{url:"assets/tongyong.html-af233cb3.js",revision:"a58bda3a3cc4ccaff266f588483b13dc"},{url:"assets/ubuntu.html-4a890976.js",revision:"172f514c96612bd7db7de2f5d5d3773a"},{url:"assets/ubuntu.html-95ec7f42.js",revision:"46a9639552d1243f75d0a20aff8c8b3e"},{url:"assets/usual.html-11e10f06.js",revision:"2a71766817e77dee834f74bf490f146b"},{url:"assets/usual.html-31878a24.js",revision:"049198c11071ce32a4244c1aa7044ff4"},{url:"assets/vscode.html-417895af.js",revision:"755a2359309382c9b1705bc7fabafbc0"},{url:"assets/vscode.html-d039215b.js",revision:"eca10fbd90df3c7a9d45735ba0b5f746"},{url:"assets/vue-repl-9e6fa0c4.js",revision:"2b77ed925b3c94e046964a083c986977"},{url:"assets/VuePlayground-9a2e6a5f.js",revision:"839d85e07e3779f78db8672d3e46a41b"},{url:"assets/waline-meta-0e8855a4.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm-68db8aeb.js",revision:"506aa37cbe56ce517c52b2db29881ad6"},{url:"baidu.js",revision:"cbad97edb1b55da7db2f76164e7ab706"},{url:"bg.svg",revision:"2cfdbb338a1d44d700b493d7ecbe65d3"},{url:"logo.svg",revision:"413ff1293c152fd032a6892599602b5b"},{url:"404.html",revision:"3d727034f7b356ca6f44ab1ac9380e6f"},{url:"begin.html",revision:"61429b8b373a53cbd3ea93c63f251733"},{url:"index.html",revision:"af3b4651426b370ca528217986b0f165"},{url:"Learn/Application/index.html",revision:"d0cf1b96681287393f496f8ac1ba0bda"},{url:"Learn/Application/nginx/command.html",revision:"996b80f5c0e8f9f4d31fd12c6dca07ad"},{url:"Learn/Application/nginx/conf.html",revision:"12429173ea219ec1fb63ed2c3d395e87"},{url:"Learn/Application/nginx/index.html",revision:"18c47d2a9db880e3a62f26d880fcea82"},{url:"Learn/begin.html",revision:"4fcb5c9f4582fa24b66926feaedc19e2"},{url:"Learn/Docker/config.html",revision:"f70e1f0030abe666639dc0dd13e69bbb"},{url:"Learn/Docker/index.html",revision:"db6f47b2f482c1332ad597e16d170a6c"},{url:"Learn/Docker/usual.html",revision:"cbf14a1e80f8a42e86f2cc7fc3d32dac"},{url:"Learn/index.html",revision:"3aadf048295d32c14b8b77a31857a542"},{url:"Learn/Linux/Alpine/index.html",revision:"8ba32508f84797566272678b544d7cd4"},{url:"Learn/Linux/Alpine/install.html",revision:"2273c69cba876b15bf2c443a3e735b98"},{url:"Learn/Linux/index.html",revision:"7eddbfba89682bb4c15c37bf4c6761d3"},{url:"Learn/Linux/openwrt/config.html",revision:"cc8a56796626d736df7ef22f4ff615e1"},{url:"Learn/Linux/openwrt/index.html",revision:"63b9fa2eb6fec5078e32ad0e96e3986a"},{url:"Learn/Linux/PVE/index.html",revision:"a61a9c4aa096bd8dba82add20e8a7eff"},{url:"Learn/Linux/PVE/install.html",revision:"087a4fb68c770851d8364338cb45326d"},{url:"Learn/Linux/PVE/start.html",revision:"3a3d7700ce2b9d153160d223f60783d4"},{url:"Learn/Linux/PVE/ubuntu.html",revision:"16d8f8d64f9580dfb30a6a03f22bd36b"},{url:"Learn/Linux/tongyong.html",revision:"c08fd4142a90113cb79e0be4b05f0fbc"},{url:"Learn/Other/CloudFlare/CustomDomainuptimerobot.html",revision:"672d8495532a4484288bcd1c7758f55f"},{url:"Learn/Other/CloudFlare/index.html",revision:"5a30fdca11dd3ea47dbd4a3de0faaf84"},{url:"Learn/Other/CloudFlare/jingxiang.html",revision:"9f09b9a022d16b9e77107367edea2cc3"},{url:"Learn/Other/CloudFlare/proxy.html",revision:"b87db5c0a86a95c8b855b7a6f7a312bd"},{url:"Learn/Other/Github/index.html",revision:"98dba0fdce8fba5e5ec7049d62471d24"},{url:"Learn/Other/Github/student.html",revision:"4671f2cbf7408e45d64f4c73cabf2065"},{url:"Learn/Other/index.html",revision:"5f1936929daabe64543287b29293c6e2"},{url:"Learn/RM/BUG/index.html",revision:"1cdaa44a37905e8a80bc58f2d2ed7444"},{url:"Learn/RM/CONFIG/index.html",revision:"1d133873b9d02146f8c507d9ad7bb133"},{url:"Learn/RM/CONFIG/vscode.html",revision:"ae14192aecddf6228b62d4d1d0284078"},{url:"Learn/RM/index.html",revision:"24f4952a76a6171bf543d61579490c96"},{url:"Learn/WEB/email.html",revision:"5778fcfd4e6907b829841cf2ce3c3aaf"},{url:"Learn/WEB/index.html",revision:"60afe51031edc44975e5738dbe64e422"},{url:"Learn/WEB/Vue/2023-1-14.html",revision:"0653bd1b7b6384f3c39d8f6ada8d2920"},{url:"Learn/WEB/Vue/index.html",revision:"07e7793d13d60b0cb08fb24afdcf32b7"},{url:"Life/begin.html",revision:"1516735b99d5bac757b6224a7a3a6cf2"},{url:"Life/index.html",revision:"a99b1f7f0f171ad15612eaac2276868c"},{url:"Life/shop/index.html",revision:"2a222c4c4b6358c2d39f3b3d2097f4ff"},{url:"slides.html",revision:"6ada4caae55e9e0cc4a237d22de6658b"},{url:"assets/202302021755-012bbd0d.png",revision:"611eff7eab716103362f33e0e0ac7ead"},{url:"assets/202302021756-1-c55c3513.png",revision:"067767da23075b1660dd86a83afb624c"},{url:"assets/202302021756-53f33e5e.png",revision:"9266db35534278d5cb266237c15165f2"},{url:"assets/202302021757-1dd685b2.png",revision:"2346218cf00c26179e0c6a1f86f3b03f"},{url:"assets/20230202175802-fae6b057.png",revision:"56195a7f8f0add923fe450906a644164"},{url:"assets/20230217171306-bdedeeb4.png",revision:"3c608e8b2a4fad3606b44bee38518f33"},{url:"assets/20230217171556-cb68c300.png",revision:"ce4be2c1bc77ad6ef9ad86ec7d647a65"},{url:"assets/20230217173136-e4b7ca39.png",revision:"74256442401629e01b10646149dd9a2e"},{url:"assets/20230217174537-d25b6658.png",revision:"829732155aece2c4352e7e2c061444be"},{url:"assets/20230217174656-98363812.png",revision:"660a669727c772d4dc84a4fa0bfb2a43"},{url:"assets/email-3d71ff0f.jpg",revision:"ecabc6949c554b928e1e85eb6ff6c579"},{url:"assets/icon/144.png",revision:"7ed7d5414fb28aa4acf38d1f51b75795"},{url:"assets/icon/152.png",revision:"43e13eb896e1dbd5329b62b03dd0b176"},{url:"assets/icon/192.png",revision:"62142a2526e1c3fbd95860b103e94a47"},{url:"assets/icon/512.png",revision:"ab643b2e52c966bef52e92d7fa7e48b9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/shut_192.png",revision:"4fb1f6cc9705d7f5c0164d995a653c25"},{url:"assets/student-7799f623.jpg",revision:"0ec105fc2662c4e04735841d2b9b06e8"},{url:"assets/studentsucces-57cdae16.png",revision:"18a6f0ed3b0cf7aaf2d6770f5822a06e"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
