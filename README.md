# Open-Source Redirector

This is a firefox addon to redirect you from proprietary web-sites/applications to their open-sourcer alternative.

## Redirect List

-   YouTube -> Invidious
-   YouTube Music -> Hyperpipe
-   Google -> SearX
-   Google Translate -> Lingva Translate
-   Yahoo -> SearX
-   Bing -> SearX
-   Reddit -> Libreddit
-   Twitter -> Nitter
-   Wikipedia -> Wikiless
-   Medium (and TowardsDataScience) -> Scribe
-   TikTok -> ProxiTok
-   Twitch -> SafeTwitch

## How to Build

If you don't have node modules installed, then run:

```
npm i
```

Then, run this command:

```
npm run prod
```

This script will create `/dist` folder, which will contain compiled build of the extension and `output.zip` that you use to load temporary addon (at this page `about:debugging`), or upload it to the extension market.
