module.exports = {

  helperFunction: function(bot){

    const params = {
      icon_emoji: ':man-shrugging:'
    };

    bot.postMessageToChannel(
      'general',
      "Call me `@lunch-bot` with command 'Yes' to be added to the groups of people going for lunch. Call me `@lunch-bot` with command 'No' to be removed from the list of people going to lunch if you have already been added ",
      params
    );

  }

};
