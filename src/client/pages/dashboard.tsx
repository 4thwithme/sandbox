import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';

import Layout from '../components/layout';

type PageProps = {
  title: string;
};

const Dashboard: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>Dashboard</Layout>;
    </>
  );
};

export default Dashboard;
