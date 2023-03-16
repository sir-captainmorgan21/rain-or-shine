import express from 'express';
import * as weatherController from '../controllers/weather.controller';

export const router = express.Router();

router.get('/', weatherController.getWeather);