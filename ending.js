// Get the modal1 

var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("btn1");
var span1 = document.getElementsByClassName("modal-close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
  document.querySelector('body').style.overflow="hidden";
}

span1.onclick = function() {
  modal1.style.display = "none";
  document.querySelector('body').style.overflow="auto";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    document.querySelector('body').style.overflow="auto";
  }
}
// Get the modal2 

var modal2= document.getElementById("modal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("modal-close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
  document.querySelector('body').style.overflow="hidden";
}

span2.onclick = function() {
  modal2.style.display = "none";
  document.querySelector('body').style.overflow="auto";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.querySelector('body').style.overflow="auto";
  }
}

// Get the modal2 

var modal3= document.getElementById("modal3");
var btn3 = document.getElementById("btn3");
var span3 = document.getElementsByClassName("modal-close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
  document.querySelector('body').style.overflow="hidden";
}

span3.onclick = function() {
  modal3.style.display = "none";
  document.querySelector('body').style.overflow="auto";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.querySelector('body').style.overflow="auto";
  }
}