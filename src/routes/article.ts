import * as express from 'express';
import { Result } from '../utils/result';
import { repeat } from '../utils';

const router = express.Router();

router.get('/list', (req, res) => {
  const list = repeat({
    id: Date.now(),
    title: '文章标题',
    content: '文章内容',
    created: Date.now(),
    updated: Date.now(),
    author: 'onlymisaky',
    status: ['string', 'string', 1],
  }, 20);
  res.json(
    Result.list(list, {
      page: req.query.page as unknown as number,
      size: req.query.size as unknown as number,
      total: 1000,
    }),
  );
});

router.get('/:id', (req, res) => {
  res.json(Result.ok({
    id: req.params.id,
    title: '文章标题',
    content: '文章内容',
    created: Date.now(),
    updated: Date.now(),
    author: 'onlymisaky',
    status: ['string', 'string', 1],
  }));
});

router.patch('/:id', (req, res) => {
  res.json(Result.ok({ id: req.params.id }));
});

export {
  router as articleRoute,
};
