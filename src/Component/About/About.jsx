import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './about.css';

class About extends Component {

	renderArrayToParagraph = (arr) => {
		return arr.map((line, idx) => {
			return <p key={idx}>{line}</p>
		})
	}

	render() {

		const { description, pic, blurb } = this.props;

		return (
			<section className="c-about">
				<div className="c-about__background">
					<div className="c-about__background1"></div>
					<div className="c-about__background2"></div>
					<div className="c-about__background3"></div>
				</div>
				<div className="c-about__container">
					<div className="c-about__header">About Me</div>
					<button className="c-about__readmore" />
					<div className="c-about__hr"></div>
					<div className="c-about__content">
						<div className="c-about__card">
							<div className="c-about__text">
								<div className="c-about__title">Joon</div>
								<div className="c-about__teaser">{blurb}</div>
							</div>
						</div>
						<div className="c-about__featuredImage">
							<img className="c-about__image" src={pic} alt="" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

About.propTypes = {
	description: PropTypes.arrayOf(PropTypes.string)
};

export default About;