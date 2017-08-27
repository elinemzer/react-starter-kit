import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Orders.css';
import axios from 'axios';

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount(){
    axios.get(`/orders`)
    .then(response => {
      this.setState({
        orders: response.data,
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            View All Order Details:
          </h1>
          {
            this.state.orders.map(order => {
              return (
                <div className="card card-body">
                <p><strong>Name: </strong>{order.firstName} {order.lastName}</p>
                <p><strong>Address: </strong>{order.address}</p>
                <p><strong>City: </strong>{order.city}</p>
                <p><strong>State: </strong>{order.state}</p>
                <p><strong>Zip:</strong> {order.zipCode}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Phone: </strong>{order.phone}</p>
                <p><strong>Notes: </strong>{order.notes}</p>

              </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Orders);
