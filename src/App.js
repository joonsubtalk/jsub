import React, { Component } from 'react';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import AboutMobile from './Component/About/AboutMobile';
import PortfolioDesktop from './Component/Portfolio/PortfolioDesktop';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/CallToAction/CallToAction';
import { info } from './configs/info.js';
import Debugger from './Component/Debugger/Debugger';
import profilepic from './images/snow.jpg';
import Contact from './Component/Contact/Contact';

class App extends Component {

	state = {
		openContact : false
	}

	secretClickHandler = (evt) => {

		if (evt) {
			evt.preventDefault();
		}
		this.setState({ openContact : true });
	}

	render() {

		const { aboutBlurb, aboutDescription } = info;

		return (
			<div>
				<Debugger />
				<Header clickHandler={this.secretClickHandler} />
				<About description={aboutDescription}
					blurb={aboutBlurb}
					pic={profilepic} />
				<AboutMobile description={aboutDescription}
					blurb={aboutBlurb}
					pic={profilepic} />
				<PortfolioDesktop />
				<CallToAction clickHandler={this.secretClickHandler} />
				<Contact shouldOpen={this.state.openContact} />
				<Footer/>
			</div>
		);
	}
}

export default App;
