function circleOutline() {
    document.getElementById("circle-outline").style.border = "2px dashed #CAE234";
    console.log("hehe")
    document.getElementById("line-change").style.display = "none";
    document.getElementById("text-under-name").style.display = "inline-block";
}

var circle = document.getElementById("circle-outline");

// Code for Chrome, Safari and Opera
circle.addEventListener("animationend", circleOutline);