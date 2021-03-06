'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bb35f2daec225096f82bdbf439dbc963",
".git/config": "3f69ca74b5b1b6d8bce7b817669a01a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "8491d9fdd42bb509b4578771fee9ac39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f6ac1219a4a9c6d73ca614c525e98e5",
".git/logs/refs/heads/master": "8f6ac1219a4a9c6d73ca614c525e98e5",
".git/logs/refs/remotes/origin/master": "f7ff7f47a97eb52975b2ecf70758f56a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/f216ba73b52209d97af87e316dfcdb381b75ca": "a315293cabcdd09278bf6ec15b4d53d3",
".git/objects/06/951fbeb64bb18079b2fefd36376ce8fd17abc2": "3bb33e6e80203de570b4b6631c10efbe",
".git/objects/07/be03bf0ff3c28e0d922d1badc7b1750eeba7c4": "58683322173515d3f3b0645f5f1ee7e6",
".git/objects/17/1c6edc47a12c802dcea44ddb66fe7e040df548": "dc3eca978efba07e531584b94478910b",
".git/objects/17/493421e224ee05687e42e4d18a9580aa5a3d13": "728c83d43f9ce94c73d93257c75ff361",
".git/objects/19/5211e70f99f74e6e266f47f9570896c903e6b8": "6a48a5f59dbf7b88bba6b1d08f6bb0a0",
".git/objects/1a/02145e23bddcc547d787c68c3dfd8e377293df": "1ab0272bc1f3b79b058b19eb62fa47ae",
".git/objects/1b/01f5ccc6061b70f914f5bbab70bb5679839ef9": "38023a08c4a26d36da219cff3e20e708",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/24/4d000771c95b2437f41752bf6108edc03d74d7": "94f57e040b103607d29309fa6b283ccb",
".git/objects/26/2182944073b23a2050542531cf2d535aa2724f": "0c0ca462d731bb390571260d46f3c8e3",
".git/objects/2f/f9b4e3d667a6ff4928af0bf3eb86c255e39fec": "3c36c7b9e1b3ba14e780252f644e53f2",
".git/objects/30/3a5606696073c1fa20d212cde61c7c06601ff1": "6181f0fee6f51bcfd011496e0b00d1d8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/6e74a1802d1dfdc66d20f197e9b7c25ffa7f8b": "9953391af5a70ea48e09d315d0d94715",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/39/6cd5dd5987d2a791a708bdcfea5f059adde01d": "2ce50a4906ba4a0dcad19c9eb8a9d1f8",
".git/objects/39/b041c79798cfb5c45df434dc584f46a69f6ded": "84c8ddc733735c7081a14d507960bd1a",
".git/objects/40/48e43035e03e8ac71187edf777f4a5c65f8128": "2fd8627b7349ce4ab091be865e03289d",
".git/objects/42/ed0b75cda2fee6cc8de16a7f776fa51eb6bab3": "f7e5595301819f9696eb27be2736119c",
".git/objects/44/457167d6679fbd290edaa0fad390af8741433f": "d8ede6df233d983c765387dedcc2a3b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/333998b80f478818fcb4ea633e6e805e2c126a": "7d4ee97389fdb2cf4ff8a15c7c4c47d1",
".git/objects/4a/348473618d388a8367154ff102f651212d2edc": "b4c0a0a2f908119f86755b5770029b8c",
".git/objects/4d/24d70e6393fafc5010dac727f142038b565707": "5d6b7495569c2f45c04a4a82011cb4aa",
".git/objects/4e/79fee4082c8966f686bfe75011f28184065010": "217cb7d8cbc308eb018a911ca009a716",
".git/objects/52/e4b51021c5adeb5de4096d3059c494cbb3f0f6": "47e93f1c44bf880807c47da99a0fcfe1",
".git/objects/59/f5405df08321198ae2929bb12a13ad350d80d6": "b71c0bd8b0d505a89c2362354da108df",
".git/objects/5c/92f5f5b3d9b6a5769a9af989e7221f4ab19312": "2b777921abe9533d694e1975622095cf",
".git/objects/66/28ffc56fba8fe88f721bbe165ff74ff7668395": "76d8703267b3f9b4c1fb2ee24c6fa43f",
".git/objects/73/ab84f86aaf6ea5be77f4b006c302c95316e3df": "b22ccbe4a588220f60442487567f9601",
".git/objects/76/f8b8fe578a9a8b43d095024ef1910d4a7d6465": "dfb463d250184956606d401e3f67ea92",
".git/objects/77/5878dc95c0655eff5f095991db1ae1a5bc612c": "075b7c515eb1adef7ea6bcd41d740519",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5006458becdf3e20566df2c346eeb68ba09bdb": "f4f1a22c299243b14f81a7e3c2d79e50",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/6c3c726829fe52ccceccac00d4b1c0e822aece": "9d5e1fb969b24801caad279b556ce061",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/f72a14e859b8538a9b5735c56a6186a41c5a5e": "3e31d7c00addc20ff9afe83e805da02c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/84447d183c4d2641dc84dfca766fc7198564d0": "9155d5f5bf5aef60870699980efc79f8",
".git/objects/a4/491d30d2d9c4c7bcf8feceba5184d7b042e797": "740033221d4cc5b176dd644d1c246303",
".git/objects/a5/b0c7296f3af21b3d9c6329c5cb7ce03a4a8902": "747bd9ad4ec4ef3e8800e489070cead6",
".git/objects/a7/8004a21b36d060362e02aa12837856850ca122": "bbe991c0df98f645ef82945c3714d992",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b1/dece375b3ef01cf1219f5abc33fb2185150b06": "9aaafdffae77d4d3facc8a8c9143d925",
".git/objects/b1/f6af8f5ed68a5b12cbf6e46b9a0b7e94156852": "178e446b3d5a1ec7a39ecb5b8405149a",
".git/objects/b3/4e55c24e3373518844747af02980ac1ac1e267": "be387a6e789c1651a183797024c125fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/c300448b2c0a5926c219bee05b4288113f0443": "3db5a797b25a89697150836145b71dc6",
".git/objects/bd/0bcea0b849563b93db7690fbf2c6b7b40d042b": "046ceef48b3eb01f4d49d66749b7b64c",
".git/objects/c4/67ed983c3da009a6029758ddd8776a8e91588d": "b2dda48229d1eb54b2203ffca6e6a403",
".git/objects/c8/2f0e9283cbb0fdbb11311263cf4fffe5caaf20": "4133a20e3994e5e6abcc421b49869f14",
".git/objects/c9/5dc65bef517a7905b20cde34a2cbc8542e1d86": "e0eb0af62671aee14b16ff97ac0cab88",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e0/f6bf50a5ab588e4cc33a8545831f23b396080e": "f9a13597e8e99ca3cc9c25a4323d145b",
".git/objects/e1/96fc9f7712cf0fc57542f49bd1905c90d0aaa1": "5293bbce238f0a7741024328f9567934",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/17f703e91d689c6596bdca5fa69e853b5a63f9": "476a1b6bdb92ff2ea37de799bb5f7c81",
".git/objects/e7/42e767f8155b87bbae625e4b26f3b7d3cdf0b3": "c843d3fd1ae316b4003cc7c7f4eaaec2",
".git/objects/e7/a8f70f38222401659f07857010d798d85ba28d": "f81aa0a20cf5c177055508e139243089",
".git/objects/ee/f7fef956fb5d799e2e591fdeb582f863b6e53b": "63db50cdf503bf50848fc57e4322b30f",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f7/425b6aeba7ac3849b675875de2ac61edeffc91": "68fe03a465ec949df42ddd553e7c87e1",
".git/objects/fa/917c13c9248883bc441b3b23478b2c06e5ffe3": "da72f143ab3adb164629cdd2607114a8",
".git/refs/heads/master": "30b128c7997de479e0b98dc3ad840f0d",
".git/refs/remotes/origin/master": "30b128c7997de479e0b98dc3ad840f0d",
"assets/AssetManifest.json": "765a594936f3a6796c177c49fe81174d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/img/logo.png": "3f1218cb16043549b24e7a2f97f024b0",
"assets/NOTICES": "1567114cc2d551a6792083890721a7fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "c163c42943e34e61ec796b49994f5126",
"icons/Icon-192.png": "1605ff51eb65c48c02854179c35eaa3b",
"icons/Icon-512.png": "be51fce2db6b69ed55592c17e556642d",
"index.html": "08fee675e785027827df411e9cc5e608",
"/": "08fee675e785027827df411e9cc5e608",
"main.dart.js": "ce864e3def94fac913b8f46c9b9229d4",
"manifest.json": "db95b9c9a6d40c95072485f1f859906f",
"version.json": "3f998300d6dd0f2481782f6d91c2e83c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
