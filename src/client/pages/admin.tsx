import React from 'react';
import Head from 'next/head';
import { NextPage, NextPageContext } from 'next/types';

import Layout from '../components/layout';

import cs from '../styles/admin.module.scss';

type PageProps = {
  title: string;
};

const AdminLogin: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>
        <form action="#" className={cs.form}>
          <input type="text" className={cs.username} placeholder="username" />
          <input
            type="password"
            className={cs.password}
            placeholder="password"
          />

          <button className={cs.loginBtn}>LOG IN</button>
        </form>
      </Layout>
      ;
    </>
  );
};

export default AdminLogin;
