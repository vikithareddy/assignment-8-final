function circleOutline() {
    document.getElementById("circle-outline").style.border = "2px dashed #CAE234";
    document.getElementById("line-change").style.display = "none";
    document.getElementById("text-under-name").style.display = "inline-block";
}

var circle = document.getElementById("circle-outline");

// Code for Chrome, Safari and Opera
circle.addEventListener("animationend", circleOutline);

function showOneCademy() {
    document.getElementById("onecademy").style.display = "";
    document.getElementById("spin").style.display = "none";
}

function showSpin() {
    document.getElementById("spin").style.display = "";
    document.getElementById("onecademy").style.display = "none";
}