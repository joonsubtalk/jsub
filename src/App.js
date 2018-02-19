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
