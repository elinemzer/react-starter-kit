import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

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
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.submitOrderButton = this.submitOrderButton.bind(this);
  }

  onChangeFirstName(evt) {
    this.setState({ firstName: evt.target.value });
  }
  onChangeLastName(evt) {
    this.setState({ lastName: evt.target.value });
  }
  onChangeAddress(evt) {
    this.setState({ address: evt.target.value });
  }
  onChangeZipCode(evt) {
    this.setState({ zipCode: evt.target.value });
  }
  onChangeCity(evt) {
    this.setState({ city: evt.target.value });
  }
  onChangeState(evt) {
    this.setState({ state: evt.target.value });
  }
  onChangeEmail(evt) {
    this.setState({ email: evt.target.value });
  }
  onChangePhone(evt) {
    this.setState({ phone: evt.target.value });
  }
  onChangeNotes(evt) {
    this.setState({ notes: evt.target.value });
  }

  submitOrderButton(evt) {
    evt.preventDefault();
    const bodyObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      zipCode: this.state.zipCode,
      city: this.state.city,
      state: this.state.state,
      email: this.state.email,
      phone: this.state.phone,
      notes: this.state.notes,
    };
    this.props.submitOrder(bodyObj, this.props.order.id);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Please enter your shipping information below</h1>
          <p>
            First Name:{' '}
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </p>
          <p>
            Last Name:{' '}
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </p>
          <p>
            Email:{' '}
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </p>
          <p>
            Phone:{' '}
            <input
              type="text"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </p>
          <p>
            Notes:{' '}
            <input
              type="textarea"
              value={this.state.notes}
              onChange={this.onChangeNotes}
            />
          </p>
        </div>
        <div>
          <p>
            Address:{' '}
            <input
              type="text"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </p>
          <p>
            Zip Code:{' '}
            <input
              type="text"
              value={this.state.zipCode}
              onChange={this.onChangeZipCode}
            />
          </p>
          <p>
            City:{' '}
            <input
              type="text"
              value={this.state.city}
              onChange={this.onChangeCity}
            />
          </p>
          <p>
            State:{' '}
            <input
              type="text"
              value={this.state.state}
              onChange={this.onChangeState}
            />
          </p>
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
