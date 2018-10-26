import React from 'preact';

import { Router } from 'preact-router';

import Menu from 'components/Menu';

import Home from 'pages/Home';
import Galleries from 'pages/Galleries';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Gallery from 'pages/Gallery';

import Logo from 'components/Logo';

class App extends React.Component {
	
	/* Reset scroll */
	onRouteChange = () => window.scrollTo(0, 0);

	render() {
		return (
			<div>
				<Menu/>
				<div className="app">
					<Router onChange={this.onRouteChange}>
						<Home path="/"/>
						<Galleries path="/galleries"/>
						<Gallery path="/gallery/:title"/>
						<Contact path="/contact"/>
						<About path="/about" />
					</Router>
				</div>
			</div>
		)
	}
}

export default App;