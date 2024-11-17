/**
 * Getting article from database.
 * @module api/getArticle
 */

import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { asyncDatabaseRead } from "~/utils/asyncDatabase";
import type { ArticleInfo } from "~/utils/news";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handler of getArticle event. Entry is selected by linkPath
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {ArticleInfo} - object that contains information and content of article
 */
const getArticleEventHandler = defineEventHandler(async (event: any) => {
    const database = new sqlite3.Database(
        path.join(__dirname, "../../assets/databases/news.db")
    );

    let res: ArticleInfo = {
        date: 0,
        cardContent: "",
        article: "",
        linkPath: "",
        coverImagePath: "",
    };

    const target = "/news/" + getQuery(event).name;
    const sql = `SELECT date, cardContent, article, linkPath, coverImagePath FROM news WHERE linkPath = "${target}" AND entryType = 0;`;

    try {
        const entry: ArticleInfo = await asyncDatabaseRead<ArticleInfo>(
            database,
            sql,
            (rows) => {
                return rows[0] as ArticleInfo;
            }
        );
        res = {
            date: entry.date,
            cardContent: entry.cardContent,
            article: entry.article,
            linkPath: entry.linkPath,
            coverImagePath: entry.coverImagePath,
        };
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

export default getArticleEventHandler;
