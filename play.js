var turn = 1;       //for selecting, player turn
var pos1 = [];      //position of circle in col-box
var pos2 = [];      //position of cross in col-box 
var match = 0;      //check for match pattern for bingo
var finish = 0;
var bingo = [["123"], ["369"], ["789"], ["147"], ["159"], ["357"], ["258"], ["456"]];
var playerSection1 = document.getElementById("player-1");
var playerSection2 = document.getElementById("player-2");
const hr = document.getElementById("bingoLine");    //bingo line at last

playerSection1.innerHTML = "Player-1 [Circle]";
playerSection2.innerHTML = "Player-2 [Cross]";

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

function bingoLineDraw(pattern) {
    hr.className = "";
    if (["123", "456", "789"].includes(pattern.toString())) {
        hr.classList.add("hr");
        hr.style.top = Math.floor(pattern[0][0] / 3) * 30 + 15 + 5 + "%";
    } else if (["147", "258", "369"].includes(pattern.toString())) {
        hr.classList.add("vr");
        if (pattern[0][0] == "1") {
            hr.style.left = "-25%";
        } else if (pattern[0][0] == "3") {
            hr.style.left = "35%";
        }
    } else {
        hr.classList.add("dg");
        if (pattern[0][0] == "3") {
            hr.style.transform = "rotate(-45deg)";
        }
    }
}

Array.from(document.getElementsByClassName("col-box")).forEach((box) => {
    box.addEventListener("click", function (e) {
        var img = selectImage(turn);
        var position = box.id.slice(3);//get the id of the box as 1,2,3....

        const hasChild = box.hasChildNodes();
        if (!hasChild && finish != 1) {
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
                            console.log("Player-2 won the game.");
                            playerSection1.innerHTML = "Player-1 LOSE [Circle]";
                            playerSection2.innerHTML = "Player-2 WON [Cross]";
                            playerSection1.style.color = "red";
                            playerSection2.style.color = "green";
                            finish = 1;
                            bingoLineDraw(pattern);
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
                            playerSection1.innerHTML = "Player-1 WON [Circle]";
                            playerSection2.innerHTML = "Player-2 LOSE [Cross]";
                            playerSection1.style.color = "green";
                            playerSection2.style.color = "red";
                            finish = 1;
                            bingoLineDraw(pattern);
                        }
                    }
                    match = 0;
                });
            }
            turn++;
            if (turn == 10 && finish != 1) {
                playerSection1.innerHTML = "It's a Tie";
                playerSection2.innerHTML = "It's a Tie";
                playerSection1.style.color = "orange";
                playerSection2.style.color = "orange";
            }
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
        playerSection1.innerHTML = "Player-1 [Circle]";
        playerSection2.innerHTML = "Player-2 [Cross]";
        playerSection1.style.color = "black";
        playerSection2.style.color = "black";
        hr.classList = "";
        hr.style = "none";
    });
}