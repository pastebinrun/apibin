import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1><Link href="/">apibin</Link></h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
			<a href="https://github.com/pastebinrun/apibin">Source code</a>
		</nav>
	</header>
);

export default Header;
