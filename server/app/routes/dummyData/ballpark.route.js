var router = require('express').Router();
module.exports = router;

router.get('/', function (req, res) {
  res.send(data);
});

var data = [
  {
    "StadiumID": 1,
    "Active": true,
    "Name": "PETCO Park",
    "City": "San Diego",
    "State": "CA",
    "Country": "USA",
    "Capacity": 41164,
    "Surface": "Grass",
    "LeftField": 334,
    "MidLeftField": 351,
    "LeftCenterField": 367,
    "MidLeftCenterField": 402,
    "CenterField": 396,
    "MidRightCenterField": 403,
    "RightCenterField": 378,
    "MidRightField": 351,
    "RightField": 322,
    "GeoLat": 32.70771,
    "GeoLong": -117.157097,
    "Altitude": 14,
    "HomePlateDirection": 180
  },
  {
    "StadiumID": 2,
    "Active": true,
    "Name": "Turner Field",
    "City": "Atlanta",
    "State": "GA",
    "Country": "USA",
    "Capacity": 49586,
    "Surface": "Grass",
    "LeftField": 335,
    "MidLeftField": 360,
    "LeftCenterField": 380,
    "MidLeftCenterField": 394,
    "CenterField": 401,
    "MidRightCenterField": 394,
    "RightCenterField": 390,
    "MidRightField": 358,
    "RightField": 330,
    "GeoLat": 33.734805,
    "GeoLong": -84.389996,
    "Altitude": 939,
    "HomePlateDirection": 150
  },
  {
    "StadiumID": 3,
    "Active": true,
    "Name": "Salt River Fields at Talking Stick",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 4,
    "Active": true,
    "Name": "Cubs Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 5,
    "Active": true,
    "Name": "JetBlue Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 6,
    "Active": true,
    "Name": "Hammond Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 7,
    "Active": true,
    "Name": "Peoria Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 8,
    "Active": true,
    "Name": "Citi Field",
    "City": "New York",
    "State": "NY",
    "Country": "USA",
    "Capacity": 41922,
    "Surface": "Grass",
    "LeftField": 335,
    "MidLeftField": 371,
    "LeftCenterField": 384,
    "MidLeftCenterField": 394,
    "CenterField": 408,
    "MidRightCenterField": 415,
    "RightCenterField": 378,
    "MidRightField": 372,
    "RightField": 330,
    "GeoLat": 40.756337,
    "GeoLong": -73.846043,
    "Altitude": 13,
    "HomePlateDirection": 165
  },
  {
    "StadiumID": 9,
    "Active": true,
    "Name": "State Mutual Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 10,
    "Active": true,
    "Name": "Progressive Field",
    "City": "Cleveland",
    "State": "OH",
    "Country": "USA",
    "Capacity": 37675,
    "Surface": "Grass",
    "LeftField": 325,
    "MidLeftField": 369,
    "LeftCenterField": 368,
    "MidLeftCenterField": 385,
    "CenterField": 405,
    "MidRightCenterField": 388,
    "RightCenterField": 375,
    "MidRightField": 364,
    "RightField": 325,
    "GeoLat": 41.496192,
    "GeoLong": -81.685238,
    "Altitude": 673,
    "HomePlateDirection": 180
  },
  {
    "StadiumID": 11,
    "Active": true,
    "Name": "NL City",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 12,
    "Active": true,
    "Name": "TBD",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 13,
    "Active": true,
    "Name": "AT&amp;T Park",
    "City": "San Francisco",
    "State": "CA",
    "Country": "USA",
    "Capacity": 41915,
    "Surface": "Grass",
    "LeftField": 339,
    "MidLeftField": 346,
    "LeftCenterField": 382,
    "MidLeftCenterField": 389,
    "CenterField": 399,
    "MidRightCenterField": 399,
    "RightCenterField": 421,
    "MidRightField": 368,
    "RightField": 309,
    "GeoLat": 37.778473,
    "GeoLong": -122.389595,
    "Altitude": 8,
    "HomePlateDirection": 90
  },
  {
    "StadiumID": 14,
    "Active": true,
    "Name": "Target Field",
    "City": "Minneapolis",
    "State": "MN",
    "Country": "USA",
    "Capacity": 39021,
    "Surface": "Grass",
    "LeftField": 339,
    "MidLeftField": 355,
    "LeftCenterField": 377,
    "MidLeftCenterField": 390,
    "CenterField": 404,
    "MidRightCenterField": 392,
    "RightCenterField": 367,
    "MidRightField": 344,
    "RightField": 328,
    "GeoLat": 44.981713,
    "GeoLong": -93.277347,
    "Altitude": 840,
    "HomePlateDirection": 105
  },
  {
    "StadiumID": 15,
    "Active": true,
    "Name": "McKechnie Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 16,
    "Active": true,
    "Name": "Louisville Slugger Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 17,
    "Active": true,
    "Name": "Champion Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 18,
    "Active": true,
    "Name": "Tropicana Field",
    "City": "St. Petersburg",
    "State": "FL",
    "Country": "USA",
    "Capacity": 31042,
    "Surface": "AstroTurf",
    "LeftField": 315,
    "MidLeftField": 354,
    "LeftCenterField": 370,
    "MidLeftCenterField": 410,
    "CenterField": 404,
    "MidRightCenterField": 404,
    "RightCenterField": 370,
    "MidRightField": 342,
    "RightField": 322,
    "GeoLat": 27.76816,
    "GeoLong": -82.653465,
    "Altitude": 41,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 19,
    "Active": true,
    "Name": "Miller Park",
    "City": "Milwaukee",
    "State": "WI",
    "Country": "USA",
    "Capacity": 41900,
    "Surface": "Grass",
    "LeftField": 344,
    "MidLeftField": 359,
    "LeftCenterField": 370,
    "MidLeftCenterField": 379,
    "CenterField": 400,
    "MidRightCenterField": 386,
    "RightCenterField": 374,
    "MidRightField": 354,
    "RightField": 345,
    "GeoLat": 43.027982,
    "GeoLong": -87.971165,
    "Altitude": 602,
    "HomePlateDirection": 45
  },
  {
    "StadiumID": 20,
    "Active": true,
    "Name": "AutoZone Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 21,
    "Active": true,
    "Name": "Globe Life Park in Arlington",
    "City": "Arlington",
    "State": "TX",
    "Country": "USA",
    "Capacity": 48114,
    "Surface": "Grass",
    "LeftField": 354,
    "MidLeftField": 357,
    "LeftCenterField": 390,
    "MidLeftCenterField": 406,
    "CenterField": 400,
    "MidRightCenterField": 407,
    "RightCenterField": 379,
    "MidRightField": 356,
    "RightField": 349,
    "GeoLat": 32.751147,
    "GeoLong": -97.082454,
    "Altitude": 549,
    "HomePlateDirection": 45
  },
  {
    "StadiumID": 22,
    "Active": true,
    "Name": "Oriole Park at Camden Yards",
    "City": "Baltimore",
    "State": "MD",
    "Country": "USA",
    "Capacity": 45971,
    "Surface": "Grass",
    "LeftField": 333,
    "MidLeftField": 368,
    "LeftCenterField": 364,
    "MidLeftCenterField": 378,
    "CenterField": 410,
    "MidRightCenterField": 400,
    "RightCenterField": 373,
    "MidRightField": 341,
    "RightField": 318,
    "GeoLat": 39.283964,
    "GeoLong": -76.621618,
    "Altitude": 35,
    "HomePlateDirection": 150
  },
  {
    "StadiumID": 23,
    "Active": true,
    "Name": "O.co Coliseum",
    "City": "Oakland",
    "State": "CA",
    "Country": "USA",
    "Capacity": 35067,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 367,
    "LeftCenterField": 362,
    "MidLeftCenterField": 388,
    "CenterField": 400,
    "MidRightCenterField": 388,
    "RightCenterField": 362,
    "MidRightField": 367,
    "RightField": 330,
    "GeoLat": 37.751605,
    "GeoLong": -122.200523,
    "Altitude": 0,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 24,
    "Active": true,
    "Name": "Florida Auto Exchange Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 25,
    "Active": true,
    "Name": "U.S. Cellular Field",
    "City": "Chicago",
    "State": "IL",
    "Country": "USA",
    "Capacity": 40615,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 365,
    "LeftCenterField": 377,
    "MidLeftCenterField": 385,
    "CenterField": 400,
    "MidRightCenterField": 385,
    "RightCenterField": 372,
    "MidRightField": 365,
    "RightField": 335,
    "GeoLat": 41.829908,
    "GeoLong": -87.63354,
    "Altitude": 594,
    "HomePlateDirection": 45
  },
  {
    "StadiumID": 26,
    "Active": true,
    "Name": "Olympic Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 27,
    "Active": true,
    "Name": "Wrigley Field",
    "City": "Chicago",
    "State": "IL",
    "Country": "USA",
    "Capacity": 40929,
    "Surface": "Grass",
    "LeftField": 355,
    "MidLeftField": 356,
    "LeftCenterField": 368,
    "MidLeftCenterField": 391,
    "CenterField": 400,
    "MidRightCenterField": 397,
    "RightCenterField": 368,
    "MidRightField": 356,
    "RightField": 353,
    "GeoLat": 41.947856,
    "GeoLong": -87.655887,
    "Altitude": 599,
    "HomePlateDirection": 150
  },
  {
    "StadiumID": 28,
    "Active": true,
    "Name": "Angel Stadium of Anaheim",
    "City": "Anaheim",
    "State": "CA",
    "Country": "USA",
    "Capacity": 43250,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 348,
    "LeftCenterField": 376,
    "MidLeftCenterField": 387,
    "CenterField": 408,
    "MidRightCenterField": 383,
    "RightCenterField": 362,
    "MidRightField": 359,
    "RightField": 330,
    "GeoLat": 33.799925,
    "GeoLong": -117.883194,
    "Altitude": 154,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 29,
    "Active": true,
    "Name": "PNC Park",
    "City": "Pittsburgh",
    "State": "PA",
    "Country": "USA",
    "Capacity": 38362,
    "Surface": "Grass",
    "LeftField": 325,
    "MidLeftField": 370,
    "LeftCenterField": 389,
    "MidLeftCenterField": 410,
    "CenterField": 399,
    "MidRightCenterField": 393,
    "RightCenterField": 375,
    "MidRightField": 353,
    "RightField": 320,
    "GeoLat": 40.447307,
    "GeoLong": -80.006841,
    "Altitude": 724,
    "HomePlateDirection": 60
  },
  {
    "StadiumID": 30,
    "Active": true,
    "Name": "Tradition Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 31,
    "Active": true,
    "Name": "Dodger Stadium",
    "City": "Los Angeles",
    "State": "CA",
    "Country": "USA",
    "Capacity": 56000,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 380,
    "LeftCenterField": 385,
    "MidLeftCenterField": 390,
    "CenterField": 395,
    "MidRightCenterField": 390,
    "RightCenterField": 385,
    "MidRightField": 380,
    "RightField": 330,
    "GeoLat": 34.072724,
    "GeoLong": -118.240646,
    "Altitude": 501,
    "HomePlateDirection": 150
  },
  {
    "StadiumID": 32,
    "Active": true,
    "Name": "Tempe Diablo Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 33,
    "Active": true,
    "Name": "Kauffman Stadium",
    "City": "Kansas City",
    "State": "MO",
    "Country": "USA",
    "Capacity": 37903,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 351,
    "LeftCenterField": 387,
    "MidLeftCenterField": 390,
    "CenterField": 410,
    "MidRightCenterField": 390,
    "RightCenterField": 387,
    "MidRightField": 351,
    "RightField": 330,
    "GeoLat": 39.051098,
    "GeoLong": -94.481115,
    "Altitude": 886,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 34,
    "Active": true,
    "Name": "Roger Dean Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 35,
    "Active": true,
    "Name": "Yankee Stadium",
    "City": "New York",
    "State": "NY",
    "Country": "USA",
    "Capacity": 49642,
    "Surface": "Grass",
    "LeftField": 318,
    "MidLeftField": 357,
    "LeftCenterField": 399,
    "MidLeftCenterField": 400,
    "CenterField": 408,
    "MidRightCenterField": 396,
    "RightCenterField": 385,
    "MidRightField": 346,
    "RightField": 314,
    "GeoLat": 40.829327,
    "GeoLong": -73.927735,
    "Altitude": 11,
    "HomePlateDirection": 105
  },
  {
    "StadiumID": 36,
    "Active": true,
    "Name": "Montgomery Riverwalk Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 37,
    "Active": true,
    "Name": "Harbor Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 38,
    "Active": true,
    "Name": "Osceola County Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 39,
    "Active": true,
    "Name": "Bright House Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 40,
    "Active": true,
    "Name": "Sydney Cricket Ground",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 41,
    "Active": true,
    "Name": "Busch Stadium",
    "City": "St. Louis",
    "State": "MO",
    "Country": "USA",
    "Capacity": 43975,
    "Surface": "Grass",
    "LeftField": 336,
    "MidLeftField": 354,
    "LeftCenterField": 390,
    "MidLeftCenterField": 392,
    "CenterField": 400,
    "MidRightCenterField": 392,
    "RightCenterField": 390,
    "MidRightField": 354,
    "RightField": 335,
    "GeoLat": 38.622317,
    "GeoLong": -90.193891,
    "Altitude": 438,
    "HomePlateDirection": 120
  },
  {
    "StadiumID": 42,
    "Active": true,
    "Name": "Rogers Centre",
    "City": "Toronto",
    "State": "ON",
    "Country": "Canada",
    "Capacity": 49282,
    "Surface": "AstroTurf",
    "LeftField": 328,
    "MidLeftField": 348,
    "LeftCenterField": 375,
    "MidLeftCenterField": 391,
    "CenterField": 400,
    "MidRightCenterField": 391,
    "RightCenterField": 375,
    "MidRightField": 348,
    "RightField": 328,
    "GeoLat": 43.641111,
    "GeoLong": -79.389675,
    "Altitude": 268,
    "HomePlateDirection": 210
  },
  {
    "StadiumID": 43,
    "Active": true,
    "Name": "Phoenix Municipal Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 44,
    "Active": true,
    "Name": "Coors Field",
    "City": "Denver",
    "State": "CO",
    "Country": "USA",
    "Capacity": 50398,
    "Surface": "Grass",
    "LeftField": 347,
    "MidLeftField": 361,
    "LeftCenterField": 390,
    "MidLeftCenterField": 397,
    "CenterField": 415,
    "MidRightCenterField": 391,
    "RightCenterField": 375,
    "MidRightField": 365,
    "RightField": 350,
    "GeoLat": 39.755891,
    "GeoLong": -104.994198,
    "Altitude": 5211,
    "HomePlateDirection": 180
  },
  {
    "StadiumID": 45,
    "Active": true,
    "Name": "Goodyear Ballpark",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 46,
    "Active": true,
    "Name": "AL City",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 47,
    "Active": true,
    "Name": "Pensacola Bayfront Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 48,
    "Active": true,
    "Name": "Alamodome",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 49,
    "Active": true,
    "Name": "Ed Smith Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 50,
    "Active": true,
    "Name": "Fenway Park",
    "City": "Boston",
    "State": "MA",
    "Country": "USA",
    "Capacity": 37499,
    "Surface": "Grass",
    "LeftField": 310,
    "MidLeftField": 320,
    "LeftCenterField": 348,
    "MidLeftCenterField": 379,
    "CenterField": 390,
    "MidRightCenterField": 420,
    "RightCenterField": 383,
    "MidRightField": 380,
    "RightField": 302,
    "GeoLat": 42.346619,
    "GeoLong": -71.096961,
    "Altitude": 16,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 51,
    "Active": true,
    "Name": "Citizens Bank Park",
    "City": "Philadelphia",
    "State": "PA",
    "Country": "USA",
    "Capacity": 43651,
    "Surface": "Grass",
    "LeftField": 329,
    "MidLeftField": 349,
    "LeftCenterField": 374,
    "MidLeftCenterField": 386,
    "CenterField": 401,
    "MidRightCenterField": 384,
    "RightCenterField": 369,
    "MidRightField": 351,
    "RightField": 330,
    "GeoLat": 39.905547,
    "GeoLong": -75.166589,
    "Altitude": 19,
    "HomePlateDirection": 165
  },
  {
    "StadiumID": 52,
    "Active": true,
    "Name": "Regions Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 53,
    "Active": true,
    "Name": "Nationals Park",
    "City": "Washington",
    "State": "DC",
    "Country": "USA",
    "Capacity": 41341,
    "Surface": "Grass",
    "LeftField": 336,
    "MidLeftField": 351,
    "LeftCenterField": 377,
    "MidLeftCenterField": 390,
    "CenterField": 403,
    "MidRightCenterField": 390,
    "RightCenterField": 370,
    "MidRightField": 351,
    "RightField": 335,
    "GeoLat": 38.87301,
    "GeoLong": -77.007457,
    "Altitude": 23,
    "HomePlateDirection": 150
  },
  {
    "StadiumID": 54,
    "Active": true,
    "Name": "Chase Field",
    "City": "Phoenix",
    "State": "AZ",
    "Country": "USA",
    "Capacity": 48519,
    "Surface": "Grass",
    "LeftField": 330,
    "MidLeftField": 359,
    "LeftCenterField": 374,
    "MidLeftCenterField": 413,
    "CenterField": 407,
    "MidRightCenterField": 413,
    "RightCenterField": 374,
    "MidRightField": 359,
    "RightField": 334,
    "GeoLat": 33.445526,
    "GeoLong": -112.066721,
    "Altitude": 1059,
    "HomePlateDirection": 180
  },
  {
    "StadiumID": 55,
    "Active": true,
    "Name": "Scottsdale Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 56,
    "Active": true,
    "Name": "Surprise Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 57,
    "Active": true,
    "Name": "Marlins Park",
    "City": "Miami",
    "State": "FL",
    "Country": "USA",
    "Capacity": 36742,
    "Surface": "Grass",
    "LeftField": 344,
    "MidLeftField": 360,
    "LeftCenterField": 386,
    "MidLeftCenterField": 395,
    "CenterField": 422,
    "MidRightCenterField": 405,
    "RightCenterField": 392,
    "MidRightField": 360,
    "RightField": 335,
    "GeoLat": 25.778655,
    "GeoLong": -80.220305,
    "Altitude": 6,
    "HomePlateDirection": 105
  },
  {
    "StadiumID": 58,
    "Active": true,
    "Name": "Charlotte Sports Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 59,
    "Active": true,
    "Name": "Maryvale Baseball Park",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 60,
    "Active": true,
    "Name": "Space Coast Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 61,
    "Active": true,
    "Name": "Camelback Ranch",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 62,
    "Active": true,
    "Name": "Comerica Park",
    "City": "Detroit",
    "State": "MI",
    "Country": "USA",
    "Capacity": 41574,
    "Surface": "Grass",
    "LeftField": 345,
    "MidLeftField": 370,
    "LeftCenterField": 402,
    "MidLeftCenterField": 406,
    "CenterField": 420,
    "MidRightCenterField": 393,
    "RightCenterField": 365,
    "MidRightField": 350,
    "RightField": 330,
    "GeoLat": 42.339227,
    "GeoLong": -83.049506,
    "Altitude": 602,
    "HomePlateDirection": 30
  },
  {
    "StadiumID": 63,
    "Active": true,
    "Name": "Minute Maid Park",
    "City": "Houston",
    "State": "TX",
    "Country": "USA",
    "Capacity": 41574,
    "Surface": "Grass",
    "LeftField": 315,
    "MidLeftField": 347,
    "LeftCenterField": 362,
    "MidLeftCenterField": 410,
    "CenterField": 435,
    "MidRightCenterField": 393,
    "RightCenterField": 373,
    "MidRightField": 347,
    "RightField": 326,
    "GeoLat": 29.756965,
    "GeoLong": -95.354824,
    "Altitude": 20,
    "HomePlateDirection": 210
  },
  {
    "StadiumID": 64,
    "Active": true,
    "Name": "Great American Ball Park",
    "City": "Cincinnati",
    "State": "OH",
    "Country": "USA",
    "Capacity": 42319,
    "Surface": "Grass",
    "LeftField": 328,
    "MidLeftField": 356,
    "LeftCenterField": 379,
    "MidLeftCenterField": 391,
    "CenterField": 404,
    "MidRightCenterField": 391,
    "RightCenterField": 370,
    "MidRightField": 356,
    "RightField": 325,
    "GeoLat": 39.097935,
    "GeoLong": -84.508158,
    "Altitude": 489,
    "HomePlateDirection": 45
  },
  {
    "StadiumID": 65,
    "Active": true,
    "Name": "Safeco Field",
    "City": "Seattle",
    "State": "WA",
    "Country": "USA",
    "Capacity": 47574,
    "Surface": "Grass",
    "LeftField": 331,
    "MidLeftField": 358,
    "LeftCenterField": 390,
    "MidLeftCenterField": 399,
    "CenterField": 405,
    "MidRightCenterField": 391,
    "RightCenterField": 387,
    "MidRightField": 353,
    "RightField": 327,
    "GeoLat": 47.591358,
    "GeoLong": -122.332283,
    "Altitude": 17,
    "HomePlateDirection": 135
  },
  {
    "StadiumID": 66,
    "Active": true,
    "Name": "George M. Steinbrenner Field",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  },
  {
    "StadiumID": 67,
    "Active": true,
    "Name": "Joker Marchant Stadium",
    "City": null,
    "State": null,
    "Country": null,
    "Capacity": null,
    "Surface": null,
    "LeftField": null,
    "MidLeftField": null,
    "LeftCenterField": null,
    "MidLeftCenterField": null,
    "CenterField": null,
    "MidRightCenterField": null,
    "RightCenterField": null,
    "MidRightField": null,
    "RightField": null,
    "GeoLat": null,
    "GeoLong": null,
    "Altitude": null,
    "HomePlateDirection": null
  }
];

