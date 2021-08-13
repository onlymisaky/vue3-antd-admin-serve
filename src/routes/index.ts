import * as express from 'express';
import { Result } from '../utils/result';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Result.ok());
});

export {
  router as indexRoute,
};
