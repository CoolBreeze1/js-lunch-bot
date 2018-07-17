module.exports = {

  displayGroups: function(groups, displayGroupsToUsers){
    for(i = 0; i < groups.length; i++){
      var group = "Group " + i;
      var groupName = " - " + groups[i] + " - ";
      var groupLeader = groups[i][0]
      displayGroupsToUsers.push(group, groupName, groupLeader);
    }
  }

};
