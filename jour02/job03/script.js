var button = document.getElementById("button");

var count = document.getElementById("compteur");

function addone(){
    var nbclick= count.innerHTML;
    nbclick++;
    count.innerHTML = nbclick
}

addEventListener('click', addone)