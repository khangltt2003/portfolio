var menu = document.querySelector(".menu-logo");
var list = document.querySelector(".nav-bar ul");

menu.addEventListener("click", ()=>{
    if(list.style.display === "block"){
        list.style.display = "none";
    }
    else{
        list.style.display = "block";
    }
})