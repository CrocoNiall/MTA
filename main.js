var Subway = {
      'n': ['N-Times Square', 'N-34th', 'N-28th', 'N-23rd', 'Union Square', 'N-8th'],
      'l': ['L-8th', 'L-6th', 'Union Square', 'L-3rd', 'L-1st'],
      'six' : ['6-Grand Central', '6-33rd', '6-28th', '6-23rd', 'Union Square', '6-Astor Place']
  }
var line;
var change = false;
var distanceToU;
var distanceFromU;
var result;
var start = document.getElementById('startPoint');
var end = document.getElementById('endPoint');

end.addEventListener('change', function(e){
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

  default:
    console.log("Sorry, we dont know that line");
  }

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

  default:
    console.log("Sorry, we dont know that line end");
  }



  //startIndex = Subway.n.indexOf(start.value);
  //endIndex = Subway.n.indexOf(end.value);



  if (checkLine(start) == checkLine(end)) {

   result = startIndex - endIndex;
    result = Math.abs(result);
  } else if(checkLine(start) !== checkLine(end)) {
    change = true;
    console.log('you need to change at Union Square')
    result = 'Ride tube for ' + distanceToU + ' stops. Then change to ' + checkLine(end) + " line, and get off after " + distanceFromU + ' stops.';

  }




  document.getElementById('answer').innerHTML = result;
  checkLine(end);
  console.log(startIndex);
  console.log(endIndex);
  console.log('result ' + result);

});

function checkLine(location){
  line = location.value.slice(0,1).toLowerCase();
  console.log(line);
  return line;
  }


