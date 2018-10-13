import React from 'preact';

import { Router } from 'preact-router';

import Menu from './components/Menu';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

class App extends React.Component {
	render() {
		return (
			<div>
				<Menu/>
				<div className="app">
					<Router>
						<Home path="/"/>
						<Contact path="/contact"/>
						<About path="/about" />
					</Router>
				</div>
			</div>
		)
	}
}

export default App;