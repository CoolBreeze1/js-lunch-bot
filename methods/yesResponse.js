let addUserToArray = require('./addUserToArray');

module.exports = {

  yesResponse: function(bot, user, totalLunchers){

    const params = {
      icon_emoji: ':pizza:'
    };

    if (totalLunchers.includes(user)){
      bot.postMessageToChannel(
        'general',
        "Hey <@" + user + "> You have already been added to the list! :thumbsup:",
        params
      );
      return;
    }else{
      // If the user has already replied with "Yes" then they will be notified
      bot.postMessageToChannel(
        'general',
        "Hey <@" + user + "> You have been added to the list! You excited??",
        params
      );
        addUserToArray.addUserToArray(user, totalLunchers);
    }
  }

};
