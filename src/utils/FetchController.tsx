import axios from 'axios';

const fetchUrl = import.meta.env.VITE_FETCH_URL;

export function getRaces() {

    const data = axios.get(fetchUrl + 'f1/2026/races').then((res) => res.data)

    if (!data) {
        throw new Error('No data found');
    }

    return data

}