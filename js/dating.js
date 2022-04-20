var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
    setImageTimer();
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

let timer;

function setImageTimer() {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        plusSlides(1);
        setImageTimer();

    }, 8000);
}
window.onload = setImageTimer;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// const pictures = document.querySelectorAll(".mySlides")

// (function slidesme() {
//   pictures.forEach(picture =>  {
//     let randomPositions = Math.floor(Math.random() * 26)
//     picture.style.order = randomPositions
//   })
// }) ()

// var header = function(){
//   document.getElementsByTagName('header')[0].style = 
//   "margin-top: 10px; text-align: center; font-size: 40px; background:repeat-x; "
// }

// header();

// function checkUsername(){
//   var elMsg = document.getElementsById('feedback');
//   var elUsername = document.getElementsById('username');
//   if (elUsername.value.length < 5){
//     elMsg.textContent = 'Username too short!';
//   }else{
//     elMsg.textContent ='Strong';
//   }
// }

// checkUsername();


/*Search code section */

function filterSearch() {
    var username = document.getElementById('search-input').value;
    var profile = document.getElementsByClassName('profile');
    // var usernames = []
    for (i = 0; i < profile.length; i++) {
        var profileInfo = profile[i].children[1].innerText;
        if (profileInfo.indexOf(username) != -1) {
            profile[i].parentNode.style.display = "block";
        } else {
            profile[i].parentNode.style.display = "none";
        }
    }
}