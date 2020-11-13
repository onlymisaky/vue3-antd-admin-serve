var express = require('express');
const { resp } = require('../resp');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(resp({
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
  }))
});

module.exports = router;
