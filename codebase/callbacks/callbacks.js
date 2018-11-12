const callBack1 = (arg1, arg2, callback) => {
  return callback(null, {res: (arg2 * arg1)})
}

const callBack2 = (arg1, arg2, callback) => {
  return callback(null, {res: (arg2 * arg1 * arg1)})
}

const testFunction = () => {
  return 23;
}

module.exports = {
  callBack1,
  callBack2,
  testFunction
}