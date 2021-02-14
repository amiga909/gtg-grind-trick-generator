window.addEventListener("load", () => {
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
