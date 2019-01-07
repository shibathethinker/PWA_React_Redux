var STATIC_CACHE='staticv2';

window.self.addEventListener('install',function(event){
event.waitUntil(caches.open(STATIC_CACHE).then(
    function(cache){
        cache.addAll(['/','/index.html']);
                }
            ))
})

window.self.addEventListener('activate',function(event){
    return this.clients.claim();
})

window.self.addEventListener('fetch',
function(event){
event.respondWith(   
caches.match(event.request).then(
    function(response){
                        if(response)
                            return response;
                        else
                            return fetch(event.request);}))
})