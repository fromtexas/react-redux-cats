import axios from 'axios';

const URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';

export const getCats = (location) => {
    //const encodedLocation = encodeURIComponent(location);
    //const requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${KEY}`;

    return axios.get(URL).then(
    (res) => {
        return res.data;
    },(res) => {
        throw new Error(res);
    });
};