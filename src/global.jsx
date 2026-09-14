import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

export default function (props) {

    const {
        children,
        title,
        url,

    } = props

    const baseUrl = import.meta.env.BASE_URL

    return (
        <>
            <Head htmlAttributes={{ lang: 'en' }}>
                <title>Photographer | {title}</title>
                <script src="/src/main.js" type="module" />
                <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}apple-touch-icon.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}favicon-32x32.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}favicon-16x16.png`} />
                <link rel="manifest" href={`${baseUrl}site.webmanifest`} />
            </Head>
            <Header url={url} />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}
