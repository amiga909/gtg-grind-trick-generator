import { CacheableResponsePlugin } from 'workbox-cacheable-response/CacheableResponsePlugin';
import { CacheFirst } from 'workbox-strategies/CacheFirst';
 
import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin';
import { NavigationRoute } from 'workbox-routing/NavigationRoute';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

import * as googleAnalytics from 'workbox-google-analytics';

googleAnalytics.initialize();
 
 precacheAndRoute(self.__WB_MANIFEST);