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




/*Search code section */

function filterSearch() {
    var username = document.getElementById('search-input').value;
    var profile = document.getElementsByClassName('profile');
    var gender = document.getElementsByClassName('gender-input');
    var selectedGenders = []
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGenders.push(gender[i].defaultValue)

        }
    }
    console.log(selectedGenders)
        // var usernames = []
    for (i = 0; i < profile.length; i++) {
        var userNameInfo = profile[i].children[1].innerText;
        var genderInfo = profile[i].children[3].innerText;
        let userNameMatches = username === "" || (userNameInfo.indexOf(username) != -1)
        var genderMatches = selectedGenders.length === 0 || selectedGenders.some(gender => genderInfo.indexOf(gender) != -1)

        // find profile children 3 inner text and call it genderInfo
        // if (userNameInfo.indexOf(username) != -1)  && ()
        if (userNameMatches && genderMatches) {
            profile[i].parentNode.style.display = "block";
        } else {
            profile[i].parentNode.style.display = "none";
        }
    }
}


// $(function() {
//     var $ages = $('#ages');
//     var $agesRange = $('#ages-range');

//     $("#slider").slider({
//         range: true,
//         min: 0,
//         max: 90,
//         values: [25, 85],
//         slide: function(event, ui) {
//             $ages.val('$' + ui.values[0] + ' -$' + ui.values[1]);
//         }
//     });
//     $ages
//         .val('$' + $agesRange.slider('values', 0) +
//             ' -$' + $agesRange.slider('values', 1));
// });