// Connor Ring Dice Roller Code
// Edited February 10th, 2015
// Version 1.2
// The program is meant to pick a die and roll the dice, picking a side based on which kind of die was selected.

var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

//Edited 'course' to be 'side' to be more in line with assignment; also spaced out each new set of sides to make the code easier to read.
var courses = { "4-Side": ['Side 1','Side 2', 'Side 3', 'Side 4'],
       	"5-Side": ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5'],
       	"6-Side": ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5', 'Side 6'],
       	"8-Side": ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5', 'Side 6', 'Side 7', 'Side 8']};
 
// As mentioned earlier, changed 'courses' to 'sides'; also made the random variable be named 'roll'
function chooseOne(sides) {
  var thisClass  = courses[sides];

  var n = thisClass.length;
  var roll = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[roll]);
}

