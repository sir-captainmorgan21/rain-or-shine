export interface CurrentWeather {
  temp: number;
  feelsLike: number;
  windSpeed: number;
  weather: Weather;
}

export interface Weather {
  main: string;
  description: string;
  id: string;
  icon: string;
}