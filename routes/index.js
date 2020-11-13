var express = require('express');
const { resp } = require('../resp');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) { 
  res.json(resp(true))
});

module.exports = router;
