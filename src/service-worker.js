const CORE_CACHE_VERSION = 1,
    CORE_CACHE_NAME = `core-v${CORE_CACHE_VERSION}`,
    CORE_ASSETS = [
        '/index.css',
        '/index.js'
    ];

self.addEventListener('install', event => {
    console.log('Installing Service Worker');
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
});

/**
 * Checks if a request is a core GET request
 *
 * @param {Object} request        The request object
 * @returns {Boolean}            Boolean value indicating whether the request is in the core mapping
 */
const isCoreGetRequest = (request) => {
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
