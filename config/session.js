const expressSession = require('express-session');
const mongoDbstore = require("connect-mongodb-session");

function createSessionStore() {
    const MongoDBStore = mongoDbstore(expressSession);

    const store = new MongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxge: 2 * 24 * 60 * 60 * 1000
        }
    };
}

module.exports = createSessionConfig;
