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
  "scenario1": true,
  "BbcMmOS1wFaqN": true,
  "3o31DGqulfHCF": true,
  "pPS2PyVMXo0SH": true,
  "fbyNMHRhiWjq5": true,
  "copy-of-stonybrook-hospital": true,
  "jbEputXOyGz0s": true,
  "Qjbqq9CLHWk1e": true,
  "UGnsPoJiZUYqW": true,
  "stonybrook-hospital": true,
  "vuOH2Lh32bWSX": true,
  "7RUud9SMOZRxa": true,
  "0pSycT8XwKZaz": true,
  "p42bzb08lJxe2": true,
  "8AWwchBw3grK8": true,
  "MEgcYZC3iHTnB": true,
  "8Csv4RNfnvLg4": true,
  "XWBVtQFJKxu0I": true,
  "moderne-old": true,
  "test-project": true,
  "r9TEp1WmadxXR": true,
  "RKks4VvyvLTsc": true,
  "8UiRqRKer7cvt": true,
  "tALefC8AHiRRO": true,
  "lE1joNeMi21Xi": true,
  "7eNIK9wAVl9Rp": true,
  "mK7UdmoIlQmfs": true,
  "H1incQb3aRvII": true,
  "U0XjLSTARiafN": true,
  "BFoRmyNoKVQCU": true,
  "bxGhvET3025OD": true,
  "JC9AUtdYTVeb2": true,
  "yesler-terrace": true,
  "stormwatch-test-434": true,
  "9kHIZ4AbIHHkD": true,
  "wx6Hg5v44oOu7": true,
  "LwSDhiwmjsco0": true,
  "HZs072whGBpzn": true,
  "0ebui2QK8sMu3": true,
  "mit-scc-cambridge": true,
  "NJrejISftlFEA": true,
  "2RkMM4wGX9Dfu": true,
  "calibration-3-1-0": true,
  "INv1LIhU3v4Tw": true,
  "QG83RxAb4tS3y": true,
  "KiMniNRdXQGRg": true,
  "OPeti1oUWF3Lh": true,
  "scenario2": true,
  "Eiv9mTAs0xD9Y": true,
  "91No0i0igbCwU": true,
  "cESd5bkymog1B": true,
  "aaoYirQUis3qw": true,
  "gO9S4xVpHNS75": true,
  "XwolsV45Q1CvQ": true,
  "stormwatch-test-184": true,
  "ib30qhmz9Fa0E": true,
  "isC51ncRonZu3": true,
  "w4sODqOPV6yoo": true,
  "stormwatch-test-235": true,
  "F11mMYD62ZSb9": true,
  "Q4Ox53Tw8OsiY": true,
  "stormwatch-test-687": true,
  "JSjjLqmGuIaHG": true,
  "CZ6jTPjPCh4Vr": true,
  "yrZE0G7WaHSOR": true,
  "AojfV6OUg3THA": true,
  "EbiPDgnspMexz": true,
  "ceridian-mn": true,
  "yKDwryDPUzc7r": true,
  "N7RidSdvC2Mrz": true,
  "bradcalcheska": true,
  "J8ZPZLW9dflrS": true,
  "scenario1a": true,
  "stonybrook-hospital-old": true,
  "berlin-example1": true,
  "qk1UJ0rQZu0pR": true,
  "mVF56SD0gCEch": true,
  "sample-project": true,
  "stormwatch-test-177": true,
  "h1g9GwSRkGfsq": true,
  "amsterdam-example": true,
  "beach-dunes-iii": true,
  "stormwatch-test-80": true,
  "T9XV8ILWU5uF6": true,
  "ZjCzIlDuezHxG": true,
  "zsyf2olrBgBBT": true,
  "stormwatch-test-343": true,
  "1hVtViLJG6rW6": true,
  "D006ZxcZ59Bdi": true,
  "msrxLzpvvWgrJ": true,
  "3w4IMisDTb1Qo": true,
  "yIPycuvSo5lvJ": true,
  "z9lep4P7XIODb": true,
  "stormwatch-test-422": true,
  "stormwatch-test-180": true,
  "KFtAOjTji50VH": true,
  "munich-example1": true,
  "BnFJ6FoIItgIx": true,
  "kuySFAQoS4kha": true,
  "wCTopbgrFm0oi": true,
  "1FoRkBFNe4jfs": true,
  "iOP9oWd0AAOfz": true,
  "stormwatch-test-185": true,
  "stormwatch-test-183": true,
  "stormwatch-test-179": true,
  "uirnrzDNuf2SV": true
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
    "fullName": "Oscar Warmerdam",
    "email": "oscar@sempergreen.com",
    "title": "Green Roof Expert",
    "phone": null
  },
  {
    "fullName": "Anna Zakrisson",
    "email": "anna@greenroofdiagnostics.com",
    "title": "PhD Soil Biologist",
    "phone": null
  }
];

const storms = {
  "5eb6e0307fb725cdd6dc784a": "Type I",
  "5eb6e0307fb725cdd6dc784d": "Ljubljana Summer Storm",
  "5eb6e0307fb725cdd6dc784b": "R8",
  "5eb6e0307fb725cdd6dc784c": "R10",
  "5eb6e0307fb725cdd6dc784e": "Type Ia",
  "5eb6e0307fb725cdd6dc784f": "Type II",
  "5eb6e0307fb725cdd6dc7850": "Type III",
  "5eb6e0307fb725cdd6dc7851": "De Bilt",
  "5eb6e0307fb725cdd6dc7852": "AES",
  "5e5005120246ee146685b4cf": "Constant Intensity",
  "5ebd5c7b27bef7eae5e88207": "Euler Typ 2",
  "5fb719776cbb348567439fd2": "Seattle Short-duration Storm (3-hour)",
  "5fb719776cbb348567439fd3": "Seattle Intermediate-duration Storm (18-hour)",
  "5fb719776cbb348567439fd4": "Seattle 24-hour Dimensionless Design Storm",
  "5fb719776cbb348567439fd5": "Seattle Long-duration Storm (64-hour) front-loaded",
  "5fb719776cbb348567439fd6": "Seattle Long-duration Storm (64-hour) back-loaded"
};

