// const express = require('express');
// const router = express.Router();
// const mongo = require('mongodb');
// const assert = require('assert');
//
// const url = 'mongodb://localhost:27017/test';
//
// // GET route to home Page
// router.get('/', function(req, res, next){
//   res.render('index');
// });
//
// // GET all orders submitted
// router.get('/', function(req, res, next){
//   let resultArray = [];
//   mongo.connect(url, function(err, db){
//     assert.equal(null, err);
//     let cursor = db.collection('order-data').find();
//     cursor.forEach(function(order, err){
//       assert.equal(null, err);
//       resultArray.push(order)
//     }, function (){
//       db.close();
//       res.render('index', {orders: resultArray})
//     })
//   })
// })
//
// // POST orders to DB when submitted
// router.post('/orders', function(req, res, next){
//   let order = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//   };
//   mongo.connect(url, function(err, db){
//     assert.equal(null, err);
//     db.collection('order-data').insertOne(order, function(err, result){
//       assert.equal(null, err);
//       console.log('order submitted');
//       db.close();
//     })
//   })
//   res.redirect('/');
// })
