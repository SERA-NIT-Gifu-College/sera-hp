/**
 * Getting list of articles from database.
 * @module api/getArticleList
 */

import sqlite3 from "sqlite3";
import { open } from 'sqlite';
import { asyncDatabaseRead } from "~/utils/asyncDatabase";
import type { NewsEntry } from "~/utils/types/news";

const dbPath = process.env.DATABASE_PATH + "news.db";

/**
 * Handler of getArticleList event
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {Array<NewsEntry>} list of news
 */
const getArticleListEventHandler = defineEventHandler(async (event: any) => {
    const database = await open({
        filename: dbPath,
        mode: sqlite3.OPEN_READONLY,
        driver: sqlite3.Database
    });

    const sql = `SELECT date, entryType, cardContent, linkPath, coverImagePath FROM news ORDER BY date DESC;`;

    let res: Array<NewsEntry> = new Array<NewsEntry>(0);

    try {
        res = await asyncDatabaseRead<Array<NewsEntry>>(
            database.getDatabaseInstance(),
            sql,
            (rows) => {
                return rows as Array<NewsEntry>;
            }
        );
    } catch (err: any) {
        const error = err as Error;
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        });
    }

    database.close();

    return res;
});

export default getArticleListEventHandler;
