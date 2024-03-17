module.exports = {
    port: process.env.PORT,
    db: {
        serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        storageBucket: process.env.STORAGE_BUCKET,

    },

    authentication: {
        JWT_SECRET: process.env.JWT_SECRET
    },

    // CORS whitelists
    corsAllowedOptions: [
        process.env.CORS_WHITELIST_1,
        process.env.CORS_WHITELIST_2
    ]
}