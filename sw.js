const C='hb-v45',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
const fonts=u=>/fonts\.(googleapis|gstatic)\.com$/.test(new URL(u).hostname);
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);const same=u.origin===location.origin;if(!same&&!fonts(r.url))return;
const store=res=>{if(res&&(res.ok||res.type==='opaque')){const k=res.clone();caches.open(C).then(c=>c.put(r,k))}return res};
if(r.mode==='navigate'){e.respondWith((async()=>{const cached=await caches.match('./index.html');const net=fetch(r).then(res=>{if(res.ok){caches.open(C).then(c=>c.put('./index.html',res.clone()))}return res});if(cached){e.waitUntil(net.catch(()=>{}));return cached}return net.catch(()=>new Response('Offline',{status:503,headers:{'Content-Type':'text/plain'}}))})());return}
e.respondWith(caches.match(r).then(m=>{const n=fetch(r).then(store).catch(()=>m);return m||n}))});
