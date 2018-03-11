import React, { Component } from 'react';

import scope from '../../images/scope.jpg';

class Header extends Component {
    render() {
        return (
            <header className="o-header">
                <div className="o-header__container">
                    <div className="o-header__brand">joonsub.com</div>
                    <div className="o-header__aligner">
                        <div className="o-header__content">
                            <div className="o-header__mark">Create without limit</div>
                            <div className="o-header__subtext">Your ideas need a platform. Make a lasting impression. Get noticed with highly performant website.</div>
                            <button className="o-header__cta">Start Making</button>
                        </div>
                    </div>
                    <img className="o-header__bgimage" src={scope} alt="no scope" />
                </div>
            </header>
        )
    }

}

export default Header;
