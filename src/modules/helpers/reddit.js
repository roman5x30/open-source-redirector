/**
 * A constant that contains information related to a Reddit/Libreddit.
 *
 * @constant
 * @name reddit
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const reddit = {
    label: 'Reddit/Libreddit',
    key: 'reddit',
    isValidUrl(url) {
        return /^https?:\/\/(((old|www)\.)?reddit\.com|redd\.it)/.test(url)
    },
    destinations: [
        'https://reddit.invak.id',
        'https://libreddit.bus-hit.me',
        'https://libreddit.privacydev.net',
        'https://libreddit.pussthecat.org',
        'http://libreddit.esmail5pdn24shtvieloeedh7ehz3nrwcdivnfhfcedl7gf4kwddhkqd.onion',
        'http://lr.lpoaj7z2zkajuhgnlltpeqh3zyq7wk2iyeggqaduhgxhyajtdt2j7wad.onion',
        'http://snoo.habeehrhadazsw3izbrbilqajalfyqqln54mrja3iwpqxgcuxnus7eid.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
