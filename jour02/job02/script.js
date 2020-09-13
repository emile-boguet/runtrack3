var button = document.getElementById("button")

var text = document.getElementById("text")

text.style.display = "none";

function showhide() {


    if (text.style.display == "none") {
        text.style.display = "block";
    }
    else if (text.style.display == "block") {
        text.style.display = "none";
    }

}

button.addEventListener('click', showhide)