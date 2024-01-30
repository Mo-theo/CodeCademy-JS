// Creates a function to switch between the days of the week
const getSleepHours = (day) => {

  switch (day){
   case "monday":
   return 8;
   break;
   case "tuesday":
   return 7;
   break;
   case "wednesday":
   return 8;
   break;
   case "thursday":
   return 6;
   break;
   case "friday":
   return 7;
   break;
   case "saturday":
   return 11;
   break;
   case "sunday":
   return 8;
   break;
   default: 
   return "Error! Type a day of the week.";
   break;
  }
}
// Creates a function to calculate the actual sleep hours
const getActualSleepHours = () => {
 return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday")+ getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday")+ getSleepHours("sunday");
}

// Calculates the ideal sleep hours
const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours*7;
}
// Calculates your sleep debt and logs it to the console
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let difSleepHours = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours){
    console.log(`You've got the perfect amount of sleep. Your "sleep debt" is of ${difSleepHours} hours!`)
  } else if (actualSleepHours > idealSleepHours){
    console.log(`It seems like you've been sleeping a lot. Your "sleep credit" is of ${difSleepHours} hour(s)! But be aware that getting less sleep in one day will not solve your problem!`)
  } else if (actualSleepHours < idealSleepHours){
    console.log(`It seems like you haven't been sleeping enough, you should get some rest. Your "sleep debt" is of ${difSleepHours} hour(s)! But be aware that getting more sleep in one day will not solve your problem!`)
  }
}
// Calls the function
calculateSleepDebt();
