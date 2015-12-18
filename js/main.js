$("document").ready(function() {



    });

// Variables
var player1 = "X",
player2 = "O",
currentPlayer = player1;
var columns = [[1,4,7],[2,5,8],[3,6,9]];
var rows = [[1,2,3],[4,5,6],[7,8,9]];
var diagonals = [[1,5,9],[3,5,7]];
var boardState =    [[1,2,3],
                 [4,5,6],
                 [7,8,9]];

$(".square").click(function() {

  if (currentPlayer % 2 !== 0) {
    player1 = "X";
    $(this).text(player1);
    currentPlayer+=1;
  }else if (currentPlayer % 2 === 0)  {
    player2 = "O";
    $(this).text(player2);
    currentPlayer+=1;
  }


// Alternates currentPlayer between player1 and player2
function playerChange() {
    // jQuery shortcode for inline if/then statement
    (currentPlayer ? player2 : player1);
    console.log("Player Turn: " + currentPlayer);
}


// Insert the X or O for whoever is currentPlayer.
function playerMove(square) {
    // $(square).text(currentPlayer);
    $('#' + square.id).text(currentPlayer);
    updateBoard(square);
    checkForWinner();
    playerChange();
}


// Checks to see if a square has already been played on
function spotTaken(square) {
    if(square === player1 || square === player2) {
        return true;
    }
}


function updateBoard(square) {
    var columns = $(square).index();
    console.log('column: ', columns);
    var rows = $(square).closest('.rows').index();
    console.log('row: ', rows);
    // boardState[rows][[columns]
}



function checkForWinner() {
    console.log(boardState);

    // var totalColumns = boardState[0].length;
    // var totalRows = boardState[0].length;

    checkColumns();
    checkRows();
    checkDiagonals();
    // checkDiagonalRight();

    //CHECK COLUMNS
    function checkColumns() {
        for (var columns=0; columns<3; columns++) {
            var columns = [[1,4,7],[2,5,8],[3,6,9]];
            // for (var rows=0; rows<totalRows; rows++) {
                columns.push(boardState[0][0]);
            // }
            if (columns[[1,4,7],[2,5,8],[3,6,9]]) {
                alert('winner column');
            }
        }
    }

    //CHECK ROWS
    function checkRows() {
        for (var rows=0; rows<3; rows++) {
          var rows = [[1,2,3],[4,5,6],[7,8,9]];
            // for (var columns=0; columns<totalColumns; columns++) {
                rows.push(boardState[0][0]);
            // }
            if (rows[[1,2,3],[4,5,6],[7,8,9]]) {
                alert('winner row');
            }
        }
    }

    //CHECK DIAGONALS
    function checkDiagonals() {
        for (var diagonals=0; diagonals<2; diagonals++) {
          var diagonals = [[1,5,9],[3,5,7]];
            diagonals.push(boardState[0][0]);
        }
        if (diagonals[[1,5,9],[3,5,7]]) {
            alert('winner diagonal');
        }



    // }

    // function checkDiagonalRight() {
    //     var diagonalArray = [[3,5,7]];
    //     // var column = totalColumns - 1;
    //     for (var row=0; row<totalRows; row++) {
    //         diagonalArray.push(boardState[row][column]);
    //     }
    //     if (diagonalArray[[3,5,7]]) {
    //         alert('winner diagonal right to left');
    //     }
    }

}

// function allValuesSame(my_array) {
//     for (var i=0; i<my_array.length - 1; i++) {
//         if (my_array[i] === my_array[i+1]) {
//             //do nothing
//         }
//         else {
//             return false;
//         }
//     }
//     return true;
// }

// function displayMessage(message) {
//     $(".message").html(message);
// }


 });




// var player;



// // if:else for turns
// for (var i = 0; i < 9; i++){

// // function currentMove() {
//   $(".square").click(function(){

//   if (i % 2 !== 0) {
//     player = "X";
//     $(this).text(player);
//     i+=1;
//   }else if (i % 2 === 0)  {
//     player = "O";
//     $(this).text(player);
//     i+=1;
//   }
// })



