const testfile1 = require('./testFile1.js');

const getIntAndAdd = () => {
  let getintRes = testfile1.getInt();
  return testfile1.square(getintRes);
};

const callingCallback = (arg1, arg2, reply) => {
  return testfile1.iAmACallBack(arg1, arg2, (err, res) => {
    if(res)
      reply['result'] = res;
       return res;
  });
};

module.exports = {
  getIntAndAdd,
  callingCallback
}