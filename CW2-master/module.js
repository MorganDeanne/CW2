var module1 = {
  "Name": "Undergraduate",
  "Course":"Web Development",
  "Module": {
    "Hours":["36"],
    "Credits":["20"],
    "Learning_outcomes":["LO1", "LO2"],
    "Assignment":["CW1", "CW2"],
    "Volume":["1000 words", "4000 words"],
    "weights":["20%", "80%"]
  }
}

var module2 = {
  "Name": "Post-Graduate",
  "Course":"Big Data",
  "Module": {
  "Hours":["42"],
  "Credits":["20"],
  "Learning_outcomes":["LO1", "LO2"],
  "Assignment":["CW1", "CW2"],
  "Volume":["1000 words", "4000 words"],
  "weights":["20%", "80%"]
  }
}

var module3 = {
    "Name": "Research",
    "Course":"Data Mining",
    "Module": {
      "Hours":["38"],
      "Learning_outcomes":["LO1", "LO2"],
      "Assignment":["CW1", "CW2"],
      "Volume":["1000 words", "4000 words"],
      "weights":["20%", "80%"]
    }

  }

var output1 = document.getElementById('output1');
output1.innerHTML = '<b>' + module1.Course;
output2.innerHTML = module1.Module.Hours + ' Hours';
output3.innerHTML = module1.Module.Credits + ' Credits';
output4.innerHTML = module1.Module.Assignment[0] + ' and ' + module1.Module.Assignment[1];

var outputA = document.getElementById('outputA');
outputA.innerHTML = '<b>' + module2.Course;
outputB.innerHTML = module2.Module.Hours + ' Hours';
outputC.innerHTML = module2.Module.Credits + ' Credits';
outputD.innerHTML = module2.Module.Assignment[0] + ' and ' + module2.Module.Assignment[1];

var output5 = document.getElementById('output5');
output5.innerHTML = '<b>' + module3.Course;
output6.innerHTML = module3.Module.Hours + ' Hours';
output7.innerHTML = module3.Module.Credits + ' Credits';
output8.innerHTML = module3.Module.Assignment[0] + ' and ' + module3.Module.Assignment[1];
