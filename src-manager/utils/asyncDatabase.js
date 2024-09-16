import sqlite3 from 'sqlite3';

/**
 * @param database
 * @param sqlQuery
 * @param callback - (rows) => {}
 * @returns - Promise for database operation
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
 * @param database
 * @param sqlQuery
 * @param callback - () => {}
 * @returns - Promise for database operation
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