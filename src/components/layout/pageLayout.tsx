import React from 'react'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/pagelayout/header'), { ssr: true });
const Footer = dynamic(() => import('@/components/pagelayout/footer'), { ssr: true });
const PageLayout = ({ children }: any) => {
    return (
        <React.Fragment>
            <Header />
                {children}
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;
