import express from 'express';
import UrlRoutes from '../modules/url-shortener/url.route';
const router = express.Router();

router.use('/', UrlRoutes);

export default router;
