// SPDX-FileCopyrightText: 2023 Konrad Borowski <konrad@borowski.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export default function (config, env) {
    config.output.publicPath = env.production ? '/apibin/' : ''
}
