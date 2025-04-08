import { Redirects } from '../../modules/redirects.js'
import { Options } from '../../modules/options.js'
import { youtube } from '../../modules/helpers/youtube.js'
import { google } from '../../modules/helpers/google.js'
import { yahoo } from '../../modules/helpers/yahoo.js'
import { bing } from '../../modules/helpers/bing.js'
import { reddit } from '../../modules/helpers/reddit.js'
import { twitter } from '../../modules/helpers/twitter.js'
import { wikipedia } from '../../modules/helpers/wikipedia.js'
import { googleTranslate } from '../../modules/helpers/googleTranslate.js'
import { medium } from '../../modules/helpers/medium.js'
import { youtubeMusic } from '../../modules/helpers/youtubeMusic.js'
import { fandom } from '../../modules/helpers/fandom.js'
import { twitch } from '../../modules/helpers/twitch.js'

const helpers = [
    youtubeMusic,
    youtube,
    googleTranslate,
    google,
    yahoo,
    bing,
    reddit,
    twitter,
    wikipedia,
    medium,
    fandom,
    twitch
]

browser.webRequest.onBeforeRequest.addListener(
    async details => {
        const { url } = details

        if (await Options.isEnabled()) {
            for (const helper of helpers) {
                if (helper.isValidUrl(url)) {
                    const destinationIndex = await Options.getInstanceIndex(
                        helper.key
                    )
                    const redirectUrl = helper.getNewUrl(
                        url,
                        helper.destinations[destinationIndex]
                    )

                    Redirects.increase()

                    return { redirectUrl }
                }
            }
        }
    },
    {
        urls: ['<all_urls>']
    },
    ['blocking']
)
