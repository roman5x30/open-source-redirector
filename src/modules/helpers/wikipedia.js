/**
 * A constant that contains information related to a Wikipedia/Wikiless.
 *
 * @constant
 * @name wikipedia
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const wikipedia = {
    label: 'Wikipedia/Wikiless',
    key: 'wikipedia',
    isValidUrl(url) {
        return /^https?:\/\/((www|en|bg|sr|el|de|es|fr|hu|pl|ro|tr|ka|es|fr|pt|zh|pdc|es|fr|haw|kl|lad|nl|pt|srn|vec|yi|ady|ru|sah|kk|az|es|ku|lad|pt|kab|tly|tr|diq|yi|hyw|hy|ur|ary|ar|azb|fa|mzn|arz|pnb|ps|glk|ru|tly|mr|ml|es|pt|zh|ace|id|ban|bug|jv|pt|tet|tpi)\.)?wikipedia\.org/.test(
            url
        )
    },
    destinations: [
        'https://wikiless.northboot.xyz',
        'https://wiki.froth.zone',
        'https://wikiless.tiekoetter.com',
        'https://wikiless.lunar.icu',
        'https://wikiless.org',
        'http://ybgg2evrcdz37y2qes23ff3wjqjdn33tthgoagi76vhxytu4mpxiz5qd.onion',
        'http://c2pesewpalbi6lbfc5hf53q4g3ovnxe4s7tfa6k2aqkf7jd7a7dlz5ad.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)
        const host = location.host.split('.')
        let lang = 'en'

        if (host.length > 2 && host[0] !== 'www') {
            lang = host[0]
        }

        location.protocol = destination.protocol
        location.hostname = destination.hostname
        location.search = '?lang=' + lang

        return location.toString()
    }
}
