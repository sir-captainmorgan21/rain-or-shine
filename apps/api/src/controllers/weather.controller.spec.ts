import { AddressGeometry, PlaceData } from '@googlemaps/google-maps-services-js';
import { Request, Response } from 'express';
import { placesService, weatherService } from '../services';
import { CurrentWeather } from "../types";
import { weatherController } from './weather.controller';

describe('weatherController', () => {
  it('should return weather response if request is valid', async () => {
    const mockCurrentWeather: CurrentWeather = {
      temp: 1,
      feelsLike: 1,
      windSpeed: 1,
      weather: {
        main: 'mock',
        description: 'mock',
        icon: 'mock',
        id: 'mock'
      }
    };

    jest.spyOn(weatherService, 'getWeatherByLatLong').mockResolvedValue(mockCurrentWeather);

    const mockPlaceData: Partial<PlaceData> = { geometry: { location: { lat: 1, lng: 2 } } as AddressGeometry }

    jest.spyOn(placesService, 'getPlaceById').mockResolvedValue(mockPlaceData);

    const req: Partial<Request> = { query: { placeId: '12345' } };
    const res: Partial<Response> = { json: jest.fn() };
    jest.spyOn(res, 'json');
    await weatherController.getWeather(req as Request, res as Response);
    expect(res.json).toHaveBeenCalledWith(mockCurrentWeather);
  });

  it('should return 400 if placeid is not a string', async () => {
    const req: Partial<Request> = { query: { placeId: ['12345'] } };
    const res: Partial<Response> = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    jest.spyOn(res, 'status');
    await weatherController.getWeather(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should return 400 if the placeid provided does not exist', async () => {
    jest.spyOn(placesService, 'getPlaceById').mockResolvedValue(null);
    const req: Partial<Request> = { query: { placeId: '12345' } };
    const res: Partial<Response> = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    jest.spyOn(res, 'status');
    await weatherController.getWeather(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});