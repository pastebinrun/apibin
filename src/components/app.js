import { h } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import Header from './header';
import Contents from './contents';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';
import Paste from '../routes/paste';

const App = () => (
	<div id="app">
			<Header />
			<Contents>
				<Router history={createHashHistory()}>
					<Home path="/" />
					<About path="/about" />
					<Paste path="/:id" />
				</Router>
			</Contents>
		</div>
)

export default App;
