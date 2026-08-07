/**
 * Getting article from database.
 * @module api/getArticle
 */

import sqlite3 from "sqlite3";
import { open } from 'sqlite';
import path from "path";
import { asyncDatabaseRead } from "~/utils/asyncDatabase";
import type { ArticleInfo } from "~/utils/types/news";

const dbPath = process.env.DATABASE_PATH + "news.db";

/**
 * Handler of getArticle event. Entry is selected by linkPath
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {ArticleInfo} - object that contains information and content of article
 */
const getArticleEventHandler = defineEventHandler(async (event: any) => {
    const database = await open({
        filename: dbPath,
        mode: sqlite3.OPEN_READONLY,
        driver: sqlite3.Database
    });

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
            database.getDatabaseInstance(),
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
