const whoWon=require("../RPS.js");
describe("RPS game",function(){
    test("if both players get same it is a TIE", function() {
        expect(whoWon("paper","paper")).toEqual("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
     test("returns 'Invalid choice' if paper,scissors or rock is not selected", function(){
        let output = whoWon('hello','scissors');
        expect(output).toBe("Invalid choice");
     });
});