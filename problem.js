const filterItem=document.querySelector(".items");
const filterImg=document.querySelectorAll(".news-container .content");

 /*window.onload = ()=>{
   filterItem.onclick = (selectedItem)=>{

        if (selectedItem.target.classList.contains('item')) {
            filterItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            var filterName = selectedItem.target.getAttribute('data-name');

            filterImg.forEach((image) =>{
                var filterImages = image.getAttribute('data-name');
                if ((filterImages == filterName) || (filterName== "all")) {
                    image.classList.remove('hide');
                    image.classList.add('show');
                }else{
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });

        }

    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute('onclick','preview(this)');
    }
}

const previewBox = document.querySelector(".news-preview-box"),
categoryName = previewBox.querySelector('.preview-title'),
previewImg = previewBox.querySelector('img'),
closeIcon = previewBox.querySelector('.icon'),
shadow = document.querySelector(".news-shadow");

function preview(element) {
    document.querySelector('body').style.overflow = "hidden";
    var selectedPrevImg = element.querySelector('img').src;
    var selectedImgCategory = element.querySelector('.content-text');
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory.textContent
    previewBox.classList.add('show');
    shadow.classList.add('show');

    closeIcon.onclick = ()=>{
        previewBox.classList.remove('show');
    shadow.classList.remove('show');
    document.querySelector('body').style.overflow = "auto";
    }
}
*/
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












