window.addEventListener("load", () => {
  // remove SWs for now
  unregister();

});

function register() {
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
}


function unregister() {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}
