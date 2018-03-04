import React, { Component } from 'react';
import './footer.css';

import li from '../../images/linkedin.svg';
import gh from '../../images/github.svg';
import em from '../../images/mail.svg';

class Footer extends Component{


    render() {

        const year = (new Date()).getFullYear();

        return (
            <footer className="o-footer u-baseSpacing">
                <div className="container">
                    <div className="o-footer__legal">{year} &copy; Joonsub.com | </div>

                    <div className="o-footer__social">
                        <ul className="o-footer__socials">
                            <li className="o-footer__items">
                                <a href="">
                                    <img className="o-footer__icon" src={li} alt='' />
                                </a>
                            </li>
                            <li className="o-footer__items"><img className="o-footer__icon" src={gh} alt='' /></li>
                            <li className="o-footer__items"><img className="o-footer__icon" src={em} alt='' /></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;
