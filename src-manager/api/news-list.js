import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { asyncDatabaseRead } from '../utils/asyncDatabase.js';

const newsListAPI = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "../../assets/databases/news.db");

newsListAPI.get('/', async (request, response) => {
    const database = new sqlite3.Database(databasePath);
    const sqlQuery = `SELECT * FROM news ORDER BY date DESC;`;
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

export default newsListAPI;