const Hendra = require('./Helper/Helper-Hendra');
const Math = require('./Controller/Math');

console.log(Hendra.add(1, 2));
console.log(Hendra.subtract(2, 1));
console.log(Hendra.multiply(1, 2));
console.log(Hendra.divide(2, 1));


const math = new Math();
console.log(math.add(1, 2));
console.log(math.minus(2, 1));
console.log(math.multiply(1, 2));
console.log(math.divide(2, 1));