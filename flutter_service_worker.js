'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2474ac8fe6df80025812eed5fd3867ac",
"assets/assets/images/placeholder-image.png": "8057445ee61f0662c373e0503ec524d5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/acceuil.PNG": "fd9b77dbe6a753cd1751ff39ec2ff714",
"assets/images/adresse.png": "36887f30a6da9ea1b34276b3541d568b",
"assets/images/appel-telephonique.png": "a9016bb70249e93c948e49d41ac7fd31",
"assets/images/assurance-medicale.png": "692ee6b3e11b1bada6132790e18ebd54",
"assets/images/camera.png": "cb7d1e125629cd8fc0787e0614988be4",
"assets/images/cnas-white.PNG": "9c11e812e8d3b305ad3d692fd4c6e051",
"assets/images/complain.png": "5a3e3c4c55171dc57eb60ee61ca18e56",
"assets/images/controls.png": "cb0f463cf9b5c22b1cfdba86e84b37a7",
"assets/images/face.PNG": "2b57961a6ac699217b17947ed87dac54",
"assets/images/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/images/gestion-de-projet.png": "59e5489e927f1c3a636d1560ce2d038a",
"assets/images/info.png": "3645a6b1b26cadaa9c48402ba80043e8",
"assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/images/location.png": "d599dc5af63d55ddbd13dfc097de8fc6",
"assets/images/login.png": "c4292b53b6d33ca6419575a7b7a6e6fb",
"assets/images/logo-cnas.PNG": "81ad4f3bd64b4fc3e3aa59831f0f2159",
"assets/images/map.jpg": "44bd6a65a501847f34c3114994d8b4ba",
"assets/images/money.png": "9261dcf57ed330e33585a97389b37d76",
"assets/images/one.PNG": "1293b83e8b2406ef91eebeaac07a575c",
"assets/images/person.png": "a7cbb711fbb0b39347eb6d31551b45e6",
"assets/images/previous.png": "5edb3894a352d087e384252c7374fc80",
"assets/images/protection.png": "ea0ed7b20de5d2ce1f6ec3096378bb48",
"assets/images/protection2.png": "67dacbbf0a86ba7f82d01a617052ff57",
"assets/images/quality.png": "edea45098dabb63f6bd5485606494437",
"assets/images/search.png": "998c65ce74198c28575839302c24e13f",
"assets/images/symbole-fleche-droite-orange.png": "abc23ff2973d2c543dad0b9764d2ed78",
"assets/images/three.PNG": "239df7e860ea4820a6ac8c6e8ab1ddfa",
"assets/images/transport-sanitaire.webp": "d42d92a8cb5ce34e778e2fea8f9e4c38",
"assets/images/trash-bin.png": "4bb1b95bff3a46d063a276a2009513a7",
"assets/images/twitter.png": "5e50007c58f3521b7fd6470e6af616c6",
"assets/images/two.PNG": "6246143f588279a15f2d4a461b965d4d",
"assets/NOTICES": "04f71d964180ffb8aaa565721e650c8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a8ec5ff7c211456d8cf7a1a9f140b0c",
"/": "7a8ec5ff7c211456d8cf7a1a9f140b0c",
"main.dart.js": "c8913ddd8e7389e877397944275fca4d",
"manifest.json": "14b5372da9ec0152433e6533c9aec4c2",
"version.json": "0a317907f725a1638825f467be44e658"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
