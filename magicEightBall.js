let userName = "Theo";
// Logs the greeting into the console
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// Sets the user question variable
const userQuestion = "Will I learn JS quickly?";
// Logs the question into the console
console.log(`${userName} has asked "${userQuestion}"`);
// Sets a random number in order to decide an answer
let randomNumber = Math.floor(Math.random() * 8);
// Declares the eightBall variable
let eightBall =""
// Instead of using else if, uses switch to decide on the answer based on the randomNumber variable
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  }
// Logs the answer to the question into the console
console.log(eightBall);
