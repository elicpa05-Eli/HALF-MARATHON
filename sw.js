const CACHE_NAME = 'half-marathon-v1';
const ASSETS = [
  '/HALF-MARATHON/',
  '/HALF-MARATHON/index.html',
  '/HALF-MARATHON/manifest.json',
  '/HALF-MARATHON/icon-192.png',
  '/HALF-MARATHON/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
