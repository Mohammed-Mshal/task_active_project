let menu_button = document.querySelector(".menu_button");
let toolbar = document.querySelector(".toolbar");

menu_button.addEventListener("click", (e) => {
  toolbar.classList.contains("show")
    ? toolbar.classList.remove("show")
    : toolbar.classList.add("show");
});
