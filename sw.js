const CACHE_NAME = 'half-marathon-v1';
const ASSETS = [
  '/half-marathon/',
  '/half-marathon/index.html',
  '/half-marathon/manifest.json',
  '/half-marathon/icon-192.png',
  '/half-marathon/icon-512.png'
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
