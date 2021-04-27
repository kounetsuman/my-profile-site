import { useAmp } from 'next/amp';
import Footer from '~/components/footer';
import Header from '~/components/header';
import React, { ReactNode } from 'react';
import BreadcrumbProvider from '~/provider/breadcrumb-provider';
import NextNprogress from 'nextjs-progressbar';

type LayoutProps = {
    children?: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const isAmp = useAmp();
    return (
        <div className={`bg-blue-600 break-all text-gray-900 min-h-screen`}>
            <Header />
            {isAmp ? <></> : <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} />}
            <BreadcrumbProvider>
                {children}
            </BreadcrumbProvider>
            <Footer />
        </div>
    );
};

export default Layout;
