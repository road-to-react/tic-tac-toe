
var turn = 1; //for selecting player turn
var id = ""; //container for element Id

function selectImage(turn) {
    const img = document.createElement("img");
    img.className = "symbol";
    if (turn % 2 == 0) {
        img.src = "images/cross.svg";
    } else {
        img.src = "images/circle.svg";
    }
    return img;
}

Array.from(document.getElementsByClassName("col-box")).forEach((box) => {
    box.addEventListener("click", function (e) {
        var img = selectImage(turn);
        const hasChild = box.hasChildNodes();
        if (!hasChild) {
            box.appendChild(img);
            turn++;
        }
    });
});
