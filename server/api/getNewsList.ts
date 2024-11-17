/**
 * Getting list of articles from database.
 * @module api/getArticleList
 */

import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { asyncDatabaseRead } from "~/utils/asyncDatabase";
import type { NewsEntry } from "~/utils/news";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handler of getArticleList event
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {Array<NewsEntry>} list of news
 */
const getArticleListEventHandler = defineEventHandler(async (event: any) => {
    const database = new sqlite3.Database(
        path.join(__dirname, "../../assets/databases/news.db")
    );
    const sql = `SELECT date, entryType, cardContent, linkPath, coverImagePath FROM news ORDER BY date DESC;`;

    let res: Array<NewsEntry> = new Array<NewsEntry>(0);

    try {
        res = await asyncDatabaseRead<Array<NewsEntry>>(
            database,
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
