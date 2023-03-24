const Hendra = require('../Helper/Helper-Hendra');
class Math {
  add (a, b) {
    return Hendra.add(a, b);
  }

  minus (a, b) {
    return Hendra.subtract(a, b);
  }

  multiply (a, b) {
    return Hendra.multiply(a, b);
  }

  divide (a, b) {
    return Hendra.divide(a, b);
  }
}

module.exports = Math;