import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Fab, { FabProps } from "@material-ui/core/Fab";

interface AmpOnProps {
    on: string;
}

type Props = FabProps & AmpOnProps;

const AmpFab: React.FC<Props> = (props) => {
    return <Fab {...props} />;
};
  

const HeaderMobileMenuAmp = (): JSX.Element => {
    const S_ul = `block w-full left-0 m-0 p-0 no-underline text-gray`
    const S_li = `flex items-center h-20 text-gray-900 border-b border-blue-800 bg-white hover:bg-blue-400`;
    const linkParams = [
        { href: '/', as: '/', name: 'Home' },
        { href: '/about', as: '/about', name: 'About' },
        { href: '/blog/[offset]', as: '/blog/1', name: 'Blog' },
        { href: '/contact', as: '/contact', name: 'Contact' },
    ];
    return (
        <div className={`h-14`}>
            <AmpFab
                on={`tap:header-mobile-menu-amp.open`}
                variant={`extended`}
                aria-label={`amp-fab`}
                className={`h-12 w-full m-0 p-0 bg-blue-700 text-white`}
            >
                <MenuIcon></MenuIcon>
            </AmpFab>
            <amp-sidebar
                id={`header-mobile-menu-amp`}
                layout={`nodisplay`}
                role={`menu`}
                tabindex={-1}
                side={`right`}
            >
                <ul className={S_ul}>
                    {
                        linkParams.map((link, i) => (
                            <a key={`HeaderMobileMenu-Link-${link.name + i}`} href={`${link.href}?amp=1`}>
                                <li key={`HeaderMobileMenu-li-${link.name + i}`} className={`${S_li}`}>
                                    <p key={`HeaderMobileMenu-p-${link.name + i}`} className={`w-full text-center`}>{link.name}</p>
                                </li>
                            </a>
                        ))
                    }
                </ul>
            </amp-sidebar>
        </div>
    );
};

export default HeaderMobileMenuAmp;
