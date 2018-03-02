import React from 'react';
import PropTypes from 'prop-types';
import './callToAction.css';

const { string } = PropTypes;

const CallToAction = ( props ) => {
    const { title, subText, ctaText } = props;

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
                        <button className="o-callToAction__cta">{ ctaText }</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

CallToAction.propTypes = {
    title : string.isRequired,
    subText : string.isRequired,
    ctaText : string.isRequired
};

export default CallToAction;
