import * as dotenv from 'dotenv';
import express from 'express';
import { router as placesRouter } from './routes/places.routes';
import { router as weatherRouter } from './routes/weather.routes';
dotenv.config();

const app = express();


app.use((req, res, next) => {
  console.log(req.path, req.query, req.method);
  next();
});

app.use('/api/places', placesRouter);
app.use('/api/weather', weatherRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
