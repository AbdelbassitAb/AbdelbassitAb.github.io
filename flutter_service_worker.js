'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "97aa55cad5a1a47872a38e43f5c89321",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79911f2786f2d5075ecbcc3fb501ae80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e1580daa9071e8a3befdecfda5255e3",
".git/logs/refs/heads/main": "ab6f4793bb13ea5f201f1a59db52a9f0",
".git/logs/refs/remotes/origin/main": "b73440c3e9be6fd121f3bb8dc1632d6d",
".git/objects/05/02db25fb915aef87d2ee4bca80b414f00ad9c7": "995dcdd59cbc009dc772bce18c49288e",
".git/objects/09/bb72e5b1af43875a17ba08bd35625c84cc4101": "c3c1a24c1b36fee6410e685f21f80826",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/95ed7590d282b7ffe3c68a1bbfbd2b1c49abbc": "439f19f4ec2d8ca6555c12cd06ea9158",
".git/objects/12/25b05b4743b7f57e19144eb1c7a43736361155": "c1d30f53c21a7b2d94af2a7439d28185",
".git/objects/12/f5d2b5aa216981c933c6eed8f24168ce77db46": "649c6df3256e546c067a18cc66c4303c",
".git/objects/14/cd4feca6ddca1068c05acea11cc211dff5133b": "1f0179a47f1ccba25d9fcf404cec07ac",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/4a41176226d4612e4fa1b1a1c1ad1eb38b2b5f": "33abcf84cec8a3c824129b53ba8c0c30",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/58da0220f9e26f75bf5326740a06bacadbbd6f": "2d6f69d244c65b12ee50cf898a0241bc",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/d85e87fe34c3264a5ad3da2e480d6912953ba1": "b8539d2033fb0a41689aab210c45fbbe",
".git/objects/2f/216b1c73e1414a9dea831019e81e1e0813c868": "4ceea33cec8995a15d680d538c6372ee",
".git/objects/3a/98a34396f042b6346b21a0fa235f599caf9706": "22548b12e7abd66bd11fd4827d23588a",
".git/objects/44/d9ef86a25cda781ebca3d352b8a4756ec857a9": "1aebc5b85cbe1f80e1366418f7d5e648",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/fb7900c3466aa95015b88ea92c3713d9dd53f7": "4e7d8d588e71b72cd990a286cc327af5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/0a43783f1fb0275c5c4a77faab8c49eeecbe5b": "20cf01c7e6ba44600dd62e763387f040",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/9ff56058b9f9637d4c3f21baef0ef56343dec0": "63282a7e74fd52dd48264364aa804247",
".git/objects/58/d433176909be24d7e8e0acab7fd9e1d9fe368b": "e5e52f4f6b07923d42b100c227e312d9",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/6c/66444a4db443c441809ca6d84bc340eaf8cb81": "05eba67609476fa41060b61555d3288e",
".git/objects/6f/33bdd798b17902b7e49fdba5c8a1879006ca93": "516b1c262ac6c9e43ca644ead8449c3b",
".git/objects/73/5b05a435c77b1d14fc5da21c6669a38f15a711": "c2c6515648f835ccdd3729dd8a935e65",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/348053346ba56d9ec08859e61bf34332ef2745": "318743a63041e017c225e2ba24d9d126",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0eb0d9b245ad9e8db1370efea620bebdccb957": "30dbdd2bd917deca87b09842e012fc75",
".git/objects/7c/acd3a92059979e1eacae839a5ca9c5823660fc": "e4d67cbbb0d0a6db77051c12a27e9bc8",
".git/objects/87/0be6b1e4b98f2c8de4548cf07407f7ec37178c": "b9b9f65be69fd6283f2766da5eb0f166",
".git/objects/87/2e537ff4455f96a36cc95e576c0a59c59162a3": "88bf828ef7afe65b0e3ec4d30cf09829",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/8a0f915ba35471a178bb378509555753f0e9bf": "75676b25276d6dd22b02fbd45ba0f4b5",
".git/objects/99/b4d542fa4805e9b02b64f25caf573cf2fe8196": "66dd05a7ecbe7eee46a26f5e8008f0fa",
".git/objects/99/e6e0b7cfd6d0b8931265fe5f85e2060151dd78": "36357152856df68ae39aa3cfa56e3395",
".git/objects/9f/dd9b80f7094fe61330abaa380d08c6e3cb1cfe": "5909e71cbc3d207e7d76693d9fa50248",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/dfd2be6d93465fbb3a8aeba1ca0911ea231fcf": "a6068dee85643513f057a9a302689c20",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/dfe464ea2011294a501f6d67a229dbd9467677": "1899089bae72bed1f0c85098cd326b7c",
".git/objects/b1/1008314c878cd898d669566ef8a41a9a80b057": "4bafe648ae3fd724596c29c547bf0ad7",
".git/objects/b2/b3a1549d8d0641f6cb6b44f29256e7ada43df7": "c866741850aa295c436d9935c0da94cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c902e98cd753bf25db5cecff4fd00edf57f89b": "bc42d594273a814e15c57ca62ba32a52",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/cdd11b132b128f26fe2d7f0f0e678acb72751a": "051dd4eaa6d071dbd0b1f709eff43f0d",
".git/objects/c3/dc564845e82d5ed6310eff5204db3131a7f1ca": "b30ae58763b8562a4eab00a1525b9921",
".git/objects/c5/18c75e1171bf1766f5c3acb3294c81acc4222f": "ff0c3694b3ddb144f0732abee82c10d3",
".git/objects/c8/5b76e7f032b0bceb04aec22979108d98105615": "5dea73dd2c3d69e7217dbf9c18d371f1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/5cae7c9e8a6f8d2a52ec1f54e7b214a1f159d2": "9dced62aecb5799b7d61bba208e09a95",
".git/objects/d5/8f9b08c5d965bcefb8117e3bef8f844b3c37b0": "033b6c239e3a37003ca215827b5fbd49",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/81bb6cf402fd15805c075161ed774bb33393e6": "715bdb2848e0ebb6c5ab37d94680daa4",
".git/objects/dc/2d82b558699417243376941467c3ad75e4ffe0": "594893e052838540e9d2e7fbcbdcaec2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/22995182baba1fe632a244e45ae0c2aa6df9fc": "7903f35a9acde3a7ce5ff1109c338f17",
".git/objects/e4/1fde67f0c2cf96d0604938a2a0fb9e812748f5": "c196e927b5ae9e7c01989d520453ac31",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/f0634a0621610ebf2a8f7565967d7cd83cc603": "24cd14e0a1319c5f59ac6861a1ea2a20",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5e64b0a8fe7025d917371b2f4b5d506b1a61c8": "8caf386b2157b0aeda63af2015bc0642",
".git/objects/ed/e4918c7c0829a52d387efca000364137267d82": "ba089cc1cedf94d0591ecbac5cbb46a7",
".git/objects/f0/98d6d9ecb8cab3ee9a7f68e92f4230a6bef2ef": "fb0d4effaa7a41b1ab5f53dc1888f256",
".git/objects/f3/2d5290e20d56a0a1b3519f25426cce5c709958": "2b69d9ced82e6504a1545a7c9c5626f2",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/refs/heads/main": "a9bbec1cf1c4d8016c98441c26293c38",
".git/refs/remotes/origin/main": "a9bbec1cf1c4d8016c98441c26293c38",
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
"index.html": "616b1dfa5b82ec9a4824dafb225b9077",
"/": "616b1dfa5b82ec9a4824dafb225b9077",
"main.dart.js": "6c2a44e66d569a9129ca7f7f1e3ea2e0",
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
