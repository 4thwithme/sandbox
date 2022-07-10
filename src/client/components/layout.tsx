import React, { ReactNode } from 'react';
import { NextPage } from 'next';

import cs from '../styles/layout.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: NextPage<IProps> = ({ children }) => {
  return <main className={cs.main}>{children}</main>;
};

export default Layout;
