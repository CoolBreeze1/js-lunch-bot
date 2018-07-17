
module.exports = {


  handleMessage: function(message, user){
    let botIsActive = false;
  //Command to start the bot
    if(!botIsActive && message.includes(' Start')){

      botIsActive = true;
      whoIsGoing();

  // bot recording and working with user response
  // Yes response adds user to array
    }else if(botIsActive && message.includes(' Yes')){

      yesResponse(user);

  // No response removes user who has already been added to array
    }else if(botIsActive && message.includes(' No')){

      removeUserFromArray(user);

  // Command to stop the bot
    }else if(botIsActive && message.includes(' Help')){

      helperFunction();

    }else if(botIsActive && message.includes(' Stop')){

      botIsActive = false;
      createGroups(totalLunchers);
      displayGroups();

      const params = {
        icon_emoji: ':pizza:'
      };

      bot.postMessageToChannel(
        'general',
        "Hey <!channel>! The lunch list is now complete and we are now creating our groups!",
        params
      );

      bot.postMessageToChannel(
        'general',
        "Hey <!channel>! Here are the groups - " + displayGroupsToUsers,
        params
      );
    }
  }
};
