import React, { Component } from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/CallToAction/CallToAction';

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
				<Footer/>
			</div>
		);
	}
}

export default App;
