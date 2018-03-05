import React, { Component } from 'react';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/CallToAction/CallToAction';
import { info } from './configs/info.js';
import Debugger from './Component/Debugger/Debugger';
import profilepic from './images/prof.jpg';
import Statistics from './Component/Statistics/Statistics';

import './App.css';

class App extends Component {
	render() {

		const { aboutBlurb, aboutDescription } = info;

		return (
			<div>
				<Debugger />
				<Header/>
				<About description={aboutDescription}
					blurb={aboutBlurb}
					pic={profilepic} />
				<Portfolio />
				<CallToAction title="lorem ipsum"
					subText="I'm always looking for interesting projects."
					ctaText="Call Now!"
				/>
				<Statistics />
				<Footer/>
			</div>
		);
	}
}

export default App;
