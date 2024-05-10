let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArr = food.split(",").sort();
let equipmentArr = equipment.split(",").sort();
let petsArr = pets.split(",").sort();
let sleepAidsArr = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHoldArr = [];
cargoHoldArr.push(foodArr);
cargoHoldArr.push(equipmentArr);
cargoHoldArr.push(petsArr);
cargoHoldArr.push(sleepAidsArr);
console.log(cargoHoldArr);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let selectCabinet = input.question("Please select a cabinet (0-3)");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (Number(selectCabinet) <= 3 && Number(selectCabinet) >=0){
    console.log(`Your selected cabinet is ${cargoHoldArr[selectCabinet]}`);
}
else{
    console.log("Invalid Entry");
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selectitem = input.question("Please select an item from the list:" + cargoHoldArr[selectCabinet] + ": ");
let selectedItem = "";
selectedItem = cargoHoldArr[selectCabinet];
if (selectedItem.includes(selectitem)){
    console.log(`Cabinet ${cargoHoldArr[selectCabinet]} DOES contain ${selectitem}.`);
} else {
    console.log(`Cabinet ${cargoHoldArr[selectCabinet]} DOES NOT contain ${selectitem}.`);
}
