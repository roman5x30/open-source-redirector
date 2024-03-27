/**
 * A constant that contains information related to a Twitter/Nitter.
 *
 * @constant
 * @name twitter
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const twitter = {
    label: 'Twitter/Nitter',
    key: 'twitter',
    isValidUrl(url) {
        return /^https?:\/\/(m\.)?(twitter|x)\.com/.test(url)
    },
    destinations: [
        'https://nitter.net',
        'https://nitter.unixfox.eu',
        'https://nitter.privacydev.net',
        'https://nitter.esmailelbob.xyz',
        'https://nitter.holo-mix.com',
        'http://nitter.l4qlywnpwqsluw65ts7md3khrivpirse744un3x7mlskqauz5pyuzgqd.onion',
        'http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion',
        'http://npf37k3mtzwxreiw52ccs5ay4e6qt2fkcs2ndieurdyn2cuzzsfyfvid.onion'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        location.protocol = destination.protocol
        location.hostname = destination.hostname

        return location.toString()
    }
}
