import { PlaceData } from "@googlemaps/google-maps-services-js";
import { Request, Response } from "express";
import { placesService } from '../services/places.service';
import { weatherService } from '../services/weather.service';

export const getWeather = async (req: Request, res: Response) => {
  
  if (typeof req.query.placeId === 'string') {
    const place: Partial<PlaceData> = await placesService.getPlaceById(req.query.placeId);

    if (place) {
      const location = place.geometry.location;
      const response = await weatherService.getWeatherByLatLong(location.lat, location.lng);
  
      if (!response) {
        res.status(404).json({
          message: 'Weather not found for for place',
          placeId: req.query.placeId
        });
      }

      res.json(response);
    } else {
      res.status(400).json({
        message: 'Invalid placeId. Place not found',
        placeId: req.query.placeId
      });
    }
  } else {
    res.status(400).json({
      message: 'Place Id must be a string'
    });
  }
}

export const weatherController = {
  getWeather
}