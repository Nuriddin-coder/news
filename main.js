const select = document.querySelector(".select_category");
const arrow = document.getElementById("arrow_bottom");

select.addEventListener("click", () => {
  arrow.style.transform = "rotate(0deg)";
});
