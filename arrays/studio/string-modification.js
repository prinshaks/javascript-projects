const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//console.log(str.slice(3,10));

console.log(str.slice(0,3));
console.log(str.slice(3,10)+str.slice(0,3));




//Hint - define another variable to hold the new string or reassign the new string to str.
let str1=str.slice(3,10)+str.slice(0,3);
console.log(str1);



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`original string was:${str},New string is:${str1}`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let inputstr=input.question("please enter the string to modify: ");
//console.log(inputstr);
let numLettersRelocate=input.question("please enter number of letters to relocate: ");
//console.log(numLettersRelocate);
if (inputstr.length < numLettersRelocate){
    console.log("Number entered greater than the word length. so Number changed to 3");
    numLettersRelocate = 3;
}
let newstr=inputstr.slice(Number(numLettersRelocate))+ inputstr.slice(0,Number(numLettersRelocate));
console.log("Modified stringis:"+newstr);



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

