import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './api/index.js';

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, "../assets")));
app.use(express.static(path.join(__dirname, "../public")));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Manager is now listening on port ${port}`);
});
