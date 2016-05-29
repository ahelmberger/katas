'use strict'

const scoreTransitions = {
  'love - love'        : ['fifteen - love'     , 'love - fifteen'     ],
  'love - fifteen'     : ['fifteen - fifteen'  , 'love - thirty'      ],
  'love - thirty'      : ['fifteen - thirty'   , 'love - forty'       ],
  'love - forty'       : ['fifteen - forty'    , 'game player #2'     ],
  'fifteen - love'     : ['thirty - love'      , 'fifteen - fifteen'  ],
  'fifteen - fifteen'  : ['thirty - fifteen'   , 'fifteen - thirty'   ],
  'fifteen - thirty'   : ['thirty - thirty'    , 'fifteen - forty'    ],
  'fifteen - forty'    : ['thirty - forty'     , 'game player #2'     ],
  'thirty - love'      : ['forty - love'       , 'thirty - fifteen'   ],
  'thirty - fifteen'   : ['forty - fifteen'    , 'thirty - thirty'    ],
  'thirty - thirty'    : ['forty - thirty'     , 'thirty - forty'     ],
  'thirty - forty'     : ['deuce'              , 'game player #2'     ],
  'forty - love'       : ['game player #1'     , 'forty - fifteen'    ],
  'forty - fifteen'    : ['game player #1'     , 'forty - thirty'     ],
  'forty - thirty'     : ['game player #1'     , 'deuce'              ],
  'deuce'              : ['advantage player #1', 'advantage player #2'],
  'advantage player #1': ['game player #1'     , 'deuce'              ],
  'advantage player #2': ['deuce'              , 'game player #2'     ],
  'game player #1'     : ['game player #1'     , 'game player #1'     ],
  'game player #2'     : ['game player #2'     , 'game player #2'     ],
}

module.exports = class Tennis {
  constructor() {
    this.score = 'love - love'
  }
  playerScores(index) {
    this.score = scoreTransitions[this.score][index]
    return this
  }
}
