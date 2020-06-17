const CORE_CACHE_VERSION = 1,
    CORE_CACHE_NAME = `core-v${CORE_CACHE_VERSION}`,
    // HTML_CACHE_NAME = `core-html-v${CORE_CACHE_VERSION}`,
    CORE_ASSETS = [
        // '/offline',
        '/index.css',
        '/index.js'
    ];

self.addEventListener('install', event => {
    console.log('Installing Service Worker');
    // event.waitUntil(
    //     Promise.all([
    //         caches.open(CORE_CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)),
    //         fetchAndCache('/', HTML_CACHE_NAME)
    //     ])
    //         .then( () => self.skipWaiting())
    // );

    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
            .then(cache => cache.addAll(CORE_ASSETS))
    );
});

self.addEventListener('activate', event => {
    console.log('Activating Service Worker');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('Fetch Event: ', event.request.url);
    if (isCoreGetRequest(event.request)) {
        console.log('Core Get Request: ', event.request.url);
        // cache only strategy
        event.respondWith(
            caches.open(CORE_CACHE_NAME)
                .then(cache => cache.match(event.request.url))
        );
    }
    // } else if (isHtmlGetRequest(event.request)) {
    //     console.log('HTML Get Request: ', event.request.url);
    //     // generic fallback
    //     event.respondWith(
    //         caches.open(HTML_CACHE_NAME)
    //             .then(cache => cache.match(event.request.url))
    //             .then(response => response ? response : fetchAndCache(event.request, HTML_CACHE_NAME))
    //             .catch(err => {
    //                 return caches.open(CORE_CACHE_NAME)
    //                     .then(cache => cache.match('/offline'));
    //             })
    //     );
    // }
});

/**
 * Fetch url and add it to the cache
 *
 * @param request
 * @param cacheName
 * @returns {Promise<Response | never>}
 */
const fetchAndCache = (request, cacheName) => {
        return fetch(request)
            .then(response => {
                if (!response.ok) {
                    throw new TypeError('Bad response status');
                }

                const clone = response.clone();
                caches.open(cacheName).then((cache) => cache.put(request, clone));
                return response;
            });
    },

    /**
     * Checks if a request is a GET and HTML request
     *
     * @param {Object} request        The request object
     * @returns {Boolean}            Boolean value indicating whether the request is a GET and HTML request
     */
    isHtmlGetRequest = (request) => {
        return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
    },

    /**
     * Checks if a request is a core GET request
     *
     * @param {Object} request        The request object
     * @returns {Boolean}            Boolean value indicating whether the request is in the core mapping
     */
    isCoreGetRequest = (request) => {
        return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
    },

    /**
     * Get a pathname from a full URL by stripping off domain
     *
     * @param {Object} requestUrl        The request object, e.g. https://www.mydomain.com/index.css
     * @returns {String}                Relative url to the domain, e.g. index.css
     */
    getPathName = (requestUrl) => {
        const url = new URL(requestUrl);
        return url.pathname;
    };
