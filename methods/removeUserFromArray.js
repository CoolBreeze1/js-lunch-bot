module.exports = {

  removeUserFromArray: function(bot, user, totalLunchers){
    const params = {
      icon_emoji: ':pizza:'
    };

    let array = totalLunchers;
    array1 = array.filter(e => e !== user);
    totalLunchers = array1;

    bot.postMessageToChannel(
      'general',
      "Hey <@" + user + "> You have been removed from the list, boooo :thumbsdown:",
      params
    );
    console.log(totalLunchers);
  }

};
