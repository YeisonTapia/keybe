# Weather App

A simple backend in nodeJs for forecast information.

## installation

```
git clone https://github.com/YeisonTapia/keybe
```

```
npm i
```

Add your environment vars in .env file

```
sequelize db:migrate
```

## Use

```
npm run start
```

*or F5 if you are windows user and vscode*

## Test

```
npm run test
```

```
> ava tests/* --verbose


  √ geocode-tests » GeocodeService#Index
  √ geocode-tests » GeocodeService
  √ weather-tests » weatherService#Index
  √ weather-tests » WeatherService
  √ history-repository-tests » HistoryRepo

  5 tests passed
```

## Lint

```
npm run lint
```

Autofix Lint 
```
npm run lint -- --fix
```

## End Points

#### Get geocoder

`` /api/geocoder/city ``: Get Array with geocodification by city name

response 

```
[
  {
    "id": "place.11964357434232380",
    "type": "Feature",
    "place_type": [
      "place"
    ],
    "relevance": 1,
    "properties": {
      "wikidata": "Q222755"
    },
    "text": "Ibagué",
    "place_name": "Ibagué, Tolima, Colombia",
    "bbox": [
      -75.52471,
      4.258226,
      -74.967171,
      4.699209
    ],
    "center": [
      -75.20056,
      4.43778
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.20056,
        4.43778
      ]
    },
    ...
    ...
```

#### Get weather


`` /api/weather/lat/lng``: Get weather by lat and lng

response 

```
{
  "latitude": 4.4535114,
  "longitude": -75.194808,
  "timezone": "America/Bogota",
  "currently": {
    ...
  },
  ",hourly":{
    ...
  }
  "daily":{
    ...
  }
  ...
```