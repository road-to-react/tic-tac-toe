
document.getElementsById("box1").onclick=function(){
    const img=document.createElement("img");
    img.src="images/t.svg";
    document.getElementById("box9").body.appendChild(img);
}