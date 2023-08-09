const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
// Given array and object
var players = [...]; // Your array of players
var person = {...};  // Your person object

// Create variables to store references and copies
var team = players;     // Store a reference to the players array
var team1 = [...players]; // Create a copy of the players array using the spread operator
var cap1 = {...person};  // Create a copy of the person object using the spread operator

