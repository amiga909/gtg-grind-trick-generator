importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
importScripts('/node_modules/workbox-google-analytics/build/workbox-offline-ga.prod.js');
 

workbox.setConfig({
  debug: true,
});

import * as googleAnalytics from 'workbox-google-analytics';

googleAnalytics.initialize();
 

const manifest = self.__WB_MANIFEST;
console.log(manifest)
 workbox.precaching.precacheAndRoute(manifest);
self.addEventListener('fetch', (event) => {
    console.log(event); return false;
    if (event.request.url.endsWith('.png')) {
      // Oops! This causes workbox-strategies.js to be imported inside a fetch handler,
      // outside of the initial, synchronous service worker execution.
      const cacheFirst = new workbox.strategies.CacheFirst();
      event.respondWith(cacheFirst.handle({request: event.request}));
    }
  });