import React from 'react'
import dynamic from 'next/dynamic';
const PageLayout = () => {
    return (
        <React.Fragment>
            Header
                {children}
            Footer
        </React.Fragment>
    )
}

export default PageLayout;
