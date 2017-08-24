import React from 'react';
import Layout from '../../components/Layout';
import Orders from './Orders';

const title = 'Orders';

function action() {
  return {
    chunks: ['orders'],
    title,
    component: (
      <Layout>
        <Orders title={title} />
      </Layout>
    ),
  };
}

export default action;
