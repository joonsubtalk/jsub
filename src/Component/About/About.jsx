import React, { Component } from 'react';

class About extends Component {

	render() {

		const { pic, blurb } = this.props;

		return (
			<section className="c-about u-baseSpacing">
				<div className="c-about__container">
					{ /* <div className="c-about__header">About Me</div> */}
					<div className="c-about__content">
						<div className="c-about__card">
							<div className="c-about__title">Joon<span className="c-portfolio__dot">.</span></div>
							<div className="c-about__teaser">{blurb}</div>
						</div>
						<div className="c-about__featuredImage">
							<img className="c-about__image" src={pic} alt="profile pic of joon" />
						</div>
					</div>
				</div>
				<div className="c-about__stripeBackground">
					<div className="c-stripe"></div>
				</div>
			</section>
		);
	}
}

export default About;