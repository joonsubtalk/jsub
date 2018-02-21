import React, { Component } from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/CallToAction/CallToAction';
import ChannelBlur from './Container/ChannelBlur/ChannelBlur';

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div>
				Joon Chung is frontend developer who is passionate about user-centric design. He studied Computer Science at California State University Northridge, and proceeded to graduate studies at University of California Los Angeles to further his knowledge in mobile technologies. In 2007, his mobile game 'Sketch' was featured by Forbes.com as a part of the "ten cool games" list, and was also a runner-up regional winner in the Adobe Mobile Contest. After a few years living in the Bay and beautifying Zazzle.com as a UI developer, he's back in Los Angeles working at MediaTemple as a frontend developer.
				</div>
				<CallToAction title="lorem ipsum"
					subText="lorem"
					ctaText="Call Now!"
				/>
				<ChannelBlur text={'A'}/>
				<Footer/>
			</div>
		);
	}
}

export default App;
