var menu = document.querySelector(".menu-logo");
var dropDownMenu = document.querySelector(".dropdown-menu");

menu.addEventListener("click", ()=>{
    if(dropDownMenu.style.display === "none"){
        dropDownMenu.style.display = "flex";
    }
    else{
        dropDownMenu.style.display = "none";
    }
})
