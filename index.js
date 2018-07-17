const SlackBot = require('slackbots');
let handleMessage = require('./methods/handleMessage');
const axios = require('axios');



const bot = new SlackBot({
  token: '',
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

  handleMessage.handleMessage(data.text, data.user);
});

// Respond to data
// Going to be refactored to use switch case statement
// function handleMessage(message, user){
//
//   //Command to start the bot
//   if(!botIsActive && message.includes(' Start')){
//
//     botIsActive = true;
//     whoIsGoing();
//
//   // bot recording and working with user response
//   // Yes response adds user to array
//   }else if(botIsActive && message.includes(' Yes')){
//
//     yesResponse(user);
//
//   // No response removes user who has already been added to array
//   }else if(botIsActive && message.includes(' No')){
//
//     removeUserFromArray(user);
//
//   // Command to stop the bot
//   }else if(botIsActive && message.includes(' Help')){
//
//     helperFunction();
//
//   }else if(botIsActive && message.includes(' Stop')){
//
//     botIsActive = false;
//     createGroups(totalLunchers);
//     displayGroups();
//
//     const params = {
//       icon_emoji: ':pizza:'
//     };
//
//     bot.postMessageToChannel(
//       'general',
//       "Hey <!channel>! The lunch list is now complete and we are now creating our groups!",
//       params
//     );
//
//     bot.postMessageToChannel(
//       'general',
//       "Hey <!channel>! Here are the groups - " + displayGroupsToUsers,
//       params
//     );
//
//
//
//   }
// }

// All Methods to be added into separate folder and files
function whoIsGoing(){
  const params = {
    icon_emoji: ':pizza:'
  };

  bot.postMessageToChannel(
    'general',
    "Hey <!channel>, If you are going to lunch with the group today, reply  'Yes'  and you will be added to the list! :grin: :pizza:",
    params
  );
};

function yesResponse(user){
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
    addUserToArray(user);
  }
}

//Adding the users to our array of everyone going to lunch
function addUserToArray(user){
  let array = totalLunchers;

  array.push(user);
  console.log(totalLunchers);
}

function removeUserFromArray(user){
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
};

function createGroups(totalLunchers){
  let group = [];
  shuffleLunchers = shuffle(totalLunchers);

  shuffleLunchers.map((user) => {


    if(group.length <= 6){
      group.push(user);
    }else{
      groups.push(group);
      group = [user];
    }
  })
  groups.push(group);
  makeGroupsEven(groups);
  console.log("=================================================================");
  console.log(groups);
  console.log("=================================================================");

}

function makeGroupsEven(groups){
  //loop through all single groups
  let bigGroup = biggestGroup();
  let smallGroup = smallestGroup();

  while((bigGroup.length !== smallGroup.length) && (bigGroup.length - smallGroup.length) >= 2 ){
    let a = bigGroup.pop();
      smallGroup.push(a);
      bigGroup = biggestGroup();
      smallGroup = smallestGroup();
      console.log(groups);
  };
}

function biggestGroup(){
let groupLengths = [];

  for(i = 0; i < groups.length; i++){
    groupLengths.push(groups[i].length);
  };

  let maxGroup = Math.max(...groupLengths);
  let groupWithMostUsers = groupLengths.indexOf(maxGroup);
  console.log(groupWithMostUsers);
  return groups[groupWithMostUsers]
};

function smallestGroup(){
  let groupLengths = [];

    for(i = 0; i < groups.length; i++){
      groupLengths.push(groups[i].length);
    };

    let minGroup = Math.min(...groupLengths);
    let groupWithLeastUsers = groupLengths.indexOf(minGroup);
    console.log(groupWithLeastUsers);
    return groups[groupWithLeastUsers];
};


function shuffle(input){
	for(var i = input.length-1; i >=0; i--){

		var randomIndexNumber = Math.floor(Math.random()*(i+1));
		var currentItem = input[randomIndexNumber];

    //our arr with a random index number
		input[randomIndexNumber] = input[i];
    //
		input[i] = currentItem;
    }
	return input;
}

function displayGroups(){
  for(i = 0; i < groups.length; i++){
    var group = "Group " + i;
    var groupName = " - " + groups[i] + " - ";
    var groupLeader = groups[i][0]
    displayGroupsToUsers.push(group, groupName, groupLeader);
  }
};

function helperFunction(){

  const params = {
    icon_emoji: ':man-shrugging:'
  };

  bot.postMessageToChannel(
    'general',
    "Call me `@lunch-bot` with command 'Yes' to be added to the groups of people going for lunch. Call me `@lunch-bot` with command 'No' to be removed from the list of people going to lunch if you have already been added ",
    params
  );

}
