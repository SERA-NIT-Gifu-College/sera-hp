/**
 * Getting List of URL to the images under /public/images/gallery/
 * @module api/getGalleryImages
 */
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import type { GalleryEntry } from "~/utils/galleryEntry";
import { asyncDatabaseRead } from "~/utils/asyncDatabase";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handler of getImages event
 * @name getImagesEventHandler
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {Array<GalleryEntry>} list of image entry
 * @function
 */
const getGalleryImagesEventHandler = defineEventHandler(async (event: any) => {
    const database = new sqlite3.Database(
        path.join(__dirname, "../../assets/databases/gallery.db")
    );

    const sql = `SELECT * FROM gallery;`;

    let res: Array<GalleryEntry> = new Array<GalleryEntry>(0);

    try {
        res = await asyncDatabaseRead<Array<GalleryEntry>>(
            database,
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
