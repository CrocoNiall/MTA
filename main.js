var Subway = {
      'n': ['N-Times Square', 'N-34th', 'N-28th', 'N-23rd', 'Union Square', 'N-8th'],
      'l': ['L-8th', 'L-6th', 'Union Square', 'L-3rd', 'L-1st'],
      'six' : ['6-Grand Central', '6-33rd', '6-28th', '6-23rd', 'Union Square', '6-Astor Place']
  }
var destinationLine;
var start = document.getElementById('startPoint');
var end = document.getElementById('endPoint');

end.addEventListener('change', function(e){
  startIndex = Subway.n.indexOf(start.value);
  endIndex = Subway.n.indexOf(end.value);

  var result = startIndex - endIndex;
  result = Math.abs(result);
  document.getElementById('answer').innerHTML = result;
  checkLine(end);
  console.log(startIndex);
  console.log(endIndex);
  console.log('result ' + result);

});

function checkLine(location){
  line = location.value.slice(0,1).toLowerCase();
console.log(line);
  }


