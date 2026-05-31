// منصة القصبى - Service Worker v4.0
const CACHE_NAME = 'elkasaby-v4';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;
  if (e.request.method !== 'GET') return;
  if (url.startsWith('chrome-extension')) return;
  if (url.includes('counterapi.dev')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return new Response('{}', {headers: {'Content-Type': 'application/json'}});
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fetchPromise = fetch(e.request).then(function(response) {
        if (response && response.status === 200 && response.type !== 'opaque') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() {
        return cached;
      });
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('push', function(e) {
  if (!e.data) return;
  var data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || 'منصة القصبى', {
      body: data.body || 'تم إضافة مواصفة جديدة',
      icon: '/images/elkasaby_logo.png',
      badge: '/images/elkasaby_logo.png',
      dir: 'rtl',
      lang: 'ar'
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
