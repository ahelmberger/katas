'use strict';

const contains = (array, value) => array.indexOf(value) !== -1;

const distribute = roll => roll.reduce((dist, dots) => { dist[dots - 1] += 1; return dist; }, [0, 0, 0, 0, 0, 0]);

const allEqual = roll => roll.every(dots => dots === roll[0]);

const allDifferent = roll => distribute(roll).every(count => count <= 1);

const tallyUpAll = (roll, restrictToDots) => roll.filter(dots => !restrictToDots || dots === restrictToDots).reduce((sum, dots) => sum + dots, 0);

const tallyUpHighestMatches = (roll, minOccurrence) => distribute(roll).reduce((points, count, index) => count >= minOccurrence ? minOccurrence * (index + 1) : points, 0);

const tallyUpAllMatches = (roll, minOccurrence) => distribute(roll).reduce((points, count, index) => count >= minOccurrence ? points + (minOccurrence * (index + 1)) : points, 0);

export default {
  ones          : roll => tallyUpAll(roll, 1),
  twos          : roll => tallyUpAll(roll, 2),
  threes        : roll => tallyUpAll(roll, 3),
  fours         : roll => tallyUpAll(roll, 4),
  fives         : roll => tallyUpAll(roll, 5),
  sixes         : roll => tallyUpAll(roll, 6),
  pair          : roll => tallyUpHighestMatches(roll, 2),
  twoPairs      : roll => distribute(roll).filter(points => points >= 2).length === 2  ? tallyUpAllMatches(roll, 2) : 0,
  threeOfAKind  : roll => tallyUpHighestMatches(roll, 3),
  fourOfAKind   : roll => tallyUpHighestMatches(roll, 4),
  smallStraight : roll => allDifferent(roll) && !contains(roll, 6) ? 15 : 0,
  largeStraight : roll => allDifferent(roll) && !contains(roll, 1) ? 20 : 0,
  fullHouse     : roll => distribute(roll).every(count => contains([0, 2, 3], count)) ? tallyUpAll(roll) : 0,
  yahtzee       : roll => allEqual(roll) ? 50 : 0,
  chance        : roll => tallyUpAll(roll)
};
