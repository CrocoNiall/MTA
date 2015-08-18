//sets up Subway Obk

var Subway = {
      'n': ['N-Times Square', 'N-34th', 'N-28th', 'N-23rd', 'Union Square', 'N-8th'],
      'l': ['L-8th', 'L-6th', 'Union Square', 'L-3rd', 'L-1st'],
      'six' : ['S-Grand Central', 'S-33rd', 'S-28th', 'S-23rd', 'Union Square', 'S-Astor Place']
  }
//init global var's

var line;
var change = false;
var distanceToU;
var distanceFromU;
var result;
var start = document.getElementById('startPoint');
var end = document.getElementById('endPoint');

//add event listeners

end.addEventListener('change', function(e){

//uses the checkLine() function to calculate the correct start array index, uses it to celculate distance from 'Upton Union Square' then uses .abs to make the num absolout. 

  switch (checkLine(start)) {
  case "l":
    console.log("line l selected.");
    startIndex = Subway.l.indexOf(start.value);
    distanceToU = startIndex - Subway.l.indexOf('Union Square');
    distanceToU = Math.abs(distanceToU);
    console.log('change ' + distanceToU);
    break;

  case "n":
    console.log("line N selected.");
    startIndex = Subway.n.indexOf(start.value);
    distanceToU = startIndex - Subway.n.indexOf('Union Square');
    distanceToU = Math.abs(distanceToU);
    console.log('change ' + distanceToU);
    break;

  case "s":
    console.log("line six selected.");
    startIndex = Subway.six.indexOf(start.value);
    distanceToU = startIndex - Subway.six.indexOf('Union Square');
    distanceToU = Math.abs(distanceToU);
    console.log('change ' + distanceToU);
    break;

  case "u":
    console.log("traveling from Union Square.");
    startIndex = Subway.six.indexOf(start.value);
    distanceToU = 0;
    console.log('you dont need to change');
    break;

  default:
    console.log("Sorry, we dont know that line");
  }


//uses the checkLine() function to calculate the correct end array index, uses it to celculate distance from 'Upton Union Square' then uses .abs to make the num absolout. 

    switch (checkLine(end)) {
  case "l":
    console.log("line l selected end.");
    endIndex = Subway.l.indexOf(end.value);
    distanceFromU = endIndex - Subway.l.indexOf('Union Square');
    distanceFromU = Math.abs(distanceFromU);
    console.log('then ' + distanceFromU);
    break;

  case "n":
    console.log("line N selected end.");
    endIndex = Subway.n.indexOf(end.value);
    distanceFromU = endIndex - Subway.n.indexOf('Union Square');
    distanceFromU = Math.abs(distanceFromU);
    console.log('then ' + distanceFromU);
    break;

  case "s":
    console.log("line six selected end.");
    endIndex = Subway.six.indexOf(end.value);
    distanceFromU = endIndex - Subway.six.indexOf('Union Square');
    distanceFromU = Math.abs(distanceFromU);
    console.log('then ' + distanceFromU);
    break;

  case "u":
    console.log("traveling to Union Square.");
    endIndex = Subway.six.indexOf(end.value);
    distanceFromU = 0;
    console.log('you dont need to change');
    break;

  default:
    console.log("Sorry, we dont know that line end");
  }

  //attempts to recognice if journey is carried out on same line or not, allocated the appropriate result 

  if (checkLine(start) == checkLine(end)) {
    result = startIndex - endIndex;
    result = Math.abs(result);

  } else if(checkLine(start) !== checkLine(end) && (checkLine(start) !== 'u')) {
    change = true;
    console.log('you need to change at Union Square')
    result = 'Ride tube for ' + distanceToU + ' stops. Then change to ' + checkLine(end) + " line, and get off after " + distanceFromU + ' stops.';

  } else if (checkLine(start) === 'u') {
    result = 'Ride the ' + checkLine(end) + ' line for ' + distanceFromU + ' stops.';

  } else if (startIndex && endIndex === 4) {
    result = 'You are at the right place, you dont need to get any tube, ideot.';

  } 

//assigns result if var result === 0 (destination and location are the same)
if (result === 0) {
  result = 'You are at the right place, you dont need to get any tube, ideot.'
} 
  document.getElementById('answer').innerHTML = result;
  checkLine(end);
  console.log(startIndex);
  console.log(endIndex);
  console.log('result ' + result);

});

//this function takes tha argument 'location' and identifies and returns its given line using slice()

function checkLine(location){
  line = location.value.slice(0,1).toLowerCase();
  return line;
  }


