$(document).ready(function(){
console.log('the dom is loaded')

// noprotect
var mta = {
  'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'l': ['8th-l', '6th', 'us', '3rd', '1st'],
  's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};




$('select').on('change', function() {
  // var station = $('#selection').value();
  console.log($(this).children( "option:selected" ).text())
  // console.log(button)
  // console.log();
 // $("#amount1").val(number);
 // $('#balance1').html('$'+number)
 // var balance1 = $('#balance1').html();
 // checkingTotal = checkingTotal + parseInt(number);
 // $('#balance1').html('£' + checkingTotal);
});

    $('select').on('click', function(){
      $(this).attr('src', "http://placekitten.com/g/200/300");
  });






function menu() {
  var response = prompt('Welcome to MTA!!! \n(m)ta or (q)uit');
  while(response !== 'q') {
    var userInput = getUserInput();
    var tripLength = calculateStops(userInput);
    alert('Your trip length is ' + tripLength + ' stops!');
  }
}

function getUserInput() {
  var startTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
  var firstStop = prompt('Which stop: ' + mta[startTrain].join(', '));
  var stopTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
  var lastStop = prompt('Which stop: ' + mta[stopTrain].join(', '));
  return {startTrain: startTrain, 
          firstStop: firstStop,
          stopTrain: stopTrain,
          lastStop: lastStop};
}

function calculateStops(userInput) {
  return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
}

function differentLines(userInput) {
  var intersection = mta[userInput.startTrain].filter(function(stop) {
      return mta[userInput.stopTrain].indexOf(stop) != -1;
    })[0];

  var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
  var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
  var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

  var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
  var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
  var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

  return firstTripLength + lastTripLength;
}

function sameLine(userInput) {
  return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
}




})








