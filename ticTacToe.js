//player true --> player1
//player false --> player2
var player = true;

$(".item").click(function() {
    if (player) {
        $(this).text("X");
    } else {
        $(this).text("O");
    }
    player = !player;

});
