import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import { browserHistory } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      zipCode: '',
      city: '',
      state: '',
      email: '',
      phone: '',
      notes: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.submitOrderButton = this.submitOrderButton.bind(this);
  }

  onInputChange({ target }){
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitOrderButton(evt) {
    evt.preventDefault();
    const bodyObj = { ...this.state };
    axios.post(`/orders`, bodyObj)
    .then(result => {
      console.log('data', result)
      // browserHistory.push(`/thanks`)
    })
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Please enter your shipping information below.</h1>
          <p>
            First Name:{' '}
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            Last Name:{' '}
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            Email:{' '}
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            Phone:{' '}
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            Notes:{' '}
            <input
              name="notes"
              type="textarea"
              value={this.state.notes}
              onChange={this.onInputChange}
            />
          </p>

          <div className="row">
          <p>
            Address:{' '}
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            Zip Code:{' '}
            <input
              name="zipCode"
              type="text"
              value={this.state.zipCode}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            City:{' '}
            <input
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.onInputChange}
            />
          </p>
          <p>
            State:{' '}
            <input
              name="state"
              type="text"
              value={this.state.state}
              onChange={this.onInputChange}
            />
          </p>
        </div>
      </div>

        <div>
          <button
            className="btn btn-default"
            type="submit"
            onClick={this.submitOrderButton}
          >
            Submit Order
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
