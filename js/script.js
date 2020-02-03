var score = "x";
var turns =  0;
var gameEnd = false;

function change_Players(){
    turns = turns + 1;
    if(score === "x"){
        score = "o";
    } 
    else if(score === "o"){
        score = "x";
    }
}



function game_tie() {
     if(turns > 8 && gameEnd === false){
        $("h1").html("It's a draw!");
        gameEnd = true;
     }
}

function pw(tileId1, tileId2, tileId3){
    if ($(tileId1).html() === score && $(tileId2).html() === score && $(tileId3).html() === score){
        $("h1").text(score + " wins!");
        gameEnd = true;
    }
}
function VerticalWins(){
    pw("#tile1", "#tile4", "#tile7");
    pw("#tile2", "#tile5", "#tile8");
    pw("#tile3", "#tile6", "#tile9");
}
function HorizontalWins(){
    pw("#tile1", "#tile2", "#tile3");
    pw("#tile4", "#tile5", "#tile6");
    pw("#tile7", "#tile8", "#tile9");
}
function DiagonalWins(){
    pw("#tile1", "#tile5", "#tile9");
    pw("#tile3", "#tile5", "#tile7");
}
 
function performLogic(button, tile){
    if(gameEnd === false){
        $(button).hide();
        $(tile).html(score);
        DiagonalWins();
        HorizontalWins();
        VerticalWins();
        change_Players();
        game_tie();
    }
}





$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

