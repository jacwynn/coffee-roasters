import Image from 'next/image';

import { useState } from 'react';

import logo from '../../images/logo.png';
import hamburgerMenuIcon from '../../images/hamburger-menu.svg';
import closeIcon from '../../images/close.svg';

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prevToggleMenuState => !prevToggleMenuState);
    }

    const links = [
        {name: 'Home', href: '/'},
        {name: 'About Us', href: '#about'},
        {name: 'Create Your Plan', href: '#create-plan'},
    ]

    return (
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <Image src={logo} alt="Coffee Roaster Logo" />
                </div>
                <div className='header__hamburger-menu' onClick={toggleMenu}>
                    <Image src={open ? closeIcon : hamburgerMenuIcon} />
                </div>
                <div className="header__links">
                    <ul className={`header__links-list ${open ? 'show-menu' : ''}`}>
                        {
                            links.map(link => (
                                <li key={link.name} className="header__link"><a href={link.href}>{link.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;