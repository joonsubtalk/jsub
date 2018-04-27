import React, { Component } from 'react';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import AboutMobile from './Component/About/AboutMobile';
import Portfolio from './Component/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/CallToAction/CallToAction';
import { info } from './configs/info.js';
import Debugger from './Component/Debugger/Debugger';
import profilepic from './images/snow.jpg';
import Statistics from './Component/Statistics/Statistics';

class App extends Component {

	state = {
		openStatistics : false
	}

	secretClickHandler = (evt) => {
		evt.preventDefault();
		this.setState({ openStatistics : true });
	}

	render() {

		const { aboutBlurb, aboutDescription } = info;

		return (
			<div>
				<Debugger />
				<Header/>
				<About description={aboutDescription}
					blurb={aboutBlurb}
					pic={profilepic} />
				<AboutMobile description={aboutDescription}
					blurb={aboutBlurb}
					pic={profilepic} />
				<Portfolio />
				<CallToAction />
				<Statistics shouldOpen={this.state.openStatistics} />
				<Footer clickHandler={this.secretClickHandler}/>
			</div>
		);
	}
}

export default App;
