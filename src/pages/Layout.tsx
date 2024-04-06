import React from 'react';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  preload: true,
  display: 'swap',
  subsets: ['latin']
});

const Layout = ({ children }: any) => {
  console.log('poppins', poppins.style.fontFamily)
  return (
    <main className={poppins.className}>
      {children}
    </main>
  );
};

export default Layout;