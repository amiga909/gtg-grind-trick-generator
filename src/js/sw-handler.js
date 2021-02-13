import { Workbox, messageSkipWaiting, getSW } from "workbox-window";

window.addEventListener("load", () => {
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
    // does not work on Android Chrome
    // handleSW();
  }
});

function handleSW() {
  const wb = new Workbox("/sw.js");
  wb.getSW().then((sw) => {
    console.log("getSW", sw);
    //document.getElementById("sw-info-text").innerHTML = sw.state;
  });
  wb.addEventListener("waiting", (event) => {
    console.log("skip waiting");
    wb.messageSkipWaiting();
    // can lead to loop of reloading (Android)
    //window.location.reload();
  });

  wb.addEventListener("installed", (event) => {
    console.log("installed", event);

    if (!event.isUpdate) {
      console.log("Service worker activated for the first time");
    }
    if (event.isUpdate) {
      console.log("'Service worker update", event);
    }
  });

  wb.addEventListener("message", (event) => {
    console.log("message", event);
  });
  wb.addEventListener("controlling", (event) => {
    console.log("controlling", event);
  });
  wb.addEventListener("activated", (event) => {
    //document.getElementById("sw-info-text").innerHTML = "activated";
    console.log("activated ", event);
  });

  wb.register();
}
