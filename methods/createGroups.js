let shuffle = require('./shuffle');
let makeGroupsEven = require('./makeGroupsEven');

module.exports = {

  createGroups: function(user, totalLunchers, groups){
    let group = [];
    shuffleLunchers = shuffle.shuffle(totalLunchers);

    shuffleLunchers.map((user) => {

      if(group.length <= 6){
        group.push(user);
      }else{
        groups.push(group);
        group = [user];
      }

    })

    groups.push(group);
    makeGroupsEven.makeGroupsEven(groups);
    console.log("=================================================================");
    console.log(groups);
    console.log("=================================================================");

  }

};
