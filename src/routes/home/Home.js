import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import history from '../../history';
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
      history.push(`/thanks`)
    })
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Please enter your shipping information below.</h1>

          <form className="form-horizontal">
          <div className="form-group">
            First Name:{' '}
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Last Name:{' '}
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Address:{' '}
            <input
              className="col-md-4ß"
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Zip Code:{' '}
            <input
              name="zipCode"
              type="text"
              value={this.state.zipCode}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            City:{' '}
            <input
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            State:{' '}
            <input
              name="state"
              type="text"
              value={this.state.state}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Email:{' '}
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Phone:{' '}
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            Notes:{' '}
            <textarea
              className="col-md-6"
              name="notes"
              type="textarea"
              value={this.state.notes}
              onChange={this.onInputChange}
            />
          </div>
        </form>

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

      </div>
    );
  }
}

export default withStyles(s)(Home);
