import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { info } from '../../configs/info.js';

class CallToAction extends Component {

    scrollToContactHandler = () => {

        const {clickHandler} = this.props;
        clickHandler();

        setTimeout( () => {
            var elem = document.querySelector('.c-contact');
            scrollToElement(elem, {
                offset: 100,
                ease: 'outQuad',
                duration: 500
            });
        },50)
    }
    render() {
        const { title, subText, ctaText } = info.callToAction;

        return (
            <section className="o-callToAction u-baseSpacing">
                <div className="container">
                    <div className="o-callToAction__container">
                        <div className="o-callToAction__featuredImageContainer">
                            <div className="o-callToAction__logo">JS</div>
                        </div>
                        <div className="o-callToAction__featuredDescriptionContainer">
                            <h3 className="o-callToAction__title">{ title }</h3>
                            <p className="o-callToAction__subtext">{ subText }</p>
                            <button onClick={this.scrollToContactHandler} className="o-callToAction__cta">{ ctaText }</button>
                        </div>
                    </div>
                </div>
                <div className="js-contact-bot"></div>
            </section>
        )
    }
}

export default CallToAction;
