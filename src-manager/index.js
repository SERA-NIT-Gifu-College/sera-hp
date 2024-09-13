const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const app = express();
const port = 3001;
//const db = new sqlite3.Database("../assets/databases/news.db");

app.use(express.static('pages'));
app.use(express.static(path.join(__dirname, "../assets")));
app.use(express.static(path.join(__dirname, "../public")));

app.get('/api/hello', (req, res) => {
    res.send('<li>Hello World!</li>');
});

app.listen(port, () => {
    console.log(`Manager is now listening on port ${port}`);
});
