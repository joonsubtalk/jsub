import React from 'react';
import './header.css';

const Header = () => {

    return (
        <header className="o-header">
            <div className="container">
                <div className="o-header__brand">Joon</div>
                <div className="o-header__subtext">Frontend Developer</div>
                <div className="o-header__doodad"></div>
            </div>
        </header>
    )

}

export default Header;
