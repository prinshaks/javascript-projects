function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

function sortarray(abc){
  let outputArr=[];
  while(abc.length>0){
      let minvalue=findMinValue(abc);
      outputArr.push(minvalue);
      abc.splice(abc.indexOf(minvalue),1);

  }
  return outputArr;
}

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortarray(nums1));
console.log(sortarray(nums2));
console.log(sortarray(nums3));

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
 nums1 = [5, 10, 2, 42];
 nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
 nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function recursiveSort(arr3,arr4){
  if(arr3.length === 0){
  console.log(arr4);
  }
  else {
      if(arr4 === undefined){
          let sorted = [];
          let minValue = findMinValue(arr3);
          sorted.push(minValue);
          arr3.splice(arr3.indexOf(minValue),1);
          recursiveSort(arr3,sorted);        
      }    
      else {
          let minValue = findMinValue(arr3);
          arr4.push(minValue);
          arr3.splice(arr3.indexOf(minValue),1);
          recursiveSort(arr3,arr4);            
      }
  
  }
  }

  recursiveSort(nums1);
  recursiveSort(nums2);
  recursiveSort(nums3);