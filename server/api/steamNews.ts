import { type SteamNewsItem } from '~/types/steam.js'

async function getLatestNews(feed: string) {
    const response = await fetch(
        `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1440670&count=5&maxlength=300&format=json&tags=${feed}`
    )
    const data = await response.json()

    return data.appnews.newsitems as SteamNewsItem[]
}

export default defineEventHandler(event => {
    return event.respondWith(
        getLatestNews('patchnotes').then(news => {
            return new Response(JSON.stringify(news), {
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                }
            })
        })
    )
})
