var APP_DATA = {
  "scenes": [
    {
      "id": "0-cash-counter",
      "name": "CASH COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7292104723686244,
          "pitch": -0.00433202465928062,
          "rotation": 0,
          "target": "1-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-center",
      "name": "CENTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7225955408002207,
          "pitch": 0.030539424438462248,
          "rotation": 1.5707963267948966,
          "target": "2-rental"
        },
        {
          "yaw": -0.5514913502050565,
          "pitch": 0.0013756993646065752,
          "rotation": 4.71238898038469,
          "target": "5-bangles--earings-section"
        },
        {
          "yaw": 3.0508223967168515,
          "pitch": -0.015547314786743982,
          "rotation": 1.5707963267948966,
          "target": "0-cash-counter"
        },
        {
          "yaw": 0.004722881892401887,
          "pitch": -0.10276887615336605,
          "rotation": 0,
          "target": "4-center-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rental",
      "name": "RENTAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0203960783075114,
          "pitch": -0.008447574333658281,
          "rotation": 0,
          "target": "4-center-back"
        },
        {
          "yaw": -2.7381875928501085,
          "pitch": 0.010935286028388447,
          "rotation": 0,
          "target": "3-pantry"
        },
        {
          "yaw": 1.8772304069164791,
          "pitch": 0.018075457690601482,
          "rotation": 1.5707963267948966,
          "target": "0-cash-counter"
        },
        {
          "yaw": -2.581662611832016,
          "pitch": 0.00235577318781921,
          "rotation": 1.5707963267948966,
          "target": "5-bangles--earings-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pantry",
      "name": "PANTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8742822439059879,
          "pitch": 0.12117168886496721,
          "rotation": 0,
          "target": "5-bangles--earings-section"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4484658540107285,
          "pitch": 0.12961141223205885,
          "title": "Toilet",
          "text": "Inside"
        }
      ]
    },
    {
      "id": "4-center-back",
      "name": "CENTER BACK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7355309892067652,
          "pitch": 0.1469855373396669,
          "rotation": 4.71238898038469,
          "target": "2-rental"
        },
        {
          "yaw": 0.03150244075817277,
          "pitch": 0.02017736662174663,
          "rotation": 0,
          "target": "1-center"
        },
        {
          "yaw": 1.4687821534774086,
          "pitch": 0.11218218405034008,
          "rotation": 1.5707963267948966,
          "target": "5-bangles--earings-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bangles--earings-section",
      "name": "BANGLES & EARINGS SECTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.408136010021323,
          "pitch": 0.03356331038519045,
          "rotation": 0,
          "target": "3-pantry"
        },
        {
          "yaw": -1.0029683040452753,
          "pitch": 0.04857328493577029,
          "rotation": 4.71238898038469,
          "target": "4-center-back"
        },
        {
          "yaw": -0.4064535322899978,
          "pitch": 0.037201598803269675,
          "rotation": 1.5707963267948966,
          "target": "1-center"
        },
        {
          "yaw": -0.7443892150001918,
          "pitch": 0.0435900966983791,
          "rotation": 0,
          "target": "2-rental"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KAITHARAN JEWELS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
