import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import Header from './header';
import Contents from './contents';

// Code-splitting is automated for routes
import Home from '../routes/home';
import About from '../routes/about';
import Paste from '../routes/paste';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	}

	render() {
		return (<div id="app">
			<Header />
			<Contents>
				<Router onChange={this.handleRoute} history={createHashHistory()}>
					<Home path="/" />
					<About path="/about" />
					<Paste path="/:id" />
				</Router>
			</Contents>
		</div>);
	}
}
