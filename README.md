# RainOrShine
A React/Express application that communicates with Open Weather and Google Places to present
the current weather

## Serve client app
`nx serve client`

## Servce api app
`nx serve api`

### Setting up .env file
The api app needs a .env file at the root of /apps/api with the following values defined
```
PORT=3000
GOOGLE_API_KEY=<YOUR KEY>
OPEN_WEATHER_KEY=<YOUR KEY>
```

## Test libs
`nx test ui`
`nx test client-app`
`nx test api-app`
