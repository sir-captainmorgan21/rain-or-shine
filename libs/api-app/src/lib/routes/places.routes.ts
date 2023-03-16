import express from 'express';
import { placesController } from '../controllers/places.controller';

export const placesRouter = express.Router();

placesRouter.get('/', placesController.getPlaces);
placesRouter.get('/:id', placesController.getPlaceById);