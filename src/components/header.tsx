import { useAmp } from 'next/amp';
import React from 'react';
import Linkable from '~/components/linkable';
import { HANDLE_NAME } from '~/lib/const';
import HeaderMobileMenu from './header-mobile-menu';
import HeaderMobileMenuAmp from './header-mobile-menu-amp';

const Header = (): JSX.Element => {
    const isAmp = useAmp();
    return (
        <header className={`z-50 w-full border-b text-white`}>
            {/* PC */}
            <nav className={`hidden sm:flex bg-blue-700 font-semibold items-center justify-between py-4`}>
                <div className={`p-2 flex-row`}>
                    <Linkable href={`/`} name={`@${HANDLE_NAME}`} />
                </div>
                <div className={`flex flex-row-reverse uppercase`}>
                    <Linkable href={`/contact`} name={`Contact`} />
                    <Linkable href={`/blog/[offset]`} as={`/blog/1`} name={`Blog`} />
                    <Linkable href={`/about`} name={`About`} />
                </div>
            </nav>
            {/* MOBILE */}
            <nav className={`sm:hidden flex bg-blue-700`}>
                {isAmp ? <HeaderMobileMenuAmp /> : <HeaderMobileMenu />}

            </nav>
        </header>
    );
};

export default Header;
