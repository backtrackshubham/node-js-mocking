const callBacks = require('./callbacks.js')

const functionUsingBothCallbackFunction = (args, args2) => {
 return callBacks.callBack1(args, args2, (err, res) => {
    if(err){
      return err;
    } else {
      callBacks.callBack2(res, args2, (err, res) => {
        if (err){
          return err;
        } else {
          return res;
        }
      })
    }
  });
};

const multipleCallbacks = (args, args2) => {
  let resT = callBacks.callBack1(args, args2, (err, res) => {
    return res.res;
  });

  return callBacks.callBack1(resT, args2, (err, res) => {
    return res.res;
  });
};

const testFunctionTest = () => {
  let res1 = callBacks.testFunction();
  let res2 = callBacks.testFunction();
  return res1 + res2
}


module.exports = {
  functionUsingBothCallbackFunction,
  testFunctionTest,
  multipleCallbacks
}