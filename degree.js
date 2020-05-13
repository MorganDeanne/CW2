var degree1 = {
  "ID": ["U-C"],
  "Name": ["Computing"],
  "Learning_outcomes": ["LO1 ", "LO2 ", "LO3 "],
  "Exit_Awards": ["EA1", "EA2", "EA3"]
}

var degree2 = {
  "ID": ["U-M"],
  "Name": ["Music"],
  "Learning_outcomes": ["LO1 ", "LO2 "],
  "Exit_Awards": ["EA1", "EA2"]
  }

  var degree3 = {
    "ID": ["P-C"],
    "Name": ["Computing"],
    "Learning_outcomes": ["LO1 ", "LO2 ", "LO3 ", "LO4"],
    "Exit_Awards": ["EA1", "EA2", "EA3", "LO4"]
    }



var outputA1 = document.getElementById('outputA1');
outputA1.innerHTML = '<b>' + degree1.ID + ' - ' + degree1.Name;
outputA2.innerHTML = 'Three Learning Outcomes: ' + degree1.Learning_outcomes;
outputA3.innerHTML = 'Three Exit Awards: ' + degree1.Exit_Awards;

var outputA4 = document.getElementById('outputA4');
outputA4.innerHTML = '<b>' + degree2.ID + ' - ' + degree2.Name;
outputA5.innerHTML = 'Three Learning Outcomes: ' + degree2.Learning_outcomes;
outputA6.innerHTML = 'Three Exit Awards: ' + degree2.Exit_Awards;

var outputA7 = document.getElementById('outputA7');
outputA7.innerHTML = '<b>' + degree3.ID + ' - ' + degree3.Name;
outputA8.innerHTML = 'Three Learning Outcomes: ' + degree3.Learning_outcomes;
outputA9.innerHTML = 'Three Exit Awards: ' + degree3.Exit_Awards;
