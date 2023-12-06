// SPDX-FileCopyrightText: 2023 Konrad Borowski <konrad@borowski.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { h, Component } from 'preact';
import style from './style.module.css';
import baseUrl from '../../base-url';

export default class Paste extends Component {
	controller = new AbortController()
	state = {
		code: null
	}

	copyLink = e => {
		e.preventDefault();
		navigator.clipboard.writeText(this.getLink());
	}

	getLink() {
		const { id } = this.props;
		return `https://pastebin.run/${id}`;
	}

	async componentWillMount() {
		const { id } = this.props;
		const { signal } = this.controller;
		this.setState({
			code: await (await fetch(`${baseUrl}${id}.txt`, { signal })).text()
		});
	}

	componentWillUnmount() {
		this.controller.abort();
	}

	render(_, { code }) {
		return (<div>
			<div>Share link: <input readonly value={this.getLink()} /> <button onClick={this.copyLink}>Copy link</button></div>
			{code === null ? 'Loading…' : <pre class={style.pre}><code>{code}</code></pre>}
		</div>);
	}
}
