module.exports = {

  shuffle: function(input){
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

};
