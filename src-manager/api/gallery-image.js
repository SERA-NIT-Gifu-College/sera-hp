/** @module api/gallery-image */
import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { asyncDatabaseRead, asyncDatabaseWrite } from '../utils/asyncDatabase.js';
import { wrapInTable } from '../utils/tableWrapper.js';

const galleryImageAPI = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "../../assets/databases/gallery.db");

function generateActionButtons(target) {
    return `<button class='delete-button' hx-delete='/api/gallery-image?target=${target}'>Delete</button><a href='/update-gallery-image.html?target=${target}'><button class='edit-button' hx-confirm='unset'>Edit</button></a>`;
}

/**
 * Gets list of gallery image entries in HTML table body tr+td
 * @param {Object} request
 * @param {Object} response
 * @returns {string} HTML table body tr+td
 * @example
 * $ curl -X GET http://localhost:3001/api/gallery-image/list
 * // <tr>
 * //     <td>1</td>
 * //     <td>/image/test.png</td>
 * //     ...
 * // </tr>
 * // ...
 */
const getGalleryImageList = async (request, response) => {
    const database = new sqlite3.Database(databasePath);
    const sqlQuery = "SELECT * FROM gallery";

    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => {
            let ret = "";
            let rowsCopy = [...rows];
            const withActionButtons = rowsCopy.map((entry) => {
                return { ...entry, buttons: generateActionButtons(entry.id) };
            });
            ret = wrapInTable(withActionButtons);
            return ret;
        });

        database.close()
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
        response.status(500).send(err);
    }
};
galleryImageAPI.get('/list',getGalleryImageList);

/**
 * Gets list of gallery image entries in Unformatted JSON string
 * @param {Object} request
 * @param {Object} response
 * @returns {string} Unformatted JSON string that contains gallery image entries
 * @example
 * $ curl -X GET \
 *       http://localhost:3001/api/gallery-image/list-unwrapped
 * // gets raw JSON containing gallery image entries
 */
const getGalleryImageListUnwrapped = async (request, response) => {
    const database = new sqlite3.Database(databasePath);
    const sqlQuery = "SELECT * FROM gallery";

    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => { return rows; });

        database.close();
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
        response.status(500).send(err);
    }
};
galleryImageAPI.get('/list-unwrapped', getGalleryImageListUnwrapped);

/**
 * Get a gallery image information
 * @param {Object} request
 * @param {number} request.query.target - ID to specify gallery image entry
 * @param {Object} response
 * @returns {JSON} JSON that contains information about gallery image
 * @example
 * $ curl -X GET http://localhost:3001/api/gallery-image?target=1
 * // gets gallery image information with ID of 1
 */
const getGalleryImage = async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.query.target);

    if (isNaN(target)) {
        response.status(500).send("Query is not number");
        return;
    }

    const sqlQuery = `SELECT * FROM gallery WHERE id = ${target}`;

    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => {return rows[0]});
        database.close();
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
        response.status(500).send(err);
    }
};
galleryImageAPI.get('/', getGalleryImage);

/**
 * Posts gallery image
 * @param {Object} request
 * @param {string} request.body.imagePath - URL path to image
 * @param {string} request.body.caption - Caption of image
 * @param {Object} response
 * @returns Result is logged into console
 * @example
 * $ curl -X POST \
 *       -H 'Content-Type: application/x-www-form-urlencoded' \
 *       --data-raw 'imagePath=/images/launch.png&caption=Launch of our new rocket' \
 *       http://localhost:3001/api/gallery-image/
 * // Posts gallery image with given information
 */
const postGalleryImage = async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const imagePath = request.body.imagePath;
    const caption = request.body.caption;

    const sqlQuery = `INSERT INTO gallery (imagePath, caption) VALUES ("${imagePath}", "${caption}");`;

    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("Image added successfully.");
        });
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }

    database.close();
    response.end();
};
galleryImageAPI.post('/', postGalleryImage);

/**
 * Updates gallery image
 * @param {Object} request
 * @param {number} request.body.target - ID to specify gallery image entry
 * @param {string} request.body.imagePath - URL path to image
 * @param {string} request.body.caption - Caption of image
 * @param {Object} response
 * @returns Result is logged into console
 * @example
 * $ curl -X PUT \
 *       -H 'Content-Type: application/x-www-form-urlencoded' \
 *       --data-raw 'imagePath=/images/launch.png&caption=Launch of our new rocket' \
 *       http://localhost:3001/api/gallery-image/
 * // Updates gallery image with given information
 */
const putGalleryImage = async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.body.target);

    if (isNaN(target)) {
        response.status(500).send("Query is not number");
        return;
    }

    const imagePath = request.body.imagePath;
    const caption = request.body.caption;

    const sqlQuery = `UPDATE gallery SET imagePath = "${imagePath}", caption = "${caption}" WHERE id = ${target};`;

    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("Image updated successfully.");
        });
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }

    database.close();
    response.end();
};
galleryImageAPI.put('/', putGalleryImage);

/**
 * Deletes specified gallery image
 * @param {Object} request
 * @param {string} request.query.target - ID to specify gallery image entry
 * @param {Object} response
 * @returns Result is logged into console
 * @example
 * $ curl -X DELETE \
 *       http://localhost:3001/api/gallery-image?target=1
 * // Deletes gallery image with ID of 1
 */
const deleteGalleryImage = async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.query.target);

    if (isNaN(target)) {
        response.status(404).send('No Entry Found!');
        return;
    }

    const sqlQuery = `DELETE FROM gallery WHERE id = ${target};`;

    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("Image deleted successfully.");
        });
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }

    database.close();
    response.status(200).send();
};
galleryImageAPI.delete('/', deleteGalleryImage);

export default galleryImageAPI;
