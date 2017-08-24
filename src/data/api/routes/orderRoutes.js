module.exports = function(app) {
  var order = require('../controllers/ordersController');

  // todoList Routes
  app.route('/orders')
    .get(order.list_all_orders)
    .post(order.create_a_order);

  }
