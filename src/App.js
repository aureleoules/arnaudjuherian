import React from 'preact';

import { Router } from 'preact-router';

import Menu from 'components/Menu';

import Home from 'pages/Home';
import Galleries from 'pages/Galleries';
import Contact from 'pages/Contact';
import About from 'pages/About';


import Logo from 'components/Logo';

class App extends React.Component {
	render() {
		return (
			<div>
				<Logo/>
				<Menu/>
				<div className="app">
					<Router>
						<Home path="/"/>
						<Galleries path="/galleries"/>

						<Contact path="/contact"/>
						<About path="/about" />
					</Router>
				</div>
			</div>
		)
	}
}

export default App;