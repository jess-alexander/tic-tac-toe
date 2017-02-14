////////////////////////////////////////////////
/////////       INITIALIZATION         /////////     
////////////////////////////////////////////////

//player true --> player1, X
//player false --> player2, O
var player = true; //default to player 1 start

var board = [ //init with large un-equal numbers   (not 1 or 2) 
    //update this array with values of 1 or 2
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

////////////////////////////////////////////////
/////////       CLICK-LISTENER         /////////     
////////////////////////////////////////////////

// reset board
$("#reset").click(function() {
    board = [ //init with large un-equal numbers   (not 1 or 2) 
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    $(".mark").remove(); // Remove the set of matched elements from the DOM.

});

// set an X or an O
$("div.item").click(function() {
    // don't continue logic if the div clicked contains something
    if (!$(this).text().trim().length) { //use keyword 'this' to only modify div clicked
        if (player) { // true --> player 1 --> X
            $(this).html("<h1 class='mark'>X</h1>"); //X isn't placed until click function processes are complete.
        } else {
            $(this).html("<h1 class='mark'>O</h1>");
        }
        updateScoreBoard(this.id); //send id of div clicked to update game status
        player = !player; //switch player
    }
    if (checkForWin()) {
        alert("we have a winner!!");
    }
});

////////////////////////////////////////////////
///////      FUNCTION DEFINITION         ///////   
////////////////////////////////////////////////

function updateScoreBoard(id) {
    // sort based on id to array position. Change value in array to 1 or 2 based on player 1 or 2
    switch (id) { //id is a string
        case '1':
            board[0][0] = checkPlayer();
            console.log("board[0][0]" + board[0][0]);
            break;

        case '2':
            board[0][1] = checkPlayer();
            console.log("board[0][1]" + board[0][1]);
            break;

        case '3':
            board[0][2] = checkPlayer();
            console.log("board[0][2]" + board[0][2]);
            break;

        case '4':
            board[1][0] = checkPlayer();
            console.log("board[1][0]" + board[1][0]);
            break;

        case '5':
            board[1][1] = checkPlayer();
            console.log("board[1][1]" + board[1][1]);
            break;

        case '6':
            board[1][2] = checkPlayer();
            console.log("board[1][2]" + board[1][2]);
            break;

        case '7':
            board[2][0] = checkPlayer();
            console.log("board[2][0]" + board[2][0]);
            break;

        case '8':
            board[2][1] = checkPlayer();
            console.log("board[2][1]" + board[2][1]);
            break;

        case '9':
            board[2][2] = checkPlayer();
            console.log("board[2][2]" + board[2][2]);
            break;
    }
}

function checkPlayer() {
    // player's scope is kept open for this purpose
    if (player) {
        console.log("saved for X");
        return 1;
    } else {
        console.log("saved for O");
        return 2;
    }
}

function checkForWin() {
    // if the same player's number is in all three positions there's a winner.
    if ((board[0][0] == board[0][1] && board[0][1] == board[0][2]) || // 2 == 2 && 2 == 2
        (board[1][0] == board[1][1] && board[1][1] == board[1][2]) || // 1 == 1 && 1 == 1
        (board[2][0] == board[2][1] && board[2][1] == board[2][2]) ||
        // ^ horizontal line wins
        (board[0][0] == board[1][0] && board[1][0] == board[2][0]) ||
        (board[0][1] == board[1][1] && board[1][1] == board[2][1]) ||
        (board[0][2] == board[1][2] && board[1][2] == board[2][2]) ||
        // ^ verical line wins
        (board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
        (board[0][2] == board[1][1] && board[1][1] == board[2][0])) {
        // ^ diagonal line wins
        return true; //winner winner!
    } else {
        return false; //keep playing
    }
}
// visualization of array locations
//  0.0 |  0.1  |  0.2
//  1.0 |  1.1  |  1.2
//  2.0 |  2.1  |  2.2
