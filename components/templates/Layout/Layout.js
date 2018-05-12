import React from 'react';
import Head from 'next/head';

import Header from '../../organisms/Header';

const Layout = ({
  children,
  title,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <footer>I'm your footer</footer>
    </div>
  )
};

export default Layout;