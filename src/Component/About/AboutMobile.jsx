import React, { Component } from 'react';

class About extends Component {

	render() {

		const { pic, blurb } = this.props;

		return (
			<section className="c-aboutmobile u-baseSpacing">
				<div className="c-aboutmobile__container">
					{ /* <div className="c-aboutmobile__header">About Me</div> */}
					<div className="c-aboutmobile__content">
						<div className="c-aboutmobile__card">
							<div className="c-aboutmobile__title">Joon<span className="c-portfolio__dot">.</span></div>
							<div className="c-aboutmobile__teaser">{blurb}</div>
						</div>
						<div className="c-aboutmobile__featuredImage">
							<img className="c-aboutmobile__image" src={pic} alt="profile pic of joon" />
						</div>
					</div>
				</div>
				<div className="c-aboutmobile__stripeBackground">
					<div className="c-stripe"></div>
				</div>
			</section>
		);
	}
}

export default About;