var article = document.getElementById("citation")

var button = document.getElementById("button")

function citation() {
    var contenu = article.innerHTML;
    console.log(contenu)
}

button.addEventListener('click', citation)