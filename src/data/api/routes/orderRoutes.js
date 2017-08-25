const express = require('express');
const router = express.Router();
const order = require('../controllers/ordersController');


  router.get('/', function(req, res, next) {

      var testObject = {
          "AppName": "MongoPop",
          "Version": 1.0
      }
      res.json(testObject);
  });

module.exports = router;
