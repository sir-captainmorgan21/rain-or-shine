import { openWeatherProvider } from "../providers/open-weather.provider";
import { weatherService } from "./weather.service";

describe('weatherService', () => {
  describe('getWeatherByLatLong', () => {
    it('should return weather data if lat long is provided', async () => {
      const mockOpenWeatherResponse = {
        main: {
          temp: 1,
          feels_like: 1,
        },
        wind: {
          speed: 1
        },
        weather: [{}]
      }
      jest.spyOn(openWeatherProvider, 'getWeather').mockResolvedValue(mockOpenWeatherResponse);
  
      const result = await weatherService.getWeatherByLatLong(1, 1);
      expect(result).toStrictEqual({
        temp: mockOpenWeatherResponse.main.temp,
        feelsLike: mockOpenWeatherResponse.main.feels_like,
        windSpeed: mockOpenWeatherResponse.wind.speed,
        weather: mockOpenWeatherResponse.weather[0]
      });
    });

    it('should return null if lat or lon are not provided', async () => {
      const result1 = await weatherService.getWeatherByLatLong(1, null);
      const result2 = await weatherService.getWeatherByLatLong(null, 1);
      expect(result1).toBe(null);
      expect(result2).toBe(null);
    });
  });
});