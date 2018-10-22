module.exports = {
    development: {
        host: 'localhost', // database name
        database: 'bookmarks',
        username: 'root',
        password: 'root',
        port: 8889,
        socket: '/Applications/MAMP/tmp/mysql/mysql.sock',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'mysql'
    },
    staging: {
        url: process.env.DATABASE_URL,
        dialect: 'mysql'
    },
    test: {
        url: process.env.DATABASE_URL || '',
        dialect: 'mysql'
    }
};