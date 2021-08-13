import * as express from 'express';
import { Result } from '../utils/result';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Result.ok({
    permissions: [
      'article:view',
      'article:add',
      'article:edit',
    ],
    id: 2379,
    name: 'Onlymisaky',
    nickname: '朱士奇',
    phone: '15052745277',
    email: 'onlymisaky@xingren.com',
    channelIds: [],
    isBinding: true,
    bindStatus: true,
  }));
});

export {
  router as userRoute,
};
