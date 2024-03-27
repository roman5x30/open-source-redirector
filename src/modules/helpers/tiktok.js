/**
 * A constant that contains information related to a TikTok/ProxiTok.
 *
 * @constant
 * @name tiktok
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const tiktok = {
    label: 'TikTok/ProxiTok',
    key: 'tiktok',
    isValidUrl(url) {
        return /^https?:\/\/(www\.)?tiktok\.com/.test(url)
    },
    destinations: [
        'https://proxitok.pabloferreiro.es',
        'https://proxitok.pussthecat.org',
        'https://proxitok.esmailelbob.xyz',
        'https://proxitok.privacydev.net',
        'https://proxitok.lunar.icu',
        'http://proxitok.esmail5pdn24shtvieloeedh7ehz3nrwcdivnfhfcedl7gf4kwddhkqd.onion',
        'http://tok.lpoaj7z2zkajuhgnlltpeqh3zyq7wk2iyeggqaduhgxhyajtdt2j7wad.onion',
        'http://tt.vernccvbvyi5qhfzyqengccj7lkove6bjot2xhh5kajhwvidqafczrad.onion',
        'http://tok.habeehrhadazsw3izbrbilqajalfyqqln54mrja3iwpqxgcuxnus7eid.onion',
        'http://proxitok.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion',
        'http://pt.skunky7dhv7nohsoalpwe3sxfz3fbkad7r3wk632riye25vqm3meqead.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
