if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,a,r)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/app-icons/512.png",revision:"34b713193efa7bad264731956b6dd915"},{url:"assets/app-icons/android-icon-144x144.png",revision:"b494373280ae3ea6e60ee3360ecd4824"},{url:"assets/app-icons/android-icon-192x192.png",revision:"d00b8dbfdc2d6ff089398c24eb5c7af6"},{url:"assets/app-icons/android-icon-36x36.png",revision:"feca94b3d132b18fbe204a6d18859d25"},{url:"assets/app-icons/android-icon-48x48.png",revision:"53af8878013d9017ff27146ba3c365e4"},{url:"assets/app-icons/android-icon-72x72.png",revision:"9821bf8f53ce68c3e8a8cf8a7783d2cc"},{url:"assets/app-icons/android-icon-96x96.png",revision:"e0456f66c7112336f427bbcd0f588beb"},{url:"assets/app-icons/apple-icon-114x114.png",revision:"17a740dc99572b250a934c94485e8c30"},{url:"assets/app-icons/apple-icon-120x120.png",revision:"f3e868f7462936c9ca795aaaebbbbe99"},{url:"assets/app-icons/apple-icon-144x144.png",revision:"b494373280ae3ea6e60ee3360ecd4824"},{url:"assets/app-icons/apple-icon-152x152.png",revision:"7fa07293fbed3b3ea03f176c12ef7451"},{url:"assets/app-icons/apple-icon-180x180.png",revision:"3c3bcb54a11d41fc9db38527e75a7ec1"},{url:"assets/app-icons/apple-icon-57x57.png",revision:"061044e92d30fb83bc08ea4e785a35bb"},{url:"assets/app-icons/apple-icon-60x60.png",revision:"723b70eb32b102c76bebf6fa0423bbcc"},{url:"assets/app-icons/apple-icon-72x72.png",revision:"9821bf8f53ce68c3e8a8cf8a7783d2cc"},{url:"assets/app-icons/apple-icon-76x76.png",revision:"75efcc1be2f591cc0ef50ab5275b4ea4"},{url:"assets/app-icons/apple-icon-precomposed.png",revision:"8b4b9d7858924f157bbb7b7c9ec32182"},{url:"assets/app-icons/apple-icon.png",revision:"8b4b9d7858924f157bbb7b7c9ec32182"},{url:"assets/app-icons/favicon-16x16.png",revision:"047d6cf62bb709b1effedc8c5728354d"},{url:"assets/app-icons/favicon-32x32.png",revision:"b94fdbc50f4600c686bf04feba3dcaa8"},{url:"assets/app-icons/favicon-96x96.png",revision:"e0456f66c7112336f427bbcd0f588beb"},{url:"assets/app-icons/favicon.ico",revision:"193275e3a22232fc795a5f6e6f4d1131"},{url:"assets/app-icons/ms-icon-144x144.png",revision:"b494373280ae3ea6e60ee3360ecd4824"},{url:"assets/app-icons/ms-icon-150x150.png",revision:"eb9179f082ef7cd76df55f9b7fa58afe"},{url:"assets/app-icons/ms-icon-310x310.png",revision:"1363b38a3dad572ab753d8fad1fe9da8"},{url:"assets/app-icons/ms-icon-70x70.png",revision:"1b05186e47f7ea81c7a213aeee052e89"},{url:"assets/app-icons/screen.slot.png",revision:"a0244e73518d220ca31d90dfd92c8cf8"},{url:"assets/app-icons/screen.start.png",revision:"a8cf7965d03c263911e67d0105906d94"},{url:"assets/app-icons/screen.trickexpl.png",revision:"22df252bb77a316750bfdaa36d856119"},{url:"assets/manifest.json",revision:"93ed2ae8ad0e171d9e4eb662b132003c"},{url:"assets/permutations.txt",revision:"2da20bf7d302fa3cab2f82b18a7d16f0"},{url:"assets/sounds/joker-end.mp3",revision:"ff7aec356f6dc6177288d9ae9d1f7e8f"},{url:"assets/sounds/joker-full-stretched.mp3",revision:"a64999446cc182c59e01cb4c6c2443d5"},{url:"assets/sounds/joker-loop.mp3",revision:"799244dc2038a24e71ecaf26e0e0bbe1"},{url:"assets/sounds/joker-start.mp3",revision:"dce8f9e32bbfd5404653ec4967c5195f"},{url:"assets/sounds/joker-startOLD.mp3",revision:"10f157252c3570502e90c4875f395274"},{url:"assets/sounds/juhui-end.mp3",revision:"0332928a23cc30ea38cd445ab135d18f"},{url:"assets/sounds/juhui-loop.mp3",revision:"0e209c533be0661476197a20dacb6a1b"},{url:"assets/sounds/juhui-start.mp3",revision:"e70f0d2276fef8068a6c439a8bf158e5"},{url:"assets/sounds/spark-end.mp3",revision:"488961dcf6801dd342c5f91ae23626f5"},{url:"assets/sounds/spark-loop.mp3",revision:"77f38559600870e85a0ac7dab9998843"},{url:"assets/sounds/spark-start.mp3",revision:"0749894f7a36a593d2f02db2e905dba1"},{url:"build/app.js",revision:"0b248512a882e111354aa019648ac1e3"},{url:"build/service-worker.js",revision:"6e6224e5cf4e547784655bba380afd40"},{url:"build/style.min.css",revision:"8a06618d77f3c7309aa55fc31ac4f1fc"},{url:"build/vendor.css",revision:"212a119ec09a6dc7d5742fa34abc5d31"},{url:"build/vendor.js",revision:"bb435475f8b5615c9df5a64a42694868"},{url:"build/vendor.js.LICENSE.txt",revision:"668a4f798604675e62fbfc767414e3c2"},{url:"build/workbox-e1834b40.js",revision:"c07d9aae0fac68e4354b6fe1087e0db2"},{url:"fonts/fa-solid-900.svg",revision:"cc118d3cdf236d951eebbac7f72e2350"},{url:"fonts/fa-solid-900.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"fonts/fa-solid-900.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"fonts/fa-solid-900.woff2",revision:"db812d8a70a4e88e888744c1c9a27e89"},{url:"img/captures/200x200/Acid.jpg",revision:"a7b6532bb0a4f0e49050372e09333d3c"},{url:"img/captures/200x200/Backside.jpg",revision:"5f11bafcfc3ca6c3036f1d42551b0a68"},{url:"img/captures/200x200/BSBackslide.jpg",revision:"f3583a7bd9d9a4596819ad4a141279b4"},{url:"img/captures/200x200/BSBynSoul.jpg",revision:"3392bc859099033993753328ad9cf757"},{url:"img/captures/200x200/BSCabdriver.jpg",revision:"cd335ab81a004259d64f07f653b72784"},{url:"img/captures/200x200/BSDarkslide.jpg",revision:"91877ded2b5b79c5938ea10eb6c8815a"},{url:"img/captures/200x200/BSFastslide.jpg",revision:"2ca9947df23022d69ddf343c8a07d374"},{url:"img/captures/200x200/BSFullTorque.jpg",revision:"1d84892d9f5efbdce33e75958664fb7d"},{url:"img/captures/200x200/BSPudslide.jpg",revision:"c02e778f2d772cbc7530917e0a96d278"},{url:"img/captures/200x200/BSRoyale.jpg",revision:"f3583a7bd9d9a4596819ad4a141279b4"},{url:"img/captures/200x200/BSSavannah.jpg",revision:"b825dc9500037e97870934e016a388d1"},{url:"img/captures/200x200/BSTabernacle.jpg",revision:"c46572e6aeb09ad53c2fe134de2330fd"},{url:"img/captures/200x200/BSTorque.jpg",revision:"ca4c73f18da11e70394acd272abb7716"},{url:"img/captures/200x200/BSUnity.jpg",revision:"6d31036cf6f703823fe8aee2e0ad14b0"},{url:"img/captures/200x200/BSWheelbarrow.jpg",revision:"e807d6fe40069a8002987942083cc511"},{url:"img/captures/200x200/Channel.jpg",revision:"7c0edd2ee62ed731ec8828d26fcbf60f"},{url:"img/captures/200x200/Christ.jpg",revision:"4707becfcea3d56658c5bb07f09bf2d0"},{url:"img/captures/200x200/CitricAcid.jpg",revision:"1fc12e1ee4493adf40ee315cb4905c5a"},{url:"img/captures/200x200/CloudyNight.jpg",revision:"ca2433d8700bd9ea81f36ffd55e2f23c"},{url:"img/captures/200x200/Fishbrain.jpg",revision:"d56051e3f35fd6ec43fdc7bdcc677cd8"},{url:"img/captures/200x200/Frontside.jpg",revision:"0b60aaa4e31613a61e4c19813ff9728e"},{url:"img/captures/200x200/FSBackslide.jpg",revision:"2d1734faf6ba84932ec4b6145b010b67"},{url:"img/captures/200x200/FSBynSoul.jpg",revision:"3392bc859099033993753328ad9cf757"},{url:"img/captures/200x200/FSCabdriver.jpg",revision:"7cf7cfffcf095201bd2c8cc33a2356c9"},{url:"img/captures/200x200/FSDarkslide.jpg",revision:"1c9c2e96d345e98a894374aa877e639c"},{url:"img/captures/200x200/FSFastslide.jpg",revision:"7217f93323669031df54160fee6f9fb1"},{url:"img/captures/200x200/FSFullTorque.jpg",revision:"5370b3e00bfa78d6310b249a319584e4"},{url:"img/captures/200x200/FSPudslide.jpg",revision:"5807a11bae44bdbfbbe23ed239e1e1b7"},{url:"img/captures/200x200/FSRoyale.jpg",revision:"0ba52544fd377e5c7c2fd09e998322c4"},{url:"img/captures/200x200/FSSavannah.jpg",revision:"4cdfafec99826dd1116591f8b8b44f72"},{url:"img/captures/200x200/FSTabernacle.jpg",revision:"f02d1f40a80418f4017806fd4180655c"},{url:"img/captures/200x200/FSTorque.jpg",revision:"5f96d1d69726cdd9ffb1d881dcd29f09"},{url:"img/captures/200x200/FSUnity.jpg",revision:"7745055f217aac835edff94faa100997"},{url:"img/captures/200x200/FSWheelbarrow.jpg",revision:"1f7be02481a9405c4fe106486685475d"},{url:"img/captures/200x200/Grab.jpg",revision:"0d16ae30ffbc98c22885043f29a254e0"},{url:"img/captures/200x200/HotDog.jpg",revision:"a32c094f9459a596443fe173bab7499b"},{url:"img/captures/200x200/Kindgrind.jpg",revision:"ef2295c8d49eeca8db5ce7ebd238c19f"},{url:"img/captures/200x200/Makio.jpg",revision:"be5608d7846f69094b51add35e9f6e67"},{url:"img/captures/200x200/Misfit.jpg",revision:"ee221fd1cf5f58e67e80758a6c23c4dc"},{url:"img/captures/200x200/Mistrial.jpg",revision:"ea5c5707bf2ea83a4ee339512523b03f"},{url:"img/captures/200x200/Mizou.jpg",revision:"822ac6964813ec1012a01c1b111341b2"},{url:"img/captures/200x200/Negative.jpg",revision:"81c75a34155cf7fa9862c4e5f7ddd834"},{url:"img/captures/200x200/NegativeTeakettle.jpg",revision:"a63bf7ff3117cfcdc4cc51490411678a"},{url:"img/captures/200x200/Overpuss.jpg",revision:"98383dc595d2725a8422ca50ed62390b"},{url:"img/captures/200x200/PStar.jpg",revision:"7bde47c8b94a96c07f8d09ada364db44"},{url:"img/captures/200x200/Rocket.jpg",revision:"13f86028896cca2fee708428c7c526c0"},{url:"img/captures/200x200/Rough.jpg",revision:"e5eaf17b9351665fad53b00b5ecc505e"},{url:"img/captures/200x200/Sidewalk.jpg",revision:"aba6bbf43712a824ddec5a7477b8b8b4"},{url:"img/captures/200x200/Soul.jpg",revision:"9d35903970d86f6aaddebe98f6fed216"},{url:"img/captures/200x200/Soyale.jpg",revision:"3c8197e223ea198b25e2291fb125a782"},{url:"img/captures/200x200/Step.jpg",revision:"8914e4a34600da94e6a143027e5b5e3d"},{url:"img/captures/200x200/StubSoul.jpg",revision:"2093173242043d1bbacb7420ad95e18c"},{url:"img/captures/200x200/SunnyDay.jpg",revision:"d492174548672d548c20ac61524bfa2b"},{url:"img/captures/200x200/Sweatstance.jpg",revision:"5bc22da063a03d27961c591460748b1e"},{url:"img/captures/200x200/Teakettle.jpg",revision:"470087add170b7685edc1c432cd3e977"},{url:"img/captures/200x200/Topside.jpg",revision:"7202f957fbc11c316ba698bcefecef3f"},{url:"img/captures/200x200/TorqueSoul.jpg",revision:"ff377ef88ac22f558307bc2d3f46e31a"},{url:"img/captures/200x200/Tough.jpg",revision:"c54cfac5c27ad208aa148c658b989a17"},{url:"img/captures/200x200/TrainingWheel.jpg",revision:"8f9cdb4222133dcbc75df08b427da574"},{url:"img/captures/200x200/UFO.jpg",revision:"37b456d1dffa095aa86534c946d23575"},{url:"img/captures/200x200/X-Grind.jpg",revision:"bcdb954f9dcfa94650010c374c00953a"},{url:"img/favicon.ico",revision:"5996516338aa8152e63542672de1c9b6"},{url:"img/favicon.png",revision:"7804b69e424abcc5f26ea67cb6fb8160"},{url:"img/gtg-logo-banner-text.svg",revision:"96fca2c3f302a6332db9e5ed6fdf3e53"},{url:"img/gtg-logo-banner.svg",revision:"72643c770ba4f5eb235f27910c0c0b4b"},{url:"img/gtg-logo.svg",revision:"c21460c64bfd4defabf6d14c8370da9a"},{url:"img/score-1.svg",revision:"14de9ebbf01d2907398521234f003dd3"},{url:"img/score-10.svg",revision:"4f1451aee0454503c1cec3f5a7b54902"},{url:"img/score-11.svg",revision:"36ab8c3f69be8a5318958e21594fdaa9"},{url:"img/score-12.svg",revision:"c32b3a15c62c5babc424afff7defe254"},{url:"img/score-13.svg",revision:"93a5156048dea65eb3988ee6eee0998d"},{url:"img/score-14.svg",revision:"560d25eaefa9d9e0f491fc309435fd13"},{url:"img/score-15.svg",revision:"f452c61dcfb264c54d1a4418f22f3e31"},{url:"img/score-2.svg",revision:"b1f293e3b998651702091dea3149efd6"},{url:"img/score-3.svg",revision:"9cea409ed05234e0da06697c5c964db4"},{url:"img/score-4.svg",revision:"a2b5f3c89583094b2bd6eb003dabece8"},{url:"img/score-5.svg",revision:"d9d9c2bda03020e7d1be5bed97d683ca"},{url:"img/score-6.svg",revision:"7b6c015f22f1db0d0e90a53e9b56d739"},{url:"img/score-7.svg",revision:"8c984ece3292f2d9ba8ea3c56a591eee"},{url:"img/score-8.svg",revision:"b0ff3818e548c3501800c6a1c981fec5"},{url:"img/score-9.svg",revision:"93215f397fae13c3109109bc28727adc"},{url:"img/thejokerblade-big.jpg",revision:"3882cb8bb8ad637e1c2aed19a27e91b3"},{url:"img/thejokerblade-smaller-1x.jpg",revision:"aef7a50c1a9305ed74b476109e042bdd"},{url:"index.html",revision:"081888c2b1467f2104b23971d90b4451"}],{})}));
//# sourceMappingURL=sw.js.map