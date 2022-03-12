import * as dotenv from 'dotenv';
dotenv.config();

export = {
    "type": "mysql",
    "host": process.env.HOST,
    "port": process.env.PORT,
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": "icare",
    "synchronize": true,
    "logging": false,
    "entities": [
    "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};