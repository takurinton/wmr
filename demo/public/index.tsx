import { h, render } from 'preact';
import { Loc, Router } from './loc.js';
import lazy from './lazy.js';
import Home from './pages/home.js';
// import About from './pages/about/index.js';
import NotFound from './pages/_404.js';
import Header from './header.tsx';
// import './style.css';

const About = lazy(() => import('./pages/about/index.js'));

export function App() {
	return (
		<Loc>
			<div class="app">
				<Header />
				<Router>
					<Home path="/" />
					<About path="/about" />
					<NotFound default />
				</Router>
			</div>
		</Loc>
	);
}

render(<App />, document.body);

// @ts-ignore
if (module.hot) module.hot.accept(u => render(<u.module.App />, document.body));