const { generateSW } = require("workbox-build");

const swDest = "public/sw.js";
generateSW({
  swDest,
  globDirectory: "public/",
  globPatterns: [
    "**/*.{png,ico,json,txt,mp3,js,css,woff,ttf,woff2,jpg,svg,html}",
  ],
  // Other configuration options...
}).then(({ count, size }) => {
  console.log(
    `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
