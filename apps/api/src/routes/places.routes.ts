import express from 'express';
import { placesController } from '../controllers/places.controller';

export const router = express.Router();

router.get('/', placesController.getPlaces);
router.get('/:id', placesController.getPlaceById);