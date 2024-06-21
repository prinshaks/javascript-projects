// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return a object with key organization and value nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit");
 });  
 test("should return a object with key executiveDirector and value jeff", function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
  
});
test("should return a object with key percentageCoolEmployees and value 100", function(){
  expect(launchcode.percentageCoolEmployees).toBe(100);
});
test("should return a object with key programsOfferedand value Array", function(){
  expect(launchcode.programsOffered.includes("Web Development") ).toBe(true);
  expect(launchcode.programsOffered.includes("Data Analysis")).toBe( true);
  expect(launchcode.programsOffered.includes("Liftoff") ).toBe(true);
  expect(launchcode.programsOffered.length).toBe(3);
  
  
});
test("should return launch when passed a number divisible by2", function(){
  expect(launchcode.launchOutput(4)).toBe('Launch!');
});
test("should return code when passed a number divisible by3", function(){
  expect(launchcode.launchOutput(9)).toBe('Code!');

});
test("should return Rocks when passed a number divisible by 5", function(){
  expect(launchcode.launchOutput(25)).toBe('Rocks!');

});
test("should return launchcode when passed a number divisible by 2 AND 3", function(){
  expect(launchcode.launchOutput(12)).toBe('LaunchCode!');

});
test("should return code rocks when passed a number divisible by 3 and 5", function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
});
test("should return launch rocks when passed a number divisible by 2,5", function(){
  expect(launchcode.launchOutput(20)).toBe('Launch Rocks! (CRASH!!!!)');
});
test("should return launch code rocks when passed a number divisible by 2,3,5", function(){
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
});
test("should return 'Rutabagas! That doesn't work.' when passed a number not divisible by 2,3,5", function(){
  expect(launchcode.launchOutput(13)).toBe("Rutabagas! That doesn't work.");
});
});
