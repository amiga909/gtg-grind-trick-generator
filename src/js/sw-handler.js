window.addEventListener("load", () => {
  navigator.serviceWorker.unregister("/sw.js");
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
