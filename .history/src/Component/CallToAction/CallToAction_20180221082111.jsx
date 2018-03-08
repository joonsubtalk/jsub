import React from 'react';
import PropTypes from 'prop-types';
import './callToAction.css';

const { string } = PropTypes;

const CallToAction = ( props ) => {
    const { title, subText, ctaText } = props;

    return (
        <section className="o-callToAction">
            <div className="container o-callToAction__grid">
                <div className="o-callToAction">
                </div>
                <div className="">
                </div>
                <h3 className="o-callToAction__title">{ title }</h3>
                <p className="o-callToAction__subtext">{ subText }</p>
                <button className="o-callToAction__cta">{ ctaText }</button>
            </div>
        </section>
    )

}

CallToAction.defaultProps = {
    title : '',
    subText : '',
    ctaText : ''
};

CallToAction.propTypes = {
    title : string.isRequired,
    subText : string.isRequired,
    ctaText : string.isRequired
};

export default CallToAction;