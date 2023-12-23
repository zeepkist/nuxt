const appId = '1440670'

async function getGameDetails() {
    const response = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${appId}&filters=basic,price_overview,background`
    )
    const data = await response.json()

    return data[appId].data
}

export default defineEventHandler(event => {
    return event.respondWith(
        getGameDetails().then(news => {
            return new Response(JSON.stringify(news), {
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                }
            })
        })
    )
})
