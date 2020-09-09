var express = require('express');
var router = express.Router();
var indexCont = require("../controllers/index")

/* GET home page. */
router.get('/', indexCont.get_index);

module.exports = router;
