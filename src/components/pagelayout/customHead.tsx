import Head from 'next/head'
import React from 'react'

const CustomHead = ({ pageTitle, pageDescription, pageUrl, image, indexMeta }: any) => {
    console.log('pageTitle', pageTitle)
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {/* <!-- Add more meta tags as needed --> */}
            
            {/* <!-- Social Meta Tags --> */}
            <meta property="og:locale" content="en_US" key="og:locale" />
            <meta property="og:type" content="website" key="og:type" />
            <meta property="og:url" content={pageUrl} key="og:url" />
            <meta property="og:site_name" content="Site Name" key="og:site_name" />
            <meta property="article:publisher" content={pageUrl} key="article:publisher" />
            <meta property="og:image:width" content="1200" key="og:image:width" />
            <meta property="og:image:height" content="628" key="og:image:height" />
            <meta property="og:image:type" content="image/png" key="og:image:type" />
            <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
            <meta property="twitter:site" content="@twitter_usernaem" key="twitter:site" />
            <meta property="twitter:url" content={pageUrl} key="twitter:url" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:label1" content="Est. reading time" key="twitter:label1" />
            <meta name="twitter:data1" content="5 minute" key="twitter:data1" />

            {/* <!-- Other meta tags --> */}
            <meta name="robots" content={indexMeta} />
            {/* <!-- or "noindex, nofollow" depending on your preference --> */}

            {/* Add this line for cache */}
            <meta http-equiv="Cache-control" content="public" />

            <link rel='canonical' href={pageUrl} />
            <link rel="apple-touch-icon" sizes="180x180" href="apple_touch_icon_url" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon_32x32_url" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon_16x16_url" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="safari_pinned_tab" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default CustomHead
