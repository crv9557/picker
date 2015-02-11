// Connor Ring Dice Roller Code
// Edited February 10th, 2015
// Version 1.1
// The idea is to change this program from picking names to picking numbers of a dice.

var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

//Edited 'course' to be 'side' to be more in line with assignment; also spaced out each new set of sides to make the code easier to read.
var courses = { "4-Side": ['Craig Austgen','Daniel Davis','Benjamin Davisson','William Decker','Zachary Dickinson','Katie Harold','Eric Heinzman','Phillip Hofer','Troy Key','Andrew Klump','Kyle Lowtharp','Collin Mullis','Gabriel Perez','Ryan Postma','Kevin Regner','Andrew Ribicki','Connor Ring','Nathan Samano','Griffin Scott','Jared Smith'],
       	"5-Side": ['Thaddeus Albert','Dan Amador','Bruce Anderson','Zachary Aring','Benjamin Davisson','Jace Horner','Carl Jones','Kyle Lowtharp','Declan McCarron','Collin Mullis','Yemi Ogunbameru','Andrew Ribicki','Christian Sexton','Houston Shimala','Ryan Slipher','Jared Smith','Ashlee Troop'],
       	"6-Side": ['Craig Austgen','Daniel Davis','Dylan Gainey','Lucas Grube','Eric Heinzman','Katelyn Herre','Phillip Hofer','Andrew Klump','Ryan Postma','Nathan Samano','Danilo Zekovic'],
       	"8-Side": ['Craig Austgen','Lucas Grube','Eric Heinzman','Phillip Hofer','Nathan Samano','Danilo Zekovic']};
 
// As mentioned earlier, changed 'courses' to 'sides'; also made the random variable be named 'roll'
function chooseOne(sides) {
  var thisClass  = courses[sides];

  var n = thisClass.length;
  var roll = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[roll]);
}

