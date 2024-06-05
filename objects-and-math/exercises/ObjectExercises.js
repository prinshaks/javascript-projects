let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move:function(){
      return Math.floor(Math.random() * 11) ;
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move:function(){
      return Math.floor(Math.random() * 11) ;
   }
};

let SuperChimpTwo={
   name:"Brad",
   species:"chimpanzee",
   mass:11,
   age:6,
   astronautID: 3,
   move:function(){
      return Math.floor(Math.random() * 11) ;
   }
};

let Reindeer={
   name:"Leroy",
   species:"Beagle",
   mass:14,
   age:5,
   astronautID: 4,
   move:function(){
      return Math.floor(Math.random() * 11) ;
   }
};

let Tiger={
   name:"Almina",
   species:"Tardigrade",
   mass:0.0000000001,
   age:1,
   astronautID: 5,
   move:function(){
      return Math.floor(Math.random() * 11) ;
   }
};
Tiger["astronautID"]=5;



   



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object



// Create an array to hold the animal objects.
let crew=[superChimpOne,salamander,SuperChimpTwo,Reindeer, Tiger];
// Print out the relevant information about each animal.
function crewReports(animal){
   
console.log(`${animal["name"]} is a ${ animal["species"]}. They are ${animal["age"]} years old and ${ animal["mass"]} kilograms. Their ID is ${animal["astronautID"]}`)

}
crewReports(Tiger);
crewReports(Reindeer);
crewReports(superChimpOne);
crewReports(SuperChimpTwo);
crewReports(salamander);





// Start an animal race!
function fitnessTest(arr){
   let steps = 0;
   let i =0;
   let finalarr = [];
   let str= "";
   for(let j=0; j<arr.length;j++){
      steps = 0;
      i =0;
      while(steps < 20){
         steps = steps + arr[j].move();
         i++;
      }
      str = `${arr[j].name} took ${i} turns to take 20 steps.` ;  
      finalarr.push(str);
   }

   return finalarr;
}
console.log(fitnessTest(crew));