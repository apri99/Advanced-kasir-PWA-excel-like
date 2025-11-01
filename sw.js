// sw.js (very simple cache)
const CACHE_NAME = 'kasir-adv-cache-v1';
const FILES_TO_CACHE = ['.','index.html','manifest.json'];
self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', evt => { evt.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', evt => { evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request))); });
