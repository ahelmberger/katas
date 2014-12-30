'use strict';

import checkout from 'checkout';

describe('Given a checkout counter', () => {
  let sut;

  beforeEach(() => {
    sut = checkout.createCheckout([
      { name: 'A', pricePerUnit: 0.50, discountUnits: 3, discountPrice: 1.30 },
      { name: 'B', pricePerUnit: 0.30, discountUnits: 2, discountPrice: 0.45 },
      { name: 'C', pricePerUnit: 0.20 },
      { name: 'D', pricePerUnit: 0.15 }
    ]);
  });

  describe('when no item has been scanned yet', () => {
    it('should have a total of 0', () => {
      expect(sut.getTotal()).toBe(0);
    });
  });

  describe('when an item of an unknown category has been scanned', () => {
    beforeEach(() => {
      sut.scan('X');
    });
    it('should have a total of 0', () => {
      expect(sut.getTotal()).toBe(0);
    });
  });

  describe('when an item of category C has been scanned', () => {
    beforeEach(() => {
      sut.scan('C');
    });
    it('should have a total of 0.2', () => {
      expect(sut.getTotal()).toBe(0.2);
    });
  });

  describe('when an item of category C and an item of category D have been scanned', () => {
    beforeEach(() => {
      sut.scan('C');
      sut.scan('D');
    });
    it('should have a total of 0.35', () => {
      expect(sut.getTotal()).toBe(0.35);
    });
  });

  describe('when 7 items of category C and 5 items of category D have been scanned in arbitrary order', () => {
    beforeEach(() => {
      sut.scan('C');
      sut.scan('D');
      sut.scan('C');
      sut.scan('C');
      sut.scan('C');
      sut.scan('D');
      sut.scan('D');
      sut.scan('C');
      sut.scan('D');
      sut.scan('C');
      sut.scan('C');
      sut.scan('D');
    });
    it('should have a total of 2.15', () => {
      expect(sut.getTotal()).toBe(2.15);
    });
  });

  describe('when an item of category B has been scanned', () => {
    beforeEach(() => {
      sut.scan('B');
    });
    it('should have a total of 0.3', () => {
      expect(sut.getTotal()).toBe(0.3);
    });
  });

  describe('when 2 items of category B have been scanned', () => {
    beforeEach(() => {
      sut.scan('B');
      sut.scan('B');
    });
    it('should have a total of 0.45', () => {
      expect(sut.getTotal()).toBe(0.45);
    });
  });

  describe('when 3 items of category B have been scanned', () => {
    beforeEach(() => {
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
    });
    it('should have a total of 0.75', () => {
      expect(sut.getTotal()).toBe(0.75);
    });
  });

  describe('when 4 items of category B have been scanned', () => {
    beforeEach(() => {
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
    });
    it('should have a total of 0.9', () => {
      expect(sut.getTotal()).toBe(0.9);
    });
  });

  describe('when 5 items of category B have been scanned', () => {
    beforeEach(() => {
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
      sut.scan('B');
    });
    it('should have a total of 1.2', () => {
      expect(sut.getTotal()).toBe(1.2);
    });
  });

  describe('when many items of categories A through D have been scanned in arbitrary order', () => {
    beforeEach(() => {
      sut.scan('A');
      sut.scan('D');
      sut.scan('C');
      sut.scan('A');
      sut.scan('B');
      sut.scan('A');
      sut.scan('A');
      sut.scan('D');
      sut.scan('B');
      sut.scan('C');
      sut.scan('B');
      sut.scan('A');
      sut.scan('C');
      sut.scan('D');
      sut.scan('A');
      sut.scan('C');
      sut.scan('A');
    });
    it('should have a correct total', () => {
      expect(sut.getTotal()).toBe(5.1);
    });
  });

});
