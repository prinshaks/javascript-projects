function makeLine(size){
    let str = "";
    let x = "#";
for(let i = 0; i< size;i++){
    str = str + "#";
}
    return str;
}




function makeSquare(size){
    let square='';
    for(let i=0;i<size;i++) {
        square+=makeLine(size)+'\n';
        

    }
    return square;

}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    //return rectangle;
    return rectangle.slice(0, -1);
  }
  
  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);

  }
  
  function makeSpaceLine(numSpaces,numChars){
    let makeSpaceLine='';
    for(let i=0;i<numSpaces;i++){
        makeSpaceLine+= " " ;
    }
    makeSpaceLine = makeSpaceLine + makeLine(numChars) + makeSpaceLine;
        return makeSpaceLine;
  }
  function makeIsoscelesTriangle(height){
    let Triangle="";
    for(let i=0;i<height;i++){
      Triangle+=makeSpaceLine(height-i-1,2*i+1)+'\n';

    }

    return Triangle.slice(0,-1);
  }
  function makeDiamond(height){
    let diamond="";
    //for(let i=0;i<height;i++){
      //diamond+=make
    //}
    diamond = makeIsoscelesTriangle(height)+ '\n' + makeIsoscelesTriangle(height).split('\n').reverse().join('\n');
    return diamond;
  }


  console.log(makeLine(5));
  console.log(makeSquare(5));
  console.log(makeRectangle(5,3));
  console.log(makeDownwardStairs(5));
  console.log(makeIsoscelesTriangle(5));
  console.log(makeSpaceLine(3,5));
  console.log(makeDiamond(5));


  

