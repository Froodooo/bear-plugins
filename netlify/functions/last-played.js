import fetch from 'node-fetch';

export const handler = async () => {
    const LASTFM_API = 'https://ws.audioscrobbler.com';
    const API_KEY = process.env.LASTFM_API_KEY;
    const USER = process.env.LASTFM_USER;
    const ENDPOINT = `${LASTFM_API}/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`;

    const response = await fetch(ENDPOINT);
    const data = await response.json();

    const track = data.recenttracks.track[0];

    console.log(track);

    const result = {
        artist: track.artist['#text'],
        title: track.name,
        url: track.url,
        image: track.image[3]['#text']
    };

    return {
        statusCode: 200,
        headers: {"Access-Control-Allow-Origin": process.env.CORS_ORIGIN},
        body: JSON.stringify(result)
    };
}