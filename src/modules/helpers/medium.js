/**
 * A constant that contains information related to a Medium/Scribe.
 *
 * @constant
 * @name medium
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const medium = {
    label: 'Medium/Scribe',
    key: 'medium',
    isValidUrl(url) {
        return /^https?:\/\/(medium|towardsdatascience)\.com(?!\/$)/.test(url)
    },
    destinations: [
        'https://scribe.rip',
        'https://scribe.bus-hit.me',
        'https://scribe.froth.zone',
        'https://scribe.privacydev.net',
        'http://w7uhv5lxhgck72hhimdglmusc54t4m6bionlmd5mvyddq3bs53mohqid.onion',
        'http://scribe.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion',
        'http://umxccfmp4gyfllsdlzkrnhpd3lxlf4necjolrz22yzcrgwflbrzgtiad.onion',
        'http://scribe.r4focoma7gu2zdwwcjjad47ysxt634lg73sxmdbkdozanwqslho5ohyd.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
