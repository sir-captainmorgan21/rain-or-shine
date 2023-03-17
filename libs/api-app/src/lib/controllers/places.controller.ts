import { SearchPlace } from "@rain-or-shine/types";
import { Request, Response } from "express";
import { placesService } from '../services';
import { Collection } from "../types";

export const getPlaces = async (req: Request, res: Response) => {

  if (typeof req.query.search === 'string') {
    const searchResults = await placesService.searchPlaces(req.query['search']);

    const response: Collection<SearchPlace> = {
      total: searchResults.length,
      list: searchResults
    }

    res.json(response);
  } else {
    res.status(400).json({
      message: 'Search query must be a string'
    });
  }

};

export const getPlaceById = async(req: Request, res: Response) => {

    const response = await placesService.getPlaceById(req.params.id);

    response ? res.json(response) : res.status(404).json({ message: `Place not found`, placeId: req.params.id });

}

export const placesController = {
  getPlaces,
  getPlaceById
}
