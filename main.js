var Subway = {
      'n': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
      'l': ['8th', '6th', 'Union Square', '3rd', '1st'],
      '6': ['Grand Central', '33rd', '6-28th', '6-23rd', 'Union Square', 'Astor Place']
  }

var start = document.getElementById('startPoint');
var end = document.getElementById('endPoint');

end.addEventListener('change', function(e){
  startIndex = Subway.n.indexOf(start.value);
  endIndex = Subway.n.indexOf(end.value);

    if(endIndex == 0){
  var result = startIndex - endIndex;
  result = Math.abs(result);
  document.getElementById('answer').innerHTML = result;

  console.log(startIndex);
  console.log(endIndex);
  console.log('result ' + result);
}
})

function changeSubway(destination) {
  var destLine
if (Subway.n.contains(destination) === true) {
  destLine = 'l';
  console.log(destLine);

}

}
