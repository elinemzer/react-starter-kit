const express = require('express');
const router = express.Router();
// import Order from '../models/orderModel';
const order = require('../controllers/ordersController');


module.exports = function(app) {
  var orders = require('../controllers/ordersController');

  // orders Routes
  app.route('/orders')
    .get(orders.list_all_orders)
    .post(orders.create_a_order);

  }




  // router.get('/', function(req, res, next) {
  //   Order.find(function(err, orders){
  //     if(err)
  //       res.send(err);
  //     res.json(orders);
  //   });
  // });
  //
  // router.post('/', function(req, res, next){
  //   let new_order = new Order(req.body);
  //   new_order.save(function(err, order){
  //     if (err)
  //       res.send(err)
  //     res.json(order)
  //   });
  // })

// module.exports = router;
