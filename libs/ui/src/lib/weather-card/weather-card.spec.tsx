import { render, screen } from '@testing-library/react';

import WeatherCard from './weather-card';

describe('WeatherCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherCard />);
    expect(baseElement).toBeTruthy();
  });

  it('should display weather data if weather is provided', () => {
    const mockWeatherData = {
      temp: 1,
      feelsLike: 2,
      windSpeed: 3,
      weather: {
        main: 'mock1',
        description: 'mock2',
        icon: 'moc3',
        id: 'moc4'
      }
    };

    render(<WeatherCard weather={mockWeatherData} />);
    expect(screen.getByTestId('weather-temp')).toBeTruthy();
    expect(screen.getByTestId('weather-feels-like')).toBeTruthy();
    expect(screen.getByTestId('weather-descr')).toBeTruthy();
    expect(screen.getByTestId('weather-wind')).toBeTruthy();
  })
});
