'use strict';

import lcd from 'lcd';

describe('Given an LCD printer', () => {

  describe('when the input is not a number type', () => {
    it('should print nothing', () => {
      expect(lcd.print('Hello world!')).toBeFalsy();
    });
  });

  describe('when the input is NaN', () => {
    it('should print nothing', () => {
      expect(lcd.print(NaN)).toBeFalsy();
    });
  });

  describe('when the input is negative', () => {
    it('should print nothing', () => {
      expect(lcd.print(-3)).toBeFalsy();
    });
  });

  describe('when the input is not an integer', () => {
    it('should print nothing', () => {
      expect(lcd.print(3.7)).toBeFalsy();
    });
  });

  describe('when the input is 0', () => {
    it('should print 0', () => {
      expect(lcd.print(0)).toEqual([
        ' _ ',
        '| |',
        '|_|'
      ]);
    });
  });

  describe('when the input is 1', () => {
    it('should print 1', () => {
      expect(lcd.print(1)).toEqual([
        '   ',
        '  |',
        '  |'
      ]);
    });
  });

  describe('when the input is 2', () => {
    it('should print 2', () => {
      expect(lcd.print(2)).toEqual([
        ' _ ',
        ' _|',
        '|_ '
      ]);
    });
  });

  describe('when the input is 12', () => {
    it('should print 12', () => {
      expect(lcd.print(12)).toEqual([
        '    _ ',
        '  | _|',
        '  ||_ '
      ]);
    });
  });

  describe('when the input is 8273645190', () => {
    it('should print 8273645190', () => {
      expect(lcd.print(8273645190)).toEqual([
        ' _  _  _  _  _     _     _  _ ',
        '|_| _|  | _||_ |_||_   ||_|| |',
        '|_||_   | _||_|  | _|  | _||_|'
      ]);
    });
  });

});
