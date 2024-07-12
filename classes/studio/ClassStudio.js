//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name,mass,scores){
        this.name=name;
        this.mass=mass
        this.scores=scores;

    }
    addScore(newscore){
        this.scores.push(newscore);
    }
    averageScore(){
        let sum=0;
        let avg=0;
        
        for(let i=0;i<this.scores.length;i++){
            sum=sum+this.scores[i];
        }
        avg=(Math.round((sum/this.scores.length)*10))/10;
        return avg;
    }
    status(){
        let candidatestatus="";
        let avgScore = this.averageScore();
        if(avgScore>=90){
            candidatestatus="Accepted";
        }
        else if(avgScore >= 80 && avgScore < 90){
            candidatestatus="Reserve";
         }
         else if(avgScore >= 70 && avgScore < 80){
            candidatestatus="Probationary";
         }
         else {
            candidatestatus="Rejected";
         }                  
         return candidatestatus; 
    }
    
}
let bubbabear = new CrewCandidate('bubbabear',135,[88,85,90]);
bubbabear.addScore(83);
console.log(bubbabear.scores);
let Merrymaltese = new CrewCandidate('Merrymaltese',1.5,[93,88,97]);

let Gladgator  = new CrewCandidate('Gladgator',225,[75,78,62]);


console.log(bubbabear);
console.log(Merrymaltese);
console.log(Gladgator);




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(bubbabear.averageScore());
console.log(Merrymaltese.averageScore());
console.log(Gladgator.averageScore());

 console.log(`${bubbabear.name} earned an average test score of ${bubbabear.averageScore()}% and has a status of ${bubbabear.status()}.`);
 console.log(`${Merrymaltese.name} earned an average test score of ${Merrymaltese.averageScore()}% and has a status of ${Merrymaltese.status()}.`);
 console.log(`${Gladgator.name} earned an average test score of ${Gladgator.averageScore()}% and has a status of ${Gladgator.status()}.`);



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let additionaltests = 0;
while(Gladgator.status()!= 'Reserve'){
    Gladgator.addScore(100);
    additionaltests = additionaltests + 1;
}
console.log(`${Gladgator.name} needs ${additionaltests} tests to reach Reserve status`);

while(Gladgator.status()!= 'Accepted'){
    Gladgator.addScore(100);
    additionaltests = additionaltests + 1;
}
console.log(`${Gladgator.name} needs ${additionaltests} tests to reach Accepted status`);