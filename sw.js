/*
 * Offline support: the point of this site is studying on a phone, which means
 * studying on a train, in a basement, and at a hamfest with no signal.
 *
 * Strategy is deliberately simple because the site is fully static:
 *   - navigations: network first, fall back to cache, then to the offline page
 *   - everything else: stale-while-revalidate
 *
 * Bump CACHE_VERSION whenever the staged data format changes; old caches are
 * dropped on activate.
 */

const CACHE_VERSION = 'radiocert-v2';

// The worker is served from the site root, whatever that root is: `/` on the
// tailnet, `/radiocert/` on GitHub Pages. Its own registration scope is the
// authoritative answer, so nothing here needs to be templated at build time.
const BASE = new URL(self.registration.scope).pathname.replace(/\/+$/, '');
const path = (p) => `${BASE}${p}`;

const OFFLINE_URL = path('/offline/');

const PRECACHE = [
  path('/'),
  path('/tracks/'),
  path('/glossary/'),
  path('/practice/'),
  OFFLINE_URL,
  path('/manifest.webmanifest'),
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) ?? (await caches.match(OFFLINE_URL)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached ?? network;
    })
  );
});
