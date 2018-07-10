const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: '',
  name: 'lunch-bot'
});

const totalLunchers = [];

//Start Handler
bot.on('start', () => {
  console.log("-----------------------------------------------------------------");
  console.log("Server has started & bot is online....");
  console.log("-----------------------------------------------------------------");
});

// Error Handler
bot.on('error', (err) => console.log(err));

//Message Handler
bot.on('message', (data) => {
  if(data.type !== 'message') {
    return;
  };

 handleMessage(data.text, data.user);

});

// Respond to data
function handleMessage(message, user){
  const params = {
    icon_emoji: ':pizza:'
  };

  if(message.includes(' Start')){
    bot.postMessageToChannel(
      'general',
      "Hey <!channel>, If you are going to lunch with the group today, reply  'Yes'  and you will be added to the list! :grin: :pizza:",
      params
    );
  }else if(message.includes(' Yes')){
    bot.postMessageToChannel(
      'general',
      "Hey <@" + user + "> You have been added to the list! you excited??",
      params
    );
    addUserToArray(user);
  };
}

// function addUserToArray(user){
//   if(totalLunchers.includes(user)){
//     bot.postMessageToChannel(
//       'general',
//       "Hey <@" + user + ">, you are already on the list buddy! :grin: ",
//     );
//     return;
//   }else{
//   var array = totalLunchers;
//   array.push(user);
//   console.log(totalLunchers);
//   }
// }




// Useful code for testing things

// console.log("-------------------------------------------------------------")
// console.log(data.user)
// console.log("-------------------------------------------------------------")
