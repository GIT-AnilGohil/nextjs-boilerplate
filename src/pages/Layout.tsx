import React from 'react';
import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default Layout;