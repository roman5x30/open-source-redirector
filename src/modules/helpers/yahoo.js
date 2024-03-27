import { searxng } from './searxng.js'

/**
 * A constant that contains information related to a Yahoo/SearXNG.
 *
 * @constant
 * @name yahoo
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const yahoo = {
    label: 'Yahoo/SearXNG',
    key: 'yahoo',
    isValidUrl(url) {
        return /https?:\/\/((images|video|news)\.)?search\.yahoo\.com/.test(url)
    },
    destinations: searxng,
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)
        const query = location.searchParams.get('p')
        let category = 'general'

        switch (true) {
            case location.host.startsWith('images.'):
                category = 'images'
                break
            case location.host.startsWith('video.'):
                category = 'videos'
                break
            case location.host.startsWith('news.'):
                category = 'news'
                break
        }

        return destination.origin + `/search?q=${query}&categories=${category}`
    }
}
