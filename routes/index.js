var express = require('express');
var router = express.Router();
const path = require('path')


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('index.html', {
  //     root: path.join(__dirname, '../')  
  // }) 
  res.render("index"); 
});

module.exports = router;
