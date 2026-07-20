const CACHE_NAME = 'half-marathon-v4';
const ASSETS = [
  '/HALF-MARATHON/',
  '/HALF-MARATHON/index.html',
  '/HALF-MARATHON/manifest.json',
  '/HALF-MARATHON/icon-192.png',
  '/HALF-MARATHON/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
