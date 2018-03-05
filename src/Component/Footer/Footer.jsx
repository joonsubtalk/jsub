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
                            <SocialIcon link={''} icon={gh} alt='github' />
                            <SocialIcon link={''} icon={li} alt='linkedin' />
                            <SocialIcon link={''} icon={em} alt='mail' />
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }

}

const SocialIcon = ({link, icon, alt}) => {

    return (
        <li className="o-footer__items">
            <a href={link} className="o-footer__socialLink">
                <img className="o-footer__icon" src={icon} alt={alt} />
            </a>
        </li>)
}

export default Footer;
