import express from 'express';

import newsAPI from './news.js';
import galleryImageAPI from './gallery-image.js';

const router = express.Router();

router.use('/news', newsAPI);
router.use('/gallery-image', galleryImageAPI);

export default router;
