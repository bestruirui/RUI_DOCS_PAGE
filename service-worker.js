if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const r=e=>a(e,d),b={module:{uri:d},exports:f,require:r};s[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-7d10efd8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/2023-01-14.html-460c9e1c.js",revision:"c0d8e93bb943b6db20a63b7d0da5cf2c"},{url:"assets/2023-01-14.html-da0aa901.js",revision:"5da9137b835470187697a42335edf0cd"},{url:"assets/2023-02-21.html-66ef6f23.js",revision:"932ed06ee13c27eb5df55cf999d9a417"},{url:"assets/2023-02-21.html-fd36d501.js",revision:"08e59af9208264fe6472e295c5dedecb"},{url:"assets/2023-02-23.html-4f91e79e.js",revision:"f2f03bc25547f81244b20be80cb55e86"},{url:"assets/2023-02-23.html-eab079af.js",revision:"30bdd58cdc1ff3a182a2b15a39d00ab1"},{url:"assets/404.html-5a6c5255.js",revision:"f922aea55053344364b92f5a7a23d1f0"},{url:"assets/404.html-6d1a278c.js",revision:"517d84336467ba0c56c77fb8c1ef9ac1"},{url:"assets/app-e45f19e8.js",revision:"59e6d9cb4191ddc6e7f2d1bc5961ef6b"},{url:"assets/auto-87bdde05.js",revision:"20ea9443720552e53e6b48154a130003"},{url:"assets/begin.html-1866a672.js",revision:"e905d08009fe2525e409c12236164936"},{url:"assets/begin.html-1e330307.js",revision:"86546eb775439d6985f3fed9af5fbc70"},{url:"assets/begin.html-5443f6fa.js",revision:"9e26e29ce091f3cd5523e04c632918d3"},{url:"assets/begin.html-6b49680f.js",revision:"7cffe03699be8bec7fa787b9ad077f2a"},{url:"assets/begin.html-8398cb9e.js",revision:"4e53c7fabc5a2c2718ae762ddab0a741"},{url:"assets/begin.html-e7bda4ee.js",revision:"1b0b643eca6e4ad8db95f4cdbeea2bc1"},{url:"assets/clock.html-68bc83c9.js",revision:"3f1794586ddcf2837ca3b3418d9f339d"},{url:"assets/clock.html-fc092efc.js",revision:"3586eda75c31eda5b6467e5c12de6431"},{url:"assets/command.html-302654ef.js",revision:"d0a17c51960aaff4170604b7bbf57d8c"},{url:"assets/command.html-bedb95df.js",revision:"710c38b35fede56ce2bb022d17f397e6"},{url:"assets/conf.html-33ad035a.js",revision:"92c7e7d4826aa18866d4db93d8820a65"},{url:"assets/conf.html-c7ddc8d9.js",revision:"484ec1804b0b5537f55e22554a556b6e"},{url:"assets/config.html-027fe636.js",revision:"90ae7667a33809ef5d873d36cf821394"},{url:"assets/config.html-ad08dd42.js",revision:"e3faa54e7e595a295a22046bc6fcc215"},{url:"assets/config.html-b7bd7dbb.js",revision:"90ecde1ef4b2bc490285cacfa348e33b"},{url:"assets/config.html-ead97a0f.js",revision:"cdac8e89036e41950cee05b5eb4537b3"},{url:"assets/CustomDomainuptimerobot.html-387d7b1a.js",revision:"bedfbb84e9eb023c8339019b5553418d"},{url:"assets/CustomDomainuptimerobot.html-50bc270b.js",revision:"2de31f98e2da86b22560fc2ad665a7f4"},{url:"assets/diagram-definition.0faef4c2-73588523.js",revision:"2d4b55a35ab3f770a64791820ee0de8d"},{url:"assets/email.html-9276b3b2.js",revision:"02b619eb7c1f93e399cc033efb35aeb0"},{url:"assets/email.html-94ef02f4.js",revision:"f3aa6f01915f626abcbcb73526bd2b3f"},{url:"assets/FliqIo.html-20d76155.js",revision:"8e76d9486c48236df33b76182139ed78"},{url:"assets/FliqIo.html-a5263dc0.js",revision:"ebebed0b2f3c787df8c267bdf62531d3"},{url:"assets/flowchart.parse-08db0949.js",revision:"7f2dda9a63866ed051e7457a731ff6d7"},{url:"assets/framework-e618a78f.js",revision:"f7bac63b54fbc6ba2edfa2265a387ce0"},{url:"assets/highlight.esm-f3520595.js",revision:"a825381761cdddcfa727cb3d3ad0f7a1"},{url:"assets/icon/cool.svg",revision:"4a3579c0b59155bd32eadc7412b95d73"},{url:"assets/icon/PWA_LOGO.svg",revision:"9f135469f3cf64875e34fd1b68da2540"},{url:"assets/index-c36a3f98.js",revision:"e1e86987f1c90315a06576ff11ebc8b1"},{url:"assets/index.html-0089254f.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-02896040.js",revision:"595617bed35a6e083a81f0e3f433681d"},{url:"assets/index.html-07bf1b21.js",revision:"15437de1b30fd11316b012cbc34ee9cb"},{url:"assets/index.html-0b545b3e.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-1758e0d9.js",revision:"597d3c898b46c9cfa60c3030b7af34ce"},{url:"assets/index.html-18b6c197.js",revision:"1d5c51f364c4164cc5e6eadac7e5d871"},{url:"assets/index.html-2442af44.js",revision:"2e4ad5eb65bc3d39a3769221d178d4e3"},{url:"assets/index.html-25b7bc35.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-2e7b0238.js",revision:"6cca1f8e55f30a1c6ad5a501db653377"},{url:"assets/index.html-34b70074.js",revision:"f9fa1234347251d8fb2434ffbb50fccd"},{url:"assets/index.html-408ca419.js",revision:"dc58b020cbd241f91f6eaad6e6a9ceb5"},{url:"assets/index.html-491955bc.js",revision:"a106ad79c91f945c55238a53ace8162d"},{url:"assets/index.html-53158053.js",revision:"742046744d9b2960ca6e728f6abc25d8"},{url:"assets/index.html-5b696356.js",revision:"4d29decd3934cec548207c9cb582d264"},{url:"assets/index.html-5ca8f34c.js",revision:"175450bae19c1c6012c567977e1d71eb"},{url:"assets/index.html-612eb24f.js",revision:"c55256ea73fae2b84bb95b7bf441c91a"},{url:"assets/index.html-67973cd5.js",revision:"074b48ef24df52f6a7ab4cbda209d216"},{url:"assets/index.html-67e6fae3.js",revision:"b84024eeaf742a47653343d6a8b9a914"},{url:"assets/index.html-6a7e19d3.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-6abc30af.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-6d386409.js",revision:"33cb14f8c8adba72c6094dd0cc024c76"},{url:"assets/index.html-71eddcd1.js",revision:"02e653785f5f5a4304157c73d5c435cb"},{url:"assets/index.html-738824d0.js",revision:"7f619d486d915f8e5bc7daafe61f230a"},{url:"assets/index.html-812ab590.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-81369033.js",revision:"957b7f8c3ad7e9e2763b90a159ec7372"},{url:"assets/index.html-89a1534f.js",revision:"7d68583b9b43035a810385dbc89b96c6"},{url:"assets/index.html-900172c3.js",revision:"0b8540383f4927ea1574818d7baeba75"},{url:"assets/index.html-92de897a.js",revision:"fb6c0980de884c49195843724a2d0769"},{url:"assets/index.html-ae9f4a67.js",revision:"9f223efd9dd944cb96c81df79a12f98e"},{url:"assets/index.html-b602a96b.js",revision:"3ee10de289e948d4498d0ebd7c7867fd"},{url:"assets/index.html-b8c711f2.js",revision:"9e84a0d6400bf3d5decf097e0aa668ca"},{url:"assets/index.html-d17ed2fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d32c96b6.js",revision:"5d12115a4bb61ec930edda8bceb1c3e3"},{url:"assets/index.html-d41e37f0.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d9426bd0.js",revision:"3650b202f27d789c5f56180ad7e08fce"},{url:"assets/index.html-de4d61ad.js",revision:"a87ae5900ee969202a6a04f3f5547a7f"},{url:"assets/index.html-e5c1d4a7.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-e610c829.js",revision:"e80ab2425a56fab140285733605e1851"},{url:"assets/index.html-e8d8e520.js",revision:"492de987094f16d5a4bca2aa2c85e22a"},{url:"assets/index.html-ebd6e2e1.js",revision:"08f85505d02e7eea5da2c06473d921ea"},{url:"assets/index.html-ee60c0fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-f3beb181.js",revision:"b96d381fa62c549276b73538150a6b89"},{url:"assets/index.html-f664193a.js",revision:"006fa1a40cd96b2cd1d6bd18252aef92"},{url:"assets/index.html-fa2f4e80.js",revision:"6eed3dafad5c689d1f8337a5bf70da4d"},{url:"assets/install.html-484d7bde.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/install.html-6db637a0.js",revision:"2cabc09a0816ee3e4d20a651c615f60e"},{url:"assets/install.html-8c5229c8.js",revision:"5ff9b6f7edc7cba75b5a024e0d1e6e4e"},{url:"assets/install.html-e0ece643.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/jingxiang.html-9515f04c.js",revision:"3dfb998de41263465d7ea59f2758cb25"},{url:"assets/jingxiang.html-f39c2247.js",revision:"f51fabae196d48191c838b2051322a7c"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-502ef1d5.js",revision:"5c465288d1c3c1b5fb15f2ce3facb5aa"},{url:"assets/math.esm-4cb70fc8.js",revision:"4a84790df5fb36ae16e26fbbebc286a4"},{url:"assets/mermaid-mindmap.esm.min-d3d826e7.js",revision:"8abcb4c160a60652e413ab638f8efdd8"},{url:"assets/mermaid.esm.min-ef7393f1.js",revision:"57da3d2fb4354fa0d480871ed8056613"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-c0aed5fe.js",revision:"77fd8ecae1a39bad1e56b9297b88bf3d"},{url:"assets/proxy.html-8b9cc31d.js",revision:"bf93c81bc24b7c21cceab73e0b5f3fa7"},{url:"assets/proxy.html-97d60ae7.js",revision:"040f6aada8948d5c6e3fbcc032bd58ea"},{url:"assets/reveal.esm-5c119aeb.js",revision:"2394821884527f6ad217c0c95c7c6698"},{url:"assets/search.esm-e8f6ca73.js",revision:"2d80dc9d31c03399ada54b934127934b"},{url:"assets/SearchResult-151c0e60.js",revision:"ff92ee95143b5061385e69cce17e75bf"},{url:"assets/slides.html-15541345.js",revision:"7f19b9378edaad9b30b0c9ad5cbbd1f7"},{url:"assets/slides.html-4afd929d.js",revision:"451899a52621197edebc3607bcc28019"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/start.html-34daf2ae.js",revision:"c690c8ed0cf3f1cd8b5b900ecbc29dd8"},{url:"assets/start.html-8087ceeb.js",revision:"f0d3b8bfb9acc560ef70640ab3b8f99e"},{url:"assets/student.html-02f40830.js",revision:"3ea597ed1017e4c21c430f6d219b0a0e"},{url:"assets/student.html-8610ed88.js",revision:"e729075dca9587e40205bfc419209a7b"},{url:"assets/style-ef2d86b7.css",revision:"9bb114f562553491d69d9bcc7c03720d"},{url:"assets/tongyong.html-02a6bb0f.js",revision:"74e8e9932de8237828c05e14f322ccb4"},{url:"assets/tongyong.html-af233cb3.js",revision:"a58bda3a3cc4ccaff266f588483b13dc"},{url:"assets/ubuntu.html-de99f67b.js",revision:"1d3bd2d8a70ebca57bc16f9f588c5016"},{url:"assets/ubuntu.html-fb151f5c.js",revision:"af27824e8112846c277efc3fbb821a27"},{url:"assets/usual.html-3c2ce1f1.js",revision:"cbb6378480c10a1f55cccdf656779829"},{url:"assets/usual.html-3cee9b2d.js",revision:"1bddf6ce4a117f893ed57454ca4ccd8f"},{url:"assets/vscode.html-1f44e6cd.js",revision:"e06bbec3a7132898202693db648d52f9"},{url:"assets/vscode.html-86e4baf6.js",revision:"c6e4e8708774a8091574bd1dd6f93246"},{url:"assets/vue-repl-6662e5af.js",revision:"45530350dfd6a0db7b69c88cc4d17e34"},{url:"assets/VuePlayground-5fd17f7a.js",revision:"15fce4daaf2299e98371b9834ae835b0"},{url:"assets/waline-meta-0e8855a4.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm-68db8aeb.js",revision:"506aa37cbe56ce517c52b2db29881ad6"},{url:"baidu.js",revision:"e8c597c747e9c220c69552e4a2425155"},{url:"bg.svg",revision:"a2d1cf1ad2becdd79823541dae101fcd"},{url:"logo.svg",revision:"413ff1293c152fd032a6892599602b5b"},{url:"404.html",revision:"a521b4e679785d718219aa1bfaf0a1ab"},{url:"begin.html",revision:"70d33d68a2586df56576fc2bde876e06"},{url:"index.html",revision:"541a056b40f7b024521e534a527c047c"},{url:"Learn/Application/index.html",revision:"3f3ed7366aa87b3ce833862e4059d54e"},{url:"Learn/Application/nginx/command.html",revision:"92de9503042c2eb72532bc8826362f83"},{url:"Learn/Application/nginx/conf.html",revision:"23f9e174cee4ae2101f83adf7446ecf7"},{url:"Learn/Application/nginx/index.html",revision:"142b0ba2f0ac97c4ead4d79d7ac530be"},{url:"Learn/Application/Windows/FliqIo.html",revision:"aab7bac627d3a4fc4f1b03a662d5538e"},{url:"Learn/Application/Windows/index.html",revision:"3a2bbdb4e0f7b747b3628f72bb647e51"},{url:"Learn/begin.html",revision:"557b3b5c0f74a3bac31538223b5ac8e8"},{url:"Learn/Docker/config.html",revision:"afc93344f3a804d9adb637aaf1d08d81"},{url:"Learn/Docker/index.html",revision:"e3b707301f461e9e8d1f9fd016bac1da"},{url:"Learn/Docker/usual.html",revision:"48f7138d38f994a87c9c08d5f78f4aa5"},{url:"Learn/index.html",revision:"3de66feb55bf12e1fca47435277270da"},{url:"Learn/Linux/Alpine/index.html",revision:"3d66780bb29f9324abd20bb63f1c9b8d"},{url:"Learn/Linux/Alpine/install.html",revision:"bd9cdb1d9ae07b41a38b6f9cc6db42e4"},{url:"Learn/Linux/index.html",revision:"aec197ec9055c3587a89e74fe7b9d27f"},{url:"Learn/Linux/openwrt/config.html",revision:"2650874f8e9efcaf8d41f8daa67d2d4c"},{url:"Learn/Linux/openwrt/index.html",revision:"8ecd48ce8beeb47f7e433df6fcfda05d"},{url:"Learn/Linux/PVE/index.html",revision:"37a345b7a9aecaa26a355c900e383708"},{url:"Learn/Linux/PVE/install.html",revision:"06b701b498cdde7d1d95c86f5bae45f2"},{url:"Learn/Linux/PVE/start.html",revision:"c594226d084509751ee736aefecec0c9"},{url:"Learn/Linux/PVE/ubuntu.html",revision:"791993fbacfe55c276c155f40eda1850"},{url:"Learn/Linux/shell/2023-02-23.html",revision:"84001ed04364381c1bd4b9d6ce59bf07"},{url:"Learn/Linux/shell/index.html",revision:"96b831f0dcee892d262ec5343bdfda7e"},{url:"Learn/Linux/shell/tongyong.html",revision:"3cfebba8acc08307c5b94fec390d042a"},{url:"Learn/Other/CloudFlare/CustomDomainuptimerobot.html",revision:"999b1919e435f3c9c6515ef7be371a22"},{url:"Learn/Other/CloudFlare/index.html",revision:"28911ba3f47a9917a374c0bc3adf9b9d"},{url:"Learn/Other/CloudFlare/jingxiang.html",revision:"0db5a26a761650a316cd13ff3e568f46"},{url:"Learn/Other/CloudFlare/proxy.html",revision:"04c837b2a6a429479f2982c554ee685c"},{url:"Learn/Other/Github/index.html",revision:"13bb4c5d0c9cd5e0096e936b84dce985"},{url:"Learn/Other/Github/student.html",revision:"ee02c0ee5da85e7aa59f25066b746515"},{url:"Learn/Other/index.html",revision:"5b6d0c60cd6decd37143222f2c37ae11"},{url:"Learn/RM/BUG/clock.html",revision:"52ad8ccdc15d981e73c86b501f067a36"},{url:"Learn/RM/BUG/index.html",revision:"f6d7ff0828d267d39a1b22a6d4a9cc1c"},{url:"Learn/RM/CONFIG/index.html",revision:"aee843bd39cffb3d71e82e1fa0c46e01"},{url:"Learn/RM/CONFIG/vscode.html",revision:"fd7038a385dfcf763195038c1081b05e"},{url:"Learn/RM/index.html",revision:"2c37cbd7520e83886bbe6f0a2bf48d53"},{url:"Learn/WEB/email.html",revision:"5b65462145b94f8d00bf9421e631b04b"},{url:"Learn/WEB/index.html",revision:"11da0760cb2268a6321d4b9f02f75a54"},{url:"Learn/WEB/react/2023-02-21.html",revision:"e366ab7639144bfed950457605424a2c"},{url:"Learn/WEB/react/index.html",revision:"e967b47eb8c94a86fcd997728be5b40d"},{url:"Learn/WEB/Vue/2023-01-14.html",revision:"2ca8c22b4a690c2262ba49e59726e6ff"},{url:"Learn/WEB/Vue/index.html",revision:"ce77c7893451079dd0056b99d50e27e9"},{url:"Life/begin.html",revision:"7e1a1791aa73f40573c82227b960785a"},{url:"Life/index.html",revision:"4047f6a0c7513b7b74d9970bff7216dc"},{url:"Life/shop/index.html",revision:"433e476eddf29f7eed9952c69cb2557e"},{url:"slides.html",revision:"8dc1ec86306dddd6393e76208f7da2c8"},{url:"assets/202302021755-012bbd0d.png",revision:"611eff7eab716103362f33e0e0ac7ead"},{url:"assets/202302021756-1-c55c3513.png",revision:"067767da23075b1660dd86a83afb624c"},{url:"assets/202302021756-53f33e5e.png",revision:"9266db35534278d5cb266237c15165f2"},{url:"assets/202302021757-1dd685b2.png",revision:"2346218cf00c26179e0c6a1f86f3b03f"},{url:"assets/20230202175802-fae6b057.png",revision:"56195a7f8f0add923fe450906a644164"},{url:"assets/20230217171306-bdedeeb4.png",revision:"3c608e8b2a4fad3606b44bee38518f33"},{url:"assets/20230217171556-cb68c300.png",revision:"ce4be2c1bc77ad6ef9ad86ec7d647a65"},{url:"assets/20230217173136-e4b7ca39.png",revision:"74256442401629e01b10646149dd9a2e"},{url:"assets/20230217174537-d25b6658.png",revision:"829732155aece2c4352e7e2c061444be"},{url:"assets/20230217174656-98363812.png",revision:"660a669727c772d4dc84a4fa0bfb2a43"},{url:"assets/20230218142720-da759dab.png",revision:"188c342fdcdf93dfae956666e322ed97"},{url:"assets/20230316142844-2577cb0f.png",revision:"ae516a7867a2d69559529b5dc7fdb3c9"},{url:"assets/20230316143029-1aef3a35.png",revision:"75268e566c2ec9999a2b7514bedf67a6"},{url:"assets/email-3d71ff0f.jpg",revision:"ecabc6949c554b928e1e85eb6ff6c579"},{url:"assets/icon/144.png",revision:"7ed7d5414fb28aa4acf38d1f51b75795"},{url:"assets/icon/152.png",revision:"43e13eb896e1dbd5329b62b03dd0b176"},{url:"assets/icon/192.png",revision:"62142a2526e1c3fbd95860b103e94a47"},{url:"assets/icon/512.png",revision:"ab643b2e52c966bef52e92d7fa7e48b9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/shut_192.png",revision:"4fb1f6cc9705d7f5c0164d995a653c25"},{url:"assets/student-7799f623.jpg",revision:"0ec105fc2662c4e04735841d2b9b06e8"},{url:"assets/studentsucces-57cdae16.png",revision:"18a6f0ed3b0cf7aaf2d6770f5822a06e"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
