import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { asyncDatabaseRead, asyncDatabaseWrite } from '../utils/asyncDatabase.js';

const newsAPI = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "../../assets/databases/news.db");

newsAPI.get('/', async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.query.target);

    if (isNaN(target)) {
        response.status(500).send("Query is not number");
        return;
    }

    const sqlQuery = `SELECT * FROM news WHERE date = ${target}`;

    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => {return rows[0]});
        database.close();
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
    }
});

newsAPI.post('/', async (request, response) => {
    const database = new sqlite3.Database(databasePath);
    
    const currentDate = new Date();
    const currentUnixTime = currentDate.valueOf();
    const entryType = request.body.entryType;
    const cardContent = request.body.cardContent;
    const article = request.body.article;
    const linkPath = entryType == 0 ? `/news/${request.body.linkPath}` : "";
    const coverImagePath = request.body.coverImagePath;
    
    const sqlQuery = `INSERT INTO news (date, entryType, cardContent, article, linkPath, coverImagePath) VALUES (${currentUnixTime}, ${entryType}, "${cardContent}", "${article}", "${linkPath}", "${coverImagePath}");`;
    
    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("News added successfully.");
        });
    } catch (err) {
        response.status(500).send(err);
    }
    database.close();
    response.end();
});

newsAPI.put('/', async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.body.target);
    const entryType = Number(request.body.entryType);
    const cardContent = request.body.cardContent;
    const article = request.body.article;
    const linkPath = entryType == 0 ? `/news/${request.body.linkPath}` : "";
    const coverImagePath = request.body.coverImagePath;

    if (isNaN(target)) {
        response.status(500).send('Target is not number');
        return;
    }

    const sqlQuery = `UPDATE news SET entryType = ${entryType}, cardContent = "${cardContent}", article = "${article}", linkPath = "${linkPath}", coverImagePath = "${coverImagePath}" WHERE date = ${target};`;

    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("News updated successfully.");
        });
    } catch (err) {
        response.status(500).send(err);
    }

    database.close();
    response.end();
});

newsAPI.delete('/', async (request, response) => {
    const database = new sqlite3.Database(databasePath);

    const target = Number(request.query.target);

    if (isNaN(target)) {
        response.status(404).send('No Entry Found!');
        return;
    }

    const sqlQuery = `DELETE FROM news WHERE date = ${target}`;

    try {
        await asyncDatabaseWrite(database, sqlQuery, () => {
            console.log("News deleted successfully.");
        });
    } catch (err) {
        response.status(500).send(err);
    }

    database.close();

    response.status(200).send();
});

export default newsAPI;