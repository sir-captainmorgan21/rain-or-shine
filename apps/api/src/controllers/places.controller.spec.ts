import { Request, Response } from 'express';
import { placesService } from '../services';
import { placesController } from './places.controller';

describe('placesController', () => {
  describe('getPlaces', () => {
    it('should return a reponse with results if provided a valid request', async () => {

      const mockPlaces = [
        {
          description: 'Virginia Beach, VA, USA',
          id: 'ChIJpycV_OjBuokRcwEuo4AQFgQ'
        },
        {
          description: 'Virginia Beach, ON, Canada',
          id: 'ChIJSbFbznVO1YkRuP8pHM7ext4'
        }
      ];

      jest.spyOn(placesService, 'searchPlaces').mockResolvedValue(mockPlaces);

      const req: Partial<Request> = { query: { search: 'Virginia Beach' } };
      const res: Partial<Response> = { json: jest.fn() };
      jest.spyOn(res, 'json');
      await placesController.getPlaces(req as Request, res as Response);     
      expect(res.json).toHaveBeenCalledWith({ total: mockPlaces.length, list: mockPlaces });
    });

    it('should return 400 if provided an invalid reuqest', async () => {
      const req: Partial<Request> = { query: { search: ['Virginia Beach', 'Richmond'] } };
      const res: Partial<Response> = { json: jest.fn(), status: jest.fn().mockReturnThis() };
      jest.spyOn(res, 'json');
      await placesController.getPlaces(req as Request, res as Response);     
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('getPlaceById', () => {
    it('should return place details if place is found', async () => {

      const mockPlaceData = { name: 'Virginia Beach' }

      jest.spyOn(placesService, 'getPlaceById').mockResolvedValue(mockPlaceData);

      const req: Partial<Request> = { params: { id: '123' } };
      const res: Partial<Response> = { json: jest.fn() };
      jest.spyOn(res, 'json');
      await placesController.getPlaceById(req as Request, res as Response);
      expect(res.json).toHaveBeenCalledWith(mockPlaceData);
    });

    it('should return 404 if an invalid place id is provided', async () => {

      jest.spyOn(placesService, 'getPlaceById').mockResolvedValue(null);

      const req: Partial<Request> = { params: { id: '123' } };
      const res: Partial<Response> = { json: jest.fn(), status: jest.fn().mockReturnThis() };
      jest.spyOn(res, 'json');
      await placesController.getPlaceById(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(404);
    });
    
  });
});