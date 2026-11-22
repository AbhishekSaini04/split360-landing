// Kill switch. The web app used to live on this domain and installed a service worker that keeps
// showing the old cached app. Browsers re-check /sw.js, get this file, and it removes itself,
// wipes the old caches and reloads open tabs so they see the landing page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) await caches.delete(key);
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
  })());
});
