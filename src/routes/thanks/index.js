import React from 'react';
import Layout from '../../components/Layout';
import Thanks from './Thanks';

const title = 'Thanks';

function action() {
  return {
    chunks: ['thanks'],
    title,
    component: (
      <Layout>
        <Thanks title={title} />
      </Layout>
    ),
  };
}

export default action;
