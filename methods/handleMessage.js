let whoIsGoing = require('./whoIsGoing');
let yesResponse = require('./yesResponse');
let removeUserFromArray = require('./removeUserFromArray');
let helperFunction = require('./helperFunction');
let createGroups = require('./createGroups');
let displayGroups = require('./displayGroups');
let date = require('date-and-time');
let botIsActive = false;


module.exports = {

  handleMessage: function(message, user, bot, totalLunchers, groups, displayGroupsToUsers){
  //Command to start the bot
    if(!botIsActive && message.includes(' Start')){

      botIsActive = true;
      whoIsGoing.whoIsGoing(bot);
      console.log(botIsActive);

  // bot recording and working with user response
  // Yes response adds user to array
    }else if(botIsActive && message.includes(' Yes')){

      yesResponse.yesResponse(bot, user, totalLunchers);

  // No response removes user who has already been added to array
    }else if(botIsActive && message.includes(' No')){

      removeUserFromArray.removeUserFromArray(bot, user, totalLunchers);

  // Command to stop the bot
    }else if(botIsActive && message.includes(' Help')){

      helperFunction.helperFunction(bot);

    }else if(botIsActive && message.includes(' Stop')){

      botIsActive = false;
      createGroups.createGroups(user, totalLunchers, groups);
      displayGroups.displayGroups(groups, displayGroupsToUsers);

      const params = {
        icon_emoji: ':pizza:'
      };

      bot.postMessageToChannel(
        'general',
        "Hey <!channel>! We have now stopping and creating groups for lunch!  Here are the groups - " + displayGroupsToUsers,
        params
      );
    }
  }
};
