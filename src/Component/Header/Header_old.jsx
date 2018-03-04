import React from 'react';
import './header.css';

const Header = () => {
	return (
		<header className="o-header">
			<div className="o-header__foreground"></div>
			<div className="o-header__container">
				<div className="o-header__brand">Joon</div>
				<div className="o-header__shadow">Joon</div>
				{ /*<div className="o-header__subtext">Frontend Developer</div> */ }
			</div>
		</header>
	)

}

export default Header;
