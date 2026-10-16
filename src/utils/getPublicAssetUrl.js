const getPublicAssetUrl = (path) => {
    const assetBase = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL
    return `${assetBase}${path.replace(/^\/+/, '')}`
}

export default getPublicAssetUrl
