/**
 * A constant that contains information related to a YouTube Music/Hyperpipe.
 *
 * @constant
 * @name youtubeMusic
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const youtubeMusic = {
    label: 'YouTube Music/Hyperpipe',
    key: 'youtubemusic',
    isValidUrl(url) {
        return /^https?:\/\/music\.youtube\.com/.test(url)
    },
    destinations: [
        'https://hyperpipe.surge.sh',
        'https://hyperpipe.esmailelbob.xyz',
        'https://hyperpipe.lunar.icu',
        'https://hyperpipe.frontendfriendly.xyz',
        'https://music.adminforge.de'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
