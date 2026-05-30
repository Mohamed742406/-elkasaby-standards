// منصة القصبى - Service Worker v3.0
const CACHE_NAME = 'elkasaby-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/elkasaby_logo.png',
  'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'
];

// Install
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {mode: 'no-cors'})));
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate
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

// Fetch
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

  if (url.endsWith('.pdf')) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        return fetch(e.request).then(function(response) {
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
          }
          return response;
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fetchPromise = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() {
        if (cached) return cached;
        if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
          return caches.match('/index.html');
        }
      });
      return cached || fetchPromise;
    })
  );
});

// Push Notifications
self.addEventListener('push', function(e) {
  if (!e.data) return;
  var data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || 'منصة القصبى', {
      body: data.body || 'تم إضافة مواصفة جديدة',
      icon: '/images/elkasaby_logo.png',
      badge: '/images/elkasaby_logo.png',
      dir: 'rtl',
      lang: 'ar',
      vibrate: [100, 50, 100],
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/'));
});
