/**
 * A constant that contains information related to a Fandom/Breeze Wiki.
 *
 * @constant
 * @name fandom
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const fandom = {
    label: 'Fandom/Breeze Wiki',
    key: 'fandom',
    isValidUrl(url) {
        return /^https?:\/\/(www\.)?fandom\.com/.test(url)
    },
    destinations: [
        'https://breezewiki.com',
        'https://antifandom.com',
        'https://breezewiki.pussthecat.org',
        'https://breezewiki.catsarch.com',
        'https://breezewiki.hyperreal.coffee'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)
        const { currentWiki } = (
            location.host.match(/^(?<currentWiki>(?!www).*?)\.fandom\.com/) ?? {
                groups: { currentWiki: '' }
            }
        ).groups

        location.protocol = destination.protocol
        location.host = destination.host
        location.pathname = currentWiki
            ? currentWiki + location.pathname
            : location.pathname

        return location.toString()
    }
}
