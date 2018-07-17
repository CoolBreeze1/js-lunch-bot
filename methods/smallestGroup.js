module.exports = {

  smallestGroup: function(groups){
    let groupLengths = [];

      for(i = 0; i < groups.length; i++){
        groupLengths.push(groups[i].length);
      };

      let minGroup = Math.min(...groupLengths);
      let groupWithLeastUsers = groupLengths.indexOf(minGroup);
      console.log(groupWithLeastUsers);
      return groups[groupWithLeastUsers];
  }

};
