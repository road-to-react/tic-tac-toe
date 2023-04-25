
var turn = 1; //for selecting, player turn
var pos1 = [];
var pos2 = [];
var match = 0;
var finish = 0;
var bingo = [["123"], ["369"], ["789"], ["147"], ["159"], ["357"], ["258"], ["456"]];
document.getElementById("player-1").innerHTML = "Player 1 [Circle]";
        document.getElementById("player-2").innerHTML = " Player 2 [Cross]";


function selectImage(turn) {
    const img = document.createElement("img");
    img.className = "symbol";
    if (turn % 2 == 0) {
        img.src = "images/cross.svg"; //palyer 2
    } else {
        img.src = "images/circle.svg"; //player 1 
    }
    return img;
}

Array.from(document.getElementsByClassName("col-box")).forEach((box) => {
    box.addEventListener("click", function (e) {
        var img = selectImage(turn);
        var position = box.id.slice(3)

        const hasChild = box.hasChildNodes();
        if (!hasChild && bingo != 1 && finish!=1) {
            box.appendChild(img);
            if (turn % 2 == 0) {
                pos2.push(position);
                pos2.sort();
                bingo.forEach((pattern) => {
                    for (let i = 0; i < 3; i++) {
                        if (pos2.join().match(pattern.toString().charAt(i))) {
                            match++;
                        }
                        if (match == 3) {
                            console.log("Player 2 won the game.");
                            document.getElementById("player-1").innerHTML = "Player 1 LOSE [circle]";
                            document.getElementById("player-2").innerHTML = "Player 2 WON [Cross]";
                            finish = 1;
                        }
                    }
                    match = 0;
                });
            } else {
                pos1.push(position);
                pos1.sort();
                bingo.forEach((pattern) => {
                    for (let i = 0; i < 3; i++) {
                        if (pos1.join().match(pattern.toString().charAt(i))) {
                            match++;
                        }
                        if (match == 3) {
                            console.log("Player 1 won the game.");
                            document.getElementById("player-1").innerHTML = "Player 1 WON [circle]";
                            document.getElementById("player-2").innerHTML = "Player 2 LOSE [Cross]";
                            finish = 1;
                        }
                    }
                    match = 0;
                });
            }
            turn++;
        }
    });
});

//on reset game
document.getElementById("reset").onclick = function () {
    Array.from(document.getElementsByClassName("col-box")).forEach((box) => {
        box.innerHTML = "";
        turn = 1; //for selecting, player turn
        pos1 = pos1.slice(pos1.length);
        pos2 = pos2.slice(pos2.length);
        match = 0;
        finish = 0;
        document.getElementById("player-1").innerHTML = "Player 1 [Circle]";
        document.getElementById("player-2").innerHTML = " Player 2 [Cross]";
    });
}