var typed = new Typed('.animate-text', {
    strings: [
        "Freelancer",
        "Photographer",
        "Web Developer",
    ],
    typeSpeed:50,
    backSpeed:50,
    startDelay: 1000,
    backDelay: 1500,
    showCursor: false,
    loop: true,
  });

  var typed = new Typed('.animate-text2', {
    strings: [
        "Freelancer",
        "Photographer",
        "Web Developer",
    ],
    typeSpeed:50,
    backSpeed:50,
    startDelay: 1000,
    backDelay: 1500,
    showCursor: false,
    loop: true,
  });
  //mobile navbar
  var openBtn=document.getElementsByClassName('open-icon');
  var i;
for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener("click", function() {
        //this.classList.toggle("active");
        var panel = document.getElementById('topnav-down');
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    
}

//topnav active
var linkBox1 = document.getElementById('link-box1');
var links1 = linkBox1.getElementsByClassName('navlink');
    for (let i = 0; i < links1.length; i++) {
    links1[i].addEventListener('click', function () {
        var current1 = document.getElementsByClassName('activelink');
        current1[0].className = current1[0].className.replace(' activelink', "");
        this.className += " activelink";
    });
}

//vnavbar active
var linkBox2 = document.getElementById('link-box2');
var links2 = linkBox2.getElementsByClassName('navlink');
    for (let i = 0; i < links2.length; i++) {
    links2[i].addEventListener('click', function () {
        var current2 = document.getElementsByClassName('activelink1');
        current2[0].className = current2[0].className.replace(' activelink1', "");
        this.className += " activelink1";
    });
}



//portfolio box 

const filterItem=document.querySelector(".items");
const filterImg=document.querySelectorAll(".gallery .image");

window.onload = ()=>{
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

const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector('.preview-title p'),
previewImg = previewBox.querySelector('img'),
closeIcon = previewBox.querySelector('.icon'),
shadow = document.querySelector(".shadow");

function preview(element) {
    document.querySelector('body').style.overflow = "hidden";
    var selectedPrevImg = element.querySelector('img').src;
    var selectedImgCategory = element.getAttribute("data-name");
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory;
    previewBox.classList.add('show');
    shadow.classList.add('show');

    closeIcon.onclick = ()=>{
        previewBox.classList.remove('show');
    shadow.classList.remove('show');
    document.querySelector('body').style.overflow = "auto";
    }
}

//navbar

var stickyNav = document.getElementById('t-nav-sticky');
var navBar = stickyNav.offsetTop;

window.onscroll = function () {
    tstickyNavBar();
}

function tstickyNavBar() {
    if (window.pageYOffset > navBar) {
        stickyNav.classList.add('t-navbar-sticky');
    } else {
        stickyNav.classList.remove('t-navbar-sticky');
    }
}

///
AOS.init({
    offset: 120,
    duration: 1200,
});


