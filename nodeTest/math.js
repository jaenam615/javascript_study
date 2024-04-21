const add = (x, y) => x + y;

const PI = Math.PI;

const square = (x) => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;
// exports.add= add;
// exports.square = square;