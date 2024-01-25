// Defines the number of the runner
let raceNumber = Math.floor(Math.random() * 1000);
// Defines if the runner registered early
let earlyRegistration = false;
// Defines the runner's age
let runnersAge = 18;
// Control flow that adds 1000 to the race number if the runner's an adult and registered early
if (earlyRegistration && runnersAge > 18){
  raceNumber += 1000;
}
// Control flow that logs into the console the race number and time according to the conditions required
if (earlyRegistration && runnersAge > 18){
  console.log(`Runner, congratulations on registering. Your race number is ${raceNumber} and your race starts at 9:30 am.`);
} 
else if (!earlyRegistration && runnersAge > 18){ 
  console.log (`Runner, congratulations on registering. Your race number is ${raceNumber} and yout race starts at 11:00 am.`);
}
else if (runnersAge <= 18){
  console.log (`Runner, congratulations on registering. Your race number is ${raceNumber} and yout race starts at 12:30 am.`);
}
else{
  console.log ("Runner, please approach the registration desk!");
}
