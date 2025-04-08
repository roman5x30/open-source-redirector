/**
 * A constant that contains information related to a Twitch/SafeTwitch.
 *
 * @constant
 * @name twitch
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const twitch = {
    label: 'Twitch/SafeTwitch',
    key: 'twitch',
    isValidUrl(url) {
        return /^https?:\/\/(www\.)?twitch\.tv/.test(url)
    },
    destinations: [
        'https://safetwitch.drgns.space/',
        'https://safetwitch.projectsegfau.lt/',
        'https://stream.whateveritworks.org/',
        'https://safetwitch.datura.network/',
        'https://ttv.vern.cc/',
        'https://safetwitch.frontendfriendly.xyz/',
        'https://ttv.femboy.band/',
        'https://twitch.seitan-ayoub.lol/',
        'https://st.ggtyler.dev/',
        'https://safetwitch.lunar.icu/',
        'https://twitch.sudovanilla.org/',
        'https://safetwitch.r4fo.com/',
        'https://safetwitch.ducks.party/',
        'https://safetwitch.nogafam.fr/',
        'https://safetwitch.privacyredirect.com/',
        'https://st.ngn.tf/',
        'https://safetwitch.darkness.services/',
        'https://safetwitch.4o1x5.dev/',
        'https://safetwitch.adminforge.de/'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
