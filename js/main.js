$("document").ready(function() {



    });

var player;
var winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8],];

// if:else for turns
for (var i = 0; i < 9; i++){

// function currentMove() {
  $(".square").click(function(){

  if (i % 2 !== 0) {
    player = "x";
    $(this).text(player);
    i+=1;
  }else if (i % 2 === 0)  {
    player = "o";
    $(this).text(player);
    i+=1;
  }
})


};


// };
// };



// three turn each

// evaluate winner with array

// sum.val=["22", "93", "655", "636", "722", "38", "10", "30"];


// $(".square").on("click", function() {
//   $(this).text(player);


// $(".square").on("click", function() {
//   $(this).text(player2);


    // // If any of these patters of board spaces have all X's or all O's somebody won!
    // wins: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],

    // // / Check for whether someone won the game of it was a Cat's game. /
    // check4Win: function() {

    //   // Loop through all possible winning combinations
    //   for (k in this.wins){
    //     var pattern = this.wins[k];
    //         var p = this.board[pattern[0]] + this.board[pattern[1]] + this.board[pattern[2]];
    //         if (p == "XXX") {
    //           return "X";  // X Won!
    //         } else if (p == "OOO") {
    //           return "O";  // O Won!
    //         }
    //       }

    //       // Check if all spaces in the board are filled, then its a Cat's game
    //       var cnt = 0;
    //       for (s in this.board) {
    //         if (this.board[s]) { cnt+=1; }
    //       }
    //       if (cnt == 9) {
    //         return "Cat";  // Cat's game!
    //       }
    //   }
    // };


