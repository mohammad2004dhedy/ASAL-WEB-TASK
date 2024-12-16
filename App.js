let BurgerIcon=document.querySelector("header .container .BurgerIcon");
let headerContainer=document.querySelector("header .container");

BurgerIcon.addEventListener("click",()=>{
    headerContainer.classList.toggle("active");
    BurgerIcon.classList.toggle("active");
});