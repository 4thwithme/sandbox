import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { IncomingMessage } from 'http';
import { useRouter } from 'next/router';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';

import Layout from '../components/layout';
import { CLIENT_LOGIN_ROUTE } from '../consts';
import { IUser } from '../../shared/interfaces/user.interface';
import { POST } from '../utils/fetch.util';

import css from '../styles/dashboard.module.scss';

type PageProps = { user: IUser };

const Dashboard: NextPage<PageProps> = ({ user: data }): JSX.Element => {
  const router = useRouter();
  const user = JSON.parse(data);

  const onLogOutClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await POST({ pathEnd: 'auth/logout' });
      if (res.ok) router.push(CLIENT_LOGIN_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout className={css.wrapper}>
        <div>Dashboard</div>
        <div className={css.loggedInText}>Logged in as: {user.username}</div>
        <div className={css.role}>Role: {user.role}</div>
        <button className={css.logoutBtn} onClick={onLogOutClick}>
          LOG OUT
        </button>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req: { user },
}: {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
    user?: IUser;
  };
}): Promise<GetServerSidePropsResult<IUser>> => {
  if (!user) {
    return { redirect: { destination: CLIENT_LOGIN_ROUTE, permanent: false } };
  }

  return { props: { user: JSON.stringify(user) } };
};

export default Dashboard;
