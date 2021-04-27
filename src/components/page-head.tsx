import { useAmp } from 'next/amp';
import * as React from 'react';
import Head from 'next/head';
import { DEFAULT_ICON, HANDLE_NAME } from '~/lib/const';

interface Props {
    subtitle: string;
    description: string;
    image?: string;
    route?: string;
    url?: string;
}
const elseScript: JSX.Element = (
    <></>
);

const elseScriptAmp: JSX.Element = (
    <>
        <script 
            async 
            src="https://cdn.ampproject.org/v0.js"
        ></script>
        <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        ></script>
        {/* <script
            async
            custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        ></script> */}
    </>
);

const PageHead = ({ subtitle, description, image, route, url }: Props): JSX.Element => {
    const title = `${HANDLE_NAME} blog - ${subtitle}`;
    image = DEFAULT_ICON;
    const isAmp = useAmp();
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" property="description" content={description} />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta name="og:type" property="og:type" content="blog" />
            <meta name="og:url" property="og:url" content={url} />
            <meta name="og:image" property="og:image" content={image} />
            <meta name="og:site_name" property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={`@${HANDLE_NAME}`} />
            <meta name="twitter:url" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <link rel="canonical" href={route} />
            <link rel="shortcut icon" href={image} />
            <link rel="apple-touch-icon" href={image} />
            {isAmp ? elseScriptAmp : elseScript}
        </Head>
    );
};

export default PageHead;
