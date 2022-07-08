import React from 'react';
import type { AppProps } from 'next/app';
import { NextPage, NextPageContext } from 'next/types';

type PageProps = {
  title: string;
};

type PageContext = NextPageContext & {
  query: PageProps;
};

const Adminka: NextPage<PageProps> = ({ title }) => {
  return <div>{title}</div>;
};

Adminka.getInitialProps = ({ query }: PageContext): PageProps => {
  return {
    title: query.title,
  };
};

export default Adminka;
