'use strict';
      
const partnersObject = {
  "1": {
    "idSystem": 1,
    "namePartner": "American Hydrotech",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "AH",
    "partnerLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "systemLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "nameSystem": "Garden Roof Plus",
    "partnerUrl": "https://www.hydrotechusa.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.hydrotechusa.com",
    "detailsReady": true,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  },
  "2": {
    "idSystem": 2,
    "namePartner": "Next Level Stormwater",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "NLSM",
    "partnerLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "systemLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "nameSystem": "StormCap+ Detention",
    "partnerUrl": "https://www.nlsm.ca",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.nlsm.ca/systems-technical-info/extensive-systems/detention",
    "detailsReady": true,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  },
  "3": {
    "idSystem": 3,
    "namePartner": "Sempergreen Europe",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "SE",
    "partnerLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "systemLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "nameSystem": "Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": true,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": true,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  },
  "4": {
    "idSystem": 4,
    "namePartner": "Knauf Urbanscape",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "KU",
    "partnerLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "systemLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://www.green-urbanscape.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "http://www.green-urbanscape.com",
    "detailsReady": true,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  },
  "5": {
    "idSystem": 5,
    "namePartner": "Purple-Roof Concept",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "PR",
    "partnerLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "systemLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "nameSystem": null,
    "partnerUrl": "https://www.purple-roof.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.purple-roof.com/specs",
    "detailsReady": true,
    "contactCc": false,
    "hydrologyInclude": false,
    "mapInclude": false
  },
  "6": {
    "idSystem": 6,
    "namePartner": "Stormwater Capture Co.",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SWCC",
    "partnerLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "systemLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "nameSystem": "StormCap+",
    "partnerUrl": "https://stormwatercaptureco.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://stormwatercaptureco.com/products/stormcapdetention",
    "detailsReady": true,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  },
  "7": {
    "idSystem": 7,
    "namePartner": "Sempergreen USA",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SU",
    "partnerLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "systemLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "nameSystem": "Sempergreen Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": false,
    "contactCc": true,
    "hydrologyInclude": false,
    "mapInclude": false
  },
  "8": {
    "idSystem": 8,
    "namePartner": "Uniseal",
    "detailPartType": "gr",
    "region": "as",
    "partnerCode": "U",
    "partnerLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "systemLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://uniseal.com.sg",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "http://uniseal.com.sg",
    "detailsReady": false,
    "contactCc": true,
    "hydrologyInclude": true,
    "mapInclude": true
  }
};

const systemsObject = {
  "1": {
    "idSystem": 1,
    "timestampCreated": "2020-01-05T23:00:30.641Z",
    "namePartner": "American Hydrotech",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "AH",
    "partnerLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "systemLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "nameSystem": "Garden Roof Plus",
    "partnerUrl": "https://www.hydrotechusa.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.hydrotechusa.com",
    "detailsReady": true,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 281,
          "nameProduct": "Instagreen Carpet",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 43,
          "nameProduct": "Instagreen Carpet",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 288,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 45,
          "nameProduct": "Intensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "defChoice": true,
          "mm": 75,
          "in": 3,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "dataSource": "Turf & Soil Diagnostics lab ID# 19100013-1 dated 10/16/2019 ES Intensive ASTM E2399 & F1815",
          "dataUrl": "https://www.purple-roof.xyz/19100013-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "stepsArr": [
            [
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        },
        {
          "idProduct": 161,
          "nameProduct": "Lite Top Extensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 868.2,
          "f18KgM3": 1153.21,
          "fcKgM3": 1378.22,
          "satKgM3": 1458.2,
          "dataSource": "Turf & Soil Diagnostics lab ID# 19010053-1 dated 1/24/2019 ES Extensive ASTM E2399 only",
          "dataUrl": "https://www.purple-roof.xyz/19010053-1.pdf",
          "labelSymbol": "GM",
          "stepsArr": [
            [
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "soDryKgM3:  868.2,  // 54.2 lbs/cf;\r\nsoF18KgM3: 1153.21, // 71.99 lbs/cf\r\nsoFcKgM3:  1378.22, // 86.04 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1458.2,",
          "status": "live"
        },
        {
          "idProduct": 162,
          "nameProduct": "Lite Top Urban Agriculture Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 783.3,
          "f18KgM3": 1073.31,
          "fcKgM3": 1303.32,
          "satKgM3": 1403.3,
          "dataSource": "Turf & Soil Diagnostics lab ID# 19020025-1 dated 2/11/2019 AHI ES Urban Ag Blend ASTM E2399 only",
          "dataUrl": "https://www.purple-roof.xyz/19020025-1.pdf",
          "labelSymbol": "GM",
          "stepsArr": [
            [
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "soDryKgM3:  783.3,  // 48.9 lbs/cf;\r\nsoF18KgM3: 1073.31, // 67 lbs/cf\r\nsoFcKgM3:  1303.32, // 81.36 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1403.3,",
          "status": "live"
        },
        {
          "idProduct": 160,
          "nameProduct": "Lite Top Intensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 818.55,
          "f18KgM3": 1108.56,
          "fcKgM3": 1328.56,
          "satKgM3": 1408.55,
          "dataSource": "Turf & Soil Diagnostics lab ID# 19010022-1 dated 1/14/2019 ES Intensive Rooftop ASTM E2399 only",
          "dataUrl": "https://www.purple-roof.xyz/19010022-1.pdf",
          "labelSymbol": "GM",
          "stepsArr": [
            [
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "soDryKgM3:  818.55, // 51.1 lbs/cf;\r\nsoF18KgM3: 1108.56, // 69.2 lbs/cf\r\nsoFcKgM3:  1328.56, // 82.94 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1408.55,",
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 112,
          "nameProduct": "DuPont Styrofoam Insulation",
          "lyr": "xp",
          "idSystem": 1,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "DuPont Styrofoam Insulation (extruded polystyrene or XPS) is used as building insulation in an IRMA (inverted roof membrane assembly) configuration.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 167,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 164,
          "nameProduct": "Hanover Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 168,
          "nameProduct": "ponding 1",
          "lyr": "pn",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 178,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 1,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 171,
          "nameProduct": "GardenEdge",
          "lyr": "an",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 172,
          "nameProduct": "Hanover Rock Curb",
          "lyr": "cb",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 179,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 44,
          "nameProduct": "Instagreen Carpet 2",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 181,
          "nameProduct": "label 1",
          "lyr": "lb",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 169,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 1,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 110,
          "nameProduct": "Root Stop HD",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 49,
          "nameProduct": "AH Honeycomb",
          "lyr": "hc",
          "idSystem": 1,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              2,
              3,
              4
            ],
            [
              0,
              12,
              25,
              50,
              75,
              100
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 177,
          "nameProduct": "Monolithic Membrane 6125",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 47,
          "nameProduct": "Hydroblanket",
          "lyr": "mw",
          "idSystem": 1,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3
            ],
            [
              0,
              25,
              50,
              75
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 51,
          "nameProduct": "AH Detention layer",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 53,
          "nameProduct": "Hydrodrain 300",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 272,
          "nameProduct": "Gardendrain GR30",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 30,
          "in": 1.25,
          "labelSymbol": "DP",
          "stepsArr": null,
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 273,
          "nameProduct": "Gardendrain GR15",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 15,
          "in": 0.625,
          "labelSymbol": "DP",
          "stepsArr": null,
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 52,
          "nameProduct": "Gardendrain GR50",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DP",
          "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 180,
          "nameProduct": "GardenHatch Inspection Chamber",
          "lyr": "db",
          "idSystem": 1,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 174,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 1,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 166,
          "nameProduct": "Checker Block Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 165,
          "nameProduct": "Hanover Fixed Height or Elevator Pedestal",
          "lyr": "pd",
          "idSystem": 1,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 170,
          "nameProduct": "Systemfilter",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 1,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 159,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 1,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with a vegetation-free-zone. Coordinate specific treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 175,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 1,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 176,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 1,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 173,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 1,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    }
  },
  "2": {
    "idSystem": 2,
    "timestampCreated": "2020-01-05T23:00:30.641Z",
    "namePartner": "Next Level Stormwater",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "NLSM",
    "partnerLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "systemLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "nameSystem": "StormCap+ Detention",
    "partnerUrl": "https://www.nlsm.ca",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.nlsm.ca/systems-technical-info/extensive-systems/detention",
    "detailsReady": true,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 282,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 54,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 289,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 114,
          "nameProduct": "NL120 Protective Fleece",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (low-density polyethylene) that is loose-laid over roofing/waterproofing membrane to protect it from root encroachment.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 115,
          "nameProduct": "NL507 Protective Fleece",
          "typeProduct": "prot",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 56,
          "nameProduct": "NL600 Growing Media",
          "lyr": "so",
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              10,
              20,
              40,
              50,
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        },
        {
          "idProduct": 57,
          "nameProduct": "NL601 Growing Media",
          "lyr": "so",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              10,
              20,
              40,
              50,
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 182,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 155,
          "nameProduct": "NL400 Filter Fabric",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 195,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 2,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 186,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 194,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 196,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 55,
          "nameProduct": "NL Sedum blanket 2",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 183,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 184,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 2,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 189,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 198,
          "nameProduct": "label 2",
          "lyr": "lb",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 188,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 153,
          "nameProduct": "NL201 Edging",
          "lyr": "an",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 157,
          "nameProduct": "NL211 Drainbox",
          "lyr": "db",
          "idSystem": 2,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 58,
          "nameProduct": "NL501 Needled Mineral Hydro Blanket",
          "lyr": "mw",
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.nlsm.ca/advancements-in-efficient-stormwater-management-in-vegetated-roofing/",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3
            ],
            [
              0,
              25,
              50,
              75
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 62,
          "nameProduct": "NL350 Detention Mat",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DM",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 276,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 0,
          "in": 0,
          "stepsArr": null,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 63,
          "nameProduct": "NL300 Drainage Mat",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 2,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DM",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 60,
          "nameProduct": "NL351 Reservoir Cell",
          "lyr": "hc",
          "idSystem": 2,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "RC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              2,
              3,
              4
            ],
            [
              0,
              12,
              25,
              50,
              75,
              100
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 191,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 2,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 187,
          "nameProduct": "ponding 2",
          "lyr": "pn",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 185,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 2,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 197,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 2,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 192,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 2,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 193,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 2,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 190,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 2,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    }
  },
  "3": {
    "idSystem": 3,
    "timestampCreated": "2020-01-11T01:21:17.704Z",
    "namePartner": "Sempergreen Europe",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "SE",
    "partnerLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "systemLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "nameSystem": "Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": true,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": true,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 279,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 20,
          "in": 0.8,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 64,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 3,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 285,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 3,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 199,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 3,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 65,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 3,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 68,
          "nameProduct": "Urbanscape Green Roll",
          "lyr": "mw",
          "idSystem": 3,
          "defChoice": true,
          "mm": 20,
          "in": 0.8,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              0.8,
              1.6,
              2.4,
              3.2
            ],
            [
              0,
              20,
              40,
              60,
              80
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 214,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 3,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 215,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 203,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 204,
          "nameProduct": "ponding 3",
          "lyr": "pn",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 213,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 200,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 201,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 3,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 205,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 3,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 208,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 206,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 218,
          "nameProduct": "label 3",
          "lyr": "lb",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 207,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 66,
          "nameProduct": "Sempergreen Growth Media",
          "lyr": "so",
          "idSystem": 3,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "stepsArr": [
            [
              0,
              0.5,
              0.8,
              1.5,
              2.4,
              3.2,
              4,
              4.7,
              6,
              7,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              12,
              20,
              40,
              60,
              80,
              100,
              120,
              150,
              175,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.7,
              "mm": 120
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 119,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 120,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 3,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 72,
          "nameProduct": "Sempergreen Detention Layer T5",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 73,
          "nameProduct": "Sempergreen Tangled Monofilament Drainage",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 3,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 210,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 3,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 216,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 3,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 209,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 3,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 70,
          "nameProduct": "Sempergreen Storage Layer HC40",
          "lyr": "hc",
          "idSystem": 3,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              0.8,
              1.6,
              2.4,
              3.2
            ],
            [
              0,
              12,
              20,
              40,
              60,
              80
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 202,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 3,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 217,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 3,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 211,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 3,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 212,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 3,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "4": {
    "idSystem": 4,
    "timestampCreated": "2020-01-11T01:21:17.704Z",
    "namePartner": "Knauf Urbanscape",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "KU",
    "partnerLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "systemLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://www.green-urbanscape.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "http://www.green-urbanscape.com",
    "detailsReady": true,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 278,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 20,
          "in": 0.8,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 74,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 4,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 284,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 4,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 75,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 4,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 219,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 4,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 78,
          "nameProduct": "Urbanscape Green Roll",
          "lyr": "mw",
          "idSystem": 4,
          "defChoice": true,
          "mm": 20,
          "in": 0.8,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              0.8,
              1.6,
              2.4,
              3.2
            ],
            [
              0,
              20,
              40,
              60,
              80
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 234,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 4,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 223,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 220,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 224,
          "nameProduct": "ponding 4",
          "lyr": "pn",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 233,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 228,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 226,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 221,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 4,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 227,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 236,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 4,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 238,
          "nameProduct": "label 4",
          "lyr": "lb",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 225,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 4,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 76,
          "nameProduct": "Urbanscape Growing Media 1",
          "lyr": "so",
          "idSystem": 4,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "stepsArr": [
            [
              0,
              0.5,
              0.8,
              1.5,
              2.4,
              3.2,
              4,
              4.7,
              6,
              7,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              12,
              20,
              40,
              60,
              80,
              100,
              120,
              150,
              175,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.7,
              "mm": 120
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 124,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 125,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 4,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 235,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 82,
          "nameProduct": "Urbanscape Detention Layer T5",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 83,
          "nameProduct": "Urbanscape Tangled monofilament",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 4,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 230,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 4,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 229,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 4,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 80,
          "nameProduct": "Urbanscape Storage Layer HC40",
          "lyr": "hc",
          "idSystem": 4,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              0.8,
              1.6,
              2.4,
              3.2
            ],
            [
              0,
              12,
              20,
              40,
              60,
              80
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 222,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 4,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 237,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 4,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 231,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 4,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 232,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 4,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "5": {
    "idSystem": 5,
    "timestampCreated": "2020-02-25T22:32:38.819Z",
    "namePartner": "Purple-Roof Concept",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "PR",
    "partnerLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "systemLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "nameSystem": null,
    "partnerUrl": "https://www.purple-roof.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.purple-roof.com/specs",
    "detailsReady": true,
    "contactCc": false,
    "contactCcEmails": [
      "info@purple-roof.com"
    ],
    "hydrologyInclude": false,
    "mapInclude": false,
    "lb": {
      "productOptions": [
        {
          "idProduct": 152,
          "nameProduct": "label",
          "lyr": "lb",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 92,
          "nameProduct": "Detention layer",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 99,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "stepsArr": null,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 93,
          "nameProduct": "Dimpled drain plate",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DP",
          "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 94,
          "nameProduct": "Tangled monofilament",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 149,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "vg": {
      "productOptions": [
        {
          "idProduct": 280,
          "nameProduct": "Sedum Mat",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum mat thickness typically ranges from 1/2-inch to 3/4-inch.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 287,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 290,
          "nameProduct": "Bee & Butterfly Planters (Showy Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "stepsArr": null,
          "status": "live",
          "varProduct": "show",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 291,
          "nameProduct": "Bee & Butterfly Planters (Grassy Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "stepsArr": null,
          "status": "live",
          "varProduct": "grass",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 292,
          "nameProduct": "Bee & Butterfly Planters (Meadow Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "stepsArr": null,
          "status": "live",
          "varProduct": "meadow",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 84,
          "nameProduct": "Sedum Mat",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 86,
          "nameProduct": "Green roof soil",
          "lyr": "so",
          "idSystem": 5,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "dataSource": "Turf & Soil Diagnostics lab ID# 19100013-1 dated 10/16/2019 ES Intensive ASTM E2399 & F1815",
          "dataUrl": "https://www.purple-roof.xyz/19100013-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GRS",
          "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              10,
              20,
              40,
              50,
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 137,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 142,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 132,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 5,
          "defChoice": true,
          "mm": 0,
          "in": 0,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 138,
          "nameProduct": "ponding",
          "lyr": "pn",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 88,
          "nameProduct": "Needled mineral wool",
          "lyr": "mw",
          "idSystem": 5,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3
            ],
            [
              0,
              25,
              50,
              75
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 148,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 5,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "bf": {
      "productOptions": [
        {
          "idProduct": 270,
          "nameProduct": "Buffer Layer",
          "lyr": "bf",
          "idSystem": 5,
          "defChoice": true,
          "mm": 85,
          "in": 3.3,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "labelSymbol": "BL",
          "useProduct": "Buffer layer stores water in blue-green roofs",
          "stepsArr": [
            [
              0,
              3.3,
              6.7
            ],
            [
              0,
              85,
              170
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3.3,
              "mm": 85
            },
            {
              "in": 6.7,
              "mm": 170
            }
          ],
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 104,
          "nameProduct": "no vegetation",
          "typeProduct": "none",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 85,
          "nameProduct": "no vegetation",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": 0
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 147,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 134,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 135,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 5,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 139,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 5,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 131,
          "nameProduct": "no protection layer",
          "typeProduct": "none",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 0,
          "in": 0,
          "stepsArr": null,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 130,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 5,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 129,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 150,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 5,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 90,
          "nameProduct": "Honeycomb",
          "lyr": "hc",
          "idSystem": 5,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              2,
              3,
              4
            ],
            [
              0,
              12,
              25,
              50,
              75,
              100
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 140,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 136,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 5,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 141,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 144,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 5,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 151,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 5,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 145,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 5,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 146,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 5,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 143,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 5,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    }
  },
  "6": {
    "idSystem": 6,
    "timestampCreated": "2020-03-28T18:04:58.736Z",
    "namePartner": "Stormwater Capture Co.",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SWCC",
    "partnerLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "systemLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "nameSystem": "StormCap+",
    "partnerUrl": "https://stormwatercaptureco.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://stormwatercaptureco.com/products/stormcapdetention",
    "detailsReady": true,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 283,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 286,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 239,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "deprecated",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 241,
          "nameProduct": "SW600 Growing Media",
          "lyr": "so",
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              10,
              20,
              40,
              50,
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
          "status": "live"
        },
        {
          "idProduct": 275,
          "nameProduct": "SW601 Growing Media",
          "lyr": "so",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "GM",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              10,
              20,
              40,
              50,
              60,
              80,
              90,
              100,
              110,
              130,
              140,
              150,
              160,
              180,
              190,
              200,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 249,
          "nameProduct": "SW120 Protective Fleece",
          "typeProduct": "rb",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 250,
          "nameProduct": "SW507 Protective Fleece",
          "typeProduct": "prot",
          "lyr": "pt",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 158,
          "nameProduct": "SW211 Drainbox",
          "lyr": "db",
          "idSystem": 6,
          "defChoice": true,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
          "stepsArr": [
            [
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 154,
          "nameProduct": "SW201 Edging",
          "lyr": "an",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
          "stepsArr": null,
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 252,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150,
              175,
              200
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 243,
          "nameProduct": "SW351 Reservoir Cell",
          "lyr": "hc",
          "idSystem": 6,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "stepsArr": [
            [
              0,
              0.5,
              1,
              2,
              3,
              4
            ],
            [
              0,
              12,
              25,
              50,
              75,
              100
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 244,
          "nameProduct": "SW350 Detention Mat",
          "typeProduct": "det",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 246,
          "nameProduct": "SW300 Drainage Mat",
          "typeProduct": "mono",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "stepsArr": null,
          "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 277,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 0,
          "in": 0,
          "stepsArr": null,
          "status": "live",
          "gi": 0
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 256,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 265,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "stepsArr": null,
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 257,
          "nameProduct": "ponding 6",
          "lyr": "pn",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "dataSource": "no ponding",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 253,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 254,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 6,
          "defChoice": true,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              25,
              50,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 258,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              2,
              3,
              4,
              5,
              6
            ],
            [
              0,
              50,
              75,
              100,
              125,
              150
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 260,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "stepsArr": null,
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 259,
          "nameProduct": "SW400 Filter Fabric",
          "lyr": "ff",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "stepsArr": null,
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 242,
          "nameProduct": "SW501 Needled Mineral Hydro Blanket",
          "lyr": "mw",
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
          "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "stepsArr": [
            [
              0,
              1,
              2,
              3
            ],
            [
              0,
              25,
              50,
              75
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 267,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 269,
          "nameProduct": "label 6",
          "lyr": "lb",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 248,
          "nameProduct": "undefined 6",
          "typeProduct": "none",
          "lyr": "xx",
          "hasThickness": true,
          "idSystem": 6,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "stepsArr": null,
          "status": "live",
          "gi": 0
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 266,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 6,
          "defChoice": true,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 261,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 6,
          "defChoice": true,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "stepsArr": null,
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 255,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "hasThickness": true,
          "idSystem": 6,
          "defChoice": true,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "stepsArr": null,
          "status": "live",
          "gi": null
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 262,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 6,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 268,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 6,
          "defChoice": true,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "stepsArr": [
            [
              0,
              3,
              4,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              75,
              100,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 263,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 6,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 264,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 6,
          "defChoice": true,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "stepsArr": [
            [
              0,
              5,
              6,
              8,
              9,
              10,
              12,
              14,
              16,
              18
            ],
            [
              0,
              125,
              150,
              200,
              225,
              250,
              300,
              350,
              400,
              450
            ]
          ],
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "7": {
    "idSystem": 7,
    "timestampCreated": "2020-03-30T17:51:45.637Z",
    "namePartner": "Sempergreen USA",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SU",
    "partnerLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "systemLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "nameSystem": "Sempergreen Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": false,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": false,
    "mapInclude": false
  },
  "8": {
    "idSystem": 8,
    "timestampCreated": "2020-03-30T17:51:45.637Z",
    "namePartner": "Uniseal",
    "detailPartType": "gr",
    "region": "as",
    "partnerCode": "U",
    "partnerLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "systemLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://uniseal.com.sg",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "http://uniseal.com.sg",
    "detailsReady": false,
    "contactCc": true,
    "contactCcEmails": null,
    "hydrologyInclude": true,
    "mapInclude": true
  }
};

const publicSystemsObject = {
  "1": {
    "idSystem": 1,
    "namePartner": "American Hydrotech",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "AH",
    "partnerLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "systemLogoUrl": "https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq",
    "nameSystem": "Garden Roof Plus",
    "partnerUrl": "https://www.hydrotechusa.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.hydrotechusa.com",
    "detailsReady": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 281,
          "nameProduct": "Instagreen Carpet",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 1,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 43,
          "nameProduct": "Instagreen Carpet",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 1,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 288,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 1,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 45,
          "nameProduct": "Intensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        },
        {
          "idProduct": 161,
          "nameProduct": "Lite Top Extensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 868.2,
          "f18KgM3": 1153.21,
          "fcKgM3": 1378.22,
          "satKgM3": 1458.2,
          "labelSymbol": "GM",
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        },
        {
          "idProduct": 162,
          "nameProduct": "Lite Top Urban Agriculture Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 783.3,
          "f18KgM3": 1073.31,
          "fcKgM3": 1303.32,
          "satKgM3": 1403.3,
          "labelSymbol": "GM",
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        },
        {
          "idProduct": 160,
          "nameProduct": "Lite Top Intensive Growing Media",
          "lyr": "so",
          "idSystem": 1,
          "mm": 75,
          "in": 3,
          "dryKgM3": 818.55,
          "f18KgM3": 1108.56,
          "fcKgM3": 1328.56,
          "satKgM3": 1408.55,
          "labelSymbol": "GM",
          "steps": [
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 112,
          "nameProduct": "DuPont Styrofoam Insulation",
          "lyr": "xp",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "DuPont Styrofoam Insulation (extruded polystyrene or XPS) is used as building insulation in an IRMA (inverted roof membrane assembly) configuration.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 167,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 1,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 164,
          "nameProduct": "Hanover Pavers",
          "lyr": "pv",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 168,
          "nameProduct": "ponding 1",
          "lyr": "pn",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 178,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 1,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 171,
          "nameProduct": "GardenEdge",
          "lyr": "an",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 172,
          "nameProduct": "Hanover Rock Curb",
          "lyr": "cb",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 179,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 44,
          "nameProduct": "Instagreen Carpet 2",
          "lyr": "xx",
          "idSystem": 1,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 181,
          "nameProduct": "label 1",
          "lyr": "lb",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 169,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 110,
          "nameProduct": "Root Stop HD",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 1,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 49,
          "nameProduct": "AH Honeycomb",
          "lyr": "hc",
          "idSystem": 1,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 177,
          "nameProduct": "Monolithic Membrane 6125",
          "lyr": "mb",
          "idSystem": 1,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 47,
          "nameProduct": "Hydroblanket",
          "lyr": "mw",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 51,
          "nameProduct": "AH Detention layer",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 1,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 53,
          "nameProduct": "Hydrodrain 300",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 1,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 272,
          "nameProduct": "Gardendrain GR30",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "idSystem": 1,
          "mm": 30,
          "in": 1.25,
          "labelSymbol": "DP",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 273,
          "nameProduct": "Gardendrain GR15",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "idSystem": 1,
          "mm": 15,
          "in": 0.625,
          "labelSymbol": "DP",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 52,
          "nameProduct": "Gardendrain GR50",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DP",
          "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 180,
          "nameProduct": "GardenHatch Inspection Chamber",
          "lyr": "db",
          "idSystem": 1,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 174,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 1,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 166,
          "nameProduct": "Checker Block Pavers",
          "lyr": "wp",
          "idSystem": 1,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 165,
          "nameProduct": "Hanover Fixed Height or Elevator Pedestal",
          "lyr": "pd",
          "idSystem": 1,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 170,
          "nameProduct": "Systemfilter",
          "lyr": "ff",
          "idSystem": 1,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 159,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 1,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with a vegetation-free-zone. Coordinate specific treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 175,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 1,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 176,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 1,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 173,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 1,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    }
  },
  "2": {
    "idSystem": 2,
    "namePartner": "Next Level Stormwater",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "NLSM",
    "partnerLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "systemLogoUrl": "https://cdn.buttercms.com/jSz4AjXRyq8ZRrn7PbAY",
    "nameSystem": "StormCap+ Detention",
    "partnerUrl": "https://www.nlsm.ca",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.nlsm.ca/systems-technical-info/extensive-systems/detention",
    "detailsReady": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 282,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 2,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 54,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 2,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 289,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 2,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 114,
          "nameProduct": "NL120 Protective Fleece",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 2,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (low-density polyethylene) that is loose-laid over roofing/waterproofing membrane to protect it from root encroachment.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 115,
          "nameProduct": "NL507 Protective Fleece",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 2,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 56,
          "nameProduct": "NL600 Growing Media",
          "lyr": "so",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        },
        {
          "idProduct": 57,
          "nameProduct": "NL601 Growing Media",
          "lyr": "so",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 182,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 155,
          "nameProduct": "NL400 Filter Fabric",
          "lyr": "ff",
          "idSystem": 2,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 195,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 2,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 186,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 2,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 194,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 2,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 196,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 55,
          "nameProduct": "NL Sedum blanket 2",
          "lyr": "xx",
          "idSystem": 2,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 183,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 184,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 2,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 189,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 198,
          "nameProduct": "label 2",
          "lyr": "lb",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 188,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 153,
          "nameProduct": "NL201 Edging",
          "lyr": "an",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 157,
          "nameProduct": "NL211 Drainbox",
          "lyr": "db",
          "idSystem": 2,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 58,
          "nameProduct": "NL501 Needled Mineral Hydro Blanket",
          "lyr": "mw",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.nlsm.ca/advancements-in-efficient-stormwater-management-in-vegetated-roofing/",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 62,
          "nameProduct": "NL350 Detention Mat",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 2,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DM",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 276,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "idSystem": 2,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 63,
          "nameProduct": "NL300 Drainage Mat",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 2,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DM",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 60,
          "nameProduct": "NL351 Reservoir Cell",
          "lyr": "hc",
          "idSystem": 2,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "RC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 191,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 2,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 187,
          "nameProduct": "ponding 2",
          "lyr": "pn",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 185,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 2,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 197,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 2,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 192,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 2,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 193,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 2,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 190,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 2,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    }
  },
  "3": {
    "idSystem": 3,
    "namePartner": "Sempergreen Europe",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "SE",
    "partnerLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "systemLogoUrl": "https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb",
    "nameSystem": "Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": true,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 279,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 3,
          "mm": 20,
          "in": 0.8,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 64,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 3,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 285,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 3,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 199,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 3,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 65,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "lyr": "xx",
          "idSystem": 3,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 68,
          "nameProduct": "Urbanscape Green Roll",
          "lyr": "mw",
          "idSystem": 3,
          "mm": 20,
          "in": 0.8,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 214,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 3,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 215,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 203,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 3,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 204,
          "nameProduct": "ponding 3",
          "lyr": "pn",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 213,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 3,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 200,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 3,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 201,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 3,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 205,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 3,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 208,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 206,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "idSystem": 3,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 218,
          "nameProduct": "label 3",
          "lyr": "lb",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 207,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 66,
          "nameProduct": "Sempergreen Growth Media",
          "lyr": "so",
          "idSystem": 3,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.7,
              "mm": 120
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 119,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 3,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 120,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 3,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 72,
          "nameProduct": "Sempergreen Detention Layer T5",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 3,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 73,
          "nameProduct": "Sempergreen Tangled Monofilament Drainage",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 3,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 210,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 3,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 216,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 3,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 209,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 3,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 70,
          "nameProduct": "Sempergreen Storage Layer HC40",
          "lyr": "hc",
          "idSystem": 3,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 202,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 3,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 217,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 3,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 211,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 3,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 212,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 3,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "4": {
    "idSystem": 4,
    "namePartner": "Knauf Urbanscape",
    "detailPartType": "gr",
    "region": "eu",
    "partnerCode": "KU",
    "partnerLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "systemLogoUrl": "https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://www.green-urbanscape.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "http://www.green-urbanscape.com",
    "detailsReady": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 278,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 4,
          "mm": 20,
          "in": 0.8,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 74,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 4,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        },
        {
          "idProduct": 284,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 4,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 75,
          "nameProduct": "Sempergreen Sedum-mix blanket",
          "lyr": "xx",
          "idSystem": 4,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 219,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 4,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 78,
          "nameProduct": "Urbanscape Green Roll",
          "lyr": "mw",
          "idSystem": 4,
          "mm": 20,
          "in": 0.8,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 234,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 4,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 223,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 4,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 220,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 4,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 224,
          "nameProduct": "ponding 4",
          "lyr": "pn",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 233,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 4,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 228,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 226,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "idSystem": 4,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 221,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 4,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 227,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 236,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 4,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 238,
          "nameProduct": "label 4",
          "lyr": "lb",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 225,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 4,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 76,
          "nameProduct": "Urbanscape Growing Media 1",
          "lyr": "so",
          "idSystem": 4,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.7,
              "mm": 120
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 124,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 4,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 125,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 4,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 235,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 82,
          "nameProduct": "Urbanscape Detention Layer T5",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 4,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 83,
          "nameProduct": "Urbanscape Tangled monofilament",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 4,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 230,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 4,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 229,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 4,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 80,
          "nameProduct": "Urbanscape Storage Layer HC40",
          "lyr": "hc",
          "idSystem": 4,
          "mm": 12,
          "in": 0.5,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 0.8,
              "mm": 20
            },
            {
              "in": 1.6,
              "mm": 40
            },
            {
              "in": 2.4,
              "mm": 60
            },
            {
              "in": 3.2,
              "mm": 80
            }
          ],
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 222,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 4,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 237,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 4,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 231,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 4,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 232,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 4,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "5": {
    "idSystem": 5,
    "namePartner": "Purple-Roof Concept",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "PR",
    "partnerLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "systemLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "nameSystem": null,
    "partnerUrl": "https://www.purple-roof.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.purple-roof.com/specs",
    "detailsReady": true,
    "lb": {
      "productOptions": [
        {
          "idProduct": 152,
          "nameProduct": "label",
          "lyr": "lb",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 92,
          "nameProduct": "Detention layer",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 99,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 93,
          "nameProduct": "Dimpled drain plate",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DP",
          "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 94,
          "nameProduct": "Tangled monofilament",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 149,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "vg": {
      "productOptions": [
        {
          "idProduct": 280,
          "nameProduct": "Sedum Mat",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum mat thickness typically ranges from 1/2-inch to 3/4-inch.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 287,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 290,
          "nameProduct": "Bee & Butterfly Planters (Showy Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "status": "live",
          "varProduct": "show",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 291,
          "nameProduct": "Bee & Butterfly Planters (Grassy Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "status": "live",
          "varProduct": "grass",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 292,
          "nameProduct": "Bee & Butterfly Planters (Meadow Mix)",
          "typeProduct": "bnb",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "labelSymbol": "BBP",
          "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
          "status": "live",
          "varProduct": "meadow",
          "idProductExtra": 280,
          "gi": null
        },
        {
          "idProduct": 84,
          "nameProduct": "Sedum Mat",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 86,
          "nameProduct": "Green roof soil",
          "lyr": "so",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GRS",
          "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 137,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 142,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 132,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 138,
          "nameProduct": "ponding",
          "lyr": "pn",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 88,
          "nameProduct": "Needled mineral wool",
          "lyr": "mw",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 148,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 5,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "bf": {
      "productOptions": [
        {
          "idProduct": 270,
          "nameProduct": "Buffer Layer",
          "lyr": "bf",
          "idSystem": 5,
          "mm": 85,
          "in": 3.3,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "labelSymbol": "BL",
          "useProduct": "Buffer layer stores water in blue-green roofs",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3.3,
              "mm": 85
            },
            {
              "in": 6.7,
              "mm": 170
            }
          ],
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 104,
          "nameProduct": "no vegetation",
          "typeProduct": "none",
          "lyr": "xx",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 85,
          "nameProduct": "no vegetation",
          "lyr": "xx",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": 0
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 147,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 5,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 134,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 135,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 5,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 139,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 131,
          "nameProduct": "no protection layer",
          "typeProduct": "none",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 130,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 129,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 150,
          "nameProduct": "Drain Box",
          "lyr": "db",
          "idSystem": 5,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 90,
          "nameProduct": "Honeycomb",
          "lyr": "hc",
          "idSystem": 5,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 140,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "idSystem": 5,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 136,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 141,
          "nameProduct": "Edging",
          "lyr": "an",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 144,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 5,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 151,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 5,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 145,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 5,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 146,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 5,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 143,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 5,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    }
  },
  "6": {
    "idSystem": 6,
    "namePartner": "Stormwater Capture Co.",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SWCC",
    "partnerLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "systemLogoUrl": "https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F",
    "nameSystem": "StormCap+",
    "partnerUrl": "https://stormwatercaptureco.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://stormwatercaptureco.com/products/stormcapdetention",
    "detailsReady": true,
    "vg": {
      "productOptions": [
        {
          "idProduct": 283,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 6,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 286,
          "nameProduct": "Sedum Plugs",
          "typeProduct": "plug",
          "lyr": "vg",
          "idSystem": 6,
          "mm": 0.2,
          "in": 0.01,
          "dryKgM2": 0.01,
          "f18KgM2": 0.01,
          "fcKgM2": 0.01,
          "satKgM2": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": null
        },
        {
          "idProduct": 239,
          "nameProduct": "Sedum Blanket",
          "typeProduct": "other",
          "lyr": "vg",
          "idSystem": 6,
          "mm": 0.2,
          "in": 0.01,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "deprecated",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 241,
          "nameProduct": "SW600 Growing Media",
          "lyr": "so",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GM",
          "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        },
        {
          "idProduct": 275,
          "nameProduct": "SW601 Growing Media",
          "lyr": "so",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "GM",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 249,
          "nameProduct": "SW120 Protective Fleece",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 6,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 250,
          "nameProduct": "SW507 Protective Fleece",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 6,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "db": {
      "productOptions": [
        {
          "idProduct": 158,
          "nameProduct": "SW211 Drainbox",
          "lyr": "db",
          "idSystem": 6,
          "mm": 100,
          "in": 4,
          "labelSymbol": "DB",
          "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
          "steps": [
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "sitsOn": "pt",
          "status": "live"
        }
      ]
    },
    "an": {
      "productOptions": [
        {
          "idProduct": 154,
          "nameProduct": "SW201 Edging",
          "lyr": "an",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "ED",
          "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
          "sitsOn": "pt",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 252,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 243,
          "nameProduct": "SW351 Reservoir Cell",
          "lyr": "hc",
          "idSystem": 6,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "status": "live"
        }
      ]
    },
    "dr": {
      "productOptions": [
        {
          "idProduct": 244,
          "nameProduct": "SW350 Detention Mat",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 6,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 246,
          "nameProduct": "SW300 Drainage Mat",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 6,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 277,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "idSystem": 6,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 256,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 6,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 265,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 6,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pn": {
      "productOptions": [
        {
          "idProduct": 257,
          "nameProduct": "ponding 6",
          "lyr": "pn",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "satKgM3": 1000,
          "status": "live"
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 253,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 254,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 6,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 258,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "cb": {
      "productOptions": [
        {
          "idProduct": 260,
          "nameProduct": "Precast Curb",
          "lyr": "cb",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "PC",
          "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
          "sitsOnOptions": [
            "pt",
            "xp",
            "mb",
            "dr",
            "hc"
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 259,
          "nameProduct": "SW400 Filter Fabric",
          "lyr": "ff",
          "idSystem": 6,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 242,
          "nameProduct": "SW501 Needled Mineral Hydro Blanket",
          "lyr": "mw",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "status": "live"
        }
      ]
    },
    "rd": {
      "productOptions": [
        {
          "idProduct": 267,
          "nameProduct": "Roof Drain",
          "lyr": "rd",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "RD",
          "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
          "status": "live"
        }
      ]
    },
    "lb": {
      "productOptions": [
        {
          "idProduct": 269,
          "nameProduct": "label 6",
          "lyr": "lb",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "status": "live"
        }
      ]
    },
    "xx": {
      "productOptions": [
        {
          "idProduct": 248,
          "nameProduct": "undefined 6",
          "typeProduct": "none",
          "lyr": "xx",
          "idSystem": 6,
          "mm": 12,
          "in": 0.5,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
          "status": "live",
          "gi": 0
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 266,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 6,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "ej": {
      "productOptions": [
        {
          "idProduct": 261,
          "nameProduct": "Expansion Joint",
          "lyr": "ej",
          "idSystem": 6,
          "mm": null,
          "in": null,
          "labelSymbol": "EJ",
          "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
          "status": "live"
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 255,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 6,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "eq": {
      "productOptions": [
        {
          "idProduct": 262,
          "nameProduct": "Equipment Curb",
          "lyr": "eq",
          "idSystem": 6,
          "mm": 250,
          "in": 10,
          "labelSymbol": "EC",
          "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "wa": {
      "productOptions": [
        {
          "idProduct": 268,
          "nameProduct": "Parapet Wall",
          "lyr": "wa",
          "idSystem": 6,
          "mm": 250,
          "in": 10,
          "labelSymbol": "PW",
          "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "ta": {
      "productOptions": [
        {
          "idProduct": 263,
          "nameProduct": "Tie Anchor",
          "lyr": "ta",
          "idSystem": 6,
          "mm": 200,
          "in": 8,
          "labelSymbol": "TA",
          "useProduct": "Connection point for fall protection system. Type and attachment vary.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pi": {
      "productOptions": [
        {
          "idProduct": 264,
          "nameProduct": "Pipe Penetration",
          "lyr": "pi",
          "idSystem": 6,
          "mm": 200,
          "in": 8,
          "labelSymbol": "PP",
          "useProduct": "Pipe penetration (such as plumbing vent).",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    }
  },
  "7": {
    "idSystem": 7,
    "namePartner": "Sempergreen USA",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "SU",
    "partnerLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "systemLogoUrl": "https://cdn.buttercms.com/rztzhRV0Q8WFrnfVrzE1",
    "nameSystem": "Sempergreen Detention Roof",
    "partnerUrl": "https://www.sempergreen.com",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "https://www.sempergreen.com",
    "detailsReady": false
  },
  "8": {
    "idSystem": 8,
    "namePartner": "Uniseal",
    "detailPartType": "gr",
    "region": "as",
    "partnerCode": "U",
    "partnerLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "systemLogoUrl": "https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ",
    "nameSystem": "Urbanscape Detention Roof",
    "partnerUrl": "http://uniseal.com.sg",
    "detailsInclude": false,
    "modelInclude": false,
    "systemUrl": "http://uniseal.com.sg",
    "detailsReady": false
  }
};

const minimalSystemsObject = {
  "5": {
    "idSystem": 5,
    "namePartner": "Purple-Roof Concept",
    "detailPartType": "gr",
    "region": "na",
    "partnerCode": "PR",
    "partnerLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "systemLogoUrl": "https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg",
    "nameSystem": null,
    "partnerUrl": "https://www.purple-roof.com",
    "detailsInclude": true,
    "modelInclude": true,
    "systemUrl": "https://www.purple-roof.com/specs",
    "detailsReady": true,
    "dr": {
      "productOptions": [
        {
          "idProduct": 92,
          "nameProduct": "Detention layer",
          "typeProduct": "det",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 5,
          "in": 0.2,
          "dryKgM2": 0.0205,
          "f18KgM2": 0.0205,
          "fcKgM2": 0.0205,
          "satKgM2": 4.684,
          "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "DL",
          "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 99,
          "nameProduct": "no drainage layer",
          "typeProduct": "none",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 93,
          "nameProduct": "Dimpled drain plate",
          "typeProduct": "drainPlate",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DP",
          "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
          "status": "live",
          "gi": 1
        },
        {
          "idProduct": 94,
          "nameProduct": "Tangled monofilament",
          "typeProduct": "mono",
          "lyr": "dr",
          "idSystem": 5,
          "mm": 17,
          "in": 0.67,
          "dryKgM2": 0.0287,
          "f18KgM2": 0.0287,
          "fcKgM2": 0.0287,
          "satKgM2": 0.0287,
          "labelSymbol": "DR",
          "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
          "status": "live",
          "gi": 1
        }
      ]
    },
    "vg": {
      "productOptions": [
        {
          "idProduct": 280,
          "nameProduct": "Sedum Mat",
          "typeProduct": "mat",
          "lyr": "vg",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "dryKgM2": 15,
          "f18KgM2": 20,
          "fcKgM2": 23,
          "satKgM2": 25,
          "legendUrl": "https://www.purple-roof.com/specs#vegetation",
          "legendUrlText": "click to learn more about green roof plants",
          "labelSymbol": "VE",
          "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum mat thickness typically ranges from 1/2-inch to 3/4-inch.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "so": {
      "productOptions": [
        {
          "idProduct": 86,
          "nameProduct": "Green roof soil",
          "lyr": "so",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 837.77,
          "f18KgM3": 1113.78,
          "fcKgM3": 1327.78,
          "satKgM3": 1437.77,
          "legendUrl": "https://www.purple-roof.com/specs#soil-media",
          "legendUrlText": "click to learn more about green roof soil",
          "labelSymbol": "GRS",
          "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 10
            },
            {
              "in": 1,
              "mm": 20
            },
            {
              "in": 1.5,
              "mm": 40
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 2.5,
              "mm": 60
            },
            {
              "in": 3,
              "mm": 80
            },
            {
              "in": 3.5,
              "mm": 90
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 4.5,
              "mm": 110
            },
            {
              "in": 5,
              "mm": 130
            },
            {
              "in": 5.5,
              "mm": 140
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 6.5,
              "mm": 160
            },
            {
              "in": 7,
              "mm": 180
            },
            {
              "in": 7.5,
              "mm": 190
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "pw": {
      "productOptions": [
        {
          "idProduct": 137,
          "nameProduct": "Sedum Plugs in Wind Pavers",
          "lyr": "pw",
          "idSystem": 5,
          "mm": 12,
          "in": 0.5,
          "labelSymbol": "PL",
          "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "xp": {
      "productOptions": [
        {
          "idProduct": 132,
          "nameProduct": "Extruded Polystyrene Insulation (XPS)",
          "lyr": "xp",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "dryKgM3": 30,
          "f18KgM3": 30,
          "fcKgM3": 30,
          "satKgM3": 30,
          "labelSymbol": "XPS",
          "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 7,
              "mm": 175
            },
            {
              "in": 8,
              "mm": 200
            }
          ],
          "status": "live"
        }
      ]
    },
    "mw": {
      "productOptions": [
        {
          "idProduct": 88,
          "nameProduct": "Needled mineral wool",
          "lyr": "mw",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 160.08,
          "f18KgM3": 860.1,
          "fcKgM3": 1090.11,
          "satKgM3": 1187.26,
          "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
          "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
          "labelSymbol": "NMW",
          "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            }
          ],
          "status": "live"
        }
      ]
    },
    "sr": {
      "productOptions": [
        {
          "idProduct": 148,
          "nameProduct": "Structural Deck",
          "lyr": "sr",
          "idSystem": 5,
          "mm": 40,
          "in": 1.5,
          "labelSymbol": "SD",
          "useProduct": "Material varies (concrete, steel, wood, other).",
          "status": "live"
        }
      ]
    },
    "mb": {
      "productOptions": [
        {
          "idProduct": 147,
          "nameProduct": "Waterproofing Membrane",
          "lyr": "mb",
          "idSystem": 5,
          "mm": 6,
          "in": 0.25,
          "labelSymbol": "MB",
          "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
          "status": "live",
          "gi": 0.4
        }
      ]
    },
    "pv": {
      "productOptions": [
        {
          "idProduct": 134,
          "nameProduct": "Pavers",
          "lyr": "pv",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "PV",
          "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
          "status": "live",
          "gi": null
        }
      ]
    },
    "pd": {
      "productOptions": [
        {
          "idProduct": 135,
          "nameProduct": "Paver Pedestals",
          "lyr": "pd",
          "idSystem": 5,
          "mm": 25,
          "in": 1,
          "dryKgM2": 10,
          "f18KgM2": 10,
          "fcKgM2": 10,
          "satKgM2": 10,
          "labelSymbol": "PP",
          "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            },
            {
              "in": 8,
              "mm": 200
            },
            {
              "in": 9,
              "mm": 225
            },
            {
              "in": 10,
              "mm": 250
            },
            {
              "in": 12,
              "mm": 300
            },
            {
              "in": 14,
              "mm": 350
            },
            {
              "in": 16,
              "mm": 400
            },
            {
              "in": 18,
              "mm": 450
            }
          ],
          "status": "live"
        }
      ]
    },
    "gv": {
      "productOptions": [
        {
          "idProduct": 139,
          "nameProduct": "Gravel",
          "lyr": "gv",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM3": 1600,
          "f18KgM3": 1700,
          "fcKgM3": 1700,
          "satKgM3": 2100,
          "labelSymbol": "GV",
          "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            },
            {
              "in": 5,
              "mm": 125
            },
            {
              "in": 6,
              "mm": 150
            }
          ],
          "status": "live"
        }
      ]
    },
    "pt": {
      "productOptions": [
        {
          "idProduct": 131,
          "nameProduct": "no protection layer",
          "typeProduct": "none",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 0,
          "in": 0,
          "status": "live",
          "gi": 0
        },
        {
          "idProduct": 130,
          "nameProduct": "Protection Layer",
          "typeProduct": "prot",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 2,
          "in": 0.08,
          "labelSymbol": "PL",
          "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        },
        {
          "idProduct": 129,
          "nameProduct": "Root Barrier",
          "typeProduct": "rb",
          "lyr": "pt",
          "idSystem": 5,
          "mm": 0.7,
          "in": 0.02,
          "labelSymbol": "RB",
          "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "hc": {
      "productOptions": [
        {
          "idProduct": 90,
          "nameProduct": "Honeycomb",
          "lyr": "hc",
          "idSystem": 5,
          "mm": 25,
          "in": 1,
          "dryKgM3": 67.28,
          "f18KgM3": 67.28,
          "fcKgM3": 67.28,
          "satKgM3": 933.76,
          "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
          "legendUrlText": "click here to learn more",
          "labelSymbol": "HC",
          "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
          "steps": [
            {
              "in": 0,
              "mm": 0
            },
            {
              "in": 0.5,
              "mm": 12
            },
            {
              "in": 1,
              "mm": 25
            },
            {
              "in": 2,
              "mm": 50
            },
            {
              "in": 3,
              "mm": 75
            },
            {
              "in": 4,
              "mm": 100
            }
          ],
          "status": "live"
        }
      ]
    },
    "ff": {
      "productOptions": [
        {
          "idProduct": 140,
          "nameProduct": "Filter Fabric",
          "lyr": "ff",
          "idSystem": 5,
          "mm": 1,
          "in": 0.04,
          "labelSymbol": "FF",
          "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
          "status": "live",
          "gi": 0.26
        }
      ]
    },
    "wp": {
      "productOptions": [
        {
          "idProduct": 136,
          "nameProduct": "Wind Pavers",
          "lyr": "wp",
          "idSystem": 5,
          "mm": 50,
          "in": 2,
          "dryKgM2": 100,
          "f18KgM2": 100,
          "fcKgM2": 100,
          "satKgM2": 100,
          "labelSymbol": "WP",
          "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
          "status": "live",
          "gi": null
        }
      ]
    }
  }
};

const products = {
  "43": {
    "idProduct": 43,
    "nameProduct": "Instagreen Carpet",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "44": {
    "idProduct": 44,
    "nameProduct": "Instagreen Carpet 2",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "45": {
    "idProduct": 45,
    "nameProduct": "Intensive Growing Media",
    "lyr": "so",
    "idSystem": 1,
    "defChoice": true,
    "mm": 75,
    "in": 3,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "dataSource": "Turf & Soil Diagnostics lab ID# 19100013-1 dated 10/16/2019 ES Intensive ASTM E2399 & F1815",
    "dataUrl": "https://www.purple-roof.xyz/19100013-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
    "stepsArr": [
      [
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "47": {
    "idProduct": 47,
    "nameProduct": "Hydroblanket",
    "lyr": "mw",
    "idSystem": 1,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3
      ],
      [
        0,
        25,
        50,
        75
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "49": {
    "idProduct": 49,
    "nameProduct": "AH Honeycomb",
    "lyr": "hc",
    "idSystem": 1,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "HC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        2,
        3,
        4
      ],
      [
        0,
        12,
        25,
        50,
        75,
        100
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "51": {
    "idProduct": 51,
    "nameProduct": "AH Detention layer",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DL",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "52": {
    "idProduct": 52,
    "nameProduct": "Gardendrain GR50",
    "typeProduct": "drainPlate",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 50,
    "in": 2,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DP",
    "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "53": {
    "idProduct": 53,
    "nameProduct": "Hydrodrain 300",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DR",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "54": {
    "idProduct": 54,
    "nameProduct": "Sedum Blanket",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "55": {
    "idProduct": 55,
    "nameProduct": "NL Sedum blanket 2",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "56": {
    "idProduct": 56,
    "nameProduct": "NL600 Growing Media",
    "lyr": "so",
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        10,
        20,
        40,
        50,
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 10
      },
      {
        "in": 1,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "57": {
    "idProduct": 57,
    "nameProduct": "NL601 Growing Media",
    "lyr": "so",
    "idSystem": 2,
    "mm": 50,
    "in": 2,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        10,
        20,
        40,
        50,
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 10
      },
      {
        "in": 1,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "58": {
    "idProduct": 58,
    "nameProduct": "NL501 Needled Mineral Hydro Blanket",
    "lyr": "mw",
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.nlsm.ca/advancements-in-efficient-stormwater-management-in-vegetated-roofing/",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3
      ],
      [
        0,
        25,
        50,
        75
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "60": {
    "idProduct": 60,
    "nameProduct": "NL351 Reservoir Cell",
    "lyr": "hc",
    "idSystem": 2,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "RC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        2,
        3,
        4
      ],
      [
        0,
        12,
        25,
        50,
        75,
        100
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "62": {
    "idProduct": 62,
    "nameProduct": "NL350 Detention Mat",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DM",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "63": {
    "idProduct": 63,
    "nameProduct": "NL300 Drainage Mat",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DM",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "64": {
    "idProduct": 64,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 3,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "65": {
    "idProduct": 65,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 3,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "66": {
    "idProduct": 66,
    "nameProduct": "Sempergreen Growth Media",
    "lyr": "so",
    "idSystem": 3,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
    "stepsArr": [
      [
        0,
        0.5,
        0.8,
        1.5,
        2.4,
        3.2,
        4,
        4.7,
        6,
        7,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        12,
        20,
        40,
        60,
        80,
        100,
        120,
        150,
        175,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.7,
        "mm": 120
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "68": {
    "idProduct": 68,
    "nameProduct": "Urbanscape Green Roll",
    "lyr": "mw",
    "idSystem": 3,
    "defChoice": true,
    "mm": 20,
    "in": 0.8,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        0.8,
        1.6,
        2.4,
        3.2
      ],
      [
        0,
        20,
        40,
        60,
        80
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.6,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "70": {
    "idProduct": 70,
    "nameProduct": "Sempergreen Storage Layer HC40",
    "lyr": "hc",
    "idSystem": 3,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "HC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        0.8,
        1.6,
        2.4,
        3.2
      ],
      [
        0,
        12,
        20,
        40,
        60,
        80
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.6,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "72": {
    "idProduct": 72,
    "nameProduct": "Sempergreen Detention Layer T5",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DL",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "73": {
    "idProduct": 73,
    "nameProduct": "Sempergreen Tangled Monofilament Drainage",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 3,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DR",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "74": {
    "idProduct": 74,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 4,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "75": {
    "idProduct": 75,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 4,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "76": {
    "idProduct": 76,
    "nameProduct": "Urbanscape Growing Media 1",
    "lyr": "so",
    "idSystem": 4,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered blend used by plants as their primary rooting medium and as a water and nutrients source.",
    "stepsArr": [
      [
        0,
        0.5,
        0.8,
        1.5,
        2.4,
        3.2,
        4,
        4.7,
        6,
        7,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        12,
        20,
        40,
        60,
        80,
        100,
        120,
        150,
        175,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.7,
        "mm": 120
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "78": {
    "idProduct": 78,
    "nameProduct": "Urbanscape Green Roll",
    "lyr": "mw",
    "idSystem": 4,
    "defChoice": true,
    "mm": 20,
    "in": 0.8,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        0.8,
        1.6,
        2.4,
        3.2
      ],
      [
        0,
        20,
        40,
        60,
        80
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.6,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "80": {
    "idProduct": 80,
    "nameProduct": "Urbanscape Storage Layer HC40",
    "lyr": "hc",
    "idSystem": 4,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "HC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        0.8,
        1.6,
        2.4,
        3.2
      ],
      [
        0,
        12,
        20,
        40,
        60,
        80
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 0.8,
        "mm": 20
      },
      {
        "in": 1.6,
        "mm": 40
      },
      {
        "in": 2.4,
        "mm": 60
      },
      {
        "in": 3.2,
        "mm": 80
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "82": {
    "idProduct": 82,
    "nameProduct": "Urbanscape Detention Layer T5",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DL",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "83": {
    "idProduct": 83,
    "nameProduct": "Urbanscape Tangled monofilament",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 4,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DR",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "84": {
    "idProduct": 84,
    "nameProduct": "Sedum Mat",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "85": {
    "idProduct": 85,
    "nameProduct": "no vegetation",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "86": {
    "idProduct": 86,
    "nameProduct": "Green roof soil",
    "lyr": "so",
    "idSystem": 5,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "dataSource": "Turf & Soil Diagnostics lab ID# 19100013-1 dated 10/16/2019 ES Intensive ASTM E2399 & F1815",
    "dataUrl": "https://www.purple-roof.xyz/19100013-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GRS",
    "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        10,
        20,
        40,
        50,
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 10
      },
      {
        "in": 1,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "88": {
    "idProduct": 88,
    "nameProduct": "Needled mineral wool",
    "lyr": "mw",
    "idSystem": 5,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3
      ],
      [
        0,
        25,
        50,
        75
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "90": {
    "idProduct": 90,
    "nameProduct": "Honeycomb",
    "lyr": "hc",
    "idSystem": 5,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "HC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        2,
        3,
        4
      ],
      [
        0,
        12,
        25,
        50,
        75,
        100
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "92": {
    "idProduct": 92,
    "nameProduct": "Detention layer",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DL",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "93": {
    "idProduct": 93,
    "nameProduct": "Dimpled drain plate",
    "typeProduct": "drainPlate",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DP",
    "useProduct": "Conventional sheet- or board-type drainage layer with water-holding cups.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "94": {
    "idProduct": 94,
    "nameProduct": "Tangled monofilament",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DR",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "99": {
    "idProduct": 99,
    "nameProduct": "no drainage layer",
    "typeProduct": "none",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 0,
    "in": 0,
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "104": {
    "idProduct": 104,
    "nameProduct": "no vegetation",
    "typeProduct": "none",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "110": {
    "idProduct": 110,
    "nameProduct": "Root Stop HD",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "112": {
    "idProduct": 112,
    "nameProduct": "DuPont Styrofoam Insulation",
    "lyr": "xp",
    "idSystem": 1,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "DuPont Styrofoam Insulation (extruded polystyrene or XPS) is used as building insulation in an IRMA (inverted roof membrane assembly) configuration.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "114": {
    "idProduct": 114,
    "nameProduct": "NL120 Protective Fleece",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (low-density polyethylene) that is loose-laid over roofing/waterproofing membrane to protect it from root encroachment.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "115": {
    "idProduct": 115,
    "nameProduct": "NL507 Protective Fleece",
    "typeProduct": "prot",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 2,
    "in": 0.08,
    "labelSymbol": "PL",
    "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "119": {
    "idProduct": 119,
    "nameProduct": "Root Barrier",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "120": {
    "idProduct": 120,
    "nameProduct": "Protection Layer",
    "typeProduct": "prot",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 3,
    "mm": 2,
    "in": 0.08,
    "labelSymbol": "PL",
    "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "124": {
    "idProduct": 124,
    "nameProduct": "Root Barrier",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "125": {
    "idProduct": 125,
    "nameProduct": "Protection Layer",
    "typeProduct": "prot",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 4,
    "mm": 2,
    "in": 0.08,
    "labelSymbol": "PL",
    "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "129": {
    "idProduct": 129,
    "nameProduct": "Root Barrier",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "130": {
    "idProduct": 130,
    "nameProduct": "Protection Layer",
    "typeProduct": "prot",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 2,
    "in": 0.08,
    "labelSymbol": "PL",
    "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "131": {
    "idProduct": 131,
    "nameProduct": "no protection layer",
    "typeProduct": "none",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 0,
    "in": 0,
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "132": {
    "idProduct": 132,
    "nameProduct": "Extruded Polystyrene Insulation (XPS)",
    "lyr": "xp",
    "idSystem": 5,
    "defChoice": true,
    "mm": 0,
    "in": 0,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "134": {
    "idProduct": 134,
    "nameProduct": "Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "135": {
    "idProduct": 135,
    "nameProduct": "Paver Pedestals",
    "lyr": "pd",
    "idSystem": 5,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "136": {
    "idProduct": 136,
    "nameProduct": "Wind Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "137": {
    "idProduct": 137,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "138": {
    "idProduct": 138,
    "nameProduct": "ponding",
    "lyr": "pn",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "139": {
    "idProduct": 139,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 5,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "140": {
    "idProduct": 140,
    "nameProduct": "Filter Fabric",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "141": {
    "idProduct": 141,
    "nameProduct": "Edging",
    "lyr": "an",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "142": {
    "idProduct": 142,
    "nameProduct": "Precast Curb",
    "lyr": "cb",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "143": {
    "idProduct": 143,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "144": {
    "idProduct": 144,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 5,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "145": {
    "idProduct": 145,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 5,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "146": {
    "idProduct": 146,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 5,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "147": {
    "idProduct": 147,
    "nameProduct": "Waterproofing Membrane",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "148": {
    "idProduct": 148,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 5,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "149": {
    "idProduct": 149,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "150": {
    "idProduct": 150,
    "nameProduct": "Drain Box",
    "lyr": "db",
    "idSystem": 5,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "151": {
    "idProduct": 151,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 5,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "152": {
    "idProduct": 152,
    "nameProduct": "label",
    "lyr": "lb",
    "idSystem": 5,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "153": {
    "idProduct": 153,
    "nameProduct": "NL201 Edging",
    "lyr": "an",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "154": {
    "idProduct": 154,
    "nameProduct": "SW201 Edging",
    "lyr": "an",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped aluminum strips used to contain the vegetated roof components.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "155": {
    "idProduct": 155,
    "nameProduct": "NL400 Filter Fabric",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "157": {
    "idProduct": 157,
    "nameProduct": "NL211 Drainbox",
    "lyr": "db",
    "idSystem": 2,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "158": {
    "idProduct": 158,
    "nameProduct": "SW211 Drainbox",
    "lyr": "db",
    "idSystem": 6,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "L-shape aluminum box used to protect the drain from clogging by debris. Drain box lids are recommended.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "159": {
    "idProduct": 159,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 1,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with a vegetation-free-zone. Coordinate specific treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "160": {
    "idProduct": 160,
    "nameProduct": "Lite Top Intensive Growing Media",
    "lyr": "so",
    "idSystem": 1,
    "mm": 75,
    "in": 3,
    "dryKgM3": 818.55,
    "f18KgM3": 1108.56,
    "fcKgM3": 1328.56,
    "satKgM3": 1408.55,
    "dataSource": "Turf & Soil Diagnostics lab ID# 19010022-1 dated 1/14/2019 ES Intensive Rooftop ASTM E2399 only",
    "dataUrl": "https://www.purple-roof.xyz/19010022-1.pdf",
    "labelSymbol": "GM",
    "stepsArr": [
      [
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "soDryKgM3:  818.55, // 51.1 lbs/cf;\r\nsoF18KgM3: 1108.56, // 69.2 lbs/cf\r\nsoFcKgM3:  1328.56, // 82.94 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1408.55,",
    "status": "live"
  },
  "161": {
    "idProduct": 161,
    "nameProduct": "Lite Top Extensive Growing Media",
    "lyr": "so",
    "idSystem": 1,
    "mm": 75,
    "in": 3,
    "dryKgM3": 868.2,
    "f18KgM3": 1153.21,
    "fcKgM3": 1378.22,
    "satKgM3": 1458.2,
    "dataSource": "Turf & Soil Diagnostics lab ID# 19010053-1 dated 1/24/2019 ES Extensive ASTM E2399 only",
    "dataUrl": "https://www.purple-roof.xyz/19010053-1.pdf",
    "labelSymbol": "GM",
    "stepsArr": [
      [
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "soDryKgM3:  868.2,  // 54.2 lbs/cf;\r\nsoF18KgM3: 1153.21, // 71.99 lbs/cf\r\nsoFcKgM3:  1378.22, // 86.04 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1458.2,",
    "status": "live"
  },
  "162": {
    "idProduct": 162,
    "nameProduct": "Lite Top Urban Agriculture Growing Media",
    "lyr": "so",
    "idSystem": 1,
    "mm": 75,
    "in": 3,
    "dryKgM3": 783.3,
    "f18KgM3": 1073.31,
    "fcKgM3": 1303.32,
    "satKgM3": 1403.3,
    "dataSource": "Turf & Soil Diagnostics lab ID# 19020025-1 dated 2/11/2019 AHI ES Urban Ag Blend ASTM E2399 only",
    "dataUrl": "https://www.purple-roof.xyz/19020025-1.pdf",
    "labelSymbol": "GM",
    "stepsArr": [
      [
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "soDryKgM3:  783.3,  // 48.9 lbs/cf;\r\nsoF18KgM3: 1073.31, // 67 lbs/cf\r\nsoFcKgM3:  1303.32, // 81.36 lbs/cf; Fc = ASTM E-2399 max ret\r\nsoSatKgM3: 1403.3,",
    "status": "live"
  },
  "164": {
    "idProduct": 164,
    "nameProduct": "Hanover Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "165": {
    "idProduct": 165,
    "nameProduct": "Hanover Fixed Height or Elevator Pedestal",
    "lyr": "pd",
    "idSystem": 1,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "166": {
    "idProduct": 166,
    "nameProduct": "Checker Block Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "167": {
    "idProduct": 167,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "168": {
    "idProduct": 168,
    "nameProduct": "ponding 1",
    "lyr": "pn",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "169": {
    "idProduct": 169,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 1,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "170": {
    "idProduct": 170,
    "nameProduct": "Systemfilter",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "171": {
    "idProduct": 171,
    "nameProduct": "GardenEdge",
    "lyr": "an",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "172": {
    "idProduct": 172,
    "nameProduct": "Hanover Rock Curb",
    "lyr": "cb",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "173": {
    "idProduct": 173,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "174": {
    "idProduct": 174,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 1,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "175": {
    "idProduct": 175,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 1,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "176": {
    "idProduct": 176,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 1,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "177": {
    "idProduct": 177,
    "nameProduct": "Monolithic Membrane 6125",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "178": {
    "idProduct": 178,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 1,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "179": {
    "idProduct": 179,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "180": {
    "idProduct": 180,
    "nameProduct": "GardenHatch Inspection Chamber",
    "lyr": "db",
    "idSystem": 1,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "181": {
    "idProduct": 181,
    "nameProduct": "label 1",
    "lyr": "lb",
    "idSystem": 1,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "182": {
    "idProduct": 182,
    "nameProduct": "Extruded Polystyrene Insulation (XPS)",
    "lyr": "xp",
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "183": {
    "idProduct": 183,
    "nameProduct": "Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "184": {
    "idProduct": 184,
    "nameProduct": "Paver Pedestals",
    "lyr": "pd",
    "idSystem": 2,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "185": {
    "idProduct": 185,
    "nameProduct": "Wind Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "186": {
    "idProduct": 186,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "187": {
    "idProduct": 187,
    "nameProduct": "ponding 2",
    "lyr": "pn",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "188": {
    "idProduct": 188,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 2,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "189": {
    "idProduct": 189,
    "nameProduct": "Precast Curb",
    "lyr": "cb",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "190": {
    "idProduct": 190,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "191": {
    "idProduct": 191,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 2,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "192": {
    "idProduct": 192,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 2,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "193": {
    "idProduct": 193,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 2,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "194": {
    "idProduct": 194,
    "nameProduct": "Waterproofing Membrane",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "195": {
    "idProduct": 195,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 2,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "196": {
    "idProduct": 196,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "197": {
    "idProduct": 197,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 2,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "198": {
    "idProduct": 198,
    "nameProduct": "label 2",
    "lyr": "lb",
    "idSystem": 2,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "199": {
    "idProduct": 199,
    "nameProduct": "Extruded Polystyrene Insulation (XPS)",
    "lyr": "xp",
    "idSystem": 3,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "200": {
    "idProduct": 200,
    "nameProduct": "Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "201": {
    "idProduct": 201,
    "nameProduct": "Paver Pedestals",
    "lyr": "pd",
    "idSystem": 3,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "202": {
    "idProduct": 202,
    "nameProduct": "Wind Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "203": {
    "idProduct": 203,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "204": {
    "idProduct": 204,
    "nameProduct": "ponding 3",
    "lyr": "pn",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "205": {
    "idProduct": 205,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 3,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "206": {
    "idProduct": 206,
    "nameProduct": "Filter Fabric",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "207": {
    "idProduct": 207,
    "nameProduct": "Edging",
    "lyr": "an",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "208": {
    "idProduct": 208,
    "nameProduct": "Precast Curb",
    "lyr": "cb",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "209": {
    "idProduct": 209,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "210": {
    "idProduct": 210,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 3,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "211": {
    "idProduct": 211,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 3,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "212": {
    "idProduct": 212,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 3,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "213": {
    "idProduct": 213,
    "nameProduct": "Waterproofing Membrane",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "214": {
    "idProduct": 214,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 3,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "215": {
    "idProduct": 215,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "216": {
    "idProduct": 216,
    "nameProduct": "Drain Box",
    "lyr": "db",
    "idSystem": 3,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "217": {
    "idProduct": 217,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 3,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "218": {
    "idProduct": 218,
    "nameProduct": "label 3",
    "lyr": "lb",
    "idSystem": 3,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "219": {
    "idProduct": 219,
    "nameProduct": "Extruded Polystyrene Insulation (XPS)",
    "lyr": "xp",
    "idSystem": 4,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "220": {
    "idProduct": 220,
    "nameProduct": "Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "221": {
    "idProduct": 221,
    "nameProduct": "Paver Pedestals",
    "lyr": "pd",
    "idSystem": 4,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "222": {
    "idProduct": 222,
    "nameProduct": "Wind Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "223": {
    "idProduct": 223,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "224": {
    "idProduct": 224,
    "nameProduct": "ponding 4",
    "lyr": "pn",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "225": {
    "idProduct": 225,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 4,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "226": {
    "idProduct": 226,
    "nameProduct": "Filter Fabric",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "227": {
    "idProduct": 227,
    "nameProduct": "Edging",
    "lyr": "an",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "ED",
    "useProduct": "L-shaped containment around the green roof, often bent aluminum, sometimes stainless steel or heavy plastic.",
    "stepsArr": null,
    "sitsOn": "pt",
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "228": {
    "idProduct": 228,
    "nameProduct": "Precast Curb",
    "lyr": "cb",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "229": {
    "idProduct": 229,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "230": {
    "idProduct": 230,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 4,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "231": {
    "idProduct": 231,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 4,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "232": {
    "idProduct": 232,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 4,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "233": {
    "idProduct": 233,
    "nameProduct": "Waterproofing Membrane",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "234": {
    "idProduct": 234,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 4,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "235": {
    "idProduct": 235,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "236": {
    "idProduct": 236,
    "nameProduct": "Drain Box",
    "lyr": "db",
    "idSystem": 4,
    "defChoice": true,
    "mm": 100,
    "in": 4,
    "labelSymbol": "DB",
    "useProduct": "Chamber that covers the roof drain to allow drainage and protect the drain from debris. Chamber must allow inspection and cleaning.",
    "stepsArr": [
      [
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "sitsOn": "pt",
    "status": "live"
  },
  "237": {
    "idProduct": 237,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 4,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "238": {
    "idProduct": 238,
    "nameProduct": "label 4",
    "lyr": "lb",
    "idSystem": 4,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "239": {
    "idProduct": 239,
    "nameProduct": "Sedum Blanket",
    "typeProduct": "other",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 0.2,
    "in": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "deprecated",
    "gi": null
  },
  "241": {
    "idProduct": 241,
    "nameProduct": "SW600 Growing Media",
    "lyr": "so",
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 837.77,
    "f18KgM3": 1113.78,
    "fcKgM3": 1327.78,
    "satKgM3": 1437.77,
    "legendUrl": "https://www.purple-roof.com/specs#soil-media",
    "legendUrlText": "click to learn more about green roof soil",
    "labelSymbol": "GM",
    "useProduct": "Engineered soil media (or green roof soil) is the primary rooting medium and nutrient source for plants, provides weight (ballast) to prevent wind uplift, and retains water.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        10,
        20,
        40,
        50,
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 10
      },
      {
        "in": 1,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "notes": "dry 52.3 lbs/cf, f18  69.53 lbs/cf, fc 82.89 lbs/cf; Fc = ASTM E-2399 max ret",
    "status": "live"
  },
  "242": {
    "idProduct": 242,
    "nameProduct": "SW501 Needled Mineral Hydro Blanket",
    "lyr": "mw",
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 160.08,
    "f18KgM3": 860.1,
    "fcKgM3": 1090.11,
    "satKgM3": 1187.26,
    "dataSource": "Turf & Soil Diagnostics lab ID# 17120050-1 dated 12/22/2017 ASTM E2397 only",
    "dataUrl": "https://www.purple-roof.xyz/17120050-1.pdf",
    "legendUrl": "https://www.purple-roof.com/specs#needled-mineral-wool",
    "legendUrlText": "click here to learn about needled mineral wool for stormwater retention",
    "labelSymbol": "NMW",
    "useProduct": "Needled mineral wool layer manufactured from 100% rock that serves to efficiently retain stormwater, and serves as a secondary rooting medium.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3
      ],
      [
        0,
        25,
        50,
        75
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      }
    ],
    "notes": "dry 160.08, // 9.99 lbs/cf, f1815  860.10, // 53.69 lbs/cf, fc 1090.11, // 68.05 lbs/cf; Fc = ASTM E-2399 max ret,",
    "status": "live"
  },
  "243": {
    "idProduct": 243,
    "nameProduct": "SW351 Reservoir Cell",
    "lyr": "hc",
    "idSystem": 6,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#honeycomb",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "HC",
    "useProduct": "Water storage reservoir consisting of a series of vertical tubes that detain (hold) water for up to several hours after rainfall.",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        2,
        3,
        4
      ],
      [
        0,
        12,
        25,
        50,
        75,
        100
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 12
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      }
    ],
    "notes": "dry_kg_m3:   67.28, // 4.2 lbs/cf;\r\nf18_kg_m3:   67.28,\r\nfc_kg_m3:    67.28, // 2 lbs/cf;  Fc = ASTM E-2399 max ret\r\nsat_kg_m3:  933.76,",
    "status": "live"
  },
  "244": {
    "idProduct": 244,
    "nameProduct": "SW350 Detention Mat",
    "typeProduct": "det",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 5,
    "in": 0.2,
    "dryKgM2": 0.0205,
    "f18KgM2": 0.0205,
    "fcKgM2": 0.0205,
    "satKgM2": 4.684,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "legendUrl": "https://www.purple-roof.com/specs#detention-layer",
    "legendUrlText": "click here to learn more",
    "labelSymbol": "DL",
    "useProduct": "Specialized drainage composite that regulates flow rates, particularly during large storms.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0205, // 0.1 lbs/sf,\r\nf18_kg_m2:    0.0205,\r\nfc_kg_m2:     0.0205,\r\nsat_kg_m2:    4.684,",
    "status": "live",
    "gi": 1
  },
  "246": {
    "idProduct": 246,
    "nameProduct": "SW300 Drainage Mat",
    "typeProduct": "mono",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 17,
    "in": 0.67,
    "dryKgM2": 0.0287,
    "f18KgM2": 0.0287,
    "fcKgM2": 0.0287,
    "satKgM2": 0.0287,
    "dataSource": "GRD current data, measured in Culpeper lab, saved in StormWatch",
    "labelSymbol": "DR",
    "useProduct": "Lightweight and flexible three-dimentional drainage layer consisting of looped polyamide filament that facilitates water runoff to drain.",
    "stepsArr": null,
    "notes": "dry_kg_m2:    0.0287,\r\nf18_kg_m2:    0.0287,\r\nfc_kg_m2:     0.0287,\r\nsat_kg_m2:    0.0287,",
    "status": "live",
    "gi": 1
  },
  "248": {
    "idProduct": 248,
    "nameProduct": "undefined 6",
    "typeProduct": "none",
    "lyr": "xx",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 12,
    "in": 0.5,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "249": {
    "idProduct": 249,
    "nameProduct": "SW120 Protective Fleece",
    "typeProduct": "rb",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 0.7,
    "in": 0.02,
    "labelSymbol": "RB",
    "useProduct": "Root-impermeable layer (often HDPE) loose-laid over root-penetrable membranes. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "250": {
    "idProduct": 250,
    "nameProduct": "SW507 Protective Fleece",
    "typeProduct": "prot",
    "lyr": "pt",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 2,
    "in": 0.08,
    "labelSymbol": "PL",
    "useProduct": "The protection layer is a loose-laid geotextile or sacrificial membrane that protects the roof from damage, particularly during installation. Coordinate type and need with membrane manufacturer.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "252": {
    "idProduct": 252,
    "nameProduct": "Extruded Polystyrene Insulation (XPS)",
    "lyr": "xp",
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 30,
    "f18KgM3": 30,
    "fcKgM3": 30,
    "satKgM3": 30,
    "labelSymbol": "XPS",
    "useProduct": "XPS is used as building insulation in an IRMA (inverted roof membrane assembly) configuration. Coordinate with membrane manufacturer.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150,
        175,
        200
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 7,
        "mm": 175
      },
      {
        "in": 8,
        "mm": 200
      }
    ],
    "status": "live"
  },
  "253": {
    "idProduct": 253,
    "nameProduct": "Pavers",
    "lyr": "pv",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "PV",
    "useProduct": "Pedestrian pavers, such as precast concrete, teak, or porcelain.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "254": {
    "idProduct": 254,
    "nameProduct": "Paver Pedestals",
    "lyr": "pd",
    "idSystem": 6,
    "defChoice": true,
    "mm": 25,
    "in": 1,
    "dryKgM2": 10,
    "f18KgM2": 10,
    "fcKgM2": 10,
    "satKgM2": 10,
    "labelSymbol": "PP",
    "useProduct": "Pedestals to support pedestrian pavers. Coordinate with paver manufacturer.",
    "stepsArr": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 1,
        "mm": 25
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "255": {
    "idProduct": 255,
    "nameProduct": "Wind Pavers",
    "lyr": "wp",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM2": 100,
    "f18KgM2": 100,
    "fcKgM2": 100,
    "satKgM2": 100,
    "labelSymbol": "WP",
    "useProduct": "Pavers designed to be used in green roof to resist wind erosion.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "256": {
    "idProduct": 256,
    "nameProduct": "Sedum Plugs in Wind Pavers",
    "lyr": "pw",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "labelSymbol": "PL",
    "useProduct": "Wind pavers are designed to be planted with the same vegetation as green roofs, but usually as plugs vs mats.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "257": {
    "idProduct": 257,
    "nameProduct": "ponding 6",
    "lyr": "pn",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "satKgM3": 1000,
    "dataSource": "no ponding",
    "stepsArr": null,
    "status": "live"
  },
  "258": {
    "idProduct": 258,
    "nameProduct": "Gravel",
    "lyr": "gv",
    "idSystem": 6,
    "defChoice": true,
    "mm": 50,
    "in": 2,
    "dryKgM3": 1600,
    "f18KgM3": 1700,
    "fcKgM3": 1700,
    "satKgM3": 2100,
    "labelSymbol": "GV",
    "useProduct": "Numerous uses: ballast to prevent wind uplift, filler material in areas where vegetation is not desirable, such as around roof drains and perimeters, and as drainage material, such as at downspouts. Coordinate type and size with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        2,
        3,
        4,
        5,
        6
      ],
      [
        0,
        50,
        75,
        100,
        125,
        150
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      }
    ],
    "notes": "dry_kg_m3: 1600, \r\nf18_kg_m3: 1700, \r\nfc_kg_m3:  1700,\r\nsat_kg_m3: 2100,",
    "status": "live"
  },
  "259": {
    "idProduct": 259,
    "nameProduct": "SW400 Filter Fabric",
    "lyr": "ff",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 1,
    "in": 0.04,
    "labelSymbol": "FF",
    "useProduct": "Thermally bonded non-woven geo-textile fabric that protects the underlying material from accumulation of fines. Use below gravel, and below media (omit when mineral wool is used)",
    "stepsArr": null,
    "status": "live",
    "gi": 0.26
  },
  "260": {
    "idProduct": 260,
    "nameProduct": "Precast Curb",
    "lyr": "cb",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "PC",
    "useProduct": "Precast concrete or stone perimeter units around the green roof, sometimes used in high-visibility areas.",
    "stepsArr": null,
    "sitsOnOptions": [
      "pt",
      "xp",
      "mb",
      "dr",
      "hc"
    ],
    "status": "live"
  },
  "261": {
    "idProduct": 261,
    "nameProduct": "Expansion Joint",
    "lyr": "ej",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "EJ",
    "useProduct": "Expansion joint, such as within concrete decks. Coordinate type of surface treatment with waterproofing membrane manufacturer.",
    "stepsArr": null,
    "status": "live"
  },
  "262": {
    "idProduct": 262,
    "nameProduct": "Equipment Curb",
    "lyr": "eq",
    "idSystem": 6,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "EC",
    "useProduct": "Curb or similar structure used for mounting rooftop equipment, such as HVAC units. Typically the roofing membrane covers the curb.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "263": {
    "idProduct": 263,
    "nameProduct": "Tie Anchor",
    "lyr": "ta",
    "idSystem": 6,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "TA",
    "useProduct": "Connection point for fall protection system. Type and attachment vary.",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "264": {
    "idProduct": 264,
    "nameProduct": "Pipe Penetration",
    "lyr": "pi",
    "idSystem": 6,
    "defChoice": true,
    "mm": 200,
    "in": 8,
    "labelSymbol": "PP",
    "useProduct": "Pipe penetration (such as plumbing vent).",
    "stepsArr": [
      [
        0,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "265": {
    "idProduct": 265,
    "nameProduct": "Waterproofing Membrane",
    "lyr": "mb",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 6,
    "in": 0.25,
    "labelSymbol": "MB",
    "useProduct": "Water-impenetrable membrane that prevents water penetration into the building.",
    "stepsArr": null,
    "status": "live",
    "gi": 0.4
  },
  "266": {
    "idProduct": 266,
    "nameProduct": "Structural Deck",
    "lyr": "sr",
    "idSystem": 6,
    "defChoice": true,
    "mm": 40,
    "in": 1.5,
    "labelSymbol": "SD",
    "useProduct": "Material varies (concrete, steel, wood, other).",
    "stepsArr": null,
    "status": "live"
  },
  "267": {
    "idProduct": 267,
    "nameProduct": "Roof Drain",
    "lyr": "rd",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "labelSymbol": "RD",
    "useProduct": "Drain internal to the roof, usually spaced and sized by the plumbing engineer.",
    "stepsArr": null,
    "status": "live"
  },
  "268": {
    "idProduct": 268,
    "nameProduct": "Parapet Wall",
    "lyr": "wa",
    "idSystem": 6,
    "defChoice": true,
    "mm": 250,
    "in": 10,
    "labelSymbol": "PW",
    "useProduct": "Wall bordering the green roof, with or without a vegetation-free-zone. Coordinate treatment at walls with wind resistance requirements.",
    "stepsArr": [
      [
        0,
        3,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        75,
        100,
        125,
        150,
        200,
        225,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3,
        "mm": 75
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 5,
        "mm": 125
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 9,
        "mm": 225
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "269": {
    "idProduct": 269,
    "nameProduct": "label 6",
    "lyr": "lb",
    "idSystem": 6,
    "defChoice": true,
    "mm": null,
    "in": null,
    "stepsArr": null,
    "status": "live"
  },
  "270": {
    "idProduct": 270,
    "nameProduct": "Buffer Layer",
    "lyr": "bf",
    "idSystem": 5,
    "defChoice": true,
    "mm": 85,
    "in": 3.3,
    "dryKgM3": 67.28,
    "f18KgM3": 67.28,
    "fcKgM3": 67.28,
    "satKgM3": 933.76,
    "labelSymbol": "BL",
    "useProduct": "Buffer layer stores water in blue-green roofs",
    "stepsArr": [
      [
        0,
        3.3,
        6.7
      ],
      [
        0,
        85,
        170
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 3.3,
        "mm": 85
      },
      {
        "in": 6.7,
        "mm": 170
      }
    ],
    "status": "live"
  },
  "272": {
    "idProduct": 272,
    "nameProduct": "Gardendrain GR30",
    "typeProduct": "drainPlate",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 30,
    "in": 1.25,
    "labelSymbol": "DP",
    "stepsArr": null,
    "status": "live",
    "gi": 1
  },
  "273": {
    "idProduct": 273,
    "nameProduct": "Gardendrain GR15",
    "typeProduct": "drainPlate",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 15,
    "in": 0.625,
    "labelSymbol": "DP",
    "stepsArr": null,
    "status": "live",
    "gi": 1
  },
  "275": {
    "idProduct": 275,
    "nameProduct": "SW601 Growing Media",
    "lyr": "so",
    "idSystem": 6,
    "mm": null,
    "in": null,
    "labelSymbol": "GM",
    "stepsArr": [
      [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      [
        0,
        10,
        20,
        40,
        50,
        60,
        80,
        90,
        100,
        110,
        130,
        140,
        150,
        160,
        180,
        190,
        200,
        250,
        300,
        350,
        400,
        450
      ]
    ],
    "steps": [
      {
        "in": 0,
        "mm": 0
      },
      {
        "in": 0.5,
        "mm": 10
      },
      {
        "in": 1,
        "mm": 20
      },
      {
        "in": 1.5,
        "mm": 40
      },
      {
        "in": 2,
        "mm": 50
      },
      {
        "in": 2.5,
        "mm": 60
      },
      {
        "in": 3,
        "mm": 80
      },
      {
        "in": 3.5,
        "mm": 90
      },
      {
        "in": 4,
        "mm": 100
      },
      {
        "in": 4.5,
        "mm": 110
      },
      {
        "in": 5,
        "mm": 130
      },
      {
        "in": 5.5,
        "mm": 140
      },
      {
        "in": 6,
        "mm": 150
      },
      {
        "in": 6.5,
        "mm": 160
      },
      {
        "in": 7,
        "mm": 180
      },
      {
        "in": 7.5,
        "mm": 190
      },
      {
        "in": 8,
        "mm": 200
      },
      {
        "in": 10,
        "mm": 250
      },
      {
        "in": 12,
        "mm": 300
      },
      {
        "in": 14,
        "mm": 350
      },
      {
        "in": 16,
        "mm": 400
      },
      {
        "in": 18,
        "mm": 450
      }
    ],
    "status": "live"
  },
  "276": {
    "idProduct": 276,
    "nameProduct": "no drainage layer",
    "typeProduct": "none",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 0,
    "in": 0,
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "277": {
    "idProduct": 277,
    "nameProduct": "no drainage layer",
    "typeProduct": "none",
    "lyr": "dr",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 0,
    "in": 0,
    "stepsArr": null,
    "status": "live",
    "gi": 0
  },
  "278": {
    "idProduct": 278,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 4,
    "defChoice": true,
    "mm": 20,
    "in": 0.8,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "279": {
    "idProduct": 279,
    "nameProduct": "Sempergreen Sedum-mix blanket",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 3,
    "defChoice": true,
    "mm": 20,
    "in": 0.8,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 20mm to 40mm.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "280": {
    "idProduct": 280,
    "nameProduct": "Sedum Mat",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum mat thickness typically ranges from 1/2-inch to 3/4-inch.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "281": {
    "idProduct": 281,
    "nameProduct": "Instagreen Carpet",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 1,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "282": {
    "idProduct": 282,
    "nameProduct": "Sedum Blanket",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 2,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "283": {
    "idProduct": 283,
    "nameProduct": "Sedum Blanket",
    "typeProduct": "mat",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 6,
    "defChoice": true,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention). Sedum blanket thickness typically ranges from 1/2-inch to 3/4-inch.",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "284": {
    "idProduct": 284,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 4,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "285": {
    "idProduct": 285,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 3,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "286": {
    "idProduct": 286,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 6,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "287": {
    "idProduct": 287,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "288": {
    "idProduct": 288,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 1,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "289": {
    "idProduct": 289,
    "nameProduct": "Sedum Plugs",
    "typeProduct": "plug",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 2,
    "mm": 0.2,
    "in": 0.01,
    "dryKgM2": 0.01,
    "f18KgM2": 0.01,
    "fcKgM2": 0.01,
    "satKgM2": 0.01,
    "legendUrl": "https://www.purple-roof.com/specs#vegetation",
    "legendUrlText": "click to learn more about green roof plants",
    "labelSymbol": "VE",
    "useProduct": "Vegetation prevents erosion of the growing medium and is the primary driver for evapotranspiration (retention).",
    "stepsArr": null,
    "status": "live",
    "gi": null
  },
  "290": {
    "idProduct": 290,
    "nameProduct": "Bee & Butterfly Planters (Showy Mix)",
    "typeProduct": "bnb",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "labelSymbol": "BBP",
    "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
    "stepsArr": null,
    "status": "live",
    "varProduct": "show",
    "idProductExtra": 280,
    "gi": null
  },
  "291": {
    "idProduct": 291,
    "nameProduct": "Bee & Butterfly Planters (Grassy Mix)",
    "typeProduct": "bnb",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "labelSymbol": "BBP",
    "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
    "stepsArr": null,
    "status": "live",
    "varProduct": "grass",
    "idProductExtra": 280,
    "gi": null
  },
  "292": {
    "idProduct": 292,
    "nameProduct": "Bee & Butterfly Planters (Meadow Mix)",
    "typeProduct": "bnb",
    "lyr": "vg",
    "hasThickness": true,
    "idSystem": 5,
    "mm": 12,
    "in": 0.5,
    "dryKgM2": 15,
    "f18KgM2": 20,
    "fcKgM2": 23,
    "satKgM2": 25,
    "labelSymbol": "BBP",
    "useProduct": "Replace approximately 3% of Sedum mats with Bee & Butterfly Planters to increase biodiversity",
    "stepsArr": null,
    "status": "live",
    "varProduct": "meadow",
    "idProductExtra": 280,
    "gi": null
  }
};

const allPaths = {
  "HP97m94rIfVwv": true,
  "lfrc80fKwhtdB": true,
  "CU4ATdr5lev7E": true,
  "dku8byeGxxAcL": true,
  "stormwatch-test-422": true,
  "EnvY6ppj9gU": true,
  "gJvg0D0zprtHJ": true,
  "BbcMmOS1wFaqN": true,
  "3o31DGqulfHCF": true,
  "mhX8fxHF4uohS": true,
  "pPS2PyVMXo0SH": true,
  "9MToMuJ1vXmGs": true,
  "fbyNMHRhiWjq5": true,
  "copy-of-stonybrook-hospital": true,
  "jbEputXOyGz0s": true,
  "qmPQpsmvzq60M": true,
  "Qjbqq9CLHWk1e": true,
  "hdBVQ5H4pUz": true,
  "C6B5Nsw6Bq4": true,
  "XO5wRwDldI6": true,
  "vuOH2Lh32bWSX": true,
  "UGnsPoJiZUYqW": true,
  "7RUud9SMOZRxa": true,
  "0pSycT8XwKZaz": true,
  "oTms8sAR4bv": true,
  "p42bzb08lJxe2": true,
  "MEgcYZC3iHTnB": true,
  "JNTh3MDrc1S": true,
  "8Csv4RNfnvLg4": true,
  "XWBVtQFJKxu0I": true,
  "1pcKsNc0r7G": true,
  "E9blGCYkJ9c": true,
  "r9TEp1WmadxXR": true,
  "WF4dv7QRfbonN": true,
  "ttRM8pokWdy": true,
  "RKks4VvyvLTsc": true,
  "8UiRqRKer7cvt": true,
  "scenario2": true,
  "tALefC8AHiRRO": true,
  "bX0jRZkoOpjzr": true,
  "lE1joNeMi21Xi": true,
  "gKpocCJhzu9": true,
  "7eNIK9wAVl9Rp": true,
  "mK7UdmoIlQmfs": true,
  "fvpNoYXAo4L": true,
  "H1incQb3aRvII": true,
  "5Swg2sAcWm2": true,
  "zVFYarmY5nGDh": true,
  "xK1FYqVTVoBRh": true,
  "BFoRmyNoKVQCU": true,
  "JC9AUtdYTVeb2": true,
  "gWxOUuzYj6AZw": true,
  "N43BAWWx3I0TY": true,
  "APfmZ0QFp2F": true,
  "yesler-terrace": true,
  "zwS758EaErLyC": true,
  "Sw0beMISiYWE5": true,
  "9kHIZ4AbIHHkD": true,
  "rbUk44CCwu3JT": true,
  "wx6Hg5v44oOu7": true,
  "LwSDhiwmjsco0": true,
  "W4KBXArcJOA": true,
  "HZs072whGBpzn": true,
  "AojfV6OUg3THA": true,
  "YyeZXx27kMz": true,
  "dQmoU3cg2hlHK": true,
  "rVcYryz8vPl": true,
  "0ebui2QK8sMu3": true,
  "mit-scc-cambridge": true,
  "NJrejISftlFEA": true,
  "2RkMM4wGX9Dfu": true,
  "YO4q1x4GSSRCL": true,
  "tRNB89MB4zy3C": true,
  "OmKrFlocFlLlH": true,
  "jRqxyCW8D87": true,
  "DZxnGgI17FLTz": true,
  "KiMniNRdXQGRg": true,
  "zzWq31GMUkc": true,
  "jpWyj3XpzQUTj": true,
  "3FmdyaeJiEo": true,
  "oHN3VqVokU5VW": true,
  "AoRLscIeoay": true,
  "lTPbKyrywpvAh": true,
  "eBfrJWlmsdSMn": true,
  "HiJM6gytsgB": true,
  "VQBeJ2LVF3vha": true,
  "ib30qhmz9Fa0E": true,
  "3qF9W63TvDe": true,
  "l6xYdofKNSL": true,
  "UiFG6ImfNLk": true,
  "OporjjX66Xg": true,
  "gO9S4xVpHNS75": true,
  "ZdHlc66hHSvxg": true,
  "cESd5bkymog1B": true,
  "BopkbFn1ncAyB": true,
  "viswC1PzCyY": true,
  "9UCAf6GeS52RE": true,
  "uiB0SRi7WFH": true,
  "3Tzu9EAyHZA50": true,
  "moderne-old": true,
  "isC51ncRonZu3": true,
  "THdeUJWPQ6h": true,
  "test-project": true,
  "Gex3RrYQ1vN": true,
  "zHUMOfG2aZm": true,
  "FgS3w4zVGeGwk": true,
  "y8QD9zyTJXioS": true,
  "u6zfmCKWMpNj1": true,
  "w4sODqOPV6yoo": true,
  "E7M3C5jE6Nt": true,
  "Lav6Cg9vXVU": true,
  "F11mMYD62ZSb9": true,
  "VmOtqFpt6DWWN": true,
  "nEPwjuUtdDfKn": true,
  "Q4Ox53Tw8OsiY": true,
  "JSjjLqmGuIaHG": true,
  "CZ6jTPjPCh4Vr": true,
  "yrZE0G7WaHSOR": true,
  "ZjCzIlDuezHxG": true,
  "EbiPDgnspMexz": true,
  "svUTiHZ9vit": true,
  "yKDwryDPUzc7r": true,
  "N7RidSdvC2Mrz": true,
  "U0XjLSTARiafN": true,
  "lU7Mz12ABWs": true,
  "J8ZPZLW9dflrS": true,
  "msbX2nISluEjQ": true,
  "qk1UJ0rQZu0pR": true,
  "sample-project": true,
  "mVF56SD0gCEch": true,
  "SniibLKcp1e": true,
  "stonybrook-hospital": true,
  "A9d167cZkuBLv": true,
  "MKdPWzdr1F04b": true,
  "XmVCHKsr8s3": true,
  "3yTziV05XrK06": true,
  "BjYSUoehRgZ": true,
  "lMwDQsYMtmJql": true,
  "zsyf2olrBgBBT": true,
  "iPHPtm2LpzML9": true,
  "AQWC44xOSIYr6": true,
  "1hVtViLJG6rW6": true,
  "D006ZxcZ59Bdi": true,
  "msrxLzpvvWgrJ": true,
  "yIPycuvSo5lvJ": true,
  "h1g9GwSRkGfsq": true,
  "z9lep4P7XIODb": true,
  "z5SICosuxwe": true,
  "KFtAOjTji50VH": true,
  "BnFJ6FoIItgIx": true,
  "Jn6emrTtTfgGq": true,
  "wCTopbgrFm0oi": true,
  "1FoRkBFNe4jfs": true,
  "iOP9oWd0AAOfz": true,
  "ktfKYMoOVn6": true,
  "6SN2szPE2Bk": true,
  "uirnrzDNuf2SV": true,
  "8Mnwvf5diHA": true,
  "tZ60YwiOx3E": true,
  "UwU7OBtjBCNeV": true,
  "MelddiPeYMi": true,
  "YqlqAWsVSDe": true,
  "yd7a8hGrrBLHU": true,
  "749QIhx4Yw43w": true,
  "I8NSCnAx6zk7K": true,
  "bxGhvET3025OD": true,
  "spT8aSvpsiz": true,
  "stormwatch-test-434": true,
  "ezK2dkWzH39Z1": true,
  "gR4rxLunbx9tY": true,
  "ShqzY20Y01X": true,
  "vIX1oSV3uOQ": true,
  "2sbFLem9ZglhV": true,
  "kIIq2FqJ5ig": true,
  "JdDcK1H0YDng2": true,
  "E95CssTk3HiIi": true,
  "40JTfS8eoj5ZE": true,
  "716OeNxBnYJAo": true,
  "calibration-3-1-0": true,
  "QG83RxAb4tS3y": true,
  "INv1LIhU3v4Tw": true,
  "amsterdam-example": true,
  "Eiv9mTAs0xD9Y": true,
  "GyGFMrjdqeG": true,
  "yJULI5huse1bP": true,
  "KMxzI87ANPJ1I": true,
  "2t4ms5rIpbr2O": true,
  "91No0i0igbCwU": true,
  "PbzRsCkkab3": true,
  "RJp3v9fERFMzn": true,
  "Zw3e57Mph12": true,
  "suaICdnbGynPF": true,
  "stormwatch-test-343": true,
  "jbbPXYoXbs1": true,
  "aaoYirQUis3qw": true,
  "VTtZy6vBtnMdC": true,
  "3w4IMisDTb1Qo": true,
  "1AN1M1GnF6m": true,
  "GU1VCjzDENA": true,
  "vUJVPSrYUTy": true,
  "fahl7OMvCOb": true,
  "i88Ju1ruF9V": true,
  "stormwatch-test-184": true,
  "Sq5sWKxKzyP": true,
  "MzT4MSwD3Si": true,
  "eyGUR69PHpEe9": true,
  "3KX9ZmCFZmUb7": true,
  "RYvHV8IoeiaOp": true,
  "Pc4GmFs3nTa": true,
  "he6cwJvbFqydH": true,
  "oNb464gE3BJ0z": true,
  "WhOIJRD9eDVR3": true,
  "c6EEz4LFSbm": true,
  "bDsRpnXqYcE": true,
  "axjrHiyde2Ur2": true,
  "73Rzj4PDAXXHR": true,
  "xlHLJNZAfzfaD": true,
  "qugGHqZQmGx": true,
  "stormwatch-test-235": true,
  "w4yhHy71kOLoS": true,
  "stormwatch-test-687": true,
  "SbXV8MeBzZV": true,
  "KjqfFMWb32I": true,
  "ceridian-mn": true,
  "bradcalcheska": true,
  "scenario1a": true,
  "R9T5jUDFQ67": true,
  "KasgArHSJTp2D": true,
  "P22IQi7kFrtuA": true,
  "stonybrook-hospital-old": true,
  "berlin-example1": true,
  "fiSZnXXBbHRWr": true,
  "stormwatch-test-177": true,
  "beach-dunes-iii": true,
  "stormwatch-test-80": true,
  "T9XV8ILWU5uF6": true,
  "stormwatch-test-180": true,
  "munich-example1": true,
  "kuySFAQoS4kha": true,
  "stormwatch-test-185": true,
  "stormwatch-test-183": true,
  "stormwatch-test-179": true,
  "4qz84C8VTa7": true,
  "zFraduA9t8UKC": true,
  "A0Ap8Rqhi2k": true,
  "1914dshkE4V": true,
  "d64ccsxZbW2Jx": true,
  "XwolsV45Q1CvQ": true,
  "BNbfruzZTlann": true,
  "hwGo9duunJtVW": true,
  "KiTvS1kwOM5": true,
  "UrdgTL9Q5mM": true,
  "RqLmvKGyVxR": true,
  "EMXC33wTFGp": true,
  "aTlpD3uWnRi": true,
  "wH4qPZAeITB": true,
  "Kq6A5rEieP4k3": true,
  "3d1zMjZgCP05L": true,
  "Ys4pgOTSSh3": true,
  "eoVjXeNB6vl": true,
  "SKA1cyDrJSS": true,
  "WCSirPj7bvL": true,
  "EvqjsUNc9sR": true,
  "FY7EnERwwrF": true,
  "HmUTvYqFDsp": true,
  "pCuz2kxKGpa": true,
  "yVouQAXeBeG": true,
  "VEM6tI1mXw6": true,
  "3YeoGKewQKlZ4": true,
  "744dgpkIQ8V": true,
  "JzOGkg7SE08": true,
  "snsMxJh6E9sVu": true,
  "mMxMY0fRI1H": true,
  "QjzVZPBA7Cro7": true,
  "TmKPL1shrU5": true,
  "tnPueBTZFuC": true,
  "VNVdth1rQ6O": true,
  "YEwxjdCzWqKup": true,
  "v5cT9kyBB20": true,
  "EvvvWbx3tfZ": true,
  "kHUT9tmt5fh": true,
  "XsIGeYM4WXJnE": true,
  "zOXCQEgtM11": true,
  "I9Z6iBDOMhU": true,
  "AcciKieP1wY": true,
  "LgGK9l8Nqgx": true,
  "fgrAdKhtfKs": true,
  "bualxlKzmDi": true,
  "7cXSgqTyRjfWz": true,
  "ZWyNBVAyQjn": true,
  "sd7OciwTAKX": true,
  "LqjMkgCuBTY": true,
  "F7Knt0Ad0ME": true,
  "bS5t7vi67ZV": true,
  "316K37dz3kT": true,
  "DujJnwnEOTl": true,
  "31rHE0sbWP8": true,
  "Idto9pLzaPD": true,
  "waN2cHqwtuC5q": true,
  "R2KKQ5gHEse": true,
  "TFS1rRLceQb": true,
  "vuCv86KbC82": true,
  "63RiSZRINNR": true,
  "U1K6r6BtCfc": true,
  "pA6AVDGgaNxsB": true,
  "T1O0JZ0XhGH": true,
  "gwAfZ8PgCLR": true,
  "UDvznfw5AWJkm": true,
  "PspEHZcJBAjTI": true,
  "fXYUvyhE8Mr": true,
  "HR34xbH8eAa": true,
  "L8OtyBqVw013O": true,
  "ZgucPhjAXESnW": true,
  "Xujm1trSBS9Tv": true,
  "0ZnNW2E3F4C": true,
  "EpwgcZJwdIr": true,
  "rny8xyyD8Ob": true,
  "1HGQTKJ3TfY": true,
  "M7SabZ9CD1x": true,
  "KsNUtlhwYx1": true,
  "2twRQadb85VAH": true,
  "IIFZC3ewBDa": true,
  "uZQWzYIIYr2aG": true,
  "rFCeZI5M7vS": true,
  "c1Dy0Gr8qfL": true,
  "uVkCi7IJrex3r": true,
  "wulDIge47gZ": true,
  "w7zPdQfZTTP": true,
  "k8XdgjWkDouyf": true,
  "WB1bGZESYES": true,
  "o4xSwRMNzCseL": true,
  "w1e9P02Aip3": true,
  "6u8NIoou8To": true,
  "RCJOHXWvPUd": true,
  "zni4FQjMmrf": true,
  "4bzcB4pPrm9gP": true,
  "0tGvJowKC0L2Q": true,
  "VjoM1kKNwrm": true,
  "UcsVz25hkSi": true,
  "jRoM3ZX0afo": true,
  "1Cyr6LdEmpe": true,
  "YQwZuCciqkN": true,
  "7OPl7j6ZxLPSG": true,
  "PkpRcl1WqMsfr": true,
  "Y4UzJN7lkcj9P": true,
  "dOP0c9zqkZClC": true,
  "XfDrRASCUMy": true,
  "iOxekucFC0G": true,
  "wuHZzhzf4YK": true,
  "CkpyfJNg5M8": true,
  "WlaWECn1K45": true,
  "OHfZZTtYwnY": true,
  "sJ8WmN6kW3b": true,
  "OPeti1oUWF3Lh": true,
  "SpwNAcGDEXV": true,
  "f8nWkcgaBKmeh": true,
  "BE3URu8VUwB": true,
  "kMxpddBGFQFFd": true,
  "cgui71vD6Ry": true,
  "lmGoFa7buh3": true,
  "8AWwchBw3grK8": true,
  "kU2ubHEorzdys": true,
  "bghDdmhnoUN": true,
  "b740n9b0L2ehW": true,
  "mXx45bLpZb3": true,
  "ihc6eKNFdeR": true,
  "KppWJZ1Xk9S": true,
  "WQkAPjI7ky4": true,
  "Fwt6C4oG8Se": true,
  "kj4x4ZEYShd": true,
  "YORdjLlfemK": true,
  "TpWjDk9dOmb": true,
  "N0mD5aoPcSG": true,
  "oJiDfA8YkON": true,
  "SzDRvhqIepa": true,
  "evb0XtqtVzg": true,
  "Nv3AEJyIcLZ": true,
  "79KeFraIvzY": true,
  "YoJzY9FxLaP": true,
  "ZDStZCC6a71": true,
  "JTL7u66MDn9": true,
  "WXweHVnG3V6si": true,
  "uPrZnHqplKv": true,
  "oPmn5eB9UEz": true,
  "qUU2rJGwnGJ": true,
  "x0caeU0HCnW": true,
  "yOLfZqJJRMD": true,
  "dttYqV3kWaB": true,
  "2TSzCkgrbwb26": true,
  "SKfPvWrgPUH": true,
  "uA6TTHwKblK": true,
  "VWCoLuEETWaj2": true,
  "I9sMG1TCsOr": true,
  "i8k4o8oup2S": true,
  "KItxa06XD7I": true,
  "4UEWBDFwiCD": true,
  "997BSj2g27B": true,
  "eTmB3MF9xQd": true,
  "mrE2Qu0ATRn": true,
  "lQtARmKdqdSXe": true,
  "n869KIFeMc0": true,
  "m2aj9rdWng5Fr": true,
  "nBLKVjlOvX2": true,
  "ngQbq2lklFY": true,
  "gQuyfpBVJ9VYq": true,
  "AAyuulFBW7x": true,
  "eTeuRFXd26oVp": true,
  "h3bfCJdCR76": true,
  "xHqEf8EF3ia": true,
  "scenario1": true,
  "7YJpJ0uyjXA": true,
  "tWUtEkJ2e6Z": true,
  "8eCFn25k2Bu": true,
  "61vEhKUSLog": true,
  "V8yy8YFvKw8": true,
  "ERo9oQzG5R2": true,
  "4zibffvghu4": true,
  "HfbOrsGHT9d": true,
  "xoAC4t7As56": true,
  "2fVk9LVgtJn": true,
  "i8hqQJ3BNz4R8": true,
  "4muVMEW6RVA": true,
  "9zHqYV5fqRV": true,
  "Yg9jgKJ81C4zM": true,
  "LHolOzIuod3Hy": true,
  "eeiANErKpsHrd": true,
  "BFKtlUjxTWk": true,
  "Z7DLRaZOLhWr4": true,
  "xHqFkNnoH1Wqw": true,
  "nWQrNFPfOGV": true,
  "mhUL1ChMNF4": true,
  "kLWzYpFooIv": true,
  "wwdBs2mKmXuMW": true,
  "IHB09BOee7k": true,
  "bODIanmQRWm": true,
  "aHh7481l940nA": true,
  "8jLwFXHIjOb": true,
  "CFioUS0Ds0e": true,
  "rg6d9Bb6qBJ8E": true,
  "xrnEn4j3YDoJN": true,
  "JVFRRBItclJqV": true,
  "vQUbaUhh9gU": true,
  "QVy16vHuQzotJ": true,
  "5urUPrrB73clQ": true,
  "QEuju5rzb7WgB": true,
  "m13AGCWxrcwIr": true,
  "hkuzPH5k37WHk": true,
  "ZuwN8Dcram9": true,
  "MK4iSU5Sg8WZ6": true
};

const versions = [
  {
    "id": 1,
    "name": "0.1.1",
    "desc": null
  },
  {
    "id": 2,
    "name": "0.1.2",
    "desc": null
  },
  {
    "id": 3,
    "name": "next",
    "desc": null
  }
];

const reviewers = [
  {
    "fullName": "Matt Draus",
    "email": "matt@sempergreen-usa.com",
    "title": null,
    "phone": "+1 312.841.1549"
  },
  {
    "fullName": "Brad Garner",
    "email": "brad@greenroofdiagnostics.com",
    "title": "Researcher / Software Engineer",
    "phone": "+1 703.731.4163"
  },
  {
    "fullName": "Scott Jeffers",
    "email": "scott@greenroofdiagnostics.com",
    "title": "PhD, PE Hydrologist",
    "phone": null
  },
  {
    "fullName": "Anna Zakrisson",
    "email": "anna@greenroofdiagnostics.com",
    "title": "PhD Soil Biologist",
    "phone": null
  }
];

const faq = [];

const terminology = [];

module.exports = { 
  partnersObject,
  systemsObject,
  publicSystemsObject,
  minimalSystemsObject,
  products, 
  allPaths,
  versions,
  reviewers,
  faq,
  terminology,
};