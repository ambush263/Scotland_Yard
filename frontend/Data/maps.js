const maps = {
"scotland-yard" : {
        "name" : "Scotland Yard",
        "nodes" : {
            "node1" : {
                "value" : 1,
                "connections" : {"8" : "taxi","9" : "taxi"}
            }
        }
    },

"development-map": {
  "name" : "Development Map",
  "nodes": {
    "1": {
      "connections": {
        "8": ["taxi"],
        "9": ["taxi"]
      }
    },

    "2": {
      "connections": {
        "20": ["taxi"],
        "10": ["taxi"]
      }
    },

    "3": {
      "connections": {
        "4": ["taxi"],
        "11": ["taxi"],
        "12": ["taxi"],
        "22": ["bus"]
      }
    },

    "4": {
      "connections": {
        "3": ["taxi"],
        "13": ["taxi"]
      }
    },

    "5": {
      "connections": {
        "15": ["taxi"],
        "16": ["taxi"]
      }
    },

    "6": {
      "connections": {
        "7": ["taxi"],
        "29": ["taxi"]
      }
    },

    "7": {
      "connections": {
        "6": ["taxi"],
        "17": ["taxi"]
      }
    },

    "8": {
      "connections": {
        "1": ["taxi"],
        "18": ["taxi"],
        "19": ["taxi"]
      }
    },

    "9": {
      "connections": {
        "1": ["taxi"],
        "19": ["taxi"],
        "20": ["taxi"]
      }
    },

    "10": {
      "connections": {
        "2": ["taxi"],
        "21": ["taxi"],
        "11": ["taxi"]
      }
    },

    "11": {
      "connections": {
        "10": ["taxi"],
        "3": ["taxi"],
        "22": ["taxi"]
      }
    },

    "12": {
      "connections": {
        "3": ["taxi"],
        "23": ["taxi"]
      }
    },

    "13": {
      "connections": {
        "4": ["taxi"],
        "23": ["bus"],
        "14": ["bus"],
        "19": ["underground"],
        "24": ["taxi"]
      }
    },

    "14": {
      "connections": {
        "13": ["bus"],
        "15": ["taxi","bus"],
        "25": ["taxi"]
      }
    },

    "15": {
      "connections": {
        "14": ["taxi","bus"],
        "5": ["taxi"],
        "26": ["taxi"],
        "28": ["taxi"]
      }
    },

    "16": {
      "connections": {
        "5": ["taxi"],
        "28": ["taxi"],
        "29": ["taxi"]
      }
    },

    "17": {
      "connections": {
        "7": ["taxi"],
        "29": ["taxi"]
      }
    },

    "18": {
      "connections": {
        "8": ["taxi"]
      }
    },

    "19": {
      "connections": {
        "8": ["taxi"],
        "9": ["taxi"],
        "13" : ["underground"]
      }
    },

    "20": {
      "connections": {
        "9": ["taxi"],
        "2": ["taxi"],
        "21": ["taxi"]
      }
    },

    "21": {
      "connections": {
        "20": ["taxi"],
        "10": ["taxi"]
      }
    },

    "22": {
      "connections": {
        "11": ["taxi"],
        "23": ["bus"],
        "3": ["bus"]
      }
    },

    "23": {
      "connections": {
        "12": ["taxi"],
        "13": ["bus"],
        "22": ["bus"]
      }
    },

    "24": {
      "connections": {
        "13": ["taxi"]
      }
    },

    "25": {
      "connections": {
        "14": ["taxi"]
      }
    },

    "26": {
      "connections": {
        "15": ["taxi"],
        "27": ["taxi"]
      }
    },

    "27": {
      "connections": {
        "26": ["taxi"],
        "28": ["taxi"]
      }
    },

    "28": {
      "connections": {
        "15": ["bus"],
        "16": ["taxi"],
        "27": ["taxi"]
      }
    },

    "29": {
      "connections": {
        "16": ["taxi"],
        "6": ["taxi"],
        "17": ["taxi"]
      }
    }
  }
}
}

export default maps