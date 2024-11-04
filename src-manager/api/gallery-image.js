import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { asyncDatabaseRead, asyncDatabaseWrite } from '../utils/asyncDatabase.js';

const galleryImageAPI = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "../../assets/databases/gallery.db");

galleryImageAPI.get('/list', async (request, response) => {
    const database = new sqlite3.Database(databasePath);
    const sqlQuery = "SELECT * FROM gallery";

    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => {
            let ret = "";
            for (const entry of rows) {
                ret = ret + "<tr>\n";
                for (const data in entry) {
                    ret = ret + `\t<td>${entry[data]}</td>\n`;
                }
                ret = ret + `\t<td>\n\t\t<button class='delete-button' hx-delete='/api/gallery-image?target=${entry["id"]}'>Delete</button>\n\t\t<a href='/update-gallery-image.html?target=${entry["id"]}'><button class='edit-button' hx-confirm='unset'>Edit</button></a>\n\t</td>\n</tr>\n`;
            }
            return ret;
        });

        database.close()
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
        response.status(500).send(err);
    }
});

galleryImageAPI.get('/list-unwrapped', async (request, response) => {
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
});

galleryImageAPI.get('/', async (request, response) => {
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
});

galleryImageAPI.post('/', async (request, response) => {
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
});

galleryImageAPI.put('/', async (request, response) => {
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
});

galleryImageAPI.delete('/', async (request, response) => {
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
});

export default galleryImageAPI;
