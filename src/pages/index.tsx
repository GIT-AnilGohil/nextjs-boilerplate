import React from "react";
import dynamic from 'next/dynamic';
const PageLayout = dynamic(() => import("@/components/layout/pageLayout"), { ssr: true });
import CustomHead from "@/components/pagelayout/customHead";
const Home = ({ pageURL }: any) => {
    return (
        <React.Fragment>
            <CustomHead pageTitle={"Page Title"} pageDescription={"Page Description"} pageUrl={pageURL} image={""} indexMeta={"noindex, nofollow"} />
            <PageLayout>
                Home Page
            </PageLayout>
        </React.Fragment>
    );
};
export async function getServerSideProps(ctx: any) {
    try {
        const { req, resolvedUrl } = ctx;
        const protoCall = req.headers['x-forwarded-proto'];
        const pageURL = `${protoCall}://${req.headers.host}${resolvedUrl}`;
        return {
            props: {
                pageURL: pageURL,
            }
        }
    } catch (error) {
        return { props: {} };
    }
}
export default Home;