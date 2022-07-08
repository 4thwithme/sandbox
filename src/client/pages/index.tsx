import React from 'react';
import { NextPage, NextPageContext } from 'next';

type PageProps = {
  title: string;
};

type PageContext = NextPageContext & {
  query: PageProps;
};

const Home: NextPage<PageProps> = ({ title }) => {
  return <div>Home, {title}</div>;
};

Home.getInitialProps = ({ query }: PageContext): PageProps => {
  return {
    title: query.title,
  };
};

export default Home;
