import Link from 'next/link';
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';

const HeaderMobileMenu = (): JSX.Element => {
    const [openMenu, setOpenMenu] = useState(false);
    const clickMenu = () => {
        setOpenMenu(!openMenu);
    };

    const S_ul = `${openMenu? `block`: `hidden`} w-full left-0 absolute m-0 p-0 no-underline`
    const S_li = `flex items-center h-12 text-white border-b border-white bg-blue-800 hover:bg-blue-600`;
    const linkParams = [
        { href: '/', as: '/', name: 'Home' },
        { href: '/about', as: '/about', name: 'About' },
        { href: '/blog/[offset]', as: '/blog/1', name: 'Blog' },
        { href: '/contact', as: '/contact', name: 'Contact' },
    ];
    return (
        <>
            <div className={`z-50 text-2xl w-full text-white border-b border-white bg-blue-800`}>
                <div className={`w-full`}>
                    <div className={`flex items-center h-12 text-center`} onClick={clickMenu}>
                        <MenuIcon></MenuIcon>
                    </div>
                    <ul className={`${S_ul}`}>
                        {
                            linkParams.map((link, i) => (
                                <Link key={`HeaderMobileMenu-Link-${link.name + i}`} href={link.href} as={link.as}>
                                    <li key={`HeaderMobileMenu-li-${link.name + i}`} className={`${S_li}`} onClick={clickMenu}>
                                        <p key={`HeaderMobileMenu-p-${link.name + i}`} className={`w-full text-center`}>{link.name}</p>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HeaderMobileMenu;
