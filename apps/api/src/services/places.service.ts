import { Client, PlaceAutocompleteResult, PlaceAutocompleteType, PlaceData } from "@googlemaps/google-maps-services-js";
import { SearchPlace } from "../types";

export const client = new Client();
const googleAPIKey = process.env.GOOGLE_API_KEY;

const baseParams = {
  key: googleAPIKey
}

export const searchPlaces = async (input: string): Promise<SearchPlace[]> => {

  if (input) {
    const response = await client.placeAutocomplete({
      params: {
        ...baseParams,
        input,
        types: PlaceAutocompleteType.cities
      }
    });
  
    return response.data.predictions.map((result: PlaceAutocompleteResult) => {
      return {
        description: result.description,
        id: result.place_id
      }
    })
  } else {
    return [];
  }

}

export const getPlaceById = async (placeId: string): Promise<Partial<PlaceData>> | null => {
  try {
    const response = await client.placeDetails({
      params: {
        ...baseParams,
        place_id: placeId
      }
    });
    return response.data.result;
  } catch(err) {
    return null;
  }
}

export const placesService = {
  searchPlaces,
  getPlaceById
}