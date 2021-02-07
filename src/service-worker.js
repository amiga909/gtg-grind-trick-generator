importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

import * as googleAnalytics from 'workbox-google-analytics';

googleAnalytics.initialize();
 
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);