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
 * @example
 * interface Person {
 *     name: string;
 *     age: number;
 *     birthday: string;
 * }
 * let allRows = await asyncDatabaseRead<Array<Person>>(db, "SELECT * FROM people;", (rows) => { return rows; });
 */
const asyncDatabaseRead = async <Type>(
    database: sqlite3.Database,
    sqlQuery: string,
    callback: asyncDatabaseRowsCallbackFunction
): Promise<Type> => {
    return new Promise((resolve, reject) => {
        database.serialize(() => {
            database.all(sqlQuery, (error: Error, rows: any) => {
                if (error !== null) {
                    reject(error);
                } else {
                    resolve(callback(rows));
                }
            });
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
 * @example
 * await asyncDatabaseWrite(db, "INSERT INTO people (name, age, birthday) VALUES ('Ben', 21, '1970-1-1');", () => {});
 */
const asyncDatabaseWrite = async <Type>(
    database: sqlite3.Database,
    sqlQuery: string,
    callback: asyncDatabaseVoidCallbackFunction
): Promise<Type> => {
    return new Promise((resolve, reject) => {
        database.serialize(() => {
            database.run(sqlQuery, (error: Error) => {
                if (error !== null) {
                    reject(error);
                } else {
                    resolve(callback());
                }
            });
        });
    });
};

export { asyncDatabaseRead, asyncDatabaseWrite };
export type {
    asyncDatabaseRowsCallbackFunction,
    asyncDatabaseVoidCallbackFunction,
};
