const checkFive=require("../checkFive.js");
describe("checkFive", function(){

    test("if number less than 5 display less than message", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test("if number greater than 5 display greater than message", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });
    test("if number equal to 5 display equal to message", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

 });