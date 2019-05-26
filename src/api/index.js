import config from './config';

const {appKey} = config;
const URL = `http://ws.audioscrobbler.com//2.0/?method=geo.gettopartists&country=:country&api_key=${appKey}&format=json
`;
export function getArtist(country){
    const url = URL.replace(':country',country);
    return fetch(url)
            .then(res => res.json())
            .then(res => res.topartists.artist)

}