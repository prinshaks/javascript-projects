let idNumbers = [291, 414, 503, 599, 796, 890];
// Code your orbitCircumference function here:
function orbitCircumference(radius){
let circumference = 0;
circumference = Math.round(2*(Math.PI) * radius);
  return circumference;
}

// Code your missionDuration function here:
let orbitRadius = 2000;
let orbitalSpeed = 28000;
let numOrbits = 3;

function missionDuration(numOrbits,orbitRadius,orbitalSpeed){
let missionTime = 0;
let totDistance = 0;
totDistance = numOrbits * orbitCircumference(orbitRadius);
missionTime = Math.round((totDistance/orbitalSpeed)*100)/100;
  return missionTime;
}
console.log(`The mission will travel ${numOrbits * orbitCircumference(orbitRadius)} km around the planet, and it will take ${missionDuration(numOrbits,orbitRadius,orbitalSpeed)} hours to complete.`);
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  let index=Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate){
  let spaceTime = missionDuration(numOrbits,orbitRadius,orbitalSpeed);
  let o2used = Math.round(candidate.o2Used(spaceTime)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${spaceTime} hours and require ${o2used} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 let id = selectRandomEntry([414,796,599]);
 function selectCandidate(id){
 for(let i=0;i<crew.length;i++){
  if(id===crew[i]["astronautID"]){
    return crew[i];
  }
}
} 

console.log(oxygenExpended(selectCandidate(id)));

let mino2consume = {'id':0,'o2used':0};
let st = 0;
let o2 = 0;
st = missionDuration(numOrbits,orbitRadius,orbitalSpeed);
for(let i=0;i<crew.length;i++){
o2 = Math.round(crew[i].o2Used(st)*1000)/1000;
if(mino2consume.o2used > o2 || mino2consume.o2used == 0){
mino2consume.id = crew[i].astronautID;
mino2consume.o2used = o2;
}
}

console.log(selectCandidate(mino2consume.id));
console.log(oxygenExpended(selectCandidate(mino2consume.id)));


 