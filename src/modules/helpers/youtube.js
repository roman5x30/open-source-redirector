/**
 * A constant that contains information related to a YouTube/Invidious.
 *
 * @constant
 * @name youtube
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const youtube = {
    label: 'YouTube/Invidious',
    key: 'youtube',
    isValidUrl(url) {
        return /^https?:\/\/(((m|www|img)\.)?youtube\.com|youtube-nocookie.com|youtu.be)/.test(
            url
        )
    },
    destinations: [
        'https://yewtu.be',
        'https://vid.puffyan.us',
        'https://invidious.flokinet.to',
        'https://invidious.privacydev.net',
        'https://invidious.nerdvpn.de',
        'http://grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion',
        'http://invidious.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion',
        'http://jemgkaq2xibfu37hm2xojsxoi7djtwb25w6krhl63lhn52xfzgeyc2ad.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        if (location.host === 'youtu.be' && location.pathname) {
            location.searchParams.set('v', location.pathname.slice(1))
            location.pathname = '/watch'
        }

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
