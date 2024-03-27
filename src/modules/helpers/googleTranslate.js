/**
 * A constant that contains information related to a Google Translate/Lingva Translate.
 *
 * @constant
 * @name googleTranslate
 * @kind variable
 * @type {{ label: string; key: string; isValidUrl(url: string): boolean; destinations: string[]; getNewUrl(url: string, destinationUrl: string): string; }}
 * @exports
 */
export const googleTranslate = {
    label: 'Google Translate/Lingva Translate',
    key: 'googletranslate',
    isValidUrl(url) {
        return /^https?:\/\/(translate\.)?google\.((com(\.(af|ag|ar|au|bd|bh|bn|bo|br|bz|co|cu|cy|do|ec|eg|et|fj|gh|gi|gt|hk|jm|kh|kw|lb|ly|mm|mt|mx|my|na|ng|ni|np|om|pa|pe|pg|ph|pk|pr|py|qa|sa|sb|sg|sl|sv|tj|tr|tw|ua|uy|vc|vn))?|co\.(ao|bw|ck|cr|id|il|in|jp|ke|kr|ls|ma|mz|nz|th|tz|ug|uk|uz|ve|vi|za|zm|zw))|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cd|cf|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|dm|dz|ee|es|fi|fm|fr|ga|ge|gg|gl|gm|gr|gy|hn|hr|ht|hu|ie|im|iq|is|it|je|jo|ki|kg|kz|la|li|lk|lt|lu|lv|md|me|mg|mk|ml|mn|mu|mv|mw|ne|nl|no|nr|nu|pl|pn|ps|pt|ro|ru|rw|sc|se|sh|si|sk|sn|so|sm|sr|st|td|tg|tl|tm|tn|to|tt|vu|ws|rs|cat)/.test(
            url
        )
    },
    destinations: [
        'https://lingva.ml',
        'https://translate.plausibility.cloud',
        'https://lingva.lunar.icu'
    ],
    getNewUrl(url, destinationUrl) {
        const location = new URL(url)
        const destination = new URL(destinationUrl)

        if (!location.search) {
            return destination.origin
        }

        const sourceLang = location.searchParams.get('sl')
        const targetLang = location.searchParams.get('tl')
        const text = location.searchParams.get('text')

        return destination.origin + `/${sourceLang}/${targetLang}/${text}`
    }
}
