
var turn = 1;
        var id = "hello";

        Array.from(document.getElementsByClassName("col-box")).forEach((box) => {
            box.addEventListener("click", function (e) {
                const img = document.createElement("img");
                img.className = "symbol";
                if (turn % 2 == 0) {
                    img.src = "images/t.svg";
                    console.log("tick");
                } else {
                    img.src = "images/c.svg";
                    console.log("circ");
                }
                const hasChild = box.hasChildNodes();
                if (!hasChild) {
                    box.appendChild(img);
                    turn++;
                }
            });
        });
