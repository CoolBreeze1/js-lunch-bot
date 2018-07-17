const assert = require('chai').assert;
const biggestGroup = require('../methods/biggestGroup').biggestGroup;
const smallestGroup = require('../methods/smallestGroup').smallestGroup;
const shuffle = require('../methods/shuffle').shuffle;
// const testing = require('../testing');


describe('BiggestGroup', function(){

  it('BiggestGroup should return group with the most objects of compared groups', function(){
    let groups = [[1,2,3,4,5,6], [3,4,5], [1,2,3,5,6,7,7], [1,2,4,6]];

    let result = biggestGroup(groups);
    assert.equal(result, groups[2]);
  });
});

describe('SmallestGroup', function(){

  it('SmallestGroup should return group with the least objects of compared groups', function(){
    let groups = [[1,2,3,4,5,6], [3,4,5], [1,2,3,5,6,7,7], [1,2,4,6]];

    let result = smallestGroup(groups);
    assert.equal(result, groups[1]);
  });
});

describe('Shuffle', function(){

  it('Shuffle should randomly move array items by their index', function(){
    let group = ["sam1","sam2","sam3","sam4","sam5","sam6","sam7","sam8","sam9"];
    let result = shuffle(group);
    assert.equal(result, group[0].toString != "sam1");
  });
});

// describe('Testing', function(){
//
//   it('sayHello should return hello', function(){
//     let result = sayHello();
//     assert.equal(result, 'hello');
//   });
//
//   it('sayHello should return type string', function(){
//     let result = sayHello();
//     assert.typeOf(result, 'string');
//   });
//
// });
