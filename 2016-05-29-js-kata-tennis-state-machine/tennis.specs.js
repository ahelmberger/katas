'use strict'

const expect = require('expect.js')
const Tennis = require('./tennis')

const testData = [
  { scoringPlayers: [],                       expected: 'love - love'         },
  { scoringPlayers: [0],                      expected: 'fifteen - love'      },
  { scoringPlayers: [1],                      expected: 'love - fifteen'      },
  { scoringPlayers: [0, 0],                   expected: 'thirty - love'       },
  { scoringPlayers: [0, 1],                   expected: 'fifteen - fifteen'   },
  { scoringPlayers: [1, 0],                   expected: 'fifteen - fifteen'   },
  { scoringPlayers: [1, 1],                   expected: 'love - thirty'       },
  { scoringPlayers: [0, 0, 0],                expected: 'forty - love'        },
  { scoringPlayers: [0, 0, 1],                expected: 'thirty - fifteen'    },
  { scoringPlayers: [0, 1, 0],                expected: 'thirty - fifteen'    },
  { scoringPlayers: [1, 0, 1],                expected: 'fifteen - thirty'    },
  { scoringPlayers: [1, 1, 0],                expected: 'fifteen - thirty'    },
  { scoringPlayers: [1, 1, 1],                expected: 'love - forty'        },
  { scoringPlayers: [0, 0, 0, 0],             expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 0, 1],             expected: 'forty - fifteen'     },
  { scoringPlayers: [0, 1, 0, 0],             expected: 'forty - fifteen'     },
  { scoringPlayers: [0, 1, 0, 1],             expected: 'thirty - thirty'     },
  { scoringPlayers: [1, 0, 1, 0],             expected: 'thirty - thirty'     },
  { scoringPlayers: [1, 0, 1, 1],             expected: 'fifteen - forty'     },
  { scoringPlayers: [1, 1, 1, 0],             expected: 'fifteen - forty'     },
  { scoringPlayers: [1, 1, 1, 1],             expected: 'game player #2'      },
  { scoringPlayers: [0, 0, 0, 0, 0],          expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 0, 0, 1],          expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 1, 0, 0],          expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 1, 0, 1],          expected: 'forty - thirty'      },
  { scoringPlayers: [1, 0, 1, 0, 0],          expected: 'forty - thirty'      },
  { scoringPlayers: [1, 0, 1, 0, 1],          expected: 'thirty - forty'      },
  { scoringPlayers: [1, 0, 1, 1, 0],          expected: 'thirty - forty'      },
  { scoringPlayers: [1, 0, 1, 1, 1],          expected: 'game player #2'      },
  { scoringPlayers: [1, 1, 1, 1, 0],          expected: 'game player #2'      },
  { scoringPlayers: [1, 1, 1, 1, 1],          expected: 'game player #2'      },
  { scoringPlayers: [0, 0, 1, 0, 1, 0],       expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 1, 0, 1, 1],       expected: 'deuce'               },
  { scoringPlayers: [1, 0, 1, 0, 1, 0],       expected: 'deuce'               },
  { scoringPlayers: [1, 0, 1, 0, 1, 1],       expected: 'game player #2'      },
  { scoringPlayers: [0, 0, 1, 0, 1, 1, 0],    expected: 'advantage player #1' },
  { scoringPlayers: [1, 0, 1, 0, 1, 0, 1],    expected: 'advantage player #2' },
  { scoringPlayers: [0, 0, 1, 0, 1, 1, 0, 0], expected: 'game player #1'      },
  { scoringPlayers: [0, 0, 1, 0, 1, 1, 0, 1], expected: 'deuce'               },
  { scoringPlayers: [1, 0, 1, 0, 1, 0, 1, 0], expected: 'deuce'               },
  { scoringPlayers: [1, 0, 1, 0, 1, 0, 1, 1], expected: 'game player #2'      },
]

testData.forEach(d => {
  describe(`When scoring sequence is '${d.scoringPlayers.join(', ')}'`, () => {
    let actual
    beforeEach(() => {
      actual = d.scoringPlayers.reduce((t, i) => t.playerScores(i), new Tennis()).score
    })
    it(`should yield result '${d.expected}'`, () => {
      expect(actual).to.be(d.expected)
    })
  })
})
