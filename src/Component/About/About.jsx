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

		const { description, pic } = this.props;

		return (
			<section className="c-about u-baseSpacing">
				<div className="container">
					<div className="c-about__container">
						<div className="c-about__featuredImageContainer">
							<img className="c-about__featuredImage" src={pic} alt="" />
						</div>
						<div className="c-about__featuredDescriptionContainer">
							<div className="c-about__featuredUser">
							About <span className="u-bold">Joon Chung</span>
							</div>
							<div className="c-about__featuredDescription">
							{this.renderArrayToParagraph(description)}
							</div>
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