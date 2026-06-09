const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Creates or opens the database file locally in your root directory
const db = new sqlite3.Database(path.join(__dirname, '../expense.db'), (err) => {
    if (err) {
        console.error("Database connection failed: ", err.message);
    } else {
        console.log("Connected to SQLite Database.");
    }
});

// Automatically create tables if they are missing
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            title TEXT,
            amount REAL,
            type TEXT,
            category TEXT
        )
    `);
});

module.exports = db;