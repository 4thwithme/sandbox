import React from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
