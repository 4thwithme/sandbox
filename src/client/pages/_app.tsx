import React from 'react';
import { NextPage } from 'next/types';
import type { AppProps } from 'next/app';

import '../styles/reset.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
