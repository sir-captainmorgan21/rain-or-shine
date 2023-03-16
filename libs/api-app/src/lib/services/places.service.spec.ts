import { PlaceAutocompleteResponse, PlaceAutocompleteResponseData, PlaceData, PlaceDetailsResponse, PlaceDetailsResponseData } from "@googlemaps/google-maps-services-js";
import { client, placesService } from "./places.service";

describe('placesService', () => {
  describe('searchPlaces', () => {
    it('should return found places if input is provided', async () => {
      const mockPlacesResponse: Partial<PlaceAutocompleteResponse> = {
        data: {
          predictions: [
            {
              description: 'Testing123',
              place_id: '12345'
            }
          ]
        } as PlaceAutocompleteResponseData
      };
      jest.spyOn(client, 'placeAutocomplete').mockResolvedValue(mockPlacesResponse as PlaceAutocompleteResponse);
  
      const mockDataPrediction = mockPlacesResponse.data.predictions[0];
      const result = await placesService.searchPlaces('Virginia Beach')
      expect(result).toStrictEqual([{ description: mockDataPrediction.description, id: mockDataPrediction.place_id }]);
    });
  
    it('should return empty array if input is falsey', async () => {
      const result = await placesService.searchPlaces(undefined);
      expect(result).toStrictEqual([]);
    });
  });

  describe('getPlaceById', () => {
    it('should return place data if place is found', async () => {
      const mockPlaceDetails: Partial<PlaceDetailsResponse> = {
        data: {
          result: { name: 'Virginia Beach' } as PlaceData
        } as PlaceDetailsResponseData
      };
      jest.spyOn(client, 'placeDetails').mockResolvedValue(mockPlaceDetails as PlaceDetailsResponse);

      const result = await placesService.getPlaceById('123');
      expect(result).toStrictEqual(mockPlaceDetails.data.result);
    });

    it('should return null if place is not found', async () => {
      jest.spyOn(client, 'placeDetails').mockRejectedValue('');
      const result = await placesService.getPlaceById('123');
      expect(result).toBe(null);
    });
  });
});