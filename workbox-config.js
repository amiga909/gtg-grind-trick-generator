module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{js,png,ico,json,txt,mp3,eot,svg,ttf,woff,woff2,jpg,html,css}",
  ],
  swDest: "public/sw.js",/*
  runtimeCaching: [
    {
      urlPattern: /\/?/,
      handler: "CacheFirst",
    },
  ],*/
  directoryIndex: "index.html",
  cleanupOutdatedCaches: true,
  offlineGoogleAnalytics: true,
};
