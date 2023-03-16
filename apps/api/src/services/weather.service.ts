import { openWeatherProvider } from '../providers/open-weather.provider';
import { CurrentWeather } from '../types';

const getWeatherByLatLong = async (lat: number, lon: number): Promise<CurrentWeather> | null => {

  if (!lat || !lon) {
    return null;
  }
  
  const openWeatherResponse = await openWeatherProvider.getWeather({lat, lon});

  if (!openWeatherResponse) return null;

  const currentWeather: CurrentWeather = {
    temp: openWeatherResponse.main.temp,
    feelsLike: openWeatherResponse.main.feels_like,
    windSpeed: openWeatherResponse.wind.speed,
    weather: openWeatherResponse.weather
  }

  return currentWeather;

}

export const weatherService = {
  getWeatherByLatLong
}