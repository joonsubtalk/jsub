import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { info } from '../../configs/info.js';

class CallToAction extends Component {

    state = {
        hasOpenedContact : false
    }

    sendData = (dataObj) => {

        const url = `${process.env.PUBLIC_URL}/php/sendData.php`;
        evt.preventDefault();

        let data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj) 
        }

        fetch(url, data)
        .then((responseJson) => {
            return responseJson.json();
        })
        .then((text) => {
            switch(text) {
                case 1:
                    this.setState({sent : true, busy: false});
                    break;
                default:
                    break;
            }
        })
        .catch((error) => {
            this.setState({sent : false, busy: false});
            console.log(error);
        });
    }

    scrollToContactHandler = () => {

        const {clickHandler} = this.props;

        if (!this.state.hasOpenedContact) {
            clickHandler();
            sendData({action: 'CLICK', label: 'CTA', value: info.callToAction.ctaText});
            this.setState({hasOpenedContact : true});
        }

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
