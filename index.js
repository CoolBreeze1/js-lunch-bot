const SlackBot = require('slackbots');
const axios = require('axios');
let handleMessage = require('./methods/handleMessage');



const bot = new SlackBot({
  token: 'BOT-TOKEN-GOES-HERE',
  name: 'lunch-bot'
});

  let totalLunchers = ["sam1","sam2","sam3","sam4","sam5","sam6","sam7","sam8","sam9","sam10","sam11","sam12","sam13","sam14","sam15"];
  let groups = [];
  let displayGroupsToUsers = [' '];


//Start Handler
bot.on('start', () => {
  console.log("-----------------------------------------------------------------");
  console.log("bot is online....");
  console.log("-----------------------------------------------------------------");
});

// Error Handler
bot.on('error', (err) => console.log(err));

//Message Handler
bot.on('message', (data) => {
  if(data.type !== 'message') {
    return;
  };

  handleMessage.handleMessage(data.text, data.user, bot, totalLunchers, groups, displayGroupsToUsers);
});
