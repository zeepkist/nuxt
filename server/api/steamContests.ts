import { type SteamNewsItem } from '~/types/steam.js'

async function getLatestNews() {
    const response = await fetch(
        `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1440670&count=50&maxlength=125&format=json`
    )
    const data = await response.json()

    const filteredData = data.appnews.newsitems.filter(
        (item: any) => item.author === 'Akane'
    )

    return filteredData.slice(0, 5) as SteamNewsItem[]
}

export default defineEventHandler(event => {
    return event.respondWith(
        getLatestNews().then(news => {
            return new Response(JSON.stringify(news), {
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                }
            })
        })
    )
})
