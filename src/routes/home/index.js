// SPDX-FileCopyrightText: 2023 Konrad Borowski <konrad@borowski.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style.module.css';
import baseUrl from '../../base-url';

class Home extends Component {
	state = {
		code: '',
		expiration: 'PT1H',
		languages: [],
		language: 'plaintext'
	}

	onLanguageChange = e => this.setState({ language: e.target.value })
	onExpirationChange = e => this.setState({ expiration: e.target.value })
	onTextareaChange = e => this.setState({ code: e.target.value })

	onSubmit = async e => {
		e.preventDefault();
		const { code, expiration, language } = this.state;
		const request = await fetch(`${baseUrl}api/v1/pastes`, {
			body: new URLSearchParams({ code, expiration, language }),
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		route(`/${await request.text()}`);
	}

	async componentWillMount() {
		this.setState({ languages: await (await fetch(`${baseUrl}api/v1/languages`)).json() });
	}

	render(_, { expiration, code, languages, language }) {
		return (<form onSubmit={this.onSubmit}>
			<label>
				Language: <select value={language} onInput={this.onLanguageChange}>
					{languages.map(({ identifier, name }) => <option value={identifier}>{name}</option>)}
				</select>
			</label> <label>
				Expires: <select value={expiration} onInput={this.onExpirationChange}>
					<option value="PT1H">1 hour</option>
					<option value="P1D">1 day</option>
					<option value="P7D">1 week</option>
					<option>Never</option>
				</select>
			</label>
			<button class={style.submit} type="submit">Share</button>
			<textarea class={style.full} required onInput={this.onTextareaChange}>{code}</textarea>
		</form>);
	}
}

export default Home;
