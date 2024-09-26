/**
 * Wrapper functions for asynchronous database operations
 * @module utils/asyncDatabase
 */

import sqlite3 from "sqlite3";

/** Callback function type for {@link asyncDatabaseRead} */
type asyncDatabaseRowsCallbackFunction = (rows: any[]) => any;
/** Callback function type for {@link asyncDatabaseWrite} */
type asyncDatabaseVoidCallbackFunction = () => any;

/**
 * Wrapper functions that perform read operations to database asynchronously
 * @template Type
 * @param {sqlite3.Database} database sqlite3 database object
 * @param {string} sqlQuery SQL query to execute
 * @param {asyncDatabaseRowsCallbackFunction} callback callback to perform further operations on each row
 * @returns {Promise<Type>} Promise for database operation
 */
const asyncDatabaseRead = <Type>(
    database: sqlite3.Database,
    sqlQuery: string,
    callback: asyncDatabaseRowsCallbackFunction
): Promise<Type> => {
    return new Promise((resolve, reject) => {
        database.all(sqlQuery, (err: any, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(callback(rows));
            }
        });
    });
};

/**
 * Wrapper functions that perform write operations to database asynchronously
 * @template Type
 * @param {sqlite3.Database} database sqlite3 database object
 * @param {string} sqlQuery SQL query to execute
 * @param {asyncDatabaseVoidCallbackFunction} callback callback to perform after the operation
 * @returns {Promise<Type>} Promise for database operation
 */
const asyncDatabaseWrite = <Type>(
    database: sqlite3.Database,
    sqlQuery: string,
    callback: asyncDatabaseVoidCallbackFunction
): Promise<Type> => {
    return new Promise((resolve, reject) => {
        database.run(sqlQuery, (err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(callback());
            }
        });
    });
};

export { asyncDatabaseRead, asyncDatabaseWrite };
export type {
    asyncDatabaseRowsCallbackFunction,
    asyncDatabaseVoidCallbackFunction,
};
