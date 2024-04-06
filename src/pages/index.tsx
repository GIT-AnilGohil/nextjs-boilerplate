import React from "react";
import dynamic from 'next/dynamic';
const PageLayout = dynamic(() => import("@/components/layout/pageLayout"), { ssr: true });
const Home = () => {
    return (
        <React.Fragment>
            <PageLayout>
                Home Page
            </PageLayout>
        </React.Fragment>
    );
};
export default Home;