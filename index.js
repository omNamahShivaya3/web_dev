
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var dwnBtn = document.getElementById("dwnBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
dwnBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
