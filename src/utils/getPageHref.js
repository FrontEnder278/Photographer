const getPageHref = (page = '') => {
    const pagePath = page.replace(/^\/+/, '').replace(/\.html$/, '')
    const extension = import.meta.env.DEV || !pagePath ? '' : '.html'

    return `${import.meta.env.BASE_URL}${pagePath}${extension}`
}

export default getPageHref
