
// ============================MOCHA FUNCTION CALLS=======================================//
var assert = require('assert');
describe('Mathematical Operations - Test Suite', function(){

  // 1. Addition
  it('Addition of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a+b;
    assert.equal(c,20);
  });

  // 2. Subtraction
  it('Subtraction of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a-b;
    assert.equal(c,0);
  });

  // 3. Multiplication
  it('Multiplication of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a*b;
    assert.equal(c,100);
  });

  // 4. Division
  it('Division of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a/b;
    assert.equal(c,1);
  });

});


// ======================================MOCHA HOOKS====================================//
// describe('Mocha Hooks', function(){

//   before('Execute Before All Tests', function(){
//       console.log('Execute Before All Tests');
//   });

//   beforeEach('Execute Before Each Test', function(){
//       console.log('Execute Before Each Test');
//   });

//   after('Execute After All Tests', function(){
//       console.log('Execute After All Tests');
//   });

//   afterEach('Execute After Each Test', function(){
//       console.log('Execute Before Each Test');
//   });

//   it('Mocha Hooks Test', function(){
//       console.log('Mocha - This is a Test for Mocha Hooks');
//   })
// })

// ======================================MOCHA TEST FEATURE====================================//
// Exclusive test.
// var assert = require('assert');

// describe('Mathematical Operations - Test Suite', function(){
//     var a = 10;
//     var b = 10;

//   it.only('Addition of two numbers', function(){
//     var c = a+b;
//     assert.equal(c,20);

//   });
//     it.only('Subtraction of two numbers', function(){
//       var c = a-b;
//       assert.equal(c,0);
//     });

// })

// inclusive test.
// var assert = require('assert');

// describe('Mathematical Operations - Test Suite', function(){
//     var a = 10;
//     var b = 10;

//   it.skip('Addition of two numbers', function(done){
//     var c = a+b;
//     assert.equal(c,20);
// });
// });

//pending test
// var assert = require('assert');

// describe('Mathematical Operations - Test Suite', function(){
//     var a = 10;
//     var b = 10;

//   it.skip('Addition of two numbers', function(done){
//     var c = a+b;
//     assert.equal(c,20);
// });
// // Pending Test
// it('This is a test for Pending Test Feature');
// })

// ======================================Mocha Timeouts====================================//
//suite-level timeout 
// var assert = require('assert');
// describe('Mathematical Operations - Test Suite', function(){
//   this.timeout(500);
//   // 1. Addition
//   setTimeout(done,3000);
//   it('Addition of two numbers', function(){
//     var a = 10;
//     var b = 10;
//     var c = a+b;
//     assert.equal(c,20);
//   });
//   // 2. Subtraction
//   it('Subtraction of two numbers', function(){
//     var a = 10;
//     var b = 10;
//     var c = a-b;
//     assert.equal(c,0);
//   });
//   // 3. Multiplication
//   it('Multiplication of two numbers', function(){
//     var a = 10;
//     var b = 10;
//     var c = a*b;
//     assert.equal(c,10);
//   });
//   // 4. Division
//   it('Division of two numbers', function(){
//     var a = 10;
//     var b = 10;
//     var c = a/b;
//     assert.equal(c,1);
//   });
// });

//test-level timeout.
// var assert = require('assert');

// describe('Mathematical Operations - Test Suite', function(){
//     this.timeout(5000);
//     var a = 10;
//     var b = 10;

//     it.only('Addition of two numbers', function(done){
//         this.timeout(500);
//         setTimeout(done,3000);
//         var c = a+b;
//         assert.equal(c,20);
//   });
// });

//hook-level timeout.
// var assert = require('assert');

// describe('Mathematical Operations - Test Suite', function(){

//     beforeEach(function(done){
//         this.timeout(500);
//         setTimeout(done,3000);
//   });
// });

// ======================================Mocha Report====================================//

//mocha test/ --reporter spec


//mocha test/ --reporter dot


//mocha test/ --reporter yarn