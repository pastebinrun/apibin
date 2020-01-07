export default function (config, env) {
    config.output.publicPath = env.production ? '/apibin/' : ''
}
