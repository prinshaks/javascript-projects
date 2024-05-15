//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');
let fuelLevel = 0;
let numAstronauts = 0;
let  altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  let x = input.question("Please enter the starting fuel level: ");
fuelLevel = Number(x);
  while (fuelLevel <= 5000 || fuelLevel >= 30000 || isNaN(x)) {
    console.log("fuel level cannot be less than or equal to 5000 or greater than or equal to 30000");
    x = input.question("Please enter the starting fuel level: ");
fuelLevel = Number(x);
 }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
let y = input.question("Please enter the number of astronauts: ");
numAstronauts = Number(y); 
while (numAstronauts < 1 || numAstronauts > 7 || isNaN(y)) {
  console.log("Number of astronauts cannot be greater than 7");
  y = input.question("Please enter the number of astronauts: ");
numAstronauts = Number(y); 
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel-100*numAstronauts >= 0) {
  altitude = altitude + 50;
  fuelLevel = fuelLevel - 100*numAstronauts;
  }

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("The shuttle gained an altitude of "+ altitude+" km.");
if(altitude>=2000){console.log("Orbit achieved!");

}else{
  console.log("Failed to reach orbit.");
}


