//player true --> player1
//player false --> player2
var player = true; //default to player 1 start

var board = [ //init with large un-equal numbers
    //update this array with values of 1 or 2
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
$("#reset").click(function() {
    board = [ //init with large un-equal numbers    
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    $(".mark").remove();

});

$("div.item").click(function() {
    // don't continue logic if the div clicked contains something
    if (!$(this).text().trim().length) {
        if (player) {
            $(this).html("<h1 class='mark'>X</h1>");
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

function updateScoreBoard(id) { //
    switch (id) {
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
    if (player) {
        console.log("saved for X");
        return 1;
    } else {
        console.log("saved for O");
        return 2;
    }
}

function checkForWin() {
    // there's a problem here, only X is declared the winner.
    console.log("checking for winner");
    if ((board[0][0] == board[0][1] == board[0][2]) ||
        (board[1][0] == board[1][1] == board[1][2]) ||
        (board[2][0] == board[2][1] == board[2][2]) ||
        // ^ horizontal line wins
        (board[0][0] == board[1][0] == board[2][0]) ||
        (board[0][1] == board[1][1] == board[2][1]) ||
        (board[0][2] == board[1][2] == board[2][2]) ||
        // ^ verical line wins
        (board[0][0] == board[1][1] == board[2][2]) ||
        (board[0][2] == board[1][1] == board[2][0])) {
        // ^ diagonal line wins
        return true;
    } else {
        return false;
    }
}

//  0.0 |  0.1  |  0.2
//  1.0 |  1.1  |  1.2
//  2.0 |  2.1  |  2.2
