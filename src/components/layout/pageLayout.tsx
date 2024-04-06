import React from 'react'
import dynamic from 'next/dynamic';
const PageLayout = ({children}:any) => {
    return (
        <React.Fragment>
            Header
                {children}
            Footer
        </React.Fragment>
    )
}

export default PageLayout;
