// Sets the variable "kelvin" to 293
let kelvin = 293;
// Converts kelvin into celsius
let celsius = kelvin-273;
// Converts celsius into fahrenheit
let fahrenheit = celsius*(9/5)+32;
//Rounds the fahrenheit result
fahrenheit = Math.floor(fahrenheit);
//Logs the temperature into the console
console.log(`The temperature is approximately ${fahrenheit} degrees Fahrenheit`);
//Sets the "newton" variable, rounds the number and log the temperature into the console
let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is approximately ${newton} degrees Newton`);
