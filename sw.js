console.log("SW: I'm a Service Worker!");

//Ciclos service workers

//Chequear instalación
self.addEventListener('install', event => {
    console.log("SW: ", event);

    const install = new Promise((resolve, reject) => {
        //La instalación involucra muchas cosas, por lo que se simula la espera de recursos con el timeout
        setTimeout(() => {
            console.log("SW: Install complete!");
            self.skipWaiting();
            resolve();
        }, 500);
    });
    //Esperar a que se complete la instalación
    event.waitUntil(install);
});

self.addEventListener('fetch', event => {
    console.log("SW: ", event.request.url);
    console.log(event);

    //Chequear si la url que consulto es la de la API
    if(event.request.url.includes('https://reqres.in')){
        //Si la url incluye el dominio de la API
        const response = new Response(`{ 
            "ok": false, 
            "data": [],
            "message": "No se puede acceder a la API" 
        }`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        event.respondWith(response);
    }
});