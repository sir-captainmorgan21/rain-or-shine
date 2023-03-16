export interface OWWeatherRequest {
  lat: number;
  lon: number;
  appid: string;
  units: OWWeatherUnit;
}

export type OWWeatherUnit = 'metric' | 'imperial' | 'standard';