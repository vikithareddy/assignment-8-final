//function to add a border to the home page circle and display 'product designer' text
function circleOutline() {
    document.getElementById("circle-outline").style.border = "2px dashed #CAE234";
    document.getElementById("line-change").style.display = "none";
    document.getElementById("text-under-name").style.display = "inline-block";
}

var circle = document.getElementById("circle-outline");

//use event listener to add a border arounf the circle once the beginning animations ends
circle.addEventListener("animationend", circleOutline);

//show 1cademy project when the project title is clicked and hide spin project
function showOneCademy() {
    document.getElementById("onecademy").style.display = "";
    document.getElementById("spin").style.display = "none";
}

//show spin project when the project title is clicked and hide 1cademy project
function showSpin() {
    document.getElementById("spin").style.display = "";
    document.getElementById("onecademy").style.display = "none";
}

