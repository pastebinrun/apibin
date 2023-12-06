// SPDX-FileCopyrightText: 2023 Konrad Borowski <konrad@borowski.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { h } from 'preact';
import style from './style.module.css';

const Contents = ({ children }) => (<div class={style.contents}>
	{children}
</div>);

export default Contents;
