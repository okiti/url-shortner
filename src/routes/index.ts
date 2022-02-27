import express from 'express';

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/', (req, res, next) => {
  res.send('Antantica is freezing. ..🥶 ...');
});

export default router;
