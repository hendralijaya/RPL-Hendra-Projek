const Hendra = require('../Helper/Helper-Hendra');
const expect = require('chai').expect;

describe('Hendra Calculator Class', () => {
  it('should return 3 when add 1 and 2', () => {
    expect(Hendra.add(1, 2)).to.equal(3);
  });

  it('should return 1 when subtract 2 and 1', () => {
    expect(Hendra.subtract(2, 1)).to.equal(1);
  });

  it('should return 2 when multiply 1 and 2', () => {
    expect(Hendra.multiply(1, 2)).to.equal(2);
  });

  it('should return 2 when divide 2 and 1', () => {
    expect(Hendra.divide(2, 1)).to.equal(2);
  });
});
