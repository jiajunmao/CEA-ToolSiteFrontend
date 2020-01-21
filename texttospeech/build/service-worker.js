/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "http://localhost:7001/tts/precache-manifest.fef50b3a420c427b046517de71cc88a8.js"
=======
  "/precache-manifest.3b81f713b91aa6d8a434b80ee09cc8ef.js"

>>>>>>> e9964d178fad1f29ad6b4822de71ccdad9cf977e
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("http://localhost:7001/tts/index.html"), {
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
>>>>>>> e9964d178fad1f29ad6b4822de71ccdad9cf977e
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});
