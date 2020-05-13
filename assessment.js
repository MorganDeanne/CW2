
var assess1 = {
    "Module":['Web Developement'],
    "Learning_outcomes":["LO1", "LO2"],
    "Assignment":["CW1", "CW2"],
    "Volume":["1000 words", "4000 words"],
    "weights":["20%", "80%"]
  }

var assess2 = {
  "Module":['Big Data'],
  "Learning_outcomes":["LO1", "LO2"],
  "Assignment":["CW1", "CW2"],
  "Volume":["2000 words", "3000 words"],
  "weights":["40%", "60%"]
}

var assess3 = {
  "Module":['Data Mining'],
  "Learning_outcomes":["LO1", "LO2"],
  "Assignment":["CW1", "CW2"],
  "Volume":["1000 words", "5000 words"],
  "weights":["30%", "70%"]

  }

var outputA1 = document.getElementById('outputA1');
outputA1.innerHTML = '<b>' + assess1.Assignment[0] + ' - ' + assess1.Module;
outputA2.innerHTML = assess1.Learning_outcomes[0];
outputA3.innerHTML = assess1.Volume[0];
outputA4.innerHTML = assess1.weights[0];

var outputB1 = document.getElementById('outputB1');
outputB1.innerHTML = '<b>' + assess1.Assignment[1] + ' - ' + assess1.Module;
outputB2.innerHTML = assess1.Learning_outcomes[1];
outputB3.innerHTML = assess1.Volume[1];
outputB4.innerHTML = assess1.weights[1];


var outputA5 = document.getElementById('outputA5');
outputA5.innerHTML = '<b>' + assess2.Assignment[0] + ' - ' + assess2.Module;
outputA6.innerHTML = assess2.Learning_outcomes[0];
outputA7.innerHTML = assess2.Volume[0];
outputA8.innerHTML = assess2.weights[0];

var outputB5 = document.getElementById('outputB5');
outputB5.innerHTML = '<b>' + assess2.Assignment[1] + ' - ' + assess2.Module;
outputB6.innerHTML = assess2.Learning_outcomes[1];
outputB7.innerHTML = assess2.Volume[1];
outputB8.innerHTML = assess2.weights[1];


var outputA = document.getElementById('outputA9');
outputA9.innerHTML = '<b>' + assess3.Assignment[0] + ' - ' + assess3.Module;
outputA10.innerHTML = assess3.Learning_outcomes[0];
outputA11.innerHTML = assess3.Volume[0];
outputA12.innerHTML = assess3.weights[0];

var outputB9 = document.getElementById('outputB9');
outputB9.innerHTML = '<b>' + assess3.Assignment[1] + ' - ' + assess3.Module;
outputB10.innerHTML = assess3.Learning_outcomes[1];
outputB11.innerHTML = assess3.Volume[1];
outputB12.innerHTML = assess3.weights[1];
