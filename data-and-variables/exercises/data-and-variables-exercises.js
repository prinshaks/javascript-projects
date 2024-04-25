// Declare and assign the variables below
let nameOfTheSpaceShuttle="determination";
let shuttleSpeedmph=17500;
let distanceToMarskm=225000000;
let distanceToTheMoonkm=384400;
let milesPerKilometer=0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(nameOfTheSpaceShuttle));
console.log(typeof(shuttleSpeedmph));
console.log(typeof(distanceToMarskm));
console.log(typeof(distanceToTheMoonkm));
console.log(typeof(milesPerKilometer));

// Calculate a space mission below
let milesToMars=distanceToMarskm*milesPerKilometer;
let hoursToMars=milesToMars/shuttleSpeedmph;
let daysToMars=hoursToMars/24;


// Print the results of the space mission calculations 
console.log(nameOfTheSpaceShuttle+" will take "+ daysToMars +" days to reach mars");


// Calculate a trip to the moon below
let milesToMoon=distanceToTheMoonkm*milesPerKilometer;
let hoursToMoon=milesToMoon/shuttleSpeedmph;
let daysToMoon=hoursToMoon/24;



// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle+" will take "+daysToMoon+" days to reach the moon");