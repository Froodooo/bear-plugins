import fetch from 'node-fetch'

export const handler = async () => {
    const LASTFM_API = 'https://ws.audioscrobbler.com'
    const API_KEY = process.env.LASTFM_API_KEY
    const USER = process.env.LASTFM_USER
    const ENDPOINT = `${LASTFM_API}/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`

    const response = await fetch(ENDPOINT)
    const data = await response.json()

    const track = data.recenttracks.track[0]

    const result = {
        artist: track.artist['#text'],
        name: track.name,
        url: track.url
    }

    return {
        statusCode: 200,
        headers: {"Access-Control-Allow-Origin": "*"},
        body: JSON.stringify(result)
    }
}