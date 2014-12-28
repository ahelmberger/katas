/* global toRomanNumeral */
'use strict';

describe('The Romans did not have a numeral for 0', function () {
  describe('therefore when provided with 0', function () {
    it('toRomanNumeral should return an empry string', function () {
      expect(toRomanNumeral(0)).toBe('');
    });
  });
});

describe('toRomanNumeral', function () {
  describe('when called with 1', function () {
    it('should return "I"', function () {
      expect(toRomanNumeral(1)).toBe('I');
    });
  });
  describe('when called with 2', function () {
    it('should return "II"', function () {
      expect(toRomanNumeral(2)).toBe('II');
    });
  });
  describe('when called with 3', function () {
    it('should return "III"', function () {
      expect(toRomanNumeral(3)).toBe('III');
    });
  });
  describe('when called with 4', function () {
    it('should return "IV"', function () {
      expect(toRomanNumeral(4)).toBe('IV');
    });
  });
  describe('when called with 5', function () {
    it('should return "V"', function () {
      expect(toRomanNumeral(5)).toBe('V');
    });
  });
  describe('when called with 6', function () {
    it('should return "VI"', function () {
      expect(toRomanNumeral(6)).toBe('VI');
    });
  });
  describe('when called with 9', function () {
    it('should return "IX"', function () {
      expect(toRomanNumeral(9)).toBe('IX');
    });
  });
  describe('when called with 10', function () {
    it('should return "X"', function () {
      expect(toRomanNumeral(10)).toBe('X');
    });
  });
  describe('when called with 1990', function () {
    it('should return "MCMXC"', function () {
      expect(toRomanNumeral(1990)).toBe('MCMXC');
    });
  });
  describe('when called with 2008 ', function () {
    it('should return "MMVIII"', function () {
      expect(toRomanNumeral(2008)).toBe('MMVIII');
    });
  });
});
