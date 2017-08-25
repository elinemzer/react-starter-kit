import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Thanks.css';

class Thanks extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            Thank You for Placing an Order with Snappy Gifts!
          </h1>
        </div>
      </div>
    );
  }
  }

export default withStyles(s)(Thanks);
