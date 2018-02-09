import axios from 'axios'
const API_KEY = '8dd00420e423335104886d9d00823a9d'


const main_url=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function getData(city){

    const url =`${main_url}&q=${city},in`;
    const request = axios.get(url); 


    return{
        type: FETCH_WEATHER,
        payload: request

    };
}