if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7d10efd8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/2023-1-14.html-10caee1f.js",revision:"103dc8b55a6c0d46e1701898db80e52e"},{url:"assets/2023-1-14.html-8142bfe8.js",revision:"c010371b166bf7562dfab1f2efd0b71b"},{url:"assets/404.html-1a4749d7.js",revision:"b2cd9d8cf19a27164874f7319463e2f1"},{url:"assets/404.html-6d1a278c.js",revision:"517d84336467ba0c56c77fb8c1ef9ac1"},{url:"assets/app-59dd9901.js",revision:"b4fdd492ff3dd8de5862667f25c3bf01"},{url:"assets/auto-87bdde05.js",revision:"20ea9443720552e53e6b48154a130003"},{url:"assets/begin.html-1ed067bd.js",revision:"86a56c9c8fc5b8a8248c4b4e89e128ae"},{url:"assets/begin.html-355da79f.js",revision:"85a34dac9537755cc6f66b25a901dbef"},{url:"assets/begin.html-5568f996.js",revision:"b96eb1624c47db96bacdb440c516471c"},{url:"assets/begin.html-6e80d710.js",revision:"81e69ffbff835a9c427164d6566ddab6"},{url:"assets/begin.html-8398cb9e.js",revision:"4e53c7fabc5a2c2718ae762ddab0a741"},{url:"assets/begin.html-e7bda4ee.js",revision:"1b0b643eca6e4ad8db95f4cdbeea2bc1"},{url:"assets/command.html-302654ef.js",revision:"d0a17c51960aaff4170604b7bbf57d8c"},{url:"assets/command.html-6cfde735.js",revision:"5597aabb378b5f2cd08825a0ddf3ee01"},{url:"assets/conf.html-9793c68e.js",revision:"3f552b21c9a7c73e53c38b155bbb0cea"},{url:"assets/conf.html-c7ddc8d9.js",revision:"484ec1804b0b5537f55e22554a556b6e"},{url:"assets/config.html-8b69c1bf.js",revision:"dc06c643845555b4f78e66d9795f3cc9"},{url:"assets/config.html-b7bd7dbb.js",revision:"90ecde1ef4b2bc490285cacfa348e33b"},{url:"assets/config.html-d4529bd7.js",revision:"90b36fd59cff1c2ba2e7966e3e2edf1b"},{url:"assets/config.html-f1da60ba.js",revision:"fb5996425dc32c57524b437551697abe"},{url:"assets/CustomDomainuptimerobot.html-387d7b1a.js",revision:"bedfbb84e9eb023c8339019b5553418d"},{url:"assets/CustomDomainuptimerobot.html-ee89b105.js",revision:"adad546f13599a628866a953e0a4d723"},{url:"assets/diagram-definition.0faef4c2-73588523.js",revision:"2d4b55a35ab3f770a64791820ee0de8d"},{url:"assets/email.html-94ef02f4.js",revision:"f3aa6f01915f626abcbcb73526bd2b3f"},{url:"assets/email.html-d4145e10.js",revision:"25018236c9e2678dceba3f25ca46059d"},{url:"assets/flowchart.parse-08db0949.js",revision:"7f2dda9a63866ed051e7457a731ff6d7"},{url:"assets/framework-e618a78f.js",revision:"f7bac63b54fbc6ba2edfa2265a387ce0"},{url:"assets/highlight.esm-f3520595.js",revision:"a825381761cdddcfa727cb3d3ad0f7a1"},{url:"assets/icon/PWA_LOGO.svg",revision:"9f135469f3cf64875e34fd1b68da2540"},{url:"assets/index-c36a3f98.js",revision:"e1e86987f1c90315a06576ff11ebc8b1"},{url:"assets/index.html-0089254f.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-06de2333.js",revision:"81fc2a9f6b3d4b0254f78f834af623b5"},{url:"assets/index.html-09b246ec.js",revision:"2f8a96a0350407b3baa1a5befaf4d146"},{url:"assets/index.html-0b545b3e.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-0c5ccd04.js",revision:"d0660cd166b3504bb57416f1b585c9ce"},{url:"assets/index.html-17f3c940.js",revision:"1a6399e0debfe86c2a6e74df4cc0a715"},{url:"assets/index.html-25b7bc35.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-2c0f39a2.js",revision:"4e2a91ae1a5d948da7ddd34a156df5cd"},{url:"assets/index.html-3947e9e5.js",revision:"31ad834fed37611a92aa099a88f6f20b"},{url:"assets/index.html-4723623c.js",revision:"8526acaa9739c5ae0ca803bc4e90af8c"},{url:"assets/index.html-47ca5313.js",revision:"2f9bc874a435bc4a85bed3d7c65edf12"},{url:"assets/index.html-51ab5e59.js",revision:"cbfb612a7cbb766dc52b1b31bc3ec61d"},{url:"assets/index.html-63d21bc5.js",revision:"20a9a5780f5bc64df01c1360938f16d4"},{url:"assets/index.html-6abc30af.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-772ed0d5.js",revision:"4a51deea5a2dc6ed4e68aad642f92020"},{url:"assets/index.html-7e39b867.js",revision:"da3be712ad5930efa0c840a0ca3eddfd"},{url:"assets/index.html-7f3701c6.js",revision:"2f66b3acecd03ec51f8d4f4f2bf60659"},{url:"assets/index.html-812ab590.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-812f3f9e.js",revision:"ed4465eaad1209f99e96bfabc9ea5897"},{url:"assets/index.html-8231e1dc.js",revision:"6c9ab212c7bff9c7ca02455553413349"},{url:"assets/index.html-8aa8645b.js",revision:"a724d38fe673099927840e0ac59aa096"},{url:"assets/index.html-9b077fc4.js",revision:"06a2ddc271288fad8b56e42592aa0939"},{url:"assets/index.html-9bcc9fe3.js",revision:"ca7fc4e43a4b1c3690924b076b63f77d"},{url:"assets/index.html-ac7f8fda.js",revision:"e75efd225d71a23be016b35988d297a0"},{url:"assets/index.html-aef68adf.js",revision:"23f946bb6822622f9cf2b1f195e59fb8"},{url:"assets/index.html-b1ae16df.js",revision:"f06b7b0b4889e51bcede3bb607f96422"},{url:"assets/index.html-b6ad731f.js",revision:"5c46521d1dc1dd6c7bf3a11bf59dc7ab"},{url:"assets/index.html-b8a9888f.js",revision:"05d9a11f1cf1e8881ff4aba50df049d8"},{url:"assets/index.html-d17ed2fa.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-d217b245.js",revision:"d05b791b94dd9b9590b1df44ab52dd7c"},{url:"assets/index.html-d41e37f0.js",revision:"ae8e28ee6895b91c3c7a9c62e2f07cdf"},{url:"assets/index.html-da045f10.js",revision:"1daf0ef0c2f0faf4bbe3e30ec2c4ae2b"},{url:"assets/index.html-de4d61ad.js",revision:"a87ae5900ee969202a6a04f3f5547a7f"},{url:"assets/index.html-f2d5084c.js",revision:"2178b3ea3438815c74a3e8d577e44e2d"},{url:"assets/index.html-f6799b97.js",revision:"c2acc83e509b49a46b49f87bfd199d7d"},{url:"assets/index.html-fe16e40f.js",revision:"bd1e5f9ba79fe23e3f5ffea99b5657ea"},{url:"assets/install.html-8cd99b65.js",revision:"a120f216c4a20a6724648555488ad269"},{url:"assets/install.html-f5ab48f2.js",revision:"ffc1b11696097604bbb5d612e3bdd009"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-502ef1d5.js",revision:"5c465288d1c3c1b5fb15f2ce3facb5aa"},{url:"assets/math.esm-4cb70fc8.js",revision:"4a84790df5fb36ae16e26fbbebc286a4"},{url:"assets/mermaid-mindmap.esm.min-62796dfe.js",revision:"aa4cc8fbd36fcc94f034b7dd10a4e047"},{url:"assets/mermaid.esm.min-ef7393f1.js",revision:"57da3d2fb4354fa0d480871ed8056613"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-c0aed5fe.js",revision:"77fd8ecae1a39bad1e56b9297b88bf3d"},{url:"assets/proxy.html-97d60ae7.js",revision:"040f6aada8948d5c6e3fbcc032bd58ea"},{url:"assets/proxy.html-c696e315.js",revision:"0b023313b8131855cf4a3c3ebf73a866"},{url:"assets/reveal.esm-5c119aeb.js",revision:"2394821884527f6ad217c0c95c7c6698"},{url:"assets/search.esm-e8f6ca73.js",revision:"2d80dc9d31c03399ada54b934127934b"},{url:"assets/SearchResult-af6020bf.js",revision:"107a115c340aa38792bab3eea8fc8706"},{url:"assets/slides.html-4afd929d.js",revision:"451899a52621197edebc3607bcc28019"},{url:"assets/slides.html-90b66f3b.js",revision:"4add92e185b7093aeb54c2a4d0eadcfb"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/student.html-7dcce6d7.js",revision:"cc1ef97ff6c1a746931d4b1d57e83704"},{url:"assets/student.html-e48c6bf6.js",revision:"0a22ff5b8ffeac723250a53c53893a2e"},{url:"assets/style-c50b1c60.css",revision:"9c1641d342387687826b0ddf45384f2c"},{url:"assets/test.html-130b3efe.js",revision:"8d5f1f8e5e9fcf7c1fb39eb2399cbc22"},{url:"assets/test.html-548ab5a6.js",revision:"5fd1c962645c4455ffc2269664612a01"},{url:"assets/test.html-b81cdf68.js",revision:"8467f912153362afe25261ad081eff28"},{url:"assets/test.html-f3fdad7e.js",revision:"ce6a52862d32d1113c6d976aab3a3e3a"},{url:"assets/usual.html-5d4d58da.js",revision:"b8d6bad506ec0c67e43e6623927c09d1"},{url:"assets/usual.html-fee02f74.js",revision:"74eee156dd995ed1bd5a8e154f142b68"},{url:"assets/vue-repl-7dfb4862.js",revision:"ee4f92d915626fede57c8479650fc823"},{url:"assets/VuePlayground-4740ac16.js",revision:"be3f65937e8e6e09ade8d5c6396ead75"},{url:"assets/waline-meta-0e8855a4.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm-68db8aeb.js",revision:"506aa37cbe56ce517c52b2db29881ad6"},{url:"baidu.js",revision:"cbad97edb1b55da7db2f76164e7ab706"},{url:"bg.svg",revision:"2cfdbb338a1d44d700b493d7ecbe65d3"},{url:"logo.svg",revision:"413ff1293c152fd032a6892599602b5b"},{url:"404.html",revision:"dd095db2b8d788353867c06234f66f72"},{url:"begin.html",revision:"2108785b403ff23fdbcc7b86b8b57567"},{url:"index.html",revision:"c58db713bdaeffa3e5eb8ce5bf0028b0"},{url:"Learn/Application/index.html",revision:"25f32d603687382007f96184419e249a"},{url:"Learn/Application/nginx/command.html",revision:"672c82301dcef6ab43124a6b5e5ed66f"},{url:"Learn/Application/nginx/conf.html",revision:"0ebfb53627bb4c68fbd0c44abd18a13c"},{url:"Learn/Application/nginx/index.html",revision:"7f5273291173bacc9e96954b0ee06433"},{url:"Learn/begin.html",revision:"d43ee4991fba0351fd073295fbd3d2cf"},{url:"Learn/Docker/config.html",revision:"ee3adeb19182a27d411509d1eb20c4da"},{url:"Learn/Docker/index.html",revision:"8a647410ae2f0620e32719b439f84aa6"},{url:"Learn/Docker/usual.html",revision:"0cd0ce6542148d257ab1765c33bd578f"},{url:"Learn/index.html",revision:"c6e293a99f57427a8706068ac108d0b2"},{url:"Learn/Linux/Alpine/index.html",revision:"76c1214893a35d6562fadfb222e9f8b6"},{url:"Learn/Linux/Alpine/install.html",revision:"be0677259875d8aa826bb2c3b11ff404"},{url:"Learn/Linux/index.html",revision:"0cf424293e522d9fc8156c8e946f1626"},{url:"Learn/Linux/openwrt/config.html",revision:"c4bbb508924e4dc795ad7b8a83d519f5"},{url:"Learn/Linux/openwrt/index.html",revision:"455e8aa4c9e6ca2f640554fe4c73bcfe"},{url:"Learn/Other/CloudFlare/CustomDomainuptimerobot.html",revision:"41377efa863e1d3c92e6be919d83841d"},{url:"Learn/Other/CloudFlare/index.html",revision:"2f6eaf10b911f20d9d5cddc8b007eb7b"},{url:"Learn/Other/CloudFlare/proxy.html",revision:"096c75972b6586ab7ad063bb2ddb4e04"},{url:"Learn/Other/Github/index.html",revision:"19344cacea4fffd43a0cba761f12d56d"},{url:"Learn/Other/Github/student.html",revision:"36e8ec8b33b6e5806e4db09dca940c12"},{url:"Learn/Other/index.html",revision:"83b920b193b5f9c9f677036f9e622d34"},{url:"Learn/RM/BUG/index.html",revision:"38cce707b82c6e27d2dcb31200e3584e"},{url:"Learn/RM/BUG/test.html",revision:"b1cf891144e25732b7d93132a2794dac"},{url:"Learn/RM/CONFIG/index.html",revision:"b14a3b4d3695e7160c2b32da0023426b"},{url:"Learn/RM/CONFIG/test.html",revision:"54626216e4509cda6a55ddb290aed03f"},{url:"Learn/RM/index.html",revision:"747c759b8372e79e13cde718f4adab55"},{url:"Learn/WEB/email.html",revision:"bd26d9dda8061a335f581a06f3af6daf"},{url:"Learn/WEB/index.html",revision:"0c0169e643ddb09e8562e5a1ebf01878"},{url:"Learn/WEB/Vue/2023-1-14.html",revision:"0ba39aedff0c3b17592285dc73cbd090"},{url:"Learn/WEB/Vue/index.html",revision:"28ee0fffb5b6c1efa31d2acc0f965757"},{url:"Life/begin.html",revision:"6e605e17bf223fb3633d893f35626a78"},{url:"Life/index.html",revision:"90dd867e7b780e8cdec858be4a0d9b91"},{url:"Life/shop/index.html",revision:"e651a1130e032828418927fdfb7e826a"},{url:"slides.html",revision:"baf27b4722fe82a21499d6971b4c8f7e"},{url:"assets/email-3d71ff0f.jpg",revision:"ecabc6949c554b928e1e85eb6ff6c579"},{url:"assets/icon/144.png",revision:"7ed7d5414fb28aa4acf38d1f51b75795"},{url:"assets/icon/152.png",revision:"43e13eb896e1dbd5329b62b03dd0b176"},{url:"assets/icon/192.png",revision:"62142a2526e1c3fbd95860b103e94a47"},{url:"assets/icon/512.png",revision:"ab643b2e52c966bef52e92d7fa7e48b9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/shut_192.png",revision:"4fb1f6cc9705d7f5c0164d995a653c25"},{url:"assets/student-7799f623.jpg",revision:"0ec105fc2662c4e04735841d2b9b06e8"},{url:"assets/studentsucces-57cdae16.png",revision:"18a6f0ed3b0cf7aaf2d6770f5822a06e"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
