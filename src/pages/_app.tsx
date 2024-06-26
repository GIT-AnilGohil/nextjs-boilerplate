import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("./Layout"), { ssr: true });
import "@/styles/style.scss";
import Head from "next/head";



const App = ({ Component, pageProps }: any) => {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};
export default App;
