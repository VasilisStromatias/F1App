import axios from 'axios';

const fetchUrl = import.meta.env.VITE_FETCH_URL;

export function getRaces() {
    const data = axios.get(fetchUrl + 'f1/2026/races').then((res) => res.data)

    if (!data) {
        throw new Error('No races data found');
    }

    return data
}

export function getStandings(path: string) {
    const data = axios.get(fetchUrl + 'f1/2026/' + path ).then((res) => res.data)

    if (!data) {
        throw new Error('No driver standings data found');
    }

    return data
}
