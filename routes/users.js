var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.post('/', function(req, res, next) {
  userController.saveUser(req, function(err, resString){
    res.send(resString);
  })
});

module.exports = router;
