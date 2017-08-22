const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';

//GET route to home Page
router.get('/', function(req, res, next){
  res.render('index');
});

//GET all orders submitted
router.get('/orders', function(req, res, next){
  let resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    let cursor = db.collection('order-data').find();
    cursor.forEach(function(order, err){
      assert.equal(null, err);
      resultArray.push(order)
    }, function (){
      db.close();
      res.render('index', {orders: resultArray})
    })
  })
})
