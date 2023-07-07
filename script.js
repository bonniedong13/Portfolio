// HAMBURGER MENU VARIABLES
toggle = document.querySelector(".toggle");
item = document.querySelectorAll(".item");



function init(){
  
}

// HAMBURGER MENU
toggle.onclick = function(){
  for (x of item){
    console.log(x);
    if (x.classList.contains("active")){
      x.classList.remove("active");
      console.log("20");
    } else {
      x.classList.add("active");
    }
  }
}