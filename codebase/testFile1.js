
const getInt = () => {
  return 5;
};

const square = (value) => {
  return value * value;
};

const iAmACallBack = (arg1, arg2, callback) => {
  console.log('comming here but mocking the original');
  if(arg1 || arg2)
  {
    return callback(null, [2,3,4,5,6])
  }
};



module.exports = {
  getInt,
  square,
  iAmACallBack
};