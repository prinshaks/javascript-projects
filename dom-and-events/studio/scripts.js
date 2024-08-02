// Write your JavaScript code here.
window.addEventListener("load",function(){
    let rocket=document.getElementById("rocket");  
    let takeOff=document.getElementById("takeoff");
    let shuttleBackground=document.getElementById("shuttleBackground");
    takeOff.addEventListener("click",function (){
        
        let result=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result==true){
            document.getElementById("flightStatus").innerHTML="Shuttle in flight";
            // let shuttleBackground=document.getElementById("shuttleBackground");
            rocket.style.top = (parseInt(rocket.offsetTop) - 10) + "px";
            shuttleBackground.style.backgroundColor="blue";        
            let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
            let spaceShuttleHeightVal=spaceShuttleHeight.innerHTML;
            spaceShuttleHeightVal = Number(spaceShuttleHeightVal) ;
            spaceShuttleHeight.innerHTML=spaceShuttleHeightVal+10000;  

        }



    });
    let landing=document.getElementById("landing");
    landing.addEventListener("click",function (){
        let result1=window.alert("The shuttle is landing. Landing gear engaged");
            document.getElementById("flightStatus").innerHTML="The shuttle has landed";
            // let shuttleBackground=document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor="green"; 
            spaceShuttleHeight.innerHTML=0;

            rocket.style.top = (parseInt(shuttleBackground.offsetHeight) - parseInt(rocket.offsetHeight)) + "px";
       
     
    });
    let misssionAbort=document.getElementById("missionAbort");
    misssionAbort.addEventListener("click",function (){
        let result2=window.confirm("Confirm that you want to abort the mission");
        if(result2==true){
            document.getElementById("flightStatus").innerHTML="Mission aborted";
            shuttleBackground.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML=0;
            rocket.style.top = (parseInt(shuttleBackground.offsetHeight) - parseInt(rocket.offsetHeight)) + "px";
        }

    });
    
    

    let upbtn=document.getElementById("up");
    upbtn.addEventListener("click",function (){ 
        
        
        rocket.style.top = (parseInt(rocket.offsetTop) - 10) + "px";
    let spaceShuttleHeightVal=spaceShuttleHeight.innerHTML;
    spaceShuttleHeightVal = Number(spaceShuttleHeightVal) ;
    spaceShuttleHeight.innerHTML=spaceShuttleHeightVal+10000;     
    });
    let downbtn=document.getElementById("down");
    downbtn.addEventListener("click",function (){
    rocket.style.top = (parseInt(rocket.offsetTop) + 10) + "px";
    let spaceShuttleHeightVal=spaceShuttleHeight.innerHTML;
    spaceShuttleHeightVal = Number(spaceShuttleHeightVal) ;
    spaceShuttleHeight.innerHTML=spaceShuttleHeightVal-10000;     
    });
    let leftbtn=document.getElementById("left");
    leftbtn.addEventListener("click",function (){
    rocket.style.left = (parseInt(rocket.offsetLeft) - 10) + "px";
    });
    let rightbtn=document.getElementById("right");
    rightbtn.addEventListener("click",function (){
    rocket.style.left = (parseInt(rocket.offsetLeft) + 10) + "px";
    });


});
// Remember to pay attention to page loading!
