import express from 'express';
import { encode, decode } from './url.controller';
import validateBody from '../../middleware/validate';
import { deviceLogger } from '../../middleware/deviceLogger';

const router = express.Router();

router.route('/encode').post(validateBody('urlSchema', 'encode'), encode);
router
  .route('/decode/:alias')
  .get(deviceLogger, validateBody('urlSchema', 'decode'), decode);

export = router;
