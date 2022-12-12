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
    var $agesRange = $('#ages-range');
    var minAge = $agesRange.slider('values', 0);
    var maxAge = $agesRange.slider('values', 1);
    console.log(minAge);
    console.log(maxAge);

    var matchNotFound = true;
    // var usernames = []
    for (i = 0; i < profile.length; i++) {
        var userNameInfo = profile[i].children[1].innerText;
        var genderInfo = profile[i].children[3].innerText;
        var ageInfo = profile[i].children[2].innerText.trim();
        var age = ageInfo.substring(ageInfo.length - 2);
        let userNameMatches = username === "" || (userNameInfo === ("Username: " + username))
        var genderMatches = selectedGenders.length === 0 || selectedGenders.some(gender => genderInfo.indexOf(gender) != -1)
        console.log(userNameInfo);
        // var ageMatches = age 

        var ageLessThanMax = age < maxAge; // (age is between minAge and maxAge)
        var ageGreaterThanMin = age > minAge; // age is greater than minAge

        var ageMatches = ageLessThanMax && ageGreaterThanMin;

        // find profile children 3 inner text and call it genderInfo
        // if (userNameInfo.indexOf(username) != -1)  && ()
        if (userNameMatches && genderMatches && ageMatches /* && ageMatches */ ) {
            matchNotFound = false;
            profile[i].parentNode.style.display = "block";
        } else {
            profile[i].parentNode.style.display = "none";
        }
    }
    var notFoundText = document.getElementById('match-not-found');
    if (matchNotFound) {
        console.log(matchNotFound);
        notFoundText.style.display = "block";

    } else {
        notFoundText.style.display = "none";
    }
}


$(document).ready(function() {
    var $age = $('#age');
    $age.css('color', 'blue');
    var $agesRange = $('#ages-range');

    $("#ages-range").slider({
        range: true,
        min: 19,
        max: 90,
        values: [19, 90],
        slide: function(event, ui) {
            $age.val(ui.values[0] + ' - ' + ui.values[1]);
        }
    });
    $age
        .val($agesRange.slider('values', 0) +
            ' - ' + $agesRange.slider('values', 1));

});


//alert('hello from main.js');

// here we add the conditions for making tabs active for the sign in tab
function onSignIn() {
    document.getElementById('signInTab').classList.add('active');
    document.getElementById("registerTab").classList.remove("active");
    document.getElementById("signInTabContent").classList.add("active");
    document.getElementById("registerTabContent").classList.remove("active");
}

// here we add the conditions for making tabs active for the register tab
function onRegister() {
    document.getElementById("signInTab").classList.remove("active");
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("signInTabContent").classList.remove("active")
    document.getElementById("registerTabContent").classList.add("active")
}

// function onSignInSubmit() {
//     console.log("example of text")
//     var username = document.getElementById("username-input").value;
//     var password = document.getElementById("password-input").value;
//     console.log(username);
//     console.log(password);

// }

// function onRegisterInSubmit(){
//     console.log("show text")
//     var fullName = document.getElementById("name-input").value;
//     var userNameReg = document.getElementById("username-reg-input").value;
//     var emailReg = document.getElementById("email-reg-input").value;
//     var emailConfirmReg = document.getElementById("emailconfirm-reg-input").value;
//     var passwordReg = document.getElementById("password-reg-input").value;
//     console.log(fullName)
//     console.log(userNameReg)
//     console.log(emailReg)
//     console.log(emailConfirmReg)
//     console.log(passwordReg)
// }


// function onMembershipJoinNow() {
//     console.log("show me text");
//     var memberGender = document.getElementById("membership-info-gender").value;
//     var memberFullName = document.getElementById("membership-fullnName").value;
//     var memberUsername = document.getElementById("membership-userName").value;
//     var memberEmail = document.getElementById("membership-email").value;
//     var memberEmailConfirm = document.getElementById("membership-Email-Confirm").value;
//     var memberPass = document.getElementById("membership-pass").value;
//     var memberDateOfBirth = document.getElementById("membership-dob").value;
//     var memberEmployment = document.getElementById("membership-employ").value;
//     var memberAboutMe = document.getElementById("membership-About-Me").value;
//     var memberILikeToMeet = document.getElementById("membership-I-likeToMeet").value;


//     console.log(memberGender);
//     console.log(memberFullName);
//     console.log(memberUsername);
//     console.log(memberEmail);
//     console.log(memberEmailConfirm);
//     console.log(memberDateOfBirth);
//     console.log(memberEmployment);
//     console.log(memberAboutMe);
//     console.log(memberILikeToMeet);

// }

