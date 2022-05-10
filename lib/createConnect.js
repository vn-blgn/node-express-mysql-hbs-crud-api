exports.createConnect = () => {
    const mysql = require('mysql2/promise');
    const pool = mysql.createPool({
        connectionLimit: 5,
        host: "localhost",
        user: "root",
        database: process.env.DATABASE,
        password: process.env.PASSWORD
    });
    return pool;
};