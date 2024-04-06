import { getImageProps, ImageProps, StaticImageData } from 'next/image'
import Head from 'next/head'
import React from 'react'

const AdaptiveImage = ({ className, alt = 'Hero image', fill = true, priority = true, sizes = '100vw', breakpoint, tabImage, desktopImage, mobileImage, style = { objectFit: 'cover', objectPosition: 'center bottom' }, AdaptiveImageHeight, preload, ...props }: {
    breakpoint?: any
    tabImage: StaticImageData
    desktopImage: StaticImageData
    mobileImage: StaticImageData
    priority?: boolean
    AdaptiveImageHeight?: any
    preload: boolean
} & Partial<ImageProps>) => {
    const commonPreload = {
        rel: 'preload',
        as: 'image',
        imageSizes: sizes,
    }
    const common = { alt, fill, priority, sizes, style, ...props }
    const { srcSet: desktop } = getImageProps({ ...common, src: desktopImage }).props;
    const { srcSet: tab } = getImageProps({ ...common, src: tabImage }).props;
    const { srcSet: mobile, ...rest } = getImageProps({ ...common, src: mobileImage }).props;

    const desktopMedia = `(min-width: ${breakpoint.desktopBreakpointMin ? breakpoint.desktopBreakpointMin : breakpoint.tabBreakpointMax - 1}px)`;
    const tabMedia = `(min-width: ${breakpoint.tabBreakpointMin}px) and (max-width: ${breakpoint.tabBreakpointMax}px)`;
    const mobileMedia = `(max-width: ${breakpoint.mobileBreakpoint}px)`;
    return (
        <React.Fragment>
            {preload && (
                <Head>
                    <link
                        {...commonPreload}
                        media={desktopMedia}
                        href={desktopImage.src}
                        imageSrcSet={desktop}
                    />
                    <link
                        {...commonPreload}
                        media={tabMedia}
                        href={tabImage.src}
                        imageSrcSet={tab}
                    />
                    <link
                        {...commonPreload}
                        media={mobileMedia}
                        href={mobileImage.src}
                        imageSrcSet={mobile}
                    />
                </Head>
            )}
            <div className="image-container">
                <style jsx>{`
                .image-container {
                    overflow: hidden;
                    width: 100%;
                    height: ${AdaptiveImageHeight}px;
                    position: absolute;
                    left:0;
                    top:0;
                    right:0;
                    bottom:0;
                    isolation: isolate;
                }
                .image-container picture {
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                }
            `}</style>
                <picture className={className}>
                    <source type='image/webp' media={desktopMedia} srcSet={desktop} />
                    <source type='image/webp' media={tabMedia} srcSet={tab} />
                    <source type='image/webp' media={mobileMedia} srcSet={mobile} />
                    <img alt={alt} {...rest} />
                </picture>
            </div>
        </React.Fragment>
    )
}

export default AdaptiveImage