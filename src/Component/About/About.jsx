import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {

	state = {
		reveal : false
	}

	renderArrayToParagraph = (arr) => {
		return arr.map((line, idx) => {
			return <p key={idx}>{line}</p>
		})
	}

	clickHandler = () => {
		this.setState({reveal : !this.state.reveal})
	}

	render() {

		const { description, pic, blurb } = this.props;
		const { reveal } = this.state;

		return (
			<section className={`c-about ${reveal ? 'c-about--reveal' : ''}`}>
				<div className="c-about__background">
					<div className="c-about__background1"></div>
					<div className="c-about__background2">
						<div className="c-about__background2Active"></div>
					</div>
					<div className="c-about__background3">
						<div className="c-about__background3Active"></div>
					</div>
				</div>
				<div onMouseEnter={this.clickHandler} onMouseLeave={this.clickHandler} className="c-about__container">
					<div className="c-about__header">About Me</div>
					<button className="c-about__readmore">Read More</button>
					<div className="c-about__content">
						<div className="c-about__card">
							<div className="c-about__text">
								<div className="c-about__title">Joon</div>
								<div className="c-about__teaser">{blurb}</div>
								<div className="c-about__description">{this.renderArrayToParagraph(description)}</div>
							</div>
						</div>
						<div className="c-about__featuredImage">
							<img className="c-about__image" src={pic} alt="profile pic of joon" />
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