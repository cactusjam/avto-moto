import React from 'react';
import Logo from '../logo/logo';
import HeaderMenu from '../header-menu/header-menu';

const Header = () => {
    return (
        <header className='container'>
            <Logo />
            <HeaderMenu />
        </header>
    );
}

export default Header;
