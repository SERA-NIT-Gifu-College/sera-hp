/**
 * Getting List of URL to the images under /public/images/gallery/
 * @module api/getGalleryImages
 */
import sqlite3 from "sqlite3";
import { open } from 'sqlite';
import type { GalleryEntry } from "~/utils/types/galleryEntry";
import { asyncDatabaseRead } from "~/utils/asyncDatabase";

const dbPath = process.env.DATABASE_PATH + "gallery.db";

/**
 * Handler of getImages event
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {Array<GalleryEntry>} list of image entry
 */
const getGalleryImagesEventHandler = defineEventHandler(async (event: any) => {
    const database = await open({
        filename: dbPath,
        mode: sqlite3.OPEN_READONLY,
        driver: sqlite3.Database
    });

    const sql = `SELECT * FROM gallery;`;

    let res: Array<GalleryEntry> = new Array<GalleryEntry>(0);

    try {
        res = await asyncDatabaseRead<Array<GalleryEntry>>(
            database.getDatabaseInstance(),
            sql,
            (rows) => {
                return rows as Array<GalleryEntry>;
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

export default getGalleryImagesEventHandler;
