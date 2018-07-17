

module.exports = {

  whoIsGoing: function(bot){
    const params = {
      icon_emoji: ':pizza:'
    };

    bot.postMessageToChannel(
      'general',
      "Hey <!channel>, If you are going to lunch with the group today, reply  'Yes'  and you will be added to the list! :grin: :pizza:",
      params
    );
  }

};
