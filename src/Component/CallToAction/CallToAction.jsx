import React from 'react';
import PropTypes from 'prop-types';
import './callToAction.css';

const { string } = PropTypes;

const CallToAction = ( props ) => {
    const { title, subText, ctaText } = props;

    return (
        <section className="o-callToAction">
            <div className="container">
                <h3>{ title }</h3>
                <p>{ subText }</p>
                <button>{ ctaText }</button>
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