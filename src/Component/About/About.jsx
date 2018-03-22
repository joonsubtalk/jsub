import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {

	render() {

		const { description, pic, blurb } = this.props;

		return (
			<section className="c-about">
				<div className="c-about__container">
					<div className="c-about__content">
						<div className="c-about__title">Joon</div>
						<div className="c-about__teaser">{blurb}</div>
						<div className="c-about__description">{description}</div>
					</div>
					<div className="c-about__featuredImage">
						<img className="c-about__image" src={pic} alt="profile pic of joon" />
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