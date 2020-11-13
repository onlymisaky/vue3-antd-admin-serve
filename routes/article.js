var express = require('express');
const { resp } = require('../resp');
var router = express.Router();

router.get('/:id', function (req, res, next) {
  res.json(resp({
    id: req.params.id,
    title: '文章标题',
    content: '文章内容',
    created: Date.now(),
    updated: Date.now(),
    author: 'onlymisaky',
    status: ['string', 'string', 1]
  }))
});

router.post('/', function (req, res, next) {
  res.json(resp({ id: req.params.id }))
});

router.patch('/:id', function (req, res, next) {
  res.json(resp({ id: req.params.id }))
});

module.exports = router;
