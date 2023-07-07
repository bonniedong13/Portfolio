// VARIABLES
// Texts
let expTime = document.querySelector("#expTime");
let expDesc = document.querySelector("#expDesc");
// Bars
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");
let python = document.querySelector(".python");
// Buttons
let before = document.querySelector("#nextBefore");
let after = document.querySelector("#nextAfter");

// CLICK ON AFTER BUTTON //
after.onclick = function(){
  after.style.backgroundColor = "red";
  before.style.backgroundColor = "#d9d9d9";
  // Change Text //
  expTime.innerHTML = "After";
  expDesc.innerHTML = "After the Nextech program";

  //Change bars
  html.classList.add("htmlAnimate");
  html.innerHTML = "40%";
  html.style.width = "40%";

  css.classList.add("cssAnimate");
  css.innerHTML = "30%";
  css.style.width = "30%";

  js.classList.add("jsAnimate");
  js.innerHTML = "35%";
  js.style.width = "35%";

  python.classList.add("pythonAnimate");
  python.style.width = "70%";
}

// CLICK ON AFTER BUTTON //
before.onclick = function(){
  before.style.backgroundColor = "red";
  after.style.backgroundColor = "#d9d9d9";
  // Change Text //
  expTime.innerHTML = "Before";
  expDesc.innerHTML = "Before the Nextech program";

  //Change bars
  html.classList.add("htmlAnimate");
  html.innerHTML = "0%";
  html.style.width = "1%";

  css.classList.add("cssAnimate");
  css.innerHTML = "0%";
  css.style.width = "1%";

  js.classList.add("jsAnimate");
  js.innerHTML = "0%";
  js.style.width = "1%";

  python.classList.add("pythonAnimate");
  python.style.width = "70%";
}