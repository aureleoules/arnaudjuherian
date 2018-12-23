import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import {
    setup
} from 'axios-cache-adapter'

// `async` wrapper to configure `localforage` and instantiate `axios` with `axios-cache-adapter`
async function configure() {
    // Register the custom `memoryDriver` to `localforage`
    await localforage.defineDriver(memoryDriver)

    // Create `localforage` instance
    const store = localforage.createInstance({
        // List of drivers used
        driver: [
            localforage.INDEXEDDB,
            localforage.LOCALSTORAGE,
            memoryDriver._driver
        ],
        // Prefix all storage keys to prevent conflicts
        name: 'arnaudcache'
    })

    // Create `axios` instance with pre-configured `axios-cache-adapter` using a `localforage` store
    return setup({
        // `axios` options
        baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_ENDPOINT : process.env.REACT_APP_PROD_ENDPOINT,

        // `axios-cache-adapter` options
        cache: process.env.NODE_ENV === "development" ? null : {
            maxAge: 15 * 60 * 1000, //15mins
            store // Pass `localforage` store to `axios-cache-adapter`
        },
    })
}

export default configure;