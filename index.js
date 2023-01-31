let quotes = [
  "With great power comes great responsibility. -Uncle Ben from Spiderman",
  "One small step for man, one giant leap for mankind. -Neil Armstrong",
  "Behind every great man is a woman rolling her eyes. -Jim Carrey",
];

//returns random number from 0 to 2:
//Math.floor(Math.random() * 3);
//create a function that chooses a random quote
function quoteApp() {
  let num = Math.floor(Math.random() * 3);
  console.log(quotes[num]);
}
//call the function to run
quoteApp();
