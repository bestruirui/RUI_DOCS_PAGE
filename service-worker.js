if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-7d10efd8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/2023-1-14.html-10caee1f.js",revision:"103dc8b55a6c0d46e1701898db80e52e"},{url:"assets/2023-1-14.html-4d63c90c.js",revision:"a4e2cc41fdcd18f4d5b37ba8be4eb469"},{url:"assets/404.html-5a6c5255.js",revision:"f922aea55053344364b92f5a7a23d1f0"},{url:"assets/404.html-6d1a278c.js",revision:"517d84336467ba0c56c77fb8c1ef9ac1"},{url:"assets/app-92bf0f3c.js",revision:"eb15f06a52ae16c08524c7c2b1b70c07"},{url:"assets/auto-87bdde05.js",revision:"20ea9443720552e53e6b48154a130003"},{url:"assets/begin.html-0d5a9387.js",revision:"5d4b3a11eae70aa4132f25449a7b1911"},{url:"assets/begin.html-1866a672.js",revision:"e905d08009fe2525e409c12236164936"},{url:"assets/begin.html-5568f996.js",revision:"b96eb1624c47db96bacdb440c516471c"},{url:"assets/begin.html-6b49680f.js",revision:"7cffe03699be8bec7fa787b9ad077f2a"},{url:"assets/begin.html-8398cb9e.js",revision:"4e53c7fabc5a2c2718ae762ddab0a741"},{url:"assets/begin.html-e7bda4ee.js",revision:"1b0b643eca6e4ad8db95f4cdbeea2bc1"},{url:"assets/command.html-302654ef.js",revision:"d0a17c51960aaff4170604b7bbf57d8c"},{url:"assets/command.html-bedb95df.js",revision:"710c38b35fede56ce2bb022d17f397e6"},{url:"assets/conf.html-33ad035a.js",revision:"92c7e7d4826aa18866d4db93d8820a65"},{url:"assets/conf.html-c7ddc8d9.js",revision:"484ec1804b0b5537f55e22554a556b6e"},{url:"assets/config.html-027fe636.js",revision:"90ae7667a33809ef5d873d36cf821394"},{url:"assets/config.html-ad08dd42.js",revision:"e3faa54e7e595a295a22046bc6fcc215"},{url:"assets/config.html-b7bd7dbb.js",revision:"90ecde1ef4b2bc490285cacfa348e33b"},{url:"assets/config.html-c40fa472.js",revision:"cf9f67d044971d01ce4b64088561654f"},{url:"assets/CustomDomainuptimerobot.html-387d7b1a.js",revision:"bedfbb84e9eb023c8339019b5553418d"},{url:"assets/CustomDomainuptimerobot.html-50bc270b.js",revision:"2de31f98e2da86b22560fc2ad665a7f4"},{url:"assets/diagram-definition.0faef4c2-73588523.js",revision:"2d4b55a35ab3f770a64791820ee0de8d"},{url:"assets/email.html-9276b3b2.js",revision:"02b619eb7c1f93e399cc033efb35aeb0"},{url:"assets/email.html-94ef02f4.js",revision:"f3aa6f01915f626abcbcb73526bd2b3f"},{url:"assets/FliqIo.html-20d76155.js",revision:"8e76d9486c48236df33b76182139ed78"},{url:"assets/FliqIo.html-a5263dc0.js",revision:"ebebed0b2f3c787df8c267bdf62531d3"},{url:"assets/flowchart.parse-08db0949.js",revision:"7f2dda9a63866ed051e7457a731ff6d7"},{url:"assets/framework-e618a78f.js",revision:"f7bac63b54fbc6ba2edfa2265a387ce0"},{url:"assets/highlight.esm-f3520595.js",revision:"a825381761cdddcfa727cb3d3ad0f7a1"},{url:"assets/icon/cool.svg",revision:"4a3579c0b59155bd32eadc7412b95d73"},{url:"assets/icon/PWA_LOGO.svg",revision:"9f135469f3cf64875e34fd1b68da2540"},{url:"assets/index-c36a3f98.js",revision:"e1e86987f1c90315a06576ff11ebc8b1"},{url:"assets/index.html-0089254f.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-02896040.js",revision:"595617bed35a6e083a81f0e3f433681d"},{url:"assets/index.html-07bf1b21.js",revision:"15437de1b30fd11316b012cbc34ee9cb"},{url:"assets/index.html-0b545b3e.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-0ba9d6df.js",revision:"93f6ae5f55bcdeb4e2d6b87677c2d1ae"},{url:"assets/index.html-18b6c197.js",revision:"1d5c51f364c4164cc5e6eadac7e5d871"},{url:"assets/index.html-2442af44.js",revision:"2e4ad5eb65bc3d39a3769221d178d4e3"},{url:"assets/index.html-25b7bc35.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-2bd932ee.js",revision:"382bf7e3036e06eb8e69c4cfcb6d279e"},{url:"assets/index.html-3d6b5a95.js",revision:"be216844333fefdc02d9ee23ba45f493"},{url:"assets/index.html-408ca419.js",revision:"dc58b020cbd241f91f6eaad6e6a9ceb5"},{url:"assets/index.html-44461b07.js",revision:"ca764e2dbcc59c5d4e55596021fd3663"},{url:"assets/index.html-491955bc.js",revision:"a106ad79c91f945c55238a53ace8162d"},{url:"assets/index.html-4b8433b0.js",revision:"7455fe0a2eff5882747b37f993d99de5"},{url:"assets/index.html-5017cec3.js",revision:"8250cc222076e4ecc74621916065ab96"},{url:"assets/index.html-53158053.js",revision:"742046744d9b2960ca6e728f6abc25d8"},{url:"assets/index.html-5ca8f34c.js",revision:"175450bae19c1c6012c567977e1d71eb"},{url:"assets/index.html-67973cd5.js",revision:"074b48ef24df52f6a7ab4cbda209d216"},{url:"assets/index.html-67e6fae3.js",revision:"b84024eeaf742a47653343d6a8b9a914"},{url:"assets/index.html-6abc30af.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-71eddcd1.js",revision:"02e653785f5f5a4304157c73d5c435cb"},{url:"assets/index.html-738824d0.js",revision:"7f619d486d915f8e5bc7daafe61f230a"},{url:"assets/index.html-812ab590.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-89a1534f.js",revision:"7d68583b9b43035a810385dbc89b96c6"},{url:"assets/index.html-ae9f4a67.js",revision:"9f223efd9dd944cb96c81df79a12f98e"},{url:"assets/index.html-b602a96b.js",revision:"3ee10de289e948d4498d0ebd7c7867fd"},{url:"assets/index.html-b8c711f2.js",revision:"9e84a0d6400bf3d5decf097e0aa668ca"},{url:"assets/index.html-c7b5fbb7.js",revision:"200653e4cdb797dcd108640a71defd8d"},{url:"assets/index.html-d17ed2fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d41e37f0.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-de4d61ad.js",revision:"a87ae5900ee969202a6a04f3f5547a7f"},{url:"assets/index.html-e610c829.js",revision:"e80ab2425a56fab140285733605e1851"},{url:"assets/index.html-e8d8e520.js",revision:"492de987094f16d5a4bca2aa2c85e22a"},{url:"assets/index.html-ebd6e2e1.js",revision:"08f85505d02e7eea5da2c06473d921ea"},{url:"assets/index.html-ec51a6f7.js",revision:"122f0b4c7f0f95caf905867c5c112e51"},{url:"assets/index.html-ee60c0fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-f3beb181.js",revision:"b96d381fa62c549276b73538150a6b89"},{url:"assets/index.html-f664193a.js",revision:"006fa1a40cd96b2cd1d6bd18252aef92"},{url:"assets/index.html-f6799b97.js",revision:"c2acc83e509b49a46b49f87bfd199d7d"},{url:"assets/index.html-f9ce237d.js",revision:"f1813c8cc86d566755aea64830661844"},{url:"assets/install.html-484d7bde.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/install.html-6db637a0.js",revision:"2cabc09a0816ee3e4d20a651c615f60e"},{url:"assets/install.html-8c5229c8.js",revision:"5ff9b6f7edc7cba75b5a024e0d1e6e4e"},{url:"assets/install.html-e0ece643.js",revision:"d60267c2cb5beb2af3ded6980a65d3ee"},{url:"assets/jingxiang.html-9515f04c.js",revision:"3dfb998de41263465d7ea59f2758cb25"},{url:"assets/jingxiang.html-f39c2247.js",revision:"f51fabae196d48191c838b2051322a7c"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-502ef1d5.js",revision:"5c465288d1c3c1b5fb15f2ce3facb5aa"},{url:"assets/math.esm-4cb70fc8.js",revision:"4a84790df5fb36ae16e26fbbebc286a4"},{url:"assets/mermaid-mindmap.esm.min-ed1cdcd8.js",revision:"9493a75622d607740dd3494c18a5f921"},{url:"assets/mermaid.esm.min-ef7393f1.js",revision:"57da3d2fb4354fa0d480871ed8056613"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-c0aed5fe.js",revision:"77fd8ecae1a39bad1e56b9297b88bf3d"},{url:"assets/proxy.html-8b9cc31d.js",revision:"bf93c81bc24b7c21cceab73e0b5f3fa7"},{url:"assets/proxy.html-97d60ae7.js",revision:"040f6aada8948d5c6e3fbcc032bd58ea"},{url:"assets/reveal.esm-5c119aeb.js",revision:"2394821884527f6ad217c0c95c7c6698"},{url:"assets/search.esm-e8f6ca73.js",revision:"2d80dc9d31c03399ada54b934127934b"},{url:"assets/SearchResult-50250852.js",revision:"b9f006a5f5cf8cb7d94349eb6366e59a"},{url:"assets/slides.html-15541345.js",revision:"7f19b9378edaad9b30b0c9ad5cbbd1f7"},{url:"assets/slides.html-4afd929d.js",revision:"451899a52621197edebc3607bcc28019"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/start.html-0a7cb5ef.js",revision:"a4c0757a24eacb7f938ccbc582616b84"},{url:"assets/start.html-487e232c.js",revision:"3d4f9733033b9ecd4ecfa069360bbf14"},{url:"assets/student.html-482f4365.js",revision:"35cdefa78d3f05b8405c186a006672e5"},{url:"assets/student.html-7dcce6d7.js",revision:"cc1ef97ff6c1a746931d4b1d57e83704"},{url:"assets/style-9a1bd2fc.css",revision:"b58bc20fa36b0fe22b487e7aa62bf242"},{url:"assets/tongyong.html-8c2be1df.js",revision:"3b6018ee6968e8a5592a217e431dc40f"},{url:"assets/tongyong.html-af233cb3.js",revision:"a58bda3a3cc4ccaff266f588483b13dc"},{url:"assets/ubuntu.html-080e7f65.js",revision:"b85f8b9ac705499904c5df094677cac7"},{url:"assets/ubuntu.html-4bcb0fcf.js",revision:"dda438df17167df1ed7e60160d16f72a"},{url:"assets/usual.html-31878a24.js",revision:"049198c11071ce32a4244c1aa7044ff4"},{url:"assets/usual.html-d7f263c5.js",revision:"f2ba89c423f488ee145f68bff6df5779"},{url:"assets/vscode.html-6362a115.js",revision:"17897ddcad509e7aa48b435c5c2d7075"},{url:"assets/vscode.html-c2127bd0.js",revision:"520e6655127c32137055134b5b5b74d5"},{url:"assets/vue-repl-d3096607.js",revision:"144a2fcf2d25c817c14ad63535b34baa"},{url:"assets/VuePlayground-acb5b295.js",revision:"5321b012f0391565b99ef26fa78e0601"},{url:"assets/waline-meta-0e8855a4.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm-68db8aeb.js",revision:"506aa37cbe56ce517c52b2db29881ad6"},{url:"baidu.js",revision:"e8c597c747e9c220c69552e4a2425155"},{url:"bg.svg",revision:"a2d1cf1ad2becdd79823541dae101fcd"},{url:"logo.svg",revision:"413ff1293c152fd032a6892599602b5b"},{url:"404.html",revision:"c5e08eaad0e3bd55948a75ce224a5201"},{url:"begin.html",revision:"823324854a42cb5adf2bffde339613e6"},{url:"index.html",revision:"7a465ee24516aca624dfa3649e26980e"},{url:"Learn/Application/index.html",revision:"b344acbd4266d3910509914c3fa74ccd"},{url:"Learn/Application/nginx/command.html",revision:"2ea10e0f4b9809f8e942595a4a03ea8a"},{url:"Learn/Application/nginx/conf.html",revision:"aa6227761f6b882610ff4c8cfa434715"},{url:"Learn/Application/nginx/index.html",revision:"4b6f5b0ce5dc2fbe2d4660cbb1b713db"},{url:"Learn/Application/Windows/FliqIo.html",revision:"3b07f2f6b2a20beed1905c58ea3edd34"},{url:"Learn/Application/Windows/index.html",revision:"f1c8a32b0a02641a48d0baca7f85a019"},{url:"Learn/begin.html",revision:"8b760880c7cabbbc42828a0fb7ab1236"},{url:"Learn/Docker/config.html",revision:"56be8fb54989ba8630bb4e71cf9db005"},{url:"Learn/Docker/index.html",revision:"8caccbb21e505c22012f262d780def3b"},{url:"Learn/Docker/usual.html",revision:"c6b24e800f0668deb63e302d520405ad"},{url:"Learn/index.html",revision:"1171ed51a5edbfada76ec77e6f3c0127"},{url:"Learn/Linux/Alpine/index.html",revision:"9e5c4487a8b0e07e0daf061de21b7b46"},{url:"Learn/Linux/Alpine/install.html",revision:"4100f57211e86fd61294c4c275ca49be"},{url:"Learn/Linux/index.html",revision:"19baeafde274b7b2d45ac9a94bfce49e"},{url:"Learn/Linux/openwrt/config.html",revision:"00097e27c3c330da16fbd99cce6a9010"},{url:"Learn/Linux/openwrt/index.html",revision:"ffacb50cd699d0c38a652f3b21445309"},{url:"Learn/Linux/PVE/index.html",revision:"3021435b2902b94f17f3edea67864a3c"},{url:"Learn/Linux/PVE/install.html",revision:"70956e6024789f283a1b3b71b8482fac"},{url:"Learn/Linux/PVE/start.html",revision:"92fbf9918e24bd3ac44e079f979add3b"},{url:"Learn/Linux/PVE/ubuntu.html",revision:"8d3bdc8575b0a1592debb944c360ad56"},{url:"Learn/Linux/tongyong.html",revision:"28e6f96d33a14ceb952044fe192bc702"},{url:"Learn/Other/CloudFlare/CustomDomainuptimerobot.html",revision:"82869d05744128f47431c091871bde3b"},{url:"Learn/Other/CloudFlare/index.html",revision:"e44f0f820a25732ffa91e6da730ae9f0"},{url:"Learn/Other/CloudFlare/jingxiang.html",revision:"7e29170d9d8d1bfb37547f59c9712d59"},{url:"Learn/Other/CloudFlare/proxy.html",revision:"7bf8f8b0e2761845f2f8262d50cf2d63"},{url:"Learn/Other/Github/index.html",revision:"79f77647b52b825132479a3178b9f490"},{url:"Learn/Other/Github/student.html",revision:"fd438efda7dd6471adc54e6e768f5bcb"},{url:"Learn/Other/index.html",revision:"febbb01836c9d83928b947185f3eea46"},{url:"Learn/RM/BUG/index.html",revision:"cacefd2c86904871ccff91902a8e2325"},{url:"Learn/RM/CONFIG/index.html",revision:"ab98346419970a554b56e8989ebc9a99"},{url:"Learn/RM/CONFIG/vscode.html",revision:"1a9d661938d9cd59ea0ce70acd8ceb44"},{url:"Learn/RM/index.html",revision:"714f930f8cc7d736a6318449d87bd77f"},{url:"Learn/WEB/email.html",revision:"ac87c975c3ddf3f4f437817af329070f"},{url:"Learn/WEB/index.html",revision:"672ea5b3f1712ee3704074a49750968a"},{url:"Learn/WEB/Vue/2023-1-14.html",revision:"a2e24398f0e94ca783213da95b2ec13f"},{url:"Learn/WEB/Vue/index.html",revision:"0c05b927ba646997e1fa4c2dcc49b3a2"},{url:"Life/begin.html",revision:"a82f1760180b8c662c81dfc95a9459c7"},{url:"Life/index.html",revision:"c8b17a72f260a5b8e30263b31e10ab5a"},{url:"Life/shop/index.html",revision:"2e6db2d7ceff267baf798a227f4ff565"},{url:"slides.html",revision:"a2d8c07626eb460d3a3f3c73fbb83888"},{url:"assets/202302021755-012bbd0d.png",revision:"611eff7eab716103362f33e0e0ac7ead"},{url:"assets/202302021756-1-c55c3513.png",revision:"067767da23075b1660dd86a83afb624c"},{url:"assets/202302021756-53f33e5e.png",revision:"9266db35534278d5cb266237c15165f2"},{url:"assets/202302021757-1dd685b2.png",revision:"2346218cf00c26179e0c6a1f86f3b03f"},{url:"assets/20230202175802-fae6b057.png",revision:"56195a7f8f0add923fe450906a644164"},{url:"assets/20230217171306-bdedeeb4.png",revision:"3c608e8b2a4fad3606b44bee38518f33"},{url:"assets/20230217171556-cb68c300.png",revision:"ce4be2c1bc77ad6ef9ad86ec7d647a65"},{url:"assets/20230217173136-e4b7ca39.png",revision:"74256442401629e01b10646149dd9a2e"},{url:"assets/20230217174537-d25b6658.png",revision:"829732155aece2c4352e7e2c061444be"},{url:"assets/20230217174656-98363812.png",revision:"660a669727c772d4dc84a4fa0bfb2a43"},{url:"assets/20230218142720-da759dab.png",revision:"188c342fdcdf93dfae956666e322ed97"},{url:"assets/email-3d71ff0f.jpg",revision:"ecabc6949c554b928e1e85eb6ff6c579"},{url:"assets/icon/144.png",revision:"7ed7d5414fb28aa4acf38d1f51b75795"},{url:"assets/icon/152.png",revision:"43e13eb896e1dbd5329b62b03dd0b176"},{url:"assets/icon/192.png",revision:"62142a2526e1c3fbd95860b103e94a47"},{url:"assets/icon/512.png",revision:"ab643b2e52c966bef52e92d7fa7e48b9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/shut_192.png",revision:"4fb1f6cc9705d7f5c0164d995a653c25"},{url:"assets/student-7799f623.jpg",revision:"0ec105fc2662c4e04735841d2b9b06e8"},{url:"assets/studentsucces-57cdae16.png",revision:"18a6f0ed3b0cf7aaf2d6770f5822a06e"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
