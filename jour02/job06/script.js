var code = "";

page = document.querySelector("body")

window.addEventListener("keydown", function(event){
    var key = event.key;
    code  += key
    console.log(code)

    if(code === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"){
        console.log("enter")
        var h = document.createElement("header")
        var H1 = document.createElement("h1")
        h.style.height= "20vh"
        h.style.background= "#88c1d0"
        H1.style.textAlign= "center"
        page.append(h);
        h.append(H1)

        H1.append("La plateforme")
        var m  = document.createElement("main")
        m.style.height= "60vh"
        m.style.background ="#ffca4b"
        page.append(m)
        var f = document.createElement("footer")
        f.style.height = "20vh"
        f.style.background= "#88c1d0"
        page.append(f)
    }
})