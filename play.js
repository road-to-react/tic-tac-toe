
var turn = 1; //for selecting, player turn
var pos1 = [];
var pos2 = [];
var match = 0;
var bingo = 0;
var bingo = [["123"], ["369"], ["789"], ["147"], ["159"], ["357"], ["258"], ["456"]];

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
        if (!hasChild && bingo != 1) {
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
                            bingo = 1;
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
                            bingo = 1;
                        }
                    }
                    match = 0;
                });
            }
            turn++;
        }
    });
});