import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';

import Layout from '../components/layout';

import cs from '../styles/admin.module.scss';

type PageProps = {
  title: string;
};

const Login: NextPage<PageProps> = () => {
  const onLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    console.log(e.target[0]?.value, e.target[1]?.value);

    try {
      const res = await fetch('http://localhost:7777/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: e.target[0]?.value,
          password: e.target[1]?.value,
        }),
      });

      const resss = await res.json();
      console.log(resss);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Layout>
        <form className={cs.form} onSubmit={onLogin}>
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

export default Login;
