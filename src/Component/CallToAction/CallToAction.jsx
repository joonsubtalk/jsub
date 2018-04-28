import React from 'react';
import { info } from '../../configs/info.js';

const CallToAction = ( props ) => {

    const { title, subText, ctaText } = info.callToAction;
    const {clickHandler} = props;

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
                        <button onClick={clickHandler} className="o-callToAction__cta">{ ctaText }</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CallToAction;
