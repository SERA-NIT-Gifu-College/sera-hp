/**
 * @module utils/asyncDatabase
 */
import sqlite3 from 'sqlite3';

/**
 * @param {sqlite3.Database} database
 * @param {string} sqlQuery
 * @param {function} callback - function (rows)
 * @returns {Promise<any>} Promise for database operation
 * @example
 * const result = await asyncDatabaseRead(userDatabase, `SELECT * FROM users`, (rows) => {
 *     return wrapInTable(rows);
 * });
 */
const asyncDatabaseRead = (database, sqlQuery, callback) => {
    return new Promise((resolve, reject) => {
        database.serialize(() => {
            database.all(sqlQuery, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(callback(rows));
                }
            });
        });
    });
};

/**
 * @param {sqlite3.Database} database
 * @param {string} sqlQuery
 * @param {function} callback - function ()
 * @returns {Promise<any>} Promise for database operation
 * @example
 * let sqlQuery = `INSERT INTO users (id, name, age) VALUES (${genID()}, "${userName}", "${userAge}");`;
 * await asyncDatabaseWrite(userDatabase, sqlQuery, () => {
 *     console.log("Added User ", userName);
 * });
 */
const asyncDatabaseWrite = (database, sqlQuery, callback) => {
    return new Promise((resolve, reject) => {
        database.serialize(() => {
            database.run(sqlQuery, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(callback(rows));
                }
            });
        });
    });
};

export { asyncDatabaseRead, asyncDatabaseWrite };
