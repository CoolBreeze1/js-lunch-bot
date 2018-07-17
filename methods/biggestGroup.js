module.exports = {

  biggestGroup: function(groups){
    let groupLengths = [];

    for(i = 0; i < groups.length; i++){
      groupLengths.push(groups[i].length);
    };

    let maxGroup = Math.max(...groupLengths);
    let groupWithMostUsers = groupLengths.indexOf(maxGroup);
    console.log(groupWithMostUsers);
    return groups[groupWithMostUsers]
  }
};
