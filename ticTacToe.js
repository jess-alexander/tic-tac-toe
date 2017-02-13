//player true --> player1
//player false --> player2
var player = true;

$("div.item").click(function() {
    if (!$(this).text().trim().length) {
        if (player) {
            $(this).html("<h1>X</h1>");
        } else {
            $(this).html("<h1>O</h1>");
        }
        player = !player;
    }

});
