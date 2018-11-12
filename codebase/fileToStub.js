const multiply = (arg1, arg2) => {
  return arg1 * arg2
}


const add = (arg1, arg2) => {
  return arg1 + arg2
}

const divide = (arg1, arg2) => {
  return arg1 / arg2
}

const subtract = (arg1, arg2) => {
  return arg1 - arg2
}

const doDouble = (arg1) => {return double(arg1)}

const double = (arg) => {
  return 2 * arg
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  double,
  doDouble
}