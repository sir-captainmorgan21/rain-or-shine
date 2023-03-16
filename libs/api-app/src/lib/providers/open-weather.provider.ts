import got from 'got-cjs';
import { OWWeatherRequest } from '../types';

const OPEN_WEATHER_API_ROOT = 'https://api.openweathermap.org/data/2.5';
const REQUEST_BASE: Pick<OWWeatherRequest, "units" | "appid"> = {
  appid: process.env.OPEN_WEATHER_KEY,
  units: 'imperial'
}

export const getWeather = async (request: Pick<OWWeatherRequest, "lat" | "lon">) => {
  try {
    const response = await got.get(`${OPEN_WEATHER_API_ROOT}/weather`, {
      searchParams: { ...request, ...REQUEST_BASE }
    })

    return JSON.parse(response.body);
  } catch(err) {
    console.log(err);
    return null;
  }
}

export const openWeatherProvider = {
  getWeather
};