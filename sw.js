/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_google_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-google-analytics */ "./node_modules/workbox-google-analytics/index.mjs");
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
workbox.setConfig({
  debug: true
});

workbox_google_analytics__WEBPACK_IMPORTED_MODULE_0__.initialize();
var manifest = [{'revision':'a200712268cb2339f773785bed116306','url':'./app.js'},{'revision':'8b1bd683c601ccd9237b27bfe4e4f748','url':'./vendor.js'},{'revision':'34b713193efa7bad264731956b6dd915','url':'assets/app-icons/512.png'},{'revision':'b494373280ae3ea6e60ee3360ecd4824','url':'assets/app-icons/android-icon-144x144.png'},{'revision':'d00b8dbfdc2d6ff089398c24eb5c7af6','url':'assets/app-icons/android-icon-192x192.png'},{'revision':'feca94b3d132b18fbe204a6d18859d25','url':'assets/app-icons/android-icon-36x36.png'},{'revision':'53af8878013d9017ff27146ba3c365e4','url':'assets/app-icons/android-icon-48x48.png'},{'revision':'9821bf8f53ce68c3e8a8cf8a7783d2cc','url':'assets/app-icons/android-icon-72x72.png'},{'revision':'e0456f66c7112336f427bbcd0f588beb','url':'assets/app-icons/android-icon-96x96.png'},{'revision':'17a740dc99572b250a934c94485e8c30','url':'assets/app-icons/apple-icon-114x114.png'},{'revision':'f3e868f7462936c9ca795aaaebbbbe99','url':'assets/app-icons/apple-icon-120x120.png'},{'revision':'b494373280ae3ea6e60ee3360ecd4824','url':'assets/app-icons/apple-icon-144x144.png'},{'revision':'7fa07293fbed3b3ea03f176c12ef7451','url':'assets/app-icons/apple-icon-152x152.png'},{'revision':'3c3bcb54a11d41fc9db38527e75a7ec1','url':'assets/app-icons/apple-icon-180x180.png'},{'revision':'061044e92d30fb83bc08ea4e785a35bb','url':'assets/app-icons/apple-icon-57x57.png'},{'revision':'723b70eb32b102c76bebf6fa0423bbcc','url':'assets/app-icons/apple-icon-60x60.png'},{'revision':'9821bf8f53ce68c3e8a8cf8a7783d2cc','url':'assets/app-icons/apple-icon-72x72.png'},{'revision':'75efcc1be2f591cc0ef50ab5275b4ea4','url':'assets/app-icons/apple-icon-76x76.png'},{'revision':'8b4b9d7858924f157bbb7b7c9ec32182','url':'assets/app-icons/apple-icon-precomposed.png'},{'revision':'8b4b9d7858924f157bbb7b7c9ec32182','url':'assets/app-icons/apple-icon.png'},{'revision':'047d6cf62bb709b1effedc8c5728354d','url':'assets/app-icons/favicon-16x16.png'},{'revision':'b94fdbc50f4600c686bf04feba3dcaa8','url':'assets/app-icons/favicon-32x32.png'},{'revision':'e0456f66c7112336f427bbcd0f588beb','url':'assets/app-icons/favicon-96x96.png'},{'revision':'193275e3a22232fc795a5f6e6f4d1131','url':'assets/app-icons/favicon.ico'},{'revision':'b494373280ae3ea6e60ee3360ecd4824','url':'assets/app-icons/ms-icon-144x144.png'},{'revision':'eb9179f082ef7cd76df55f9b7fa58afe','url':'assets/app-icons/ms-icon-150x150.png'},{'revision':'1363b38a3dad572ab753d8fad1fe9da8','url':'assets/app-icons/ms-icon-310x310.png'},{'revision':'1b05186e47f7ea81c7a213aeee052e89','url':'assets/app-icons/ms-icon-70x70.png'},{'revision':'a0244e73518d220ca31d90dfd92c8cf8','url':'assets/app-icons/screen.slot.png'},{'revision':'a8cf7965d03c263911e67d0105906d94','url':'assets/app-icons/screen.start.png'},{'revision':'22df252bb77a316750bfdaa36d856119','url':'assets/app-icons/screen.trickexpl.png'},{'revision':'545d8fb3c368512571de0e23cc4267a9','url':'assets/manifest.json'},{'revision':'7ec1e7d19e752a9d7d455bbf4743684b','url':'assets/permutations.txt'},{'revision':'ff7aec356f6dc6177288d9ae9d1f7e8f','url':'assets/sounds/joker-end.mp3'},{'revision':'a64999446cc182c59e01cb4c6c2443d5','url':'assets/sounds/joker-full-stretched.mp3'},{'revision':'799244dc2038a24e71ecaf26e0e0bbe1','url':'assets/sounds/joker-loop.mp3'},{'revision':'dce8f9e32bbfd5404653ec4967c5195f','url':'assets/sounds/joker-start.mp3'},{'revision':'10f157252c3570502e90c4875f395274','url':'assets/sounds/joker-startOLD.mp3'},{'revision':'0332928a23cc30ea38cd445ab135d18f','url':'assets/sounds/juhui-end.mp3'},{'revision':'0e209c533be0661476197a20dacb6a1b','url':'assets/sounds/juhui-loop.mp3'},{'revision':'e70f0d2276fef8068a6c439a8bf158e5','url':'assets/sounds/juhui-start.mp3'},{'revision':'488961dcf6801dd342c5f91ae23626f5','url':'assets/sounds/spark-end.mp3'},{'revision':'77f38559600870e85a0ac7dab9998843','url':'assets/sounds/spark-loop.mp3'},{'revision':'0749894f7a36a593d2f02db2e905dba1','url':'assets/sounds/spark-start.mp3'},{'revision':'674f50d287a8c48dc19ba404d20fe713','url':'fonts/fa-solid-900.eot'},{'revision':'cc118d3cdf236d951eebbac7f72e2350','url':'fonts/fa-solid-900.svg'},{'revision':'b06871f281fee6b241d60582ae9369b9','url':'fonts/fa-solid-900.ttf'},{'revision':'fee66e712a8a08eef5805a46892932ad','url':'fonts/fa-solid-900.woff'},{'revision':'db812d8a70a4e88e888744c1c9a27e89','url':'fonts/fa-solid-900.woff2'},{'revision':'a7b6532bb0a4f0e49050372e09333d3c','url':'img/captures/200x200/Acid.jpg'},{'revision':'f3583a7bd9d9a4596819ad4a141279b4','url':'img/captures/200x200/BSBackslide.jpg'},{'revision':'3392bc859099033993753328ad9cf757','url':'img/captures/200x200/BSBynSoul.jpg'},{'revision':'cd335ab81a004259d64f07f653b72784','url':'img/captures/200x200/BSCabdriver.jpg'},{'revision':'91877ded2b5b79c5938ea10eb6c8815a','url':'img/captures/200x200/BSDarkslide.jpg'},{'revision':'2ca9947df23022d69ddf343c8a07d374','url':'img/captures/200x200/BSFastslide.jpg'},{'revision':'1d84892d9f5efbdce33e75958664fb7d','url':'img/captures/200x200/BSFullTorque.jpg'},{'revision':'c02e778f2d772cbc7530917e0a96d278','url':'img/captures/200x200/BSPudslide.jpg'},{'revision':'f3583a7bd9d9a4596819ad4a141279b4','url':'img/captures/200x200/BSRoyale.jpg'},{'revision':'b825dc9500037e97870934e016a388d1','url':'img/captures/200x200/BSSavannah.jpg'},{'revision':'c46572e6aeb09ad53c2fe134de2330fd','url':'img/captures/200x200/BSTabernacle.jpg'},{'revision':'ca4c73f18da11e70394acd272abb7716','url':'img/captures/200x200/BSTorque.jpg'},{'revision':'6d31036cf6f703823fe8aee2e0ad14b0','url':'img/captures/200x200/BSUnity.jpg'},{'revision':'e807d6fe40069a8002987942083cc511','url':'img/captures/200x200/BSWheelbarrow.jpg'},{'revision':'5f11bafcfc3ca6c3036f1d42551b0a68','url':'img/captures/200x200/Backside.jpg'},{'revision':'7c0edd2ee62ed731ec8828d26fcbf60f','url':'img/captures/200x200/Channel.jpg'},{'revision':'4707becfcea3d56658c5bb07f09bf2d0','url':'img/captures/200x200/Christ.jpg'},{'revision':'1fc12e1ee4493adf40ee315cb4905c5a','url':'img/captures/200x200/CitricAcid.jpg'},{'revision':'ca2433d8700bd9ea81f36ffd55e2f23c','url':'img/captures/200x200/CloudyNight.jpg'},{'revision':'2d1734faf6ba84932ec4b6145b010b67','url':'img/captures/200x200/FSBackslide.jpg'},{'revision':'3392bc859099033993753328ad9cf757','url':'img/captures/200x200/FSBynSoul.jpg'},{'revision':'7cf7cfffcf095201bd2c8cc33a2356c9','url':'img/captures/200x200/FSCabdriver.jpg'},{'revision':'1c9c2e96d345e98a894374aa877e639c','url':'img/captures/200x200/FSDarkslide.jpg'},{'revision':'7217f93323669031df54160fee6f9fb1','url':'img/captures/200x200/FSFastslide.jpg'},{'revision':'5370b3e00bfa78d6310b249a319584e4','url':'img/captures/200x200/FSFullTorque.jpg'},{'revision':'5807a11bae44bdbfbbe23ed239e1e1b7','url':'img/captures/200x200/FSPudslide.jpg'},{'revision':'0ba52544fd377e5c7c2fd09e998322c4','url':'img/captures/200x200/FSRoyale.jpg'},{'revision':'4cdfafec99826dd1116591f8b8b44f72','url':'img/captures/200x200/FSSavannah.jpg'},{'revision':'f02d1f40a80418f4017806fd4180655c','url':'img/captures/200x200/FSTabernacle.jpg'},{'revision':'5f96d1d69726cdd9ffb1d881dcd29f09','url':'img/captures/200x200/FSTorque.jpg'},{'revision':'7745055f217aac835edff94faa100997','url':'img/captures/200x200/FSUnity.jpg'},{'revision':'1f7be02481a9405c4fe106486685475d','url':'img/captures/200x200/FSWheelbarrow.jpg'},{'revision':'d56051e3f35fd6ec43fdc7bdcc677cd8','url':'img/captures/200x200/Fishbrain.jpg'},{'revision':'0b60aaa4e31613a61e4c19813ff9728e','url':'img/captures/200x200/Frontside.jpg'},{'revision':'0d16ae30ffbc98c22885043f29a254e0','url':'img/captures/200x200/Grab.jpg'},{'revision':'a32c094f9459a596443fe173bab7499b','url':'img/captures/200x200/HotDog.jpg'},{'revision':'ef2295c8d49eeca8db5ce7ebd238c19f','url':'img/captures/200x200/Kindgrind.jpg'},{'revision':'be5608d7846f69094b51add35e9f6e67','url':'img/captures/200x200/Makio.jpg'},{'revision':'ee221fd1cf5f58e67e80758a6c23c4dc','url':'img/captures/200x200/Misfit.jpg'},{'revision':'ea5c5707bf2ea83a4ee339512523b03f','url':'img/captures/200x200/Mistrial.jpg'},{'revision':'822ac6964813ec1012a01c1b111341b2','url':'img/captures/200x200/Mizou.jpg'},{'revision':'81c75a34155cf7fa9862c4e5f7ddd834','url':'img/captures/200x200/Negative.jpg'},{'revision':'a63bf7ff3117cfcdc4cc51490411678a','url':'img/captures/200x200/NegativeTeakettle.jpg'},{'revision':'98383dc595d2725a8422ca50ed62390b','url':'img/captures/200x200/Overpuss.jpg'},{'revision':'7bde47c8b94a96c07f8d09ada364db44','url':'img/captures/200x200/PStar.jpg'},{'revision':'13f86028896cca2fee708428c7c526c0','url':'img/captures/200x200/Rocket.jpg'},{'revision':'e5eaf17b9351665fad53b00b5ecc505e','url':'img/captures/200x200/Rough.jpg'},{'revision':'aba6bbf43712a824ddec5a7477b8b8b4','url':'img/captures/200x200/Sidewalk.jpg'},{'revision':'9d35903970d86f6aaddebe98f6fed216','url':'img/captures/200x200/Soul.jpg'},{'revision':'3c8197e223ea198b25e2291fb125a782','url':'img/captures/200x200/Soyale.jpg'},{'revision':'8914e4a34600da94e6a143027e5b5e3d','url':'img/captures/200x200/Step.jpg'},{'revision':'2093173242043d1bbacb7420ad95e18c','url':'img/captures/200x200/StubSoul.jpg'},{'revision':'d492174548672d548c20ac61524bfa2b','url':'img/captures/200x200/SunnyDay.jpg'},{'revision':'5bc22da063a03d27961c591460748b1e','url':'img/captures/200x200/Sweatstance.jpg'},{'revision':'470087add170b7685edc1c432cd3e977','url':'img/captures/200x200/Teakettle.jpg'},{'revision':'7202f957fbc11c316ba698bcefecef3f','url':'img/captures/200x200/Topside.jpg'},{'revision':'ff377ef88ac22f558307bc2d3f46e31a','url':'img/captures/200x200/TorqueSoul.jpg'},{'revision':'c54cfac5c27ad208aa148c658b989a17','url':'img/captures/200x200/Tough.jpg'},{'revision':'8f9cdb4222133dcbc75df08b427da574','url':'img/captures/200x200/TrainingWheel.jpg'},{'revision':'37b456d1dffa095aa86534c946d23575','url':'img/captures/200x200/UFO.jpg'},{'revision':'bcdb954f9dcfa94650010c374c00953a','url':'img/captures/200x200/X-Grind.jpg'},{'revision':'5996516338aa8152e63542672de1c9b6','url':'img/favicon.bk.ico'},{'revision':'c00a7e6e0282a890cdf03f641a9c236b','url':'img/favicon.ico'},{'revision':'7804b69e424abcc5f26ea67cb6fb8160','url':'img/favicon.png'},{'revision':'96fca2c3f302a6332db9e5ed6fdf3e53','url':'img/gtg-logo-banner-text.svg'},{'revision':'72643c770ba4f5eb235f27910c0c0b4b','url':'img/gtg-logo-banner.svg'},{'revision':'c21460c64bfd4defabf6d14c8370da9a','url':'img/gtg-logo.svg'},{'revision':'14de9ebbf01d2907398521234f003dd3','url':'img/score-1.svg'},{'revision':'4f1451aee0454503c1cec3f5a7b54902','url':'img/score-10.svg'},{'revision':'36ab8c3f69be8a5318958e21594fdaa9','url':'img/score-11.svg'},{'revision':'c32b3a15c62c5babc424afff7defe254','url':'img/score-12.svg'},{'revision':'93a5156048dea65eb3988ee6eee0998d','url':'img/score-13.svg'},{'revision':'560d25eaefa9d9e0f491fc309435fd13','url':'img/score-14.svg'},{'revision':'f452c61dcfb264c54d1a4418f22f3e31','url':'img/score-15.svg'},{'revision':'6b3fb385de4bff7b2df638ae6eb76693','url':'img/score-16.svg'},{'revision':'a90d4bb313a91726e57b47e9ae88b550','url':'img/score-17.svg'},{'revision':'f02b77e559906d2986dc77b040bc8c6e','url':'img/score-18.svg'},{'revision':'ffe26d41dd8b26628ca61de0bdb73331','url':'img/score-19.svg'},{'revision':'b1f293e3b998651702091dea3149efd6','url':'img/score-2.svg'},{'revision':'5e7428ae6656b7f338f50f507b25e737','url':'img/score-20.svg'},{'revision':'9cea409ed05234e0da06697c5c964db4','url':'img/score-3.svg'},{'revision':'a2b5f3c89583094b2bd6eb003dabece8','url':'img/score-4.svg'},{'revision':'d9d9c2bda03020e7d1be5bed97d683ca','url':'img/score-5.svg'},{'revision':'7b6c015f22f1db0d0e90a53e9b56d739','url':'img/score-6.svg'},{'revision':'8c984ece3292f2d9ba8ea3c56a591eee','url':'img/score-7.svg'},{'revision':'b0ff3818e548c3501800c6a1c981fec5','url':'img/score-8.svg'},{'revision':'93215f397fae13c3109109bc28727adc','url':'img/score-9.svg'},{'revision':'3882cb8bb8ad637e1c2aed19a27e91b3','url':'img/thejokerblade-big.jpg'},{'revision':'aef7a50c1a9305ed74b476109e042bdd','url':'img/thejokerblade-smaller-1x.jpg'},{'revision':'c12646aad05d07ca8ab9a3a8ebc28402','url':'index.html'},{'revision':'e20bde02c6e7af944a050008b2b2e9a4','url':'style.min.css'},{'revision':'212a119ec09a6dc7d5742fa34abc5d31','url':'vendor.css'}];
console.log(manifest);
workbox.precaching.precacheAndRoute(manifest);
self.addEventListener('fetch', function (event) {
  console.log(event);
  return false;

  if (event.request.url.endsWith('.png')) {
    // Oops! This causes workbox-strategies.js to be imported inside a fetch handler,
    // outside of the initial, synchronous service worker execution.
    var cacheFirst = new workbox.strategies.CacheFirst();
    event.respondWith(cacheFirst.handle({
      request: event.request
    }));
  }
});

/***/ }),

/***/ "./node_modules/workbox-google-analytics/_version.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-google-analytics/_version.js ***!
  \***********************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:google-analytics:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-google-analytics/index.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-google-analytics/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => /* reexport safe */ _initialize_js__WEBPACK_IMPORTED_MODULE_0__.initialize
/* harmony export */ });
/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize.js */ "./node_modules/workbox-google-analytics/initialize.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-google-analytics/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @module workbox-google-analytics
 */



/***/ }),

/***/ "./node_modules/workbox-google-analytics/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-google-analytics/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.initialize
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-google-analytics/index.js");


/***/ }),

/***/ "./node_modules/workbox-google-analytics/initialize.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/initialize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => /* binding */ initialize
/* harmony export */ });
/* harmony import */ var workbox_background_sync_BackgroundSyncPlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-background-sync/BackgroundSyncPlugin.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/BackgroundSyncPlugin.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var workbox_routing_Router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-routing/Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-strategies/NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony import */ var workbox_strategies_NetworkOnly_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-strategies/NetworkOnly.js */ "./node_modules/workbox-strategies/NetworkOnly.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-google-analytics/utils/constants.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-google-analytics/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_9__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * Creates the requestWillDequeue callback to be used with the background
 * sync plugin. The callback takes the failed request and adds the
 * `qt` param based on the current time, as well as applies any other
 * user-defined hit modifications.
 *
 * @param {Object} config See {@link module:workbox-google-analytics.initialize}.
 * @return {Function} The requestWillDequeue callback function.
 *
 * @private
 */
const createOnSyncCallback = (config) => {
    return async ({ queue }) => {
        let entry;
        while (entry = await queue.shiftRequest()) {
            const { request, timestamp } = entry;
            const url = new URL(request.url);
            try {
                // Measurement protocol requests can set their payload parameters in
                // either the URL query string (for GET requests) or the POST body.
                const params = request.method === 'POST' ?
                    new URLSearchParams(await request.clone().text()) :
                    url.searchParams;
                // Calculate the qt param, accounting for the fact that an existing
                // qt param may be present and should be updated rather than replaced.
                const originalHitTime = timestamp - (Number(params.get('qt')) || 0);
                const queueTime = Date.now() - originalHitTime;
                // Set the qt param prior to applying hitFilter or parameterOverrides.
                params.set('qt', String(queueTime));
                // Apply `parameterOverrides`, if set.
                if (config.parameterOverrides) {
                    for (const param of Object.keys(config.parameterOverrides)) {
                        const value = config.parameterOverrides[param];
                        params.set(param, value);
                    }
                }
                // Apply `hitFilter`, if set.
                if (typeof config.hitFilter === 'function') {
                    config.hitFilter.call(null, params);
                }
                // Retry the fetch. Ignore URL search params from the URL as they're
                // now in the post body.
                await fetch(new Request(url.origin + url.pathname, {
                    body: params.toString(),
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'omit',
                    headers: { 'Content-Type': 'text/plain' },
                }));
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Request for '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(url.href)}' ` +
                        `has been replayed`);
                }
            }
            catch (err) {
                await queue.unshiftRequest(entry);
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Request for '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(url.href)}' ` +
                        `failed to replay, putting it back in the queue.`);
                }
                throw err;
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`All Google Analytics request successfully replayed; ` +
                `the queue is now empty!`);
        }
    };
};
/**
 * Creates GET and POST routes to catch failed Measurement Protocol hits.
 *
 * @param {BackgroundSyncPlugin} bgSyncPlugin
 * @return {Array<Route>} The created routes.
 *
 * @private
 */
const createCollectRoutes = (bgSyncPlugin) => {
    const match = ({ url }) => url.hostname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GOOGLE_ANALYTICS_HOST &&
        _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.COLLECT_PATHS_REGEX.test(url.pathname);
    const handler = new workbox_strategies_NetworkOnly_js__WEBPACK_IMPORTED_MODULE_7__.NetworkOnly({
        plugins: [bgSyncPlugin],
    });
    return [
        new workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__.Route(match, handler, 'GET'),
        new workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__.Route(match, handler, 'POST'),
    ];
};
/**
 * Creates a route with a network first strategy for the analytics.js script.
 *
 * @param {string} cacheName
 * @return {Route} The created route.
 *
 * @private
 */
const createAnalyticsJsRoute = (cacheName) => {
    const match = ({ url }) => url.hostname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GOOGLE_ANALYTICS_HOST &&
        url.pathname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.ANALYTICS_JS_PATH;
    const handler = new workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_6__.NetworkFirst({ cacheName });
    return new workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__.Route(match, handler, 'GET');
};
/**
 * Creates a route with a network first strategy for the gtag.js script.
 *
 * @param {string} cacheName
 * @return {Route} The created route.
 *
 * @private
 */
const createGtagJsRoute = (cacheName) => {
    const match = ({ url }) => url.hostname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GTM_HOST &&
        url.pathname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GTAG_JS_PATH;
    const handler = new workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_6__.NetworkFirst({ cacheName });
    return new workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__.Route(match, handler, 'GET');
};
/**
 * Creates a route with a network first strategy for the gtm.js script.
 *
 * @param {string} cacheName
 * @return {Route} The created route.
 *
 * @private
 */
const createGtmJsRoute = (cacheName) => {
    const match = ({ url }) => url.hostname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GTM_HOST &&
        url.pathname === _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.GTM_JS_PATH;
    const handler = new workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_6__.NetworkFirst({ cacheName });
    return new workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_4__.Route(match, handler, 'GET');
};
/**
 * @param {Object=} [options]
 * @param {Object} [options.cacheName] The cache name to store and retrieve
 *     analytics.js. Defaults to the cache names provided by `workbox-core`.
 * @param {Object} [options.parameterOverrides]
 *     [Measurement Protocol parameters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters),
 *     expressed as key/value pairs, to be added to replayed Google Analytics
 *     requests. This can be used to, e.g., set a custom dimension indicating
 *     that the request was replayed.
 * @param {Function} [options.hitFilter] A function that allows you to modify
 *     the hit parameters prior to replaying
 *     the hit. The function is invoked with the original hit's URLSearchParams
 *     object as its only argument.
 *
 * @memberof module:workbox-google-analytics
 */
const initialize = (options = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getGoogleAnalyticsName(options.cacheName);
    const bgSyncPlugin = new workbox_background_sync_BackgroundSyncPlugin_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSyncPlugin(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.QUEUE_NAME, {
        maxRetentionTime: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.MAX_RETENTION_TIME,
        onSync: createOnSyncCallback(options),
    });
    const routes = [
        createGtmJsRoute(cacheName),
        createAnalyticsJsRoute(cacheName),
        createGtagJsRoute(cacheName),
        ...createCollectRoutes(bgSyncPlugin),
    ];
    const router = new workbox_routing_Router_js__WEBPACK_IMPORTED_MODULE_5__.Router();
    for (const route of routes) {
        router.registerRoute(route);
    }
    router.addFetchListener();
};



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/BackgroundSyncPlugin.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/BackgroundSyncPlugin.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundSyncPlugin": () => /* binding */ BackgroundSyncPlugin
/* harmony export */ });
/* harmony import */ var _Queue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queue.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/Queue.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * A class implementing the `fetchDidFail` lifecycle callback. This makes it
 * easier to add failed requests to a background sync Queue.
 *
 * @memberof module:workbox-background-sync
 */
class BackgroundSyncPlugin {
    /**
     * @param {string} name See the [Queue]{@link module:workbox-background-sync.Queue}
     *     documentation for parameter details.
     * @param {Object} [options] See the
     *     [Queue]{@link module:workbox-background-sync.Queue} documentation for
     *     parameter details.
     */
    constructor(name, options) {
        /**
         * @param {Object} options
         * @param {Request} options.request
         * @private
         */
        this.fetchDidFail = async ({ request }) => {
            await this._queue.pushRequest({ request });
        };
        this._queue = new _Queue_js__WEBPACK_IMPORTED_MODULE_0__.Queue(name, options);
    }
}



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/Queue.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/Queue.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Queue": () => /* binding */ Queue
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _lib_QueueStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/QueueStore.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/QueueStore.js");
/* harmony import */ var _lib_StorableRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/StorableRequest.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/StorableRequest.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







const TAG_PREFIX = 'workbox-background-sync';
const MAX_RETENTION_TIME = 60 * 24 * 7; // 7 days in minutes
const queueNames = new Set();
/**
 * Converts a QueueStore entry into the format exposed by Queue. This entails
 * converting the request data into a real request and omitting the `id` and
 * `queueName` properties.
 *
 * @param {Object} queueStoreEntry
 * @return {Object}
 * @private
 */
const convertEntry = (queueStoreEntry) => {
    const queueEntry = {
        request: new _lib_StorableRequest_js__WEBPACK_IMPORTED_MODULE_5__.StorableRequest(queueStoreEntry.requestData).toRequest(),
        timestamp: queueStoreEntry.timestamp,
    };
    if (queueStoreEntry.metadata) {
        queueEntry.metadata = queueStoreEntry.metadata;
    }
    return queueEntry;
};
/**
 * A class to manage storing failed requests in IndexedDB and retrying them
 * later. All parts of the storing and replaying process are observable via
 * callbacks.
 *
 * @memberof module:workbox-background-sync
 */
class Queue {
    /**
     * Creates an instance of Queue with the given options
     *
     * @param {string} name The unique name for this queue. This name must be
     *     unique as it's used to register sync events and store requests
     *     in IndexedDB specific to this instance. An error will be thrown if
     *     a duplicate name is detected.
     * @param {Object} [options]
     * @param {Function} [options.onSync] A function that gets invoked whenever
     *     the 'sync' event fires. The function is invoked with an object
     *     containing the `queue` property (referencing this instance), and you
     *     can use the callback to customize the replay behavior of the queue.
     *     When not set the `replayRequests()` method is called.
     *     Note: if the replay fails after a sync event, make sure you throw an
     *     error, so the browser knows to retry the sync event later.
     * @param {number} [options.maxRetentionTime=7 days] The amount of time (in
     *     minutes) a request may be retried. After this amount of time has
     *     passed, the request will be deleted from the queue.
     */
    constructor(name, { onSync, maxRetentionTime } = {}) {
        this._syncInProgress = false;
        this._requestsAddedDuringSync = false;
        // Ensure the store name is not already being used
        if (queueNames.has(name)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('duplicate-queue-name', { name });
        }
        else {
            queueNames.add(name);
        }
        this._name = name;
        this._onSync = onSync || this.replayRequests;
        this._maxRetentionTime = maxRetentionTime || MAX_RETENTION_TIME;
        this._queueStore = new _lib_QueueStore_js__WEBPACK_IMPORTED_MODULE_4__.QueueStore(this._name);
        this._addSyncListener();
    }
    /**
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Stores the passed request in IndexedDB (with its timestamp and any
     * metadata) at the end of the queue.
     *
     * @param {Object} entry
     * @param {Request} entry.request The request to store in the queue.
     * @param {Object} [entry.metadata] Any metadata you want associated with the
     *     stored request. When requests are replayed you'll have access to this
     *     metadata object in case you need to modify the request beforehand.
     * @param {number} [entry.timestamp] The timestamp (Epoch time in
     *     milliseconds) when the request was first added to the queue. This is
     *     used along with `maxRetentionTime` to remove outdated requests. In
     *     general you don't need to set this value, as it's automatically set
     *     for you (defaulting to `Date.now()`), but you can update it if you
     *     don't want particular requests to expire.
     */
    async pushRequest(entry) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isType(entry, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'Queue',
                funcName: 'pushRequest',
                paramName: 'entry',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isInstance(entry.request, Request, {
                moduleName: 'workbox-background-sync',
                className: 'Queue',
                funcName: 'pushRequest',
                paramName: 'entry.request',
            });
        }
        await this._addRequest(entry, 'push');
    }
    /**
     * Stores the passed request in IndexedDB (with its timestamp and any
     * metadata) at the beginning of the queue.
     *
     * @param {Object} entry
     * @param {Request} entry.request The request to store in the queue.
     * @param {Object} [entry.metadata] Any metadata you want associated with the
     *     stored request. When requests are replayed you'll have access to this
     *     metadata object in case you need to modify the request beforehand.
     * @param {number} [entry.timestamp] The timestamp (Epoch time in
     *     milliseconds) when the request was first added to the queue. This is
     *     used along with `maxRetentionTime` to remove outdated requests. In
     *     general you don't need to set this value, as it's automatically set
     *     for you (defaulting to `Date.now()`), but you can update it if you
     *     don't want particular requests to expire.
     */
    async unshiftRequest(entry) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isType(entry, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'Queue',
                funcName: 'unshiftRequest',
                paramName: 'entry',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isInstance(entry.request, Request, {
                moduleName: 'workbox-background-sync',
                className: 'Queue',
                funcName: 'unshiftRequest',
                paramName: 'entry.request',
            });
        }
        await this._addRequest(entry, 'unshift');
    }
    /**
     * Removes and returns the last request in the queue (along with its
     * timestamp and any metadata). The returned object takes the form:
     * `{request, timestamp, metadata}`.
     *
     * @return {Promise<Object>}
     */
    async popRequest() {
        return this._removeRequest('pop');
    }
    /**
     * Removes and returns the first request in the queue (along with its
     * timestamp and any metadata). The returned object takes the form:
     * `{request, timestamp, metadata}`.
     *
     * @return {Promise<Object>}
     */
    async shiftRequest() {
        return this._removeRequest('shift');
    }
    /**
     * Returns all the entries that have not expired (per `maxRetentionTime`).
     * Any expired entries are removed from the queue.
     *
     * @return {Promise<Array<Object>>}
     */
    async getAll() {
        const allEntries = await this._queueStore.getAll();
        const now = Date.now();
        const unexpiredEntries = [];
        for (const entry of allEntries) {
            // Ignore requests older than maxRetentionTime. Call this function
            // recursively until an unexpired request is found.
            const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1000;
            if (now - entry.timestamp > maxRetentionTimeInMs) {
                await this._queueStore.deleteEntry(entry.id);
            }
            else {
                unexpiredEntries.push(convertEntry(entry));
            }
        }
        return unexpiredEntries;
    }
    /**
     * Adds the entry to the QueueStore and registers for a sync event.
     *
     * @param {Object} entry
     * @param {Request} entry.request
     * @param {Object} [entry.metadata]
     * @param {number} [entry.timestamp=Date.now()]
     * @param {string} operation ('push' or 'unshift')
     * @private
     */
    async _addRequest({ request, metadata, timestamp = Date.now(), }, operation) {
        const storableRequest = await _lib_StorableRequest_js__WEBPACK_IMPORTED_MODULE_5__.StorableRequest.fromRequest(request.clone());
        const entry = {
            requestData: storableRequest.toObject(),
            timestamp,
        };
        // Only include metadata if it's present.
        if (metadata) {
            entry.metadata = metadata;
        }
        await this._queueStore[`${operation}Entry`](entry);
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Request for '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}' has ` +
                `been added to background sync queue '${this._name}'.`);
        }
        // Don't register for a sync if we're in the middle of a sync. Instead,
        // we wait until the sync is complete and call register if
        // `this._requestsAddedDuringSync` is true.
        if (this._syncInProgress) {
            this._requestsAddedDuringSync = true;
        }
        else {
            await this.registerSync();
        }
    }
    /**
     * Removes and returns the first or last (depending on `operation`) entry
     * from the QueueStore that's not older than the `maxRetentionTime`.
     *
     * @param {string} operation ('pop' or 'shift')
     * @return {Object|undefined}
     * @private
     */
    async _removeRequest(operation) {
        const now = Date.now();
        const entry = await this._queueStore[`${operation}Entry`]();
        if (entry) {
            // Ignore requests older than maxRetentionTime. Call this function
            // recursively until an unexpired request is found.
            const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1000;
            if (now - entry.timestamp > maxRetentionTimeInMs) {
                return this._removeRequest(operation);
            }
            return convertEntry(entry);
        }
        else {
            return undefined;
        }
    }
    /**
     * Loops through each request in the queue and attempts to re-fetch it.
     * If any request fails to re-fetch, it's put back in the same position in
     * the queue (which registers a retry for the next sync event).
     */
    async replayRequests() {
        let entry;
        while (entry = await this.shiftRequest()) {
            try {
                await fetch(entry.request.clone());
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Request for '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(entry.request.url)}' ` +
                        `has been replayed in queue '${this._name}'`);
                }
            }
            catch (error) {
                await this.unshiftRequest(entry);
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Request for '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(entry.request.url)}' ` +
                        `failed to replay, putting it back in queue '${this._name}'`);
                }
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('queue-replay-failed', { name: this._name });
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`All requests in queue '${this.name}' have successfully ` +
                `replayed; the queue is now empty!`);
        }
    }
    /**
     * Registers a sync event with a tag unique to this instance.
     */
    async registerSync() {
        if ('sync' in self.registration) {
            try {
                await self.registration.sync.register(`${TAG_PREFIX}:${this._name}`);
            }
            catch (err) {
                // This means the registration failed for some reason, possibly due to
                // the user disabling it.
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.warn(`Unable to register sync event for '${this._name}'.`, err);
                }
            }
        }
    }
    /**
     * In sync-supporting browsers, this adds a listener for the sync event.
     * In non-sync-supporting browsers, this will retry the queue on service
     * worker startup.
     *
     * @private
     */
    _addSyncListener() {
        if ('sync' in self.registration) {
            self.addEventListener('sync', (event) => {
                if (event.tag === `${TAG_PREFIX}:${this._name}`) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Background sync for tag '${event.tag}' ` +
                            `has been received`);
                    }
                    const syncComplete = async () => {
                        this._syncInProgress = true;
                        let syncError;
                        try {
                            await this._onSync({ queue: this });
                        }
                        catch (error) {
                            syncError = error;
                            // Rethrow the error. Note: the logic in the finally clause
                            // will run before this gets rethrown.
                            throw syncError;
                        }
                        finally {
                            // New items may have been added to the queue during the sync,
                            // so we need to register for a new sync if that's happened...
                            // Unless there was an error during the sync, in which
                            // case the browser will automatically retry later, as long
                            // as `event.lastChance` is not true.
                            if (this._requestsAddedDuringSync &&
                                !(syncError && !event.lastChance)) {
                                await this.registerSync();
                            }
                            this._syncInProgress = false;
                            this._requestsAddedDuringSync = false;
                        }
                    };
                    event.waitUntil(syncComplete());
                }
            });
        }
        else {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Background sync replaying without background sync event`);
            }
            // If the browser doesn't support background sync, retry
            // every time the service worker starts up as a fallback.
            this._onSync({ queue: this });
        }
    }
    /**
     * Returns the set of queue names. This is primarily used to reset the list
     * of queue names in tests.
     *
     * @return {Set}
     *
     * @private
     */
    static get _queueNames() {
        return queueNames;
    }
}



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js ***!
  \************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:background-sync:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/QueueStore.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/QueueStore.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueStore": () => /* binding */ QueueStore
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/DBWrapper.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/DBWrapper.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const DB_VERSION = 3;
const DB_NAME = 'workbox-background-sync';
const OBJECT_STORE_NAME = 'requests';
const INDEXED_PROP = 'queueName';
/**
 * A class to manage storing requests from a Queue in IndexedDB,
 * indexed by their queue name for easier access.
 *
 * @private
 */
class QueueStore {
    /**
     * Associates this instance with a Queue instance, so entries added can be
     * identified by their queue name.
     *
     * @param {string} queueName
     * @private
     */
    constructor(queueName) {
        this._queueName = queueName;
        this._db = new workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_1__.DBWrapper(DB_NAME, DB_VERSION, {
            onupgradeneeded: this._upgradeDb,
        });
    }
    /**
     * Append an entry last in the queue.
     *
     * @param {Object} entry
     * @param {Object} entry.requestData
     * @param {number} [entry.timestamp]
     * @param {Object} [entry.metadata]
     * @private
     */
    async pushEntry(entry) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(entry, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'QueueStore',
                funcName: 'pushEntry',
                paramName: 'entry',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(entry.requestData, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'QueueStore',
                funcName: 'pushEntry',
                paramName: 'entry.requestData',
            });
        }
        // Don't specify an ID since one is automatically generated.
        delete entry.id;
        entry.queueName = this._queueName;
        await this._db.add(OBJECT_STORE_NAME, entry);
    }
    /**
     * Prepend an entry first in the queue.
     *
     * @param {Object} entry
     * @param {Object} entry.requestData
     * @param {number} [entry.timestamp]
     * @param {Object} [entry.metadata]
     * @private
     */
    async unshiftEntry(entry) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(entry, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'QueueStore',
                funcName: 'unshiftEntry',
                paramName: 'entry',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(entry.requestData, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'QueueStore',
                funcName: 'unshiftEntry',
                paramName: 'entry.requestData',
            });
        }
        const [firstEntry] = await this._db.getAllMatching(OBJECT_STORE_NAME, {
            count: 1,
        });
        if (firstEntry) {
            // Pick an ID one less than the lowest ID in the object store.
            entry.id = firstEntry.id - 1;
        }
        else {
            // Otherwise let the auto-incrementor assign the ID.
            delete entry.id;
        }
        entry.queueName = this._queueName;
        await this._db.add(OBJECT_STORE_NAME, entry);
    }
    /**
     * Removes and returns the last entry in the queue matching the `queueName`.
     *
     * @return {Promise<Object>}
     * @private
     */
    async popEntry() {
        return this._removeEntry({ direction: 'prev' });
    }
    /**
     * Removes and returns the first entry in the queue matching the `queueName`.
     *
     * @return {Promise<Object>}
     * @private
     */
    async shiftEntry() {
        return this._removeEntry({ direction: 'next' });
    }
    /**
     * Returns all entries in the store matching the `queueName`.
     *
     * @param {Object} options See {@link module:workbox-background-sync.Queue~getAll}
     * @return {Promise<Array<Object>>}
     * @private
     */
    async getAll() {
        return await this._db.getAllMatching(OBJECT_STORE_NAME, {
            index: INDEXED_PROP,
            query: IDBKeyRange.only(this._queueName),
        });
    }
    /**
     * Deletes the entry for the given ID.
     *
     * WARNING: this method does not ensure the deleted enry belongs to this
     * queue (i.e. matches the `queueName`). But this limitation is acceptable
     * as this class is not publicly exposed. An additional check would make
     * this method slower than it needs to be.
     *
     * @private
     * @param {number} id
     */
    async deleteEntry(id) {
        await this._db.delete(OBJECT_STORE_NAME, id);
    }
    /**
     * Removes and returns the first or last entry in the queue (based on the
     * `direction` argument) matching the `queueName`.
     *
     * @return {Promise<Object>}
     * @private
     */
    async _removeEntry({ direction }) {
        const [entry] = await this._db.getAllMatching(OBJECT_STORE_NAME, {
            direction,
            index: INDEXED_PROP,
            query: IDBKeyRange.only(this._queueName),
            count: 1,
        });
        if (entry) {
            await this.deleteEntry(entry.id);
            return entry;
        }
    }
    /**
     * Upgrades the database given an `upgradeneeded` event.
     *
     * @param {Event} event
     * @private
     */
    _upgradeDb(event) {
        const db = event.target.result;
        if (event.oldVersion > 0 && event.oldVersion < DB_VERSION) {
            if (db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
                db.deleteObjectStore(OBJECT_STORE_NAME);
            }
        }
        const objStore = db.createObjectStore(OBJECT_STORE_NAME, {
            autoIncrement: true,
            keyPath: 'id',
        });
        objStore.createIndex(INDEXED_PROP, INDEXED_PROP, { unique: false });
    }
}


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/StorableRequest.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/lib/StorableRequest.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorableRequest": () => /* binding */ StorableRequest
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-background-sync/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const serializableProperties = [
    'method',
    'referrer',
    'referrerPolicy',
    'mode',
    'credentials',
    'cache',
    'redirect',
    'integrity',
    'keepalive',
];
/**
 * A class to make it easier to serialize and de-serialize requests so they
 * can be stored in IndexedDB.
 *
 * @private
 */
class StorableRequest {
    /**
     * Accepts an object of request data that can be used to construct a
     * `Request` but can also be stored in IndexedDB.
     *
     * @param {Object} requestData An object of request data that includes the
     *     `url` plus any relevant properties of
     *     [requestInit]{@link https://fetch.spec.whatwg.org/#requestinit}.
     * @private
     */
    constructor(requestData) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(requestData, 'object', {
                moduleName: 'workbox-background-sync',
                className: 'StorableRequest',
                funcName: 'constructor',
                paramName: 'requestData',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(requestData.url, 'string', {
                moduleName: 'workbox-background-sync',
                className: 'StorableRequest',
                funcName: 'constructor',
                paramName: 'requestData.url',
            });
        }
        // If the request's mode is `navigate`, convert it to `same-origin` since
        // navigation requests can't be constructed via script.
        if (requestData['mode'] === 'navigate') {
            requestData['mode'] = 'same-origin';
        }
        this._requestData = requestData;
    }
    /**
     * Converts a Request object to a plain object that can be structured
     * cloned or JSON-stringified.
     *
     * @param {Request} request
     * @return {Promise<StorableRequest>}
     *
     * @private
     */
    static async fromRequest(request) {
        const requestData = {
            url: request.url,
            headers: {},
        };
        // Set the body if present.
        if (request.method !== 'GET') {
            // Use ArrayBuffer to support non-text request bodies.
            // NOTE: we can't use Blobs becuse Safari doesn't support storing
            // Blobs in IndexedDB in some cases:
            // https://github.com/dfahlander/Dexie.js/issues/618#issuecomment-398348457
            requestData.body = await request.clone().arrayBuffer();
        }
        // Convert the headers from an iterable to an object.
        for (const [key, value] of request.headers.entries()) {
            requestData.headers[key] = value;
        }
        // Add all other serializable request properties
        for (const prop of serializableProperties) {
            if (request[prop] !== undefined) {
                requestData[prop] = request[prop];
            }
        }
        return new StorableRequest(requestData);
    }
    /**
     * Returns a deep clone of the instances `_requestData` object.
     *
     * @return {Object}
     *
     * @private
     */
    toObject() {
        const requestData = Object.assign({}, this._requestData);
        requestData.headers = Object.assign({}, this._requestData.headers);
        if (requestData.body) {
            requestData.body = requestData.body.slice(0);
        }
        return requestData;
    }
    /**
     * Converts this instance to a Request.
     *
     * @return {Request}
     *
     * @private
     */
    toRequest() {
        return new Request(this._requestData.url, this._requestData);
    }
    /**
     * Creates and returns a deep clone of the instance.
     *
     * @return {StorableRequest}
     *
     * @private
     */
    clone() {
        return new StorableRequest(this.toObject());
    }
}



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/DBWrapper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/DBWrapper.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBWrapper": () => /* binding */ DBWrapper
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */
class DBWrapper {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {!Function} [callbacks.onupgradeneeded]
     * @param {!Function} [callbacks.onversionchange] Defaults to
     *     DBWrapper.prototype._onversionchange when not specified.
     * @private
     */
    constructor(name, version, { onupgradeneeded, onversionchange, } = {}) {
        this._db = null;
        this._name = name;
        this._version = version;
        this._onupgradeneeded = onupgradeneeded;
        this._onversionchange = onversionchange || (() => this.close());
    }
    /**
     * Returns the IDBDatabase instance (not normally needed).
     * @return {IDBDatabase|undefined}
     *
     * @private
     */
    get db() {
        return this._db;
    }
    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     * @private
     */
    async open() {
        if (this._db)
            return;
        this._db = await new Promise((resolve, reject) => {
            // This flag is flipped to true if the timeout callback runs prior
            // to the request failing or succeeding. Note: we use a timeout instead
            // of an onblocked handler since there are cases where onblocked will
            // never never run. A timeout better handles all possible scenarios:
            // https://github.com/w3c/IndexedDB/issues/223
            let openRequestTimedOut = false;
            setTimeout(() => {
                openRequestTimedOut = true;
                reject(new Error('The open request was blocked and timed out'));
            }, this.OPEN_TIMEOUT);
            const openRequest = indexedDB.open(this._name, this._version);
            openRequest.onerror = () => reject(openRequest.error);
            openRequest.onupgradeneeded = (evt) => {
                if (openRequestTimedOut) {
                    openRequest.transaction.abort();
                    openRequest.result.close();
                }
                else if (typeof this._onupgradeneeded === 'function') {
                    this._onupgradeneeded(evt);
                }
            };
            openRequest.onsuccess = () => {
                const db = openRequest.result;
                if (openRequestTimedOut) {
                    db.close();
                }
                else {
                    db.onversionchange = this._onversionchange.bind(this);
                    resolve(db);
                }
            };
        });
        return this;
    }
    /**
     * Polyfills the native `getKey()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @return {Array}
     * @private
     */
    async getKey(storeName, query) {
        return (await this.getAllKeys(storeName, query, 1))[0];
    }
    /**
     * Polyfills the native `getAll()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAll(storeName, query, count) {
        return await this.getAllMatching(storeName, { query, count });
    }
    /**
     * Polyfills the native `getAllKeys()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAllKeys(storeName, query, count) {
        const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
        return entries.map((entry) => entry.key);
    }
    /**
     * Supports flexible lookup in an object store by specifying an index,
     * query, direction, and count. This method returns an array of objects
     * with the signature .
     *
     * @param {string} storeName
     * @param {Object} [opts]
     * @param {string} [opts.index] The index to use (if specified).
     * @param {*} [opts.query]
     * @param {IDBCursorDirection} [opts.direction]
     * @param {number} [opts.count] The max number of results to return.
     * @param {boolean} [opts.includeKeys] When true, the structure of the
     *     returned objects is changed from an array of values to an array of
     *     objects in the form {key, primaryKey, value}.
     * @return {Array}
     * @private
     */
    async getAllMatching(storeName, { index, query = null, // IE/Edge errors if query === `undefined`.
    direction = 'next', count, includeKeys = false, } = {}) {
        return await this.transaction([storeName], 'readonly', (txn, done) => {
            const store = txn.objectStore(storeName);
            const target = index ? store.index(index) : store;
            const results = [];
            const request = target.openCursor(query, direction);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    results.push(includeKeys ? cursor : cursor.value);
                    if (count && results.length >= count) {
                        done(results);
                    }
                    else {
                        cursor.continue();
                    }
                }
                else {
                    done(results);
                }
            };
        });
    }
    /**
     * Accepts a list of stores, a transaction type, and a callback and
     * performs a transaction. A promise is returned that resolves to whatever
     * value the callback chooses. The callback holds all the transaction logic
     * and is invoked with two arguments:
     *   1. The IDBTransaction object
     *   2. A `done` function, that's used to resolve the promise when
     *      when the transaction is done, if passed a value, the promise is
     *      resolved to that value.
     *
     * @param {Array<string>} storeNames An array of object store names
     *     involved in the transaction.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {!Function} callback
     * @return {*} The result of the transaction ran by the callback.
     * @private
     */
    async transaction(storeNames, type, callback) {
        await this.open();
        return await new Promise((resolve, reject) => {
            const txn = this._db.transaction(storeNames, type);
            txn.onabort = () => reject(txn.error);
            txn.oncomplete = () => resolve();
            callback(txn, (value) => resolve(value));
        });
    }
    /**
     * Delegates async to a native IDBObjectStore method.
     *
     * @param {string} method The method name.
     * @param {string} storeName The object store name.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {...*} args The list of args to pass to the native method.
     * @return {*} The result of the transaction.
     * @private
     */
    async _call(method, storeName, type, ...args) {
        const callback = (txn, done) => {
            const objStore = txn.objectStore(storeName);
            // TODO(philipwalton): Fix this underlying TS2684 error.
            // @ts-ignore
            const request = objStore[method].apply(objStore, args);
            request.onsuccess = () => done(request.result);
        };
        return await this.transaction([storeName], type, callback);
    }
    /**
     * Closes the connection opened by `DBWrapper.open()`. Generally this method
     * doesn't need to be called since:
     *   1. It's usually better to keep a connection open since opening
     *      a new connection is somewhat slow.
     *   2. Connections are automatically closed when the reference is
     *      garbage collected.
     * The primary use case for needing to close a connection is when another
     * reference (typically in another tab) needs to upgrade it and would be
     * blocked by the current, open connection.
     *
     * @private
     */
    close() {
        if (this._db) {
            this._db.close();
            this._db = null;
        }
    }
}
// Exposed on the prototype to let users modify the default timeout on a
// per-instance or global basis.
DBWrapper.prototype.OPEN_TIMEOUT = 2000;
// Wrap native IDBObjectStore methods according to their mode.
const methodsToWrap = {
    readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
    readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
        if (method in IDBObjectStore.prototype) {
            // Don't use arrow functions here since we're outside of the class.
            DBWrapper.prototype[method] =
                async function (storeName, ...args) {
                    return await this._call(method, storeName, mode, ...args);
                };
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/WorkboxError.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => /* binding */ WorkboxError
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/assert.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => /* binding */ finalAssertExports
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/cacheNames.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => /* binding */ cacheNames
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => /* binding */ getFriendlyURL
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/logger.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => /* binding */ messageGenerator
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messages.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => /* binding */ messages
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-google-analytics/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-google-analytics/utils/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-google-analytics/utils/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUEUE_NAME": () => /* binding */ QUEUE_NAME,
/* harmony export */   "MAX_RETENTION_TIME": () => /* binding */ MAX_RETENTION_TIME,
/* harmony export */   "GOOGLE_ANALYTICS_HOST": () => /* binding */ GOOGLE_ANALYTICS_HOST,
/* harmony export */   "GTM_HOST": () => /* binding */ GTM_HOST,
/* harmony export */   "ANALYTICS_JS_PATH": () => /* binding */ ANALYTICS_JS_PATH,
/* harmony export */   "GTAG_JS_PATH": () => /* binding */ GTAG_JS_PATH,
/* harmony export */   "GTM_JS_PATH": () => /* binding */ GTM_JS_PATH,
/* harmony export */   "COLLECT_DEFAULT_PATH": () => /* binding */ COLLECT_DEFAULT_PATH,
/* harmony export */   "COLLECT_PATHS_REGEX": () => /* binding */ COLLECT_PATHS_REGEX
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-google-analytics/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const QUEUE_NAME = 'workbox-google-analytics';
const MAX_RETENTION_TIME = 60 * 48; // Two days in minutes
const GOOGLE_ANALYTICS_HOST = 'www.google-analytics.com';
const GTM_HOST = 'www.googletagmanager.com';
const ANALYTICS_JS_PATH = '/analytics.js';
const GTAG_JS_PATH = '/gtag/js';
const GTM_JS_PATH = '/gtm.js';
const COLLECT_DEFAULT_PATH = '/collect';
// This RegExp matches all known Measurement Protocol single-hit collect
// endpoints. Most of the time the default path (/collect) is used, but
// occasionally an experimental endpoint is used when testing new features,
// (e.g. /r/collect or /j/collect)
const COLLECT_PATHS_REGEX = /^\/(\w+\/)?collect/;


/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => /* binding */ Route
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {module:workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => /* binding */ Router
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            if (event.data && event.data.type === 'CACHE_URLS') {
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        err = catchErr;
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do. 
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                params = matchResult;
                if (Array.isArray(matchResult) && matchResult.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object &&
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/_private/WorkboxError.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/_private/WorkboxError.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => /* binding */ WorkboxError
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/_private/assert.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/_private/assert.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => /* binding */ finalAssertExports
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => /* binding */ getFriendlyURL
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/_private/logger.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/_private/logger.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/_version.js ***!
  \****************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => /* binding */ messageGenerator
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messages.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/workbox-routing/node_modules/workbox-core/models/messages/messages.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => /* binding */ messages
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => /* binding */ defaultMethod,
/* harmony export */   "validMethods": () => /* binding */ validMethods
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => /* binding */ normalizeHandler
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-routing/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkFirst": () => /* binding */ NetworkFirst
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (true) {
            if (this._networkTimeoutSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(this._networkTimeoutSeconds, 'number', {
                    moduleName: 'workbox-strategies',
                    className: this.constructor.name,
                    funcName: 'constructor',
                    paramName: 'networkTimeoutSeconds',
                });
            }
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'handle',
                paramName: 'makeRequest',
            });
        }
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, logs, handler });
        promises.push(networkPromise);
        for (const promise of promises) {
            handler.waitUntil(promise);
        }
        // Promise.race() will resolve as soon as the first promise resolves.
        let response = await Promise.race(promises);
        // If Promise.race() resolved with null, it might be due to a network
        // timeout + a cache miss. If that were to happen, we'd rather wait until
        // the networkPromise resolves instead of returning null.
        // Note that it's fine to await an already-resolved promise, so we don't
        // have to check to see if it's still "in flight".
        if (!response) {
            response = await networkPromise;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, handler }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (true) {
                    logs.push(`Timing out the network response at ` +
                        `${this._networkTimeoutSeconds} seconds.`);
                }
                resolve(await handler.cacheMatch(request));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, handler }) {
        let error;
        let response;
        try {
            response = await handler.fetchAndCachePut(request);
        }
        catch (fetchError) {
            error = fetchError;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (true) {
            if (response) {
                logs.push(`Got response from network.`);
            }
            else {
                logs.push(`Unable to get a response from the network. Will respond ` +
                    `with a cached response.`);
            }
        }
        if (error || !response) {
            response = await handler.cacheMatch(request);
            if (true) {
                if (response) {
                    logs.push(`Found a cached response in the '${this.cacheName}'` +
                        ` cache.`);
                }
                else {
                    logs.push(`No response found in the '${this.cacheName}' cache.`);
                }
            }
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkOnly": () => /* binding */ NetworkOnly
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will result in a network error.
     */
    constructor(options = {}) {
        super(options);
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: '_handle',
                paramName: 'request',
            });
        }
        let error = undefined;
        let response;
        try {
            const promises = [handler.fetch(request)];
            if (this._networkTimeoutSeconds) {
                const timeoutPromise = (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(this._networkTimeoutSeconds * 1000);
                promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
                throw new Error(`Timed out the network response after ` +
                    `${this._networkTimeoutSeconds} seconds.`);
            }
        }
        catch (err) {
            error = err;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Got response from network.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Unable to get a response from the network.`);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => /* binding */ Strategy
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string' ?
            new Request(options.request) :
            options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            for (const callback of handler.iterateCallbacks('handlerDidError')) {
                response = await callback({ error, event, request });
                if (response) {
                    break;
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            error = waitUntilError;
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => /* binding */ StrategyHandler
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return (typeof input === 'string') ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * [match callback]{@link module:workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` and `plugins` defined on the strategy
     * object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    fetch(input) {
        return this.waitUntil((async () => {
            const { event } = this;
            let request = toRequest(input);
            if (request.mode === 'navigate' &&
                event instanceof FetchEvent &&
                event.preloadResponse) {
                const possiblePreloadResponse = await event.preloadResponse;
                if (possiblePreloadResponse) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                            `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                    }
                    return possiblePreloadResponse;
                }
            }
            // If there is a fetchDidFail plugin, we need to save a clone of the
            // original request before it's either modified by a requestWillFetch
            // plugin or before the original request's body is consumed via fetch().
            const originalRequest = this.hasCallback('fetchDidFail') ?
                request.clone() : null;
            try {
                for (const cb of this.iterateCallbacks('requestWillFetch')) {
                    request = await cb({ request: request.clone(), event });
                }
            }
            catch (err) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownError: err,
                });
            }
            // The request can be altered by plugins with `requestWillFetch` making
            // the original request (most likely from a `fetch` event) different
            // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
            const pluginFilteredRequest = request.clone();
            try {
                let fetchResponse;
                // See https://github.com/GoogleChrome/workbox/issues/1796
                fetchResponse = await fetch(request, request.mode === 'navigate' ?
                    undefined : this._strategy.fetchOptions);
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                        `status '${fetchResponse.status}'.`);
                }
                for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                    fetchResponse = await callback({
                        event,
                        request: pluginFilteredRequest,
                        response: fetchResponse,
                    });
                }
                return fetchResponse;
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Network request for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
                }
                // `originalRequest` will only exist if a `fetchDidFail` callback
                // is being used (see above).
                if (originalRequest) {
                    await this.runCallbacks('fetchDidFail', {
                        error,
                        event,
                        originalRequest: originalRequest.clone(),
                        request: pluginFilteredRequest.clone(),
                    });
                }
                throw error;
            }
        })());
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    cacheMatch(key) {
        return this.waitUntil((async () => {
            const request = toRequest(key);
            let cachedResponse;
            const { cacheName, matchOptions } = this._strategy;
            const effectiveRequest = await this.getCacheKey(request, 'read');
            const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
            cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
            if (true) {
                if (cachedResponse) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
                }
            }
            for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
                cachedResponse = (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
            }
            return cachedResponse;
        })());
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
            null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                responseToCache.clone() : responseToCache);
        }
        catch (error) {
            // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
            if (error.name === 'QuotaExceededError') {
                await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
            }
            throw error;
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        if (!this._cacheKeys[mode]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    params: this.params,
                }));
            }
            this._cacheKeys[mode] = effectiveRequest;
        }
        return this._cacheKeys[mode];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = { ...param, state };
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while (promise = this._extendLifetimePromises.shift()) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve();
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache = (await callback({
                request: this.request,
                response: responseToCache,
                event: this.event,
            })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/Deferred.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/Deferred.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => /* binding */ Deferred
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => /* binding */ WorkboxError
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/assert.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/assert.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => /* binding */ finalAssertExports
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => /* binding */ cacheMatchIgnoreParams
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = { ...matchOptions, ignoreSearch: true };
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheNames.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/cacheNames.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => /* binding */ cacheNames
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => /* binding */ executeQuotaErrorCallbacks
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => /* binding */ getFriendlyURL
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/timeout.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_private/timeout.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => /* binding */ timeout
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/_version.js ***!
  \*******************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.1.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => /* binding */ messageGenerator
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messages.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/models/messages/messages.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => /* binding */ messages
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/workbox-strategies/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => /* binding */ quotaErrorCallbacks
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheOkAndOpaquePlugin": () => /* binding */ cacheOkAndOpaquePlugin
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => /* binding */ messages
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-strategies/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`View the final response here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(response || '[No response returned]');
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
        }
    },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/service-worker.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=sw.js.map