class ScrollingContent {
    selectors = {
        root: '[data-js-brands]',
        track: '[data-js-brands-track]',
        inner: '[data-js-brands-inner]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.trackElement = this.rootElement.querySelector(this.selectors.track)
        this.innerElement = this.trackElement?.querySelector(this.selectors.inner)
        this.clone = this.innerElement.cloneNode(true)
        this.clone.setAttribute('aria-hidden', 'true')
        this.clone2 = this.innerElement.cloneNode(true)
        this.clone2.setAttribute('aria-hidden', 'true')
        this.trackElement.append(this.clone, this.clone2)
    }
}

export default ScrollingContent
