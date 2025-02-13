'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "5fcd651fbb8225508832d2b3a6e25e5d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bdce291f0f085a389b834c49e568a194",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2db3b47c4f44c7b81dc0d629dd13df1c",
".git/logs/refs/heads/main": "0084c775cbc5a94d9bb5621e125559a7",
".git/logs/refs/remotes/origin/main": "59a2a7af37247a1be4a9caf27f02bb3f",
".git/objects/03/98dede6fe010de8b4d5210536a3901bb42a8d1": "9ca242f4bfe62ce04d5d8da9e166d776",
".git/objects/03/edd02521298bcc73c3721d0b1a8a200c6864b8": "2cf2794e3394a43a21147a06b36dad20",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/0b/7bce7bc17b29b91985e176b63fe7d289beae76": "5002572af7fde86c72065598e9fe910f",
".git/objects/0e/831fe7c978c0ca302419de0c60b59f2cdae84b": "05091c7d059594f25214c77fd585035c",
".git/objects/1e/8b785770dd7f5ff5ff989d3cde9c326a012a95": "a55b0a4c9b42822d794599528cb3484c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/087b38299566486dab635bbe73fef0a6d15371": "05ce90e325a84cae3101909b0510f0bd",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/508eb3ce99834800a1b4999ebf8eac52e72614": "d4cf7368ffc5e7a8aaedcf6a51a14fda",
".git/objects/5f/840b841b6024e2079a531ad5af87bd51fd5d32": "74a65c240d8469dabe5bbb41f1e0434a",
".git/objects/60/25252d0627c72982fa7b6b7fbe9d288ce37d85": "472ddff55da7cf81a5d80aa0398c39db",
".git/objects/61/d804fd32a648e134cfeb81bda667bc6d9f634e": "9381f2d19fec1343149681b0a950ddc6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/854a00cf47b25f19ad3547459271d2923d05fc": "49b1a91d8260dee309616edba6d00f9a",
".git/objects/71/22212104c85c7e8eb844eeb93963079e9f7de9": "60ec3184d6308037a039e2137600e564",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ecade6d15b485343ec68f351ce4c4d6e2605cd": "1f1dbfe9974a33ad41f76a7755d922f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d99660b5d9dcda3893855d1b847abc5e876d64": "b62f0989b4cee2bfa46187002d1b6c96",
".git/objects/8c/724fc65f257841a750172078984e8150a548c8": "72bb65381e0f0972df1e9190a99dd0d0",
".git/objects/8e/1122cc9ab291cb893061dcb6f1cf8510b5f597": "5462887dc039230f23b31f611a89a7a2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/cffe1bc10bfaafbd30002843a56ea2267de68a": "7190df84d348353205fe6b9531d844a3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/96655c16025dd68edd1cf30a9fac81f8de23e9": "2ae0d02ada74af7d5ccb659b9c40abe0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c6732c5540549ec8a04ef8014b4013fa8b368c": "de012358dddbdd2caac540020394c32c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cb/f32c82c4a6eb3ba6416f5b1cfd61f41be006ef": "bc06752fe0afaf77d457b8ca2aaa60bc",
".git/objects/cc/2f197cf77033bf66929bbdfd7f10dca263073f": "09f676ade92e8b98a1c5193791e5d083",
".git/objects/ce/ada2360660ff6b2f1c0cb49ace8653b50ee641": "6457bf39292542a630351f1e9c843b36",
".git/objects/cf/c3a855e8275ee3bd3d207bd9323ec0df20e21a": "bf6859f644d68fb025b49e84d372812b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/c31db1ca890ddce436ed0c4803b8a2ebb463e7": "bc03b3cc7bbbcb75e75ede889b937fa2",
".git/objects/e3/b8b8344891bf8b7fceba4bbbc30dee96a91ed9": "c4fe303a4fdeceec7c562bce2cd56ecf",
".git/objects/e3/db3d088a114ceb84d871945cd63b6fd029d4ed": "7ad6d102c88ca9c7e0ab0d2fca78d9b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/06bc8214ed5d4d17c0f6ae42f01eb88f8693dd": "5f06e2d718eb7018aaed7171b0ca2898",
".git/objects/f0/6a692b22480932cb306d5195b84c72e1ae0ccb": "06cbd5923cde0a8e57d2a06200e8010a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/6dc832560ef09b337c285a719a4f888701c1ef": "1dd7fb1f194b8907c0f1f0053df8afa1",
".git/refs/heads/main": "04310c1921b15bce082893588aa6eba8",
".git/refs/remotes/origin/main": "04310c1921b15bce082893588aa6eba8",
"assets/AssetManifest.bin": "a26c26bd96f1a17c7daf91d3f0e449a6",
"assets/AssetManifest.bin.json": "05f42ef4af2369ac868efb418c2798ea",
"assets/AssetManifest.json": "b7079fb80b4d699d388e2c946a13621a",
"assets/assets/catkiss.gif": "79a579efdbe5fcbca3f41c431120594f",
"assets/assets/nailong.png": "79b6cc7ae94fb64a7b057adae2cce91b",
"assets/assets/nailongblush.png": "1c8625a537edb5084701be7ecefc208a",
"assets/assets/nailongcape.png": "af0591e99b70cf71c6badb2121835d7e",
"assets/assets/nailongcry.png": "48e95820d009d276ed0a425139b9fa78",
"assets/assets/nailongkaget.png": "63e44f7f2080dcb38710949bec9cca89",
"assets/assets/nailongmad.png": "2dbcbb17d0e3e9ed5da142a11cb83d97",
"assets/assets/nailongpasrah.png": "1340b921f30d727feba350adbf375f7d",
"assets/assets/nailongpout.png": "b9d3de423ca133870f311ada07d1ed85",
"assets/assets/nailongrose.gif": "f972832924e2001e89dde885d993b20e",
"assets/assets/nailongsmile.png": "cdfb91760e6c596ea1c9002850caf3ba",
"assets/assets/nailongsmirk.png": "f0fd0f647e87f1a0beea065a5c075982",
"assets/assets/naisongong.png": "b1fc798a71e744a8077e55f94b44d20e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e84b52ec7025bf60a9fd0543fd5d8552",
"assets/NOTICES": "7e9a2467609d707ed48d32f459bfae16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "024d9dca1bdbe76ee7378c9798e74e35",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "96e262288d71c294fc72f7cd3d13bbc0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be39e2a9af77202b0cccff81032be0c0",
"/": "be39e2a9af77202b0cccff81032be0c0",
"main.dart.js": "0fe858bc04761fa64e89a55642de4761",
"manifest.json": "d011b8b336e49df994580d1ac7de0ebb",
"version.json": "d40cc3069b184fe4e8f356d181c9f745"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
