import React, { Component } from 'react';

import { info } from '../../configs/info.js';

class Footer extends Component{


    render() {

        const year = (new Date()).getFullYear();
        const {github, linkedin, email} = info.footerSocial;
        const {wiseTitle} = info.footerWisdom;

        return (
            <footer className="o-footer u-baseSpacing">
                <div className="container">
                    <div className="o-footer__container">
                        <div className="o-footer__partingWisdom">
                            <div className="o-footer__cta">{wiseTitle}</div>
                            <div className="o-footer__text">Joon is a frontend developer making awesome sites at (MT) Media Temple.</div>
                            <div className="o-footer__text">He's always looking for exciting work and awesome opportunities.</div>
                        </div>
                        <div className="o-footer__social">
                            <div className="o-footer__write">
                                <div className="o-footer__cta">I Journal.</div>
                                <div className="o-footer__text">Ramblings from a coder. You've been warned!</div>
                            </div>
                            <div className="o-footer__connect">
                                <div className="o-footer__socialHeader">Let's Connect!</div>
                                <ul className="o-footer__socials">
                                    <SocialIcon link={github} type='github' />
                                    <SocialIcon link={linkedin} type='linkedin' />
                                    <SocialIcon link={email} type='email' />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="o-footer__legal">{year} &copy; Joonsub.com | Coded with love</div>
                </div>
            </footer>
        )
    }

}

const SocialIcon = ({link, type}) => {

    let icon;

    switch(type) {
        case 'linkedin':
            icon = <path className={`o-footer__icon o-footer__${type}Icon`} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            break;
        case 'github':
            icon = <path className={`o-footer__icon o-footer__${type}Icon`} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            break;
        case 'email':
            icon = <path className={`o-footer__icon o-footer__${type}Icon`} d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068A1.485 1.485 0 0 1 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
            break;
        default:
            icon = null;
    }

    return (
        <li className="o-footer__items">
            <a href={link} className="o-footer__socialLink">
                <svg aria-labelledby={`${type}-icon`} className="o-footer__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    { icon }
                </svg>
            </a>
        </li>)
}

export default Footer;
