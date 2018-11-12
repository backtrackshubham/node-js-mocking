const { it } = exports.lab = require('lab').script();
const { expect } = require('code');
const sinon = require('sinon');
const rewire = require('rewire');

let test2 = require('../codebase/testFile2.js');
let test1 = require('../codebase/testFile1.js');
let fileToStub = require('../codebase/fileToStub.js');
let fileToStubReWired = rewire('../codebase/fileToStub.js');

const util = require('./../codebase/util.js');


let fileToTest = require('./../codebase/callbacks/fileUsingCallbacks.js');
let fileToMock = require('./../codebase/callbacks/callbacks.js');




/*

it('normal synchronous',() => {
    const value = util.someSyncTask(2000);
    expect(value).to.equal(2000);
});

it('failed', async () =>{
   await util.callPromisMethod()
});


it('using promises',async () => {
    const value = await util.someAsyncTaskWithPromise(1500);
    expect(value).to.equal(90);
});
*/

it('mockTesting' ,() =>{
  sinon.stub(test1, 'getInt').returns(10);
  sinon.stub(test1, 'square').returns(1000);
  let result = test2.getIntAndAdd();
  let orignalCall = 25;
  console.log(result);
  console.log('printing test 1');
  console.log(result);
  expect(result).to.equal(1000);
});

it('testing callback' ,() => {
  let reply = {};
 sinon.stub(test1, 'iAmACallBack').callsFake(function (arg1, arg2, callback) {
   if(arg1 || arg2)
  {
    return callback(null, [11,12])
  }
 });
     let result = test2.callingCallback(23, 45, reply);
 console.log(reply);
 console.log(result);

});

 //testing file to stub


it('testing sub and add', () => {
  sinon.replace(fileToStub, 'add', (arg, arg1) => {
    return arg - arg1
  });

  sinon.replace(fileToStub, 'subtract', (arg, arg1) => {
    return arg * arg1
  });

  let add = fileToStub.add(45,23)
  let sub = fileToStub.subtract(45,23)
  console.log(add);
  console.log(sub);
})

it('testing BWS Scenario', () => {
  fileToStubReWired.__set__('double',(arg) => { return arg * 3})
  let add = fileToStubReWired.doDouble(45)
  console.log(add);
})





