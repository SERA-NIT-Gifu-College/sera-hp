import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { asyncDatabaseRead, asyncDatabaseWrite } from './utils/asyncDatabase.js';

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, "../assets")));
app.use(express.static(path.join(__dirname, "../public")));

app.get('/api/news-list', async (request, response) => {
    const database = new sqlite3.Database(path.join(__dirname, "../assets/databases/news.db"));
    const sqlQuery = `SELECT * FROM news;`;
    try {
        const result = await asyncDatabaseRead(database, sqlQuery, (rows) => {
            let ret = "";
            for (const entry of rows) {
                ret = ret + "<tr>\n";
                for (const data in entry) {
                    if (data == "article" || data == "coverImagePath" || data == "linkPath") continue;
                    if (data == "entryType") {
                        ret = ret + `<td>${entry[data] == 0 ? "Article" : "Tweet"}</td>\n`;
                        continue;
                    }
                    if (data == "date") {
                        ret = ret + `<td>${new Date(entry[data]).toLocaleString()}</td>\n`;
                        continue;
                    }
                    ret = ret + `<td>${entry[data]}</td>\n`;
                }
                ret = ret + `<td>\n
                                <button class='delete-button' hx-delete='/api/news?target=${entry["date"]}'>Delete</button>\n
                                <a href='/update-news.html?target=${entry["date"]}'><button class='edit-button' hx-confirm='unset'>Edit</button></a>\n
                            </td>\n</tr>\n`;
            }
            return ret
        });
        database.close();
        response.send(result);
    } catch (err) {
        console.error(err);
        database.close();
    }
});

app.get('/api/news', async (request, response) => {
    const database = new sqlite3.Database(path.join(__dirname, "../assets/databases/news.db"));

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

app.post('/api/news', async (request, response) => {
    const database = new sqlite3.Database(path.join(__dirname, "../assets/databases/news.db"));
    
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

app.put('/api/news', async (request, response) => {
    const database = new sqlite3.Database(path.join(__dirname, "../assets/databases/news.db"));

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

app.delete('/api/news', async (request, response) => {
    const database = new sqlite3.Database(path.join(__dirname, "../assets/databases/news.db"));

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

app.listen(port, () => {
    console.log(`Manager is now listening on port ${port}`);
});
