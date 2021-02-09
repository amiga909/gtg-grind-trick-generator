workbox.setConfig({modulePathPrefix: 'vendor/'}) 
const workboxSW = new self.WorkboxSW(); 
/* workbox-cli will inject precaching in the array below*/
precaching.precacheAndRoute(self.__WB_MANIFEST);