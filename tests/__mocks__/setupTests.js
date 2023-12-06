// SPDX-FileCopyrightText: 2017 Preact CLI Templates
//
// SPDX-License-Identifier: MIT

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({
	adapter: new Adapter()
});
