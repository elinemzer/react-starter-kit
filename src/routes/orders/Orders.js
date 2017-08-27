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
                <p>Name: {order.firstName} {order.lastName}</p>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Orders);
