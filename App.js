let BurgerIcon = document.querySelector("header .container .BurgerIcon");
let headerContainer = document.querySelector("header .container");

BurgerIcon.addEventListener("click", () => {
  headerContainer.classList.toggle("active");
  BurgerIcon.classList.toggle("active");
});
//-------------------- scroll line start --------------------------------
let scrollLine = document.querySelector("#scrollLine");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollPercent = (scrollTop / height) * 100;
  scrollLine.style.width = scrollPercent + "%";
});

//-------------------- scroll line end   --------------------------------
//-------------------- upBtn start --------------------------------
let UpBtn = document.getElementById("UpBtn");
window.onscroll = () => {
  if (window.scrollY > 200) {
    UpBtn.classList.add("active");
  } else {
    UpBtn.classList.remove("active");
  }
};
UpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
//-------------------- upBtn end   --------------------------------
