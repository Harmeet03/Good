function theme(){
    let off = document.getElementById("off");
    let on = document.getElementById("on");
    let body = document.querySelector("body");
    const lightMode = localStorage.getItem("lightMode");
    
    if(lightMode === 'OFF'){
        localStorage.setItem("lightMode", "ON");
        body.style.backgroundColor = "white";
        off.style.display = "none";
        on.style.display = "block";
    }
    else{
        localStorage.setItem("lightMode", "OFF");
        body.style.backgroundColor = "black";
        off.style.display = "block";
        on.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let off = document.getElementById("off");
    let on = document.getElementById("on");
    let body = document.querySelector("body");
    const lightMode = localStorage.getItem("lightMode");
    
    if(lightMode === 'ON'){
        body.style.backgroundColor = "white";
        off.style.display = "none";
        on.style.display = "block";
    }
    else{
        body.style.backgroundColor = "black";
        off.style.display = "block";
        on.style.display = "none";
    }
});