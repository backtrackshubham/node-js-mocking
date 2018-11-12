const { it } = exports.lab = require('lab').script();
const { expect } = require('code');
const sinon = require('sinon');
const rewire = require('rewire');

let fileToTest = require('./../codebase/callbacks/fileUsingCallbacks.js');
let fileToMock = require('./../codebase/callbacks/callbacks.js');


it('testing call backs' ,() =>{
  let stubbed = sinon.stub(fileToMock, 'testFunction')
  stubbed.onCall(0).returns(45);
  stubbed.onCall(1).returns(56);
  let res = fileToTest.testFunctionTest()
  console.log('actual res should be 101');
  console.log(res);
});


it('testing call backs called multiple times with different callback' ,() =>{
  let stubbed = sinon.stub(fileToMock, 'callBack1');
  stubbed.onCall(0).callsFake((arg1, arg2, callback) => {
    return callback(null, {res: (arg2 - arg1)})
  });
  stubbed.onCall(1).callsFake((arg1, arg2, callback) => {
    return callback(null, {res: (arg2 + arg1)})
  });
  let res = fileToTest.multipleCallbacks(2, 4);
  console.log('actual res should be 164');
  console.log(res);
});

