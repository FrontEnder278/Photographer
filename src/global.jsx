import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import getPublicAssetUrl from '@/utils/getPublicAssetUrl'

export default function (props) {

    const {
        children,
        title,
        url,

    } = props

    return (
        <>
            <Head htmlAttributes={{ lang: 'en' }}>
                <title>Photographer | {title}</title>
                <script src="/src/main.js" type="module" />
                <link rel="apple-touch-icon" sizes="180x180" href={getPublicAssetUrl('apple-touch-icon.png')} />
                <link rel="icon" type="image/png" sizes="32x32" href={getPublicAssetUrl('favicon-32x32.png')} />
                <link rel="icon" type="image/png" sizes="16x16" href={getPublicAssetUrl('favicon-16x16.png')} />
                <link rel="manifest" href={getPublicAssetUrl('site.webmanifest')} />
            </Head>
            <Header url={url} />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}
