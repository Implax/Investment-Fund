header1 = document.querySelector(".header-1");
header2 = document.querySelector(".header-2");
header3 = document.querySelector(".header-3");
header4 = document.querySelector(".header-4");

let active = 1;
let prevactive = 0;

const swap = function () {
  document.querySelector(`.header-${active}`).classList.toggle("current");
  document.querySelector(`.header-${prevactive}`).classList.toggle("current");
}

header1.addEventListener("click", function () {
  prevactive = active;
  active = 1;
  swap();
});

header2.addEventListener("click", function () {
  prevactive = active;
  active = 2;
  swap();
});

header3.addEventListener("click", function () {
  prevactive = active;
  active = 3;
  swap();
});

header4.addEventListener("click", function () {
  prevactive = active;
  active = 4;
  swap();
});



