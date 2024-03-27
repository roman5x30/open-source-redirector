import { searxng } from './searxng.js'

/**
 * A constant that contains information related to a Bing/SearXNG.
 *
 * @constant
 * @name bing
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const bing = {
    label: 'Bing/SearXNG',
    key: 'bing',
    isValidUrl(url) {
        return /https?:\/\/(www\.)?bing\.com((\/(images|videos|news))?\/search|\/maps)/.test(
            url
        )
    },
    destinations: searxng,
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)
        const query = location.searchParams.get('q')
        let category = 'general'

        switch (true) {
            case location.pathname.includes('images'):
                category = 'images'
                break
            case location.pathname.includes('videos'):
                category = 'videos'
                break
            case location.pathname.includes('news'):
                category = 'news'
                break
            case location.pathname.includes('maps'):
                category = 'map'
                break
        }

        return destination.origin + `/search?q=${query}&categories=${category}`
    }
}
