let biggestGroup = require('./biggestGroup');
let smallestGroup = require('./smallestGroup');

biggestGroup = biggestGroup.biggestGroup;
smallestGroup = smallestGroup.smallestGroup;

module.exports = {

  makeGroupsEven: function(groups){
    //loop through all single groups
    let bigGroup = biggestGroup(groups);
    let smallGroup = smallestGroup(groups);

    while((bigGroup.length !== smallGroup.length) && (bigGroup.length - smallGroup.length) >= 2 ){
      let a = bigGroup.pop();
        smallGroup.push(a);
        bigGroup = biggestGroup(groups);
        smallGroup = smallestGroup(groups);
        console.log(groups);
    };
  }

};