const stormsObj = {
  "5eb6e0307fb725cdd6dc784a": {
    "name": "Type I",
    "arrCumPctVolNative": [
      0.0009,
      0.0017,
      0.0035,
      0.0052,
      0.007,
      0.0087,
      0.0105,
      0.0122,
      0.014,
      0.0157,
      0.0175,
      0.0192,
      0.021,
      0.0227,
      0.0245,
      0.0262,
      0.028,
      0.0297,
      0.0315,
      0.0332,
      0.035,
      0.0368,
      0.0386,
      0.0404,
      0.0423,
      0.0442,
      0.0461,
      0.048,
      0.05,
      0.052,
      0.0541,
      0.0561,
      0.0582,
      0.0603,
      0.0625,
      0.0647,
      0.0669,
      0.0691,
      0.0714,
      0.0737,
      0.076,
      0.0784,
      0.0807,
      0.0831,
      0.0855,
      0.0878,
      0.0902,
      0.0927,
      0.0951,
      0.0975,
      0.1,
      0.1024,
      0.1049,
      0.1074,
      0.1098,
      0.1123,
      0.1149,
      0.1174,
      0.1199,
      0.1225,
      0.125,
      0.1276,
      0.1303,
      0.1332,
      0.1361,
      0.1392,
      0.1423,
      0.1456,
      0.1489,
      0.1524,
      0.156,
      0.1597,
      0.1633,
      0.1671,
      0.1708,
      0.1746,
      0.1784,
      0.1823,
      0.1861,
      0.1901,
      0.194,
      0.1982,
      0.2028,
      0.2078,
      0.2132,
      0.219,
      0.2252,
      0.2319,
      0.2389,
      0.2462,
      0.254,
      0.2623,
      0.2714,
      0.2812,
      0.2917,
      0.303,
      0.3194,
      0.3454,
      0.3878,
      0.4632,
      0.515,
      0.5322,
      0.5476,
      0.5612,
      0.573,
      0.583,
      0.5919,
      0.6003,
      0.6083,
      0.6159,
      0.623,
      0.6298,
      0.6365,
      0.643,
      0.6493,
      0.6555,
      0.6615,
      0.6674,
      0.6731,
      0.6786,
      0.684,
      0.6893,
      0.6944,
      0.6995,
      0.7044,
      0.7093,
      0.714,
      0.7187,
      0.7232,
      0.7277,
      0.732,
      0.7363,
      0.7404,
      0.7445,
      0.7484,
      0.7523,
      0.756,
      0.7597,
      0.7632,
      0.7667,
      0.77,
      0.7733,
      0.7766,
      0.7798,
      0.783,
      0.7863,
      0.7894,
      0.7926,
      0.7958,
      0.7989,
      0.802,
      0.8051,
      0.8082,
      0.8112,
      0.8142,
      0.8173,
      0.8202,
      0.8232,
      0.8262,
      0.8291,
      0.832,
      0.8349,
      0.8378,
      0.8406,
      0.8434,
      0.8463,
      0.849,
      0.8518,
      0.8546,
      0.8573,
      0.86,
      0.8627,
      0.8654,
      0.868,
      0.8706,
      0.8733,
      0.8758,
      0.8784,
      0.881,
      0.8835,
      0.886,
      0.8885,
      0.891,
      0.8934,
      0.8958,
      0.8983,
      0.9006,
      0.903,
      0.9054,
      0.9077,
      0.91,
      0.9123,
      0.9146,
      0.9168,
      0.919,
      0.9213,
      0.9234,
      0.9256,
      0.9278,
      0.9299,
      0.932,
      0.9341,
      0.9362,
      0.9382,
      0.9402,
      0.9423,
      0.9442,
      0.9462,
      0.9482,
      0.9501,
      0.952,
      0.9539,
      0.9558,
      0.9576,
      0.9594,
      0.9613,
      0.963,
      0.9648,
      0.9666,
      0.9683,
      0.97,
      0.9717,
      0.9734,
      0.975,
      0.9766,
      0.9783,
      0.9798,
      0.9814,
      0.983,
      0.9845,
      0.986,
      0.9875,
      0.989,
      0.9904,
      0.9918,
      0.9933,
      0.9946,
      0.996,
      0.9974,
      0.9987,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784a"
  },
  "5eb6e0307fb725cdd6dc784d": {
    "name": "Ljubljana Summer Storm",
    "arrCumPctVolNative": [
      0,
      0.0238,
      0.5,
      0.7381,
      0.9524,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784d"
  },
  "5eb6e0307fb725cdd6dc784b": {
    "name": "R8",
    "arrCumPctVolNative": [
      0,
      0.0152,
      0.0455,
      0.0909,
      0.1515,
      0.2273,
      0.3333,
      0.4697,
      0.6364,
      0.803,
      0.9091,
      0.9697,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784b"
  },
  "5eb6e0307fb725cdd6dc784c": {
    "name": "R10",
    "arrCumPctVolNative": [
      0,
      0.0504,
      0.1513,
      0.3277,
      0.5042,
      0.6639,
      0.7983,
      0.8992,
      0.9664,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784c"
  },
  "5eb6e0307fb725cdd6dc784e": {
    "name": "Type Ia",
    "arrCumPctVolNative": [
      0.0011,
      0.0022,
      0.0043,
      0.0063,
      0.0082,
      0.01,
      0.0118,
      0.0137,
      0.0157,
      0.0178,
      0.02,
      0.0228,
      0.0257,
      0.0287,
      0.0318,
      0.035,
      0.038,
      0.041,
      0.0439,
      0.047,
      0.05,
      0.0532,
      0.0563,
      0.0595,
      0.0628,
      0.066,
      0.0692,
      0.0724,
      0.0756,
      0.0788,
      0.082,
      0.0851,
      0.0883,
      0.0915,
      0.0947,
      0.098,
      0.1015,
      0.105,
      0.1086,
      0.1123,
      0.116,
      0.1197,
      0.1234,
      0.1272,
      0.1311,
      0.135,
      0.139,
      0.1431,
      0.1473,
      0.1516,
      0.156,
      0.1606,
      0.1653,
      0.1701,
      0.175,
      0.18,
      0.1849,
      0.19,
      0.1952,
      0.2005,
      0.206,
      0.212,
      0.2181,
      0.2243,
      0.2306,
      0.237,
      0.2429,
      0.2488,
      0.2549,
      0.2613,
      0.268,
      0.2752,
      0.2829,
      0.2912,
      0.3002,
      0.31,
      0.3314,
      0.3547,
      0.3788,
      0.4026,
      0.425,
      0.4394,
      0.4517,
      0.4623,
      0.4716,
      0.48,
      0.489,
      0.4975,
      0.5055,
      0.513,
      0.52,
      0.5266,
      0.5329,
      0.5389,
      0.5446,
      0.55,
      0.5556,
      0.5612,
      0.5666,
      0.5718,
      0.577,
      0.582,
      0.5869,
      0.5916,
      0.5964,
      0.601,
      0.6058,
      0.6104,
      0.615,
      0.6196,
      0.624,
      0.6284,
      0.6326,
      0.6368,
      0.641,
      0.645,
      0.6489,
      0.6527,
      0.6565,
      0.6603,
      0.664,
      0.6677,
      0.6715,
      0.6753,
      0.6791,
      0.683,
      0.6867,
      0.6903,
      0.6939,
      0.6974,
      0.701,
      0.7047,
      0.7084,
      0.712,
      0.7155,
      0.719,
      0.7225,
      0.7259,
      0.7293,
      0.7326,
      0.736,
      0.7394,
      0.7428,
      0.7461,
      0.7495,
      0.7528,
      0.7561,
      0.7594,
      0.7627,
      0.766,
      0.7692,
      0.7725,
      0.7757,
      0.7789,
      0.7821,
      0.7853,
      0.7885,
      0.7916,
      0.7947,
      0.7979,
      0.801,
      0.8041,
      0.8071,
      0.8102,
      0.8132,
      0.8163,
      0.8193,
      0.8223,
      0.8252,
      0.8282,
      0.8312,
      0.8341,
      0.837,
      0.8399,
      0.8428,
      0.8457,
      0.8486,
      0.8514,
      0.8542,
      0.857,
      0.8598,
      0.8626,
      0.8654,
      0.8682,
      0.8709,
      0.8736,
      0.8763,
      0.879,
      0.8817,
      0.8844,
      0.887,
      0.8896,
      0.8923,
      0.8949,
      0.8974,
      0.9,
      0.9026,
      0.9051,
      0.9076,
      0.9101,
      0.9126,
      0.9151,
      0.9176,
      0.92,
      0.9225,
      0.9249,
      0.9273,
      0.9297,
      0.9321,
      0.9344,
      0.9368,
      0.9391,
      0.9414,
      0.9437,
      0.946,
      0.9483,
      0.9505,
      0.9527,
      0.955,
      0.9572,
      0.9594,
      0.9615,
      0.9637,
      0.9658,
      0.968,
      0.9701,
      0.9722,
      0.9743,
      0.9764,
      0.9784,
      0.9804,
      0.9825,
      0.9845,
      0.9865,
      0.9885,
      0.9904,
      0.9924,
      0.9943,
      0.9962,
      0.9981,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784e"
  },
  "5eb6e0307fb725cdd6dc784f": {
    "name": "Type II",
    "arrCumPctVolNative": [
      0.0005,
      0.001,
      0.002,
      0.0031,
      0.0041,
      0.0051,
      0.0062,
      0.0073,
      0.0083,
      0.0094,
      0.0105,
      0.0116,
      0.0127,
      0.0139,
      0.015,
      0.0161,
      0.0173,
      0.0185,
      0.0196,
      0.0208,
      0.022,
      0.0232,
      0.0244,
      0.0257,
      0.0269,
      0.0281,
      0.0294,
      0.0307,
      0.0319,
      0.0332,
      0.0345,
      0.0358,
      0.0371,
      0.0385,
      0.0398,
      0.0411,
      0.0425,
      0.0439,
      0.0452,
      0.0466,
      0.048,
      0.0494,
      0.0508,
      0.0523,
      0.0538,
      0.0553,
      0.0568,
      0.0583,
      0.0598,
      0.0614,
      0.063,
      0.0646,
      0.0662,
      0.0679,
      0.0696,
      0.0713,
      0.073,
      0.0747,
      0.0764,
      0.0782,
      0.08,
      0.0818,
      0.0836,
      0.0855,
      0.0874,
      0.0893,
      0.0912,
      0.0931,
      0.095,
      0.097,
      0.099,
      0.101,
      0.103,
      0.1051,
      0.1072,
      0.1093,
      0.1114,
      0.1135,
      0.1156,
      0.1178,
      0.12,
      0.1223,
      0.1246,
      0.1271,
      0.1296,
      0.1323,
      0.135,
      0.1379,
      0.1408,
      0.1439,
      0.147,
      0.1502,
      0.1534,
      0.1566,
      0.1598,
      0.163,
      0.1663,
      0.1697,
      0.1733,
      0.1771,
      0.181,
      0.1851,
      0.1895,
      0.1941,
      0.1989,
      0.204,
      0.2094,
      0.2152,
      0.2214,
      0.228,
      0.235,
      0.2427,
      0.2513,
      0.2609,
      0.2715,
      0.283,
      0.3068,
      0.3544,
      0.4308,
      0.5679,
      0.663,
      0.682,
      0.6986,
      0.713,
      0.7252,
      0.735,
      0.7434,
      0.7514,
      0.7588,
      0.7656,
      0.772,
      0.778,
      0.7836,
      0.789,
      0.7942,
      0.799,
      0.8036,
      0.808,
      0.8122,
      0.8162,
      0.82,
      0.8237,
      0.8273,
      0.8308,
      0.8342,
      0.8376,
      0.8409,
      0.8442,
      0.8474,
      0.8505,
      0.8535,
      0.8565,
      0.8594,
      0.8622,
      0.8649,
      0.8676,
      0.8702,
      0.8728,
      0.8753,
      0.8777,
      0.88,
      0.8823,
      0.8846,
      0.8868,
      0.889,
      0.8912,
      0.8934,
      0.8955,
      0.8976,
      0.8997,
      0.9018,
      0.9038,
      0.9058,
      0.9078,
      0.9098,
      0.9117,
      0.9136,
      0.9155,
      0.9174,
      0.9192,
      0.921,
      0.9228,
      0.9246,
      0.9263,
      0.928,
      0.9297,
      0.9314,
      0.933,
      0.9346,
      0.9362,
      0.9378,
      0.9393,
      0.9408,
      0.9423,
      0.9438,
      0.9452,
      0.9466,
      0.948,
      0.9494,
      0.9507,
      0.952,
      0.9533,
      0.9546,
      0.9559,
      0.9572,
      0.9584,
      0.9597,
      0.961,
      0.9622,
      0.9635,
      0.9648,
      0.966,
      0.9672,
      0.9685,
      0.9697,
      0.9709,
      0.9722,
      0.9734,
      0.9746,
      0.9758,
      0.977,
      0.9782,
      0.9794,
      0.9806,
      0.9818,
      0.9829,
      0.9841,
      0.9853,
      0.9864,
      0.9876,
      0.9888,
      0.9899,
      0.991,
      0.9922,
      0.9933,
      0.9944,
      0.9956,
      0.9967,
      0.9978,
      0.9989,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc784f"
  },
  "5eb6e0307fb725cdd6dc7850": {
    "name": "Type III",
    "arrCumPctVolNative": [
      0.0005,
      0.001,
      0.002,
      0.003,
      0.004,
      0.005,
      0.006,
      0.007,
      0.008,
      0.009,
      0.01,
      0.011,
      0.012,
      0.013,
      0.014,
      0.015,
      0.016,
      0.017,
      0.018,
      0.019,
      0.02,
      0.021,
      0.022,
      0.0231,
      0.0241,
      0.0252,
      0.0263,
      0.0274,
      0.0285,
      0.0296,
      0.0308,
      0.0319,
      0.0331,
      0.0343,
      0.0355,
      0.0367,
      0.0379,
      0.0392,
      0.0404,
      0.0417,
      0.043,
      0.0443,
      0.0456,
      0.047,
      0.0483,
      0.0497,
      0.0511,
      0.0525,
      0.0539,
      0.0553,
      0.0568,
      0.0582,
      0.0597,
      0.0612,
      0.0627,
      0.0642,
      0.0657,
      0.0673,
      0.0688,
      0.0704,
      0.072,
      0.0736,
      0.0753,
      0.077,
      0.0788,
      0.0806,
      0.0825,
      0.0844,
      0.0864,
      0.0884,
      0.0905,
      0.0926,
      0.0948,
      0.097,
      0.0993,
      0.1016,
      0.104,
      0.1064,
      0.1089,
      0.1114,
      0.114,
      0.1167,
      0.1194,
      0.1223,
      0.1253,
      0.1284,
      0.1317,
      0.135,
      0.1385,
      0.1421,
      0.1458,
      0.1496,
      0.1535,
      0.1575,
      0.1617,
      0.1659,
      0.1703,
      0.1748,
      0.1794,
      0.1842,
      0.189,
      0.194,
      0.1993,
      0.2048,
      0.2105,
      0.2165,
      0.2227,
      0.2292,
      0.2359,
      0.2428,
      0.25,
      0.2578,
      0.2664,
      0.276,
      0.2866,
      0.298,
      0.3143,
      0.3394,
      0.3733,
      0.416,
      0.5,
      0.584,
      0.6267,
      0.6606,
      0.6857,
      0.702,
      0.7134,
      0.724,
      0.7336,
      0.7422,
      0.75,
      0.7572,
      0.7641,
      0.7708,
      0.7773,
      0.7835,
      0.7895,
      0.7952,
      0.8007,
      0.806,
      0.811,
      0.8158,
      0.8206,
      0.8252,
      0.8297,
      0.8341,
      0.8383,
      0.8425,
      0.8465,
      0.8504,
      0.8543,
      0.8579,
      0.8615,
      0.865,
      0.8683,
      0.8716,
      0.8747,
      0.8777,
      0.8806,
      0.8833,
      0.886,
      0.8886,
      0.8911,
      0.8936,
      0.896,
      0.8984,
      0.9007,
      0.903,
      0.9052,
      0.9074,
      0.9095,
      0.9116,
      0.9136,
      0.9156,
      0.9175,
      0.9194,
      0.9212,
      0.923,
      0.9247,
      0.9264,
      0.928,
      0.9296,
      0.9312,
      0.9327,
      0.9343,
      0.9358,
      0.9373,
      0.9388,
      0.9403,
      0.9418,
      0.9433,
      0.9447,
      0.9461,
      0.9475,
      0.9489,
      0.9503,
      0.9517,
      0.953,
      0.9544,
      0.9557,
      0.957,
      0.9583,
      0.9596,
      0.9609,
      0.9621,
      0.9634,
      0.9646,
      0.9658,
      0.967,
      0.9682,
      0.9694,
      0.9706,
      0.9718,
      0.973,
      0.9741,
      0.9752,
      0.9764,
      0.9775,
      0.9786,
      0.9797,
      0.9808,
      0.9818,
      0.9829,
      0.9839,
      0.985,
      0.986,
      0.987,
      0.988,
      0.989,
      0.99,
      0.9909,
      0.9919,
      0.9928,
      0.9938,
      0.9947,
      0.9956,
      0.9965,
      0.9974,
      0.9983,
      0.9991,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc7850"
  },
  "5eb6e0307fb725cdd6dc7851": {
    "name": "De Bilt",
    "arrCumPctVolNative": [
      0.0032,
      0.0063,
      0.0095,
      0.0127,
      0.0159,
      0.019,
      0.0222,
      0.0254,
      0.0286,
      0.0317,
      0.0349,
      0.0381,
      0.0413,
      0.0444,
      0.0476,
      0.0508,
      0.054,
      0.0571,
      0.0603,
      0.0635,
      0.0683,
      0.073,
      0.0778,
      0.0825,
      0.0873,
      0.0921,
      0.0968,
      0.1016,
      0.1063,
      0.1111,
      0.1159,
      0.1206,
      0.1254,
      0.1302,
      0.1349,
      0.1397,
      0.1444,
      0.1492,
      0.154,
      0.1587,
      0.1659,
      0.173,
      0.1802,
      0.1873,
      0.1944,
      0.2016,
      0.2087,
      0.2159,
      0.223,
      0.2302,
      0.2373,
      0.2444,
      0.2516,
      0.2587,
      0.2659,
      0.273,
      0.2802,
      0.2873,
      0.2944,
      0.3016,
      0.3143,
      0.327,
      0.3397,
      0.3524,
      0.3651,
      0.3778,
      0.3905,
      0.4032,
      0.4159,
      0.4286,
      0.4413,
      0.454,
      0.4667,
      0.4794,
      0.4921,
      0.5048,
      0.5175,
      0.5302,
      0.5429,
      0.5556,
      0.5603,
      0.5651,
      0.5698,
      0.5746,
      0.5794,
      0.5841,
      0.5889,
      0.5937,
      0.5984,
      0.6032,
      0.6079,
      0.6127,
      0.6175,
      0.6222,
      0.627,
      0.6317,
      0.6365,
      0.6413,
      0.646,
      0.6508,
      0.6548,
      0.6587,
      0.6627,
      0.6667,
      0.6706,
      0.6746,
      0.6786,
      0.6825,
      0.6865,
      0.6905,
      0.6944,
      0.6984,
      0.7024,
      0.7063,
      0.7103,
      0.7143,
      0.7183,
      0.7222,
      0.7262,
      0.7302,
      0.7341,
      0.7381,
      0.7421,
      0.746,
      0.75,
      0.754,
      0.7579,
      0.7619,
      0.7659,
      0.7698,
      0.7738,
      0.7778,
      0.7817,
      0.7857,
      0.7897,
      0.7937,
      0.7976,
      0.8016,
      0.8056,
      0.8095,
      0.8127,
      0.8159,
      0.819,
      0.8222,
      0.8254,
      0.8286,
      0.8317,
      0.8349,
      0.8381,
      0.8413,
      0.8444,
      0.8476,
      0.8508,
      0.854,
      0.8571,
      0.8603,
      0.8635,
      0.8667,
      0.8698,
      0.873,
      0.8754,
      0.8778,
      0.8802,
      0.8825,
      0.8849,
      0.8873,
      0.8897,
      0.8921,
      0.8944,
      0.8968,
      0.8992,
      0.9016,
      0.904,
      0.9063,
      0.9087,
      0.9111,
      0.9135,
      0.9159,
      0.9183,
      0.9206,
      0.9222,
      0.9238,
      0.9254,
      0.927,
      0.9286,
      0.9302,
      0.9317,
      0.9333,
      0.9349,
      0.9365,
      0.9381,
      0.9397,
      0.9413,
      0.9429,
      0.9444,
      0.946,
      0.9476,
      0.9492,
      0.9508,
      0.9524,
      0.954,
      0.9556,
      0.9571,
      0.9587,
      0.9603,
      0.9619,
      0.9635,
      0.9651,
      0.9667,
      0.9683,
      0.9698,
      0.9714,
      0.973,
      0.9746,
      0.9762,
      0.9778,
      0.9794,
      0.981,
      0.9825,
      0.9841,
      0.9849,
      0.9857,
      0.9865,
      0.9873,
      0.9881,
      0.9889,
      0.9897,
      0.9905,
      0.9913,
      0.9921,
      0.9929,
      0.9937,
      0.9944,
      0.9952,
      0.996,
      0.9968,
      0.9976,
      0.9984,
      0.9992,
      1,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc7851"
  },
  "5eb6e0307fb725cdd6dc7852": {
    "name": "AES",
    "arrCumPctVolNative": [
      0,
      0.005,
      0.01,
      0.015,
      0.02,
      0.05,
      0.08,
      0.165,
      0.25,
      0.48,
      0.71,
      0.775,
      0.84,
      0.875,
      0.91,
      0.93,
      0.95,
      0.96,
      0.97,
      0.975,
      0.98,
      0.985,
      0.99,
      0.995,
      1,
      1
    ],
    "idShape": "5eb6e0307fb725cdd6dc7852"
  },
  "5e5005120246ee146685b4cf": {
    "name": "Constant Intensity",
    "arrCumPctVolNative": [
      0.004149378,
      0.008298755,
      0.012448133,
      0.01659751,
      0.020746888,
      0.024896266,
      0.029045643,
      0.033195021,
      0.037344398,
      0.041493776,
      0.045643154,
      0.049792531,
      0.053941909,
      0.058091286,
      0.062240664,
      0.066390041,
      0.070539419,
      0.074688797,
      0.078838174,
      0.082987552,
      0.087136929,
      0.091286307,
      0.095435685,
      0.099585062,
      0.10373444,
      0.107883817,
      0.112033195,
      0.116182573,
      0.12033195,
      0.124481328,
      0.128630705,
      0.132780083,
      0.136929461,
      0.141078838,
      0.145228216,
      0.149377593,
      0.153526971,
      0.157676349,
      0.161825726,
      0.165975104,
      0.170124481,
      0.174273859,
      0.178423237,
      0.182572614,
      0.186721992,
      0.190871369,
      0.195020747,
      0.199170124,
      0.203319502,
      0.20746888,
      0.211618257,
      0.215767635,
      0.219917012,
      0.22406639,
      0.228215768,
      0.232365145,
      0.236514523,
      0.2406639,
      0.244813278,
      0.248962656,
      0.253112033,
      0.257261411,
      0.261410788,
      0.265560166,
      0.269709544,
      0.273858921,
      0.278008299,
      0.282157676,
      0.286307054,
      0.290456432,
      0.294605809,
      0.298755187,
      0.302904564,
      0.307053942,
      0.31120332,
      0.315352697,
      0.319502075,
      0.323651452,
      0.32780083,
      0.331950207,
      0.336099585,
      0.340248963,
      0.34439834,
      0.348547718,
      0.352697095,
      0.356846473,
      0.360995851,
      0.365145228,
      0.369294606,
      0.373443983,
      0.377593361,
      0.381742739,
      0.385892116,
      0.390041494,
      0.394190871,
      0.398340249,
      0.402489627,
      0.406639004,
      0.410788382,
      0.414937759,
      0.419087137,
      0.423236515,
      0.427385892,
      0.43153527,
      0.435684647,
      0.439834025,
      0.443983402,
      0.44813278,
      0.452282158,
      0.456431535,
      0.460580913,
      0.46473029,
      0.468879668,
      0.473029046,
      0.477178423,
      0.481327801,
      0.485477178,
      0.489626556,
      0.493775934,
      0.497925311,
      0.502074689,
      0.506224066,
      0.510373444,
      0.514522822,
      0.518672199,
      0.522821577,
      0.526970954,
      0.531120332,
      0.53526971,
      0.539419087,
      0.543568465,
      0.547717842,
      0.55186722,
      0.556016598,
      0.560165975,
      0.564315353,
      0.56846473,
      0.572614108,
      0.576763485,
      0.580912863,
      0.585062241,
      0.589211618,
      0.593360996,
      0.597510373,
      0.601659751,
      0.605809129,
      0.609958506,
      0.614107884,
      0.618257261,
      0.622406639,
      0.626556017,
      0.630705394,
      0.634854772,
      0.639004149,
      0.643153527,
      0.647302905,
      0.651452282,
      0.65560166,
      0.659751037,
      0.663900415,
      0.668049793,
      0.67219917,
      0.676348548,
      0.680497925,
      0.684647303,
      0.68879668,
      0.692946058,
      0.697095436,
      0.701244813,
      0.705394191,
      0.709543568,
      0.713692946,
      0.717842324,
      0.721991701,
      0.726141079,
      0.730290456,
      0.734439834,
      0.738589212,
      0.742738589,
      0.746887967,
      0.751037344,
      0.755186722,
      0.7593361,
      0.763485477,
      0.767634855,
      0.771784232,
      0.77593361,
      0.780082988,
      0.784232365,
      0.788381743,
      0.79253112,
      0.796680498,
      0.800829876,
      0.804979253,
      0.809128631,
      0.813278008,
      0.817427386,
      0.821576763,
      0.825726141,
      0.829875519,
      0.834024896,
      0.838174274,
      0.842323651,
      0.846473029,
      0.850622407,
      0.854771784,
      0.858921162,
      0.863070539,
      0.867219917,
      0.871369295,
      0.875518672,
      0.87966805,
      0.883817427,
      0.887966805,
      0.892116183,
      0.89626556,
      0.900414938,
      0.904564315,
      0.908713693,
      0.912863071,
      0.917012448,
      0.921161826,
      0.925311203,
      0.929460581,
      0.933609959,
      0.937759336,
      0.941908714,
      0.946058091,
      0.950207469,
      0.954356846,
      0.958506224,
      0.962655602,
      0.966804979,
      0.970954357,
      0.975103734,
      0.979253112,
      0.98340249,
      0.987551867,
      0.991701245,
      0.995850622,
      1,
      1
    ],
    "idShape": "5e5005120246ee146685b4cf"
  },
  "5ebd5c7b27bef7eae5e88207": {
    "name": "Euler Typ 2",
    "arrCumPctVolNative": [
      0,
      0.0164,
      0.0329,
      0.0493,
      0.0657,
      0.0822,
      0.1027,
      0.1231,
      0.1436,
      0.1641,
      0.1846,
      0.2125,
      0.2404,
      0.2683,
      0.2962,
      0.3241,
      0.3797,
      0.4353,
      0.4909,
      0.5465,
      0.6021,
      0.616,
      0.6298,
      0.6437,
      0.6576,
      0.6715,
      0.6836,
      0.6957,
      0.7078,
      0.7199,
      0.7321,
      0.7429,
      0.7537,
      0.7646,
      0.7754,
      0.7862,
      0.7961,
      0.8059,
      0.8158,
      0.8256,
      0.8354,
      0.8445,
      0.8536,
      0.8627,
      0.8717,
      0.8808,
      0.8893,
      0.8977,
      0.9061,
      0.9146,
      0.923,
      0.9309,
      0.9389,
      0.9468,
      0.9547,
      0.9626,
      0.9701,
      0.9776,
      0.985,
      0.9925,
      1
    ],
    "idShape": "5ebd5c7b27bef7eae5e88207"
  },
  "5fb719776cbb348567439fd2": {
    "name": "Seattle Short-duration Storm (3-hour)",
    "arrCumPctVolNative": [
      0,
      0.0043,
      0.0095,
      0.0166,
      0.0247,
      0.0343,
      0.047,
      0.0634,
      0.0841,
      0.1098,
      0.1411,
      0.1756,
      0.2166,
      0.2689,
      0.3313,
      0.4448,
      0.6245,
      0.7191,
      0.7676,
      0.8122,
      0.8499,
      0.8783,
      0.9014,
      0.9199,
      0.9343,
      0.9462,
      0.9553,
      0.9625,
      0.969,
      0.9748,
      0.9801,
      0.9849,
      0.989,
      0.9926,
      0.9956,
      0.9981,
      1
    ],
    "idShape": "5fb719776cbb348567439fd2"
  },
  "5fb719776cbb348567439fd3": {
    "name": "Seattle Intermediate-duration Storm (18-hour)",
    "arrCumPctVolNative": [
      0,
      0.0013,
      0.0026,
      0.004,
      0.0053,
      0.0066,
      0.008,
      0.0094,
      0.0108,
      0.0122,
      0.0136,
      0.015,
      0.0165,
      0.018,
      0.0195,
      0.0211,
      0.0228,
      0.0246,
      0.0266,
      0.0289,
      0.0314,
      0.0342,
      0.0372,
      0.0408,
      0.0449,
      0.0495,
      0.0548,
      0.0604,
      0.0663,
      0.0726,
      0.0793,
      0.0861,
      0.0932,
      0.1004,
      0.1077,
      0.1152,
      0.1228,
      0.1306,
      0.1387,
      0.1473,
      0.1563,
      0.1657,
      0.1756,
      0.1864,
      0.1977,
      0.2096,
      0.2221,
      0.2351,
      0.2487,
      0.2629,
      0.2778,
      0.2929,
      0.3083,
      0.324,
      0.341,
      0.3602,
      0.3814,
      0.4038,
      0.4269,
      0.4541,
      0.4898,
      0.5402,
      0.5713,
      0.5959,
      0.6189,
      0.6412,
      0.663,
      0.6834,
      0.7013,
      0.7176,
      0.7333,
      0.7484,
      0.7628,
      0.7767,
      0.79,
      0.8028,
      0.815,
      0.8267,
      0.8378,
      0.848,
      0.8577,
      0.867,
      0.8757,
      0.8841,
      0.8921,
      0.8998,
      0.9073,
      0.9147,
      0.9219,
      0.929,
      0.9359,
      0.9427,
      0.9492,
      0.9554,
      0.961,
      0.9662,
      0.9708,
      0.9749,
      0.9785,
      0.9817,
      0.9846,
      0.9872,
      0.9895,
      0.9917,
      0.9936,
      0.9953,
      0.9969,
      0.9985,
      1
    ],
    "idShape": "5fb719776cbb348567439fd3"
  },
  "5fb719776cbb348567439fd4": {
    "name": "Seattle 24-hour Dimensionless Design Storm",
    "arrCumPctVolNative": [
      0,
      0.0036,
      0.0074,
      0.0114,
      0.0156,
      0.0201,
      0.0248,
      0.0296,
      0.0345,
      0.0394,
      0.0443,
      0.0493,
      0.0544,
      0.0595,
      0.0648,
      0.0701,
      0.0755,
      0.0809,
      0.0863,
      0.0918,
      0.0973,
      0.1029,
      0.1086,
      0.1144,
      0.1204,
      0.1266,
      0.133,
      0.1396,
      0.1464,
      0.1533,
      0.1603,
      0.1675,
      0.1747,
      0.182,
      0.1894,
      0.1969,
      0.2045,
      0.2122,
      0.22,
      0.2278,
      0.2357,
      0.2436,
      0.2516,
      0.2596,
      0.2678,
      0.2762,
      0.285,
      0.2943,
      0.3042,
      0.3144,
      0.3248,
      0.3355,
      0.3469,
      0.3596,
      0.3738,
      0.3958,
      0.4248,
      0.4408,
      0.4535,
      0.4651,
      0.4761,
      0.4867,
      0.4969,
      0.5065,
      0.5154,
      0.5239,
      0.5322,
      0.5404,
      0.5485,
      0.5565,
      0.5644,
      0.5722,
      0.58,
      0.5877,
      0.5954,
      0.603,
      0.6106,
      0.6181,
      0.6256,
      0.633,
      0.6404,
      0.6478,
      0.6551,
      0.6624,
      0.6697,
      0.6769,
      0.6841,
      0.6913,
      0.6984,
      0.7055,
      0.7125,
      0.7195,
      0.7264,
      0.7332,
      0.7399,
      0.7465,
      0.753,
      0.7594,
      0.7657,
      0.7719,
      0.7779,
      0.7838,
      0.7897,
      0.7955,
      0.8012,
      0.8068,
      0.8123,
      0.8178,
      0.8233,
      0.8288,
      0.8342,
      0.8396,
      0.845,
      0.8503,
      0.8556,
      0.8609,
      0.8662,
      0.8714,
      0.8766,
      0.8818,
      0.887,
      0.8922,
      0.8973,
      0.9024,
      0.9075,
      0.9125,
      0.9175,
      0.9225,
      0.9275,
      0.9324,
      0.9373,
      0.9422,
      0.9471,
      0.9519,
      0.9567,
      0.9615,
      0.9662,
      0.9708,
      0.9753,
      0.9797,
      0.984,
      0.9882,
      0.9923,
      0.9962,
      1
    ],
    "idShape": "5fb719776cbb348567439fd4"
  },
  "5fb719776cbb348567439fd5": {
    "name": "Seattle Long-duration Storm (64-hour) front-loaded",
    "arrCumPctVolNative": [
      0,
      0.0001,
      0.0003,
      0.0007,
      0.0012,
      0.0019,
      0.0027,
      0.0036,
      0.0045,
      0.0055,
      0.0065,
      0.0075,
      0.0085,
      0.0095,
      0.0105,
      0.0116,
      0.0127,
      0.0138,
      0.0149,
      0.016,
      0.017,
      0.0181,
      0.0192,
      0.0203,
      0.0214,
      0.0225,
      0.0236,
      0.0248,
      0.0259,
      0.0271,
      0.0283,
      0.0294,
      0.0306,
      0.0317,
      0.0329,
      0.0341,
      0.0352,
      0.0364,
      0.0376,
      0.0388,
      0.04,
      0.0413,
      0.0427,
      0.0441,
      0.0455,
      0.047,
      0.0485,
      0.0503,
      0.0521,
      0.0541,
      0.0563,
      0.0586,
      0.0611,
      0.0637,
      0.0665,
      0.0695,
      0.0726,
      0.0758,
      0.0793,
      0.0829,
      0.0866,
      0.0904,
      0.0942,
      0.098,
      0.1019,
      0.1058,
      0.1098,
      0.1139,
      0.118,
      0.1222,
      0.1264,
      0.1305,
      0.1348,
      0.1391,
      0.1434,
      0.1478,
      0.1523,
      0.1569,
      0.1617,
      0.1667,
      0.1718,
      0.1771,
      0.1824,
      0.1878,
      0.1934,
      0.199,
      0.2046,
      0.2104,
      0.2162,
      0.2221,
      0.228,
      0.2341,
      0.2401,
      0.2461,
      0.2523,
      0.2584,
      0.2645,
      0.2708,
      0.2771,
      0.2835,
      0.2907,
      0.2983,
      0.3062,
      0.3143,
      0.3226,
      0.3314,
      0.3405,
      0.3515,
      0.3686,
      0.391,
      0.4034,
      0.4132,
      0.4222,
      0.4307,
      0.4389,
      0.4468,
      0.4543,
      0.4606,
      0.467,
      0.4733,
      0.4796,
      0.4858,
      0.4919,
      0.498,
      0.5041,
      0.5101,
      0.5161,
      0.522,
      0.528,
      0.534,
      0.5398,
      0.5456,
      0.5515,
      0.5572,
      0.5629,
      0.5686,
      0.5742,
      0.5799,
      0.5854,
      0.591,
      0.5966,
      0.6021,
      0.6076,
      0.613,
      0.6184,
      0.6238,
      0.629,
      0.6342,
      0.6394,
      0.6445,
      0.6496,
      0.6544,
      0.6592,
      0.6638,
      0.6684,
      0.6729,
      0.6774,
      0.6818,
      0.6862,
      0.6904,
      0.6947,
      0.699,
      0.7032,
      0.7074,
      0.7116,
      0.7158,
      0.7199,
      0.724,
      0.7281,
      0.7322,
      0.7362,
      0.7402,
      0.7443,
      0.7483,
      0.7523,
      0.7563,
      0.7602,
      0.7642,
      0.768,
      0.7719,
      0.7758,
      0.7796,
      0.7834,
      0.7872,
      0.791,
      0.7948,
      0.7985,
      0.8022,
      0.806,
      0.8096,
      0.8132,
      0.8166,
      0.8201,
      0.8234,
      0.8266,
      0.8298,
      0.8328,
      0.8358,
      0.8386,
      0.8412,
      0.8434,
      0.8454,
      0.847,
      0.8483,
      0.8493,
      0.85,
      0.8504,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8505,
      0.8506,
      0.8507,
      0.8509,
      0.8513,
      0.8516,
      0.8521,
      0.8527,
      0.8532,
      0.8537,
      0.8543,
      0.8548,
      0.8554,
      0.8559,
      0.8564,
      0.857,
      0.8575,
      0.8581,
      0.8588,
      0.8596,
      0.8605,
      0.8614,
      0.8624,
      0.8635,
      0.8646,
      0.8657,
      0.8667,
      0.8679,
      0.8691,
      0.8705,
      0.8721,
      0.8737,
      0.8755,
      0.8773,
      0.8791,
      0.8811,
      0.8833,
      0.8858,
      0.8888,
      0.8925,
      0.8969,
      0.9027,
      0.9102,
      0.9205,
      0.9308,
      0.9382,
      0.9441,
      0.9484,
      0.9521,
      0.9552,
      0.9576,
      0.9598,
      0.9618,
      0.9637,
      0.9655,
      0.9672,
      0.969,
      0.9706,
      0.972,
      0.9734,
      0.9746,
      0.9758,
      0.9769,
      0.9781,
      0.9792,
      0.9804,
      0.9816,
      0.9827,
      0.9837,
      0.9847,
      0.9858,
      0.9867,
      0.9876,
      0.9885,
      0.9892,
      0.9899,
      0.9906,
      0.9913,
      0.9919,
      0.9924,
      0.993,
      0.9935,
      0.994,
      0.9946,
      0.9951,
      0.9957,
      0.9962,
      0.9967,
      0.9973,
      0.9978,
      0.9984,
      0.9988,
      0.9992,
      0.9995,
      0.9998,
      0.9999,
      1,
      1,
      1,
      1
    ],
    "idShape": "5fb719776cbb348567439fd5"
  },
  "5fb719776cbb348567439fd6": {
    "name": "Seattle Long-duration Storm (64-hour) back-loaded",
    "arrCumPctVolNative": [
      0,
      0.0001,
      0.0002,
      0.0005,
      0.0008,
      0.0012,
      0.0016,
      0.0022,
      0.0027,
      0.0033,
      0.0038,
      0.0043,
      0.0049,
      0.0054,
      0.006,
      0.0065,
      0.007,
      0.0077,
      0.0084,
      0.0091,
      0.01,
      0.0109,
      0.0119,
      0.013,
      0.0141,
      0.0152,
      0.0163,
      0.0174,
      0.0187,
      0.0201,
      0.0216,
      0.0232,
      0.025,
      0.0268,
      0.0286,
      0.0307,
      0.0328,
      0.0353,
      0.0383,
      0.042,
      0.0464,
      0.0523,
      0.0597,
      0.07,
      0.0803,
      0.0877,
      0.0936,
      0.0979,
      0.1017,
      0.1047,
      0.1072,
      0.1093,
      0.1113,
      0.1132,
      0.115,
      0.1168,
      0.1185,
      0.1201,
      0.1216,
      0.1229,
      0.1241,
      0.1253,
      0.1264,
      0.1276,
      0.1288,
      0.1299,
      0.1311,
      0.1322,
      0.1333,
      0.1343,
      0.1353,
      0.1362,
      0.1371,
      0.138,
      0.1388,
      0.1395,
      0.1401,
      0.1408,
      0.1414,
      0.1419,
      0.1425,
      0.143,
      0.1436,
      0.1441,
      0.1446,
      0.1452,
      0.1457,
      0.1463,
      0.1468,
      0.1473,
      0.1479,
      0.1484,
      0.1487,
      0.1491,
      0.1493,
      0.1494,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1495,
      0.1496,
      0.1498,
      0.1502,
      0.1508,
      0.1515,
      0.1522,
      0.1531,
      0.154,
      0.155,
      0.156,
      0.157,
      0.158,
      0.159,
      0.16,
      0.1611,
      0.1622,
      0.1633,
      0.1644,
      0.1655,
      0.1666,
      0.1676,
      0.1687,
      0.1698,
      0.1709,
      0.172,
      0.1731,
      0.1743,
      0.1755,
      0.1766,
      0.1778,
      0.1789,
      0.1801,
      0.1813,
      0.1824,
      0.1836,
      0.1847,
      0.1859,
      0.1871,
      0.1883,
      0.1895,
      0.1909,
      0.1922,
      0.1936,
      0.195,
      0.1965,
      0.1981,
      0.1998,
      0.2016,
      0.2036,
      0.2058,
      0.2081,
      0.2106,
      0.2132,
      0.216,
      0.219,
      0.2221,
      0.2253,
      0.2288,
      0.2324,
      0.2362,
      0.24,
      0.2437,
      0.2475,
      0.2514,
      0.2554,
      0.2593,
      0.2634,
      0.2675,
      0.2717,
      0.2759,
      0.2801,
      0.2843,
      0.2886,
      0.2929,
      0.2973,
      0.3018,
      0.3065,
      0.3113,
      0.3162,
      0.3213,
      0.3266,
      0.3319,
      0.3374,
      0.3429,
      0.3485,
      0.3542,
      0.3599,
      0.3657,
      0.3716,
      0.3775,
      0.3836,
      0.3896,
      0.3957,
      0.4018,
      0.4079,
      0.414,
      0.4203,
      0.4266,
      0.433,
      0.4402,
      0.4479,
      0.4557,
      0.4638,
      0.4721,
      0.4809,
      0.4901,
      0.501,
      0.5181,
      0.5405,
      0.5529,
      0.5628,
      0.5717,
      0.5803,
      0.5885,
      0.5964,
      0.6038,
      0.6101,
      0.6165,
      0.6228,
      0.6291,
      0.6353,
      0.6414,
      0.6475,
      0.6536,
      0.6596,
      0.6656,
      0.6715,
      0.6775,
      0.6835,
      0.6894,
      0.6952,
      0.701,
      0.7067,
      0.7124,
      0.7181,
      0.7237,
      0.7294,
      0.735,
      0.7405,
      0.7461,
      0.7516,
      0.7571,
      0.7625,
      0.7679,
      0.7733,
      0.7786,
      0.7837,
      0.7889,
      0.794,
      0.7991,
      0.8039,
      0.8087,
      0.8133,
      0.8179,
      0.8225,
      0.8269,
      0.8314,
      0.8357,
      0.84,
      0.8442,
      0.8485,
      0.8527,
      0.8569,
      0.8611,
      0.8653,
      0.8694,
      0.8735,
      0.8776,
      0.8817,
      0.8857,
      0.8897,
      0.8938,
      0.8978,
      0.9018,
      0.9058,
      0.9097,
      0.9137,
      0.9175,
      0.9214,
      0.9253,
      0.9292,
      0.9329,
      0.9367,
      0.9405,
      0.9443,
      0.948,
      0.9518,
      0.9555,
      0.9591,
      0.9627,
      0.9662,
      0.9696,
      0.9729,
      0.9762,
      0.9793,
      0.9823,
      0.9853,
      0.9882,
      0.9907,
      0.993,
      0.9949,
      0.9965,
      0.9978,
      0.9988,
      0.9995,
      0.9999,
      1,
      1,
      1,
      1
    ],
    "idShape": "5fb719776cbb348567439fd6"
  }
};

const stormsOptions = [
  {
    "idShape": "5eb6e0307fb725cdd6dc784a",
    "name": "Type I"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc784d",
    "name": "Ljubljana Summer Storm"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc784b",
    "name": "R8"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc784c",
    "name": "R10"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc784e",
    "name": "Type Ia"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc784f",
    "name": "Type II"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc7850",
    "name": "Type III"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc7851",
    "name": "De Bilt"
  },
  {
    "idShape": "5eb6e0307fb725cdd6dc7852",
    "name": "AES"
  },
  {
    "idShape": "5e5005120246ee146685b4cf",
    "name": "Constant Intensity"
  },
  {
    "idShape": "5ebd5c7b27bef7eae5e88207",
    "name": "Euler Typ 2"
  },
  {
    "idShape": "5fb719776cbb348567439fd2",
    "name": "Seattle Short-duration Storm (3-hour)"
  },
  {
    "idShape": "5fb719776cbb348567439fd3",
    "name": "Seattle Intermediate-duration Storm (18-hour)"
  },
  {
    "idShape": "5fb719776cbb348567439fd4",
    "name": "Seattle 24-hour Dimensionless Design Storm"
  },
  {
    "idShape": "5fb719776cbb348567439fd5",
    "name": "Seattle Long-duration Storm (64-hour) front-loaded"
  },
  {
    "idShape": "5fb719776cbb348567439fd6",
    "name": "Seattle Long-duration Storm (64-hour) back-loaded"
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
  storms,
  stormsObj,
  stormsOptions,
  faq,
  terminology,
};