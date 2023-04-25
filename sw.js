console.log("SW: I'm a Service Worker!");

self.addEventListener('fetch', event => {
    console.log("SW: ", event.request.url);
    console.log(event);
});