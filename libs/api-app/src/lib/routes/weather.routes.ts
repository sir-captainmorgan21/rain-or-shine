import express from 'express';
import * as weatherController from '../controllers/weather.controller';

export const weatherRouter = express.Router();

weatherRouter.get('/', weatherController.getWeather);