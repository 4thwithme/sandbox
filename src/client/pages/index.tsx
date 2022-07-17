import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';

type PageProps = {};

const Home: NextPage<PageProps> = () => {
  return <Layout>Home!</Layout>;
};

export default Home;
