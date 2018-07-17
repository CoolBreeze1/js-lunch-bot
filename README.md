# js-lunch-bot

**How To Use**
-------------

Clone the git repository.<br>
`npm install` to install all the dependencies with the repo.


---------------

Create a slack bot app
---------------
Within your slack groups, below your contact list, click `Apps`. <br>
<br>
You will be taken to a new screen. Click the `Manage Apps` button in the top left corner. <br>
<br>
Looking to the top right of the screen, click `Build` and follow the instructions. <br> 
<br>
Once you have created your app, you need to go to `Your Apps`.<br>

<br>
Go into `OAuth & Permissions` down the left side menu. <br>|
<br>
in here is where you can `copy` your `Bot User OAuth Access Token` and paste it into the index.js file where it says `token:` where the bot is instantiated.


----------------

Running the Bot
----------------

Once the bot token has been added and you are in the directory in the terminal run- <br>
<br>
to run the app - `node index.js`<br>
<br>
<br>
This will start the node server and the bot will be live. You can now run commands to the bot.<br>
<br>

`@yourBotName Start` will start the bot.<br>
<br>
`@yourBotName Yes` will add the user to an array for going to lunch. If user is already on the list, the bot will let them know<br>
<br>
`@yourBotName No` the user will be removed from the array.<br>
<br>
`@yourBotName Help` the bot will print a list of commands letting the user know how to proceed.<br>
<br>
`@yourBotName Stop` the bot will stop allowing users to be added to the array and break the array down into even,<br>
random groups and apoint a random leader for every group.<br>
The groups with the groups leaders will be posted back into the channel.
To run the test - `npm run test`<br>
<br>
