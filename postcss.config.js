import PostcssPxToRem from 'postcss-pxtorem'

export default ({ env }) => {
    const isProd = env === 'production'
    const plugins = []

    if (isProd) {
        plugins.push(
            PostcssPxToRem({
                propList: ['*'],
                mediaQuery: true,
            })
        )
    }

    return {
        plugins,
    }
}