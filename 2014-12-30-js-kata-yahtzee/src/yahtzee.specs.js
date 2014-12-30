'use strict';

import yahtzee from 'yahtzee';

describe('Given a yahtzee game', () => {

  describe('when tallying up for "Chance"', () => {
    it('should return 18 for [1, 3, 3, 5, 6]', () => {
      expect(yahtzee.chance([1, 3, 3, 5, 6])).toBe(18);
    });
    it('should return 30 for [6, 6, 6, 6, 6]', () => {
      expect(yahtzee.chance([6, 6, 6, 6, 6])).toBe(30);
    });
  });

  describe('when tallying up for "Yahtzee"', () => {
    it('should return 0 for [6, 6, 6, 6, 5] (less than five of a kind)', () => {
      expect(yahtzee.yahtzee([6, 6, 6, 6, 5])).toBe(0);
    });
    it('should return 50 for [6, 6, 6, 6, 6] (exactly five of a kind)', () => {
      expect(yahtzee.yahtzee([6, 6, 6, 6, 6])).toBe(50);
    });
  });

  describe('when tallying up for "Pair"', () => {
    it('should return 0 for [1, 2, 3, 4, 5] (less than two of a kind)', () => {
      expect(yahtzee.pair([1, 2, 3, 4, 5])).toBe(0);
    });
    it('should return 6 for [2, 3, 3, 4, 5] (exactly two of a kind)', () => {
      expect(yahtzee.pair([2, 3, 3, 4, 5])).toBe(6);
    });
    it('should return 6 for [2, 3, 3, 3, 4] (more than two of a kind)', () => {
      expect(yahtzee.pair([2, 3, 3, 3, 4])).toBe(6);
    });
    it('should return 8 for [2, 3, 3, 4, 4] (higher one of two pairs)', () => {
      expect(yahtzee.pair([2, 3, 3, 4, 4])).toBe(8);
    });
  });

  describe('when tallying up for "Three of a kind"', () => {
    it('should return 0 for [1, 3, 3, 4, 5] (less than three of a kind)', () => {
      expect(yahtzee.threeOfAKind([1, 3, 3, 4, 5])).toBe(0);
    });
    it('should return 9 for [3, 3, 3, 4, 5] (exactly three of a kind)', () => {
      expect(yahtzee.threeOfAKind([3, 3, 3, 4, 5])).toBe(9);
    });
    it('should return 9 for [3, 3, 3, 3, 4] (more than three of a kind)', () => {
      expect(yahtzee.threeOfAKind([3, 3, 3, 3, 4])).toBe(9);
    });
  });

  describe('when tallying up for "Four of a kind"', () => {
    it('should return 0 for [1, 3, 3, 3, 4] (less than four of a kind)', () => {
      expect(yahtzee.fourOfAKind([1, 3, 3, 3, 4])).toBe(0);
    });
    it('should return 12 for [3, 3, 3, 3, 4] (exactly four of a kind)', () => {
      expect(yahtzee.fourOfAKind([3, 3, 3, 3, 4])).toBe(12);
    });
    it('should return 12 for [3, 3, 3, 3, 3] (more than four of a kind)', () => {
      expect(yahtzee.fourOfAKind([3, 3, 3, 3, 3])).toBe(12);
    });
  });

  describe('when tallying up for "Small straight"', () => {
    it('should return 0 for [1, 2, 3, 3, 6]', () => {
      expect(yahtzee.smallStraight([1, 2, 3, 3, 6])).toBe(0);
    });
    it('should return 15 for [1, 2, 3, 4, 5]', () => {
      expect(yahtzee.smallStraight([1, 2, 3, 4, 5])).toBe(15);
    });
  });

  describe('when tallying up for "Large straight"', () => {
    it('should return 0 for [1, 3, 4, 6, 6]', () => {
      expect(yahtzee.largeStraight([1, 3, 4, 6, 6])).toBe(0);
    });
    it('should return 20 for [2, 3, 4, 5, 6]', () => {
      expect(yahtzee.largeStraight([2, 3, 4, 5, 6])).toBe(20);
    });
  });

  describe('when tallying up for "Ones"', () => {
    it('should return 0 for [2, 3, 4, 6, 6]', () => {
      expect(yahtzee.ones([2, 3, 4, 6, 6])).toBe(0);
    });
    it('should return 2 for [2, 3, 1, 1, 6]', () => {
      expect(yahtzee.ones([2, 3, 1, 1, 6])).toBe(2);
    });
    it('should return 5 for [1, 1, 1, 1, 1]', () => {
      expect(yahtzee.ones([1, 1, 1, 1, 1])).toBe(5);
    });
  });

  describe('when tallying up for "Twos"', () => {
    it('should return 0 for [1, 3, 4, 6, 6]', () => {
      expect(yahtzee.twos([1, 3, 4, 6, 6])).toBe(0);
    });
    it('should return 4 for [2, 2, 1, 1, 6]', () => {
      expect(yahtzee.twos([2, 2, 1, 1, 6])).toBe(4);
    });
    it('should return 10 for [2, 2, 2, 2, 2]', () => {
      expect(yahtzee.twos([2, 2, 2, 2, 2])).toBe(10);
    });
  });

  describe('when tallying up for "Threes"', () => {
    it('should return 0 for [1, 2, 4, 6, 6]', () => {
      expect(yahtzee.threes([1, 2, 4, 6, 6])).toBe(0);
    });
    it('should return 6 for [3, 3, 1, 1, 6]', () => {
      expect(yahtzee.threes([3, 3, 1, 1, 6])).toBe(6);
    });
    it('should return 15 for [3, 3, 3, 3, 3]', () => {
      expect(yahtzee.threes([3, 3, 3, 3, 3])).toBe(15);
    });
  });

  describe('when tallying up for "Fours"', () => {
    it('should return 0 for [1, 2, 5, 6, 6]', () => {
      expect(yahtzee.fours([1, 2, 5, 6, 6])).toBe(0);
    });
    it('should return 8 for [4, 4, 1, 1, 6]', () => {
      expect(yahtzee.fours([4, 4, 1, 1, 6])).toBe(8);
    });
    it('should return 20 for [4, 4, 4, 4, 4]', () => {
      expect(yahtzee.fours([4, 4, 4, 4, 4])).toBe(20);
    });
  });

  describe('when tallying up for "Fives"', () => {
    it('should return 0 for [1, 2, 3, 6, 6]', () => {
      expect(yahtzee.fives([1, 2, 3, 6, 6])).toBe(0);
    });
    it('should return 10 for [5, 5, 1, 1, 6]', () => {
      expect(yahtzee.fives([5, 5, 1, 1, 6])).toBe(10);
    });
    it('should return 25 for [5, 5, 5, 5, 5]', () => {
      expect(yahtzee.fives([5, 5, 5, 5, 5])).toBe(25);
    });
  });

  describe('when tallying up for "Sixes"', () => {
    it('should return 0 for [1, 2, 3, 5, 5]', () => {
      expect(yahtzee.sixes([1, 2, 3, 5, 5])).toBe(0);
    });
    it('should return 12 for [6, 6, 1, 1, 4]', () => {
      expect(yahtzee.sixes([6, 6, 1, 1, 4])).toBe(12);
    });
    it('should return 30 for [6, 6, 6, 6, 6]', () => {
      expect(yahtzee.sixes([6, 6, 6, 6, 6])).toBe(30);
    });
  });

  describe('when tallying up for "FullHouse"', () => {
    it('should return 0 for [4, 4, 5, 6, 6]', () => {
      expect(yahtzee.fullHouse([4, 4, 5, 6, 6])).toBe(0);
    });
    it('should return 0 for [4, 4, 4, 4, 6]', () => {
      expect(yahtzee.fullHouse([4, 4, 4, 4, 6])).toBe(0);
    });
    it('should return 0 for [4, 4, 4, 4, 4]', () => {
      expect(yahtzee.fullHouse([4, 4, 4, 4, 4])).toBe(0);
    });
    it('should return 24 for [4, 4, 4, 6, 6]', () => {
      expect(yahtzee.fullHouse([4, 4, 4, 6, 6])).toBe(24);
    });
  });

  describe('when tallying up for "Two pairs"', () => {
    it('should return 0 for [4, 4, 4, 4, 6]', () => {
      expect(yahtzee.twoPairs([4, 4, 4, 4, 6])).toBe(0);
    });
    it('should return 0 for [4, 4, 4, 4, 4]', () => {
      expect(yahtzee.twoPairs([4, 4, 4, 4, 4])).toBe(0);
    });
    it('should return 0 for [4, 4, 1, 2, 3]', () => {
      expect(yahtzee.twoPairs([4, 4, 1, 2, 3])).toBe(0);
    });
    it('should return 20 for [4, 4, 5, 6, 6]', () => {
      expect(yahtzee.twoPairs([4, 4, 5, 6, 6])).toBe(20);
    });
    it('should return 20 for [4, 4, 4, 6, 6]', () => {
      expect(yahtzee.twoPairs([4, 4, 4, 6, 6])).toBe(20);
    });
  });

});
