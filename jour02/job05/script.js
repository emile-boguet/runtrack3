body = document.querySelector('body')

footer = document.querySelector('footer')

function progressbar(){
    pixelScrolled = window.scrollY;
    viewheight = window.innerHeight;
    totalheight = body.scrollHeight;
    percentage = (pixelScrolled/(totalheight- viewheight)) *100;
    console.log(percentage);
    footer.style.width = percentage + "%"
    if(percentage == 0){
        footer.style.background= "white"
    }
    else if( percentage <= 25){
        footer.style.background = "red";
    }
    else if( percentage < 50){
        footer.style.background = "orange"
    }
    else if(percentage < 75){
        footer.style.background = "yellow"
    }
    else if( percentage > 75){
        footer.style.background = "green"
    }
}

window.addEventListener("scroll", progressbar )