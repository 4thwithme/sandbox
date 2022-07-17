import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { GetServerSideProps } from 'next';

import Layout from '../components/layout';
import { CLIENT_DASHBOARD_ROUTE } from '../consts';
import { POST } from '../utils/fetch.util';

import cs from '../styles/admin.module.scss';

type PageProps = {};

const Login: NextPage<PageProps> = (): JSX.Element => {
  const router = useRouter();

  const onLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const res = await POST({
        pathEnd: 'auth/login',
        body: JSON.stringify({
          username: e.target[0]?.value,
          password: e.target[1]?.value,
        }),
      });

      if (res.ok) router.push(CLIENT_DASHBOARD_ROUTE);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Layout>
        <form className={cs.form} onSubmit={onLogin}>
          <input
            type="text"
            className={cs.username}
            placeholder="username"
            id="username"
            autoComplete="off"
          />
          <input
            type="password"
            className={cs.password}
            id="password"
            placeholder="password"
            autoComplete="new-password"
          />

          <button className={cs.loginBtn}>LOG IN</button>
        </form>
      </Layout>
      ;
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async ({ req }) => {
  const user = (req as any).user;

  if (user) {
    return {
      redirect: {
        destination: CLIENT_DASHBOARD_ROUTE,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;
