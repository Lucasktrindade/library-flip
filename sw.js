var cacheName = 'flip-v1';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './index.html',
        './dist/style.css',
        './dist/build.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.open(cacheName).then(function (cache) {
      return cache.match(e.request).then(function (matching) {
        return matching || Promise.reject('no-match');
      });
    })
  );
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
     return fetch(e.request).then(function (response) {
       return cache.put(e.request, response);
     });
   })
 );
});
