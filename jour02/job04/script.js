textarea = document.getElementById("keylogger")

window.addEventListener('keypress', function(event){
    var key = event.key;
    textarea.value += key;
})