import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';

import scope from '../../images/scope.jpg';

class Header extends Component {

    scrollToContactHandler = () => {
        setTimeout( () => {
            var elem = document.querySelector('.js-work');
            scrollToElement(elem, {
                offset: 0,
                ease: 'outQuad',
                duration: 500
            });
        },50)
    }

    render() {
        return (
            <header className="o-header">
                <div className="o-header__container">
                    <div className="o-header__brand">joonsub.com</div>
                    <div className="o-header__aligner">
                        <div className="o-header__content">
                            <div className="o-header__mark">Make your next move</div>
                            <div className="o-header__subtext">I develop quality code and performant designs.</div>
                            <button onClick={this.scrollToContactHandler} className="o-header__cta">View Works</button>
                        </div>
                    </div>
                    <img className="o-header__bgimage" src={scope} alt="no scope" />
                </div>
                <div className="o-header__gradient"></div>
            </header>
        )
    }

}

export default Header;
