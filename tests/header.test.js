// SPDX-FileCopyrightText: 2017 Preact CLI Templates
// SPDX-FileCopyrightText: 2023 Konrad Borowski <konrad@borowski.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-License-Identifier: MIT

import { h } from 'preact';
import { Link } from 'preact-router/match';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find(Link).length).toBe(3);
	});
});
