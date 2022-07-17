import React, { ReactNode } from 'react';
import cn from 'classnames';
import { NextPage } from 'next';

import cs from '../styles/layout.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

const Layout: NextPage<IProps> = ({ children, className }) => {
  return <main className={cn(cs.main, className)}>{children}</main>;
};

export default Layout;
