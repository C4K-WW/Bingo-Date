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
  

        // var usernames = []
    for (i = 0; i < profile.length; i++) {
        var userNameInfo = profile[i].children[1].innerText;
        var genderInfo = profile[i].children[3].innerText;
        var ageInfo = profile[i].children[2].innerText.trim();        
        var age = ageInfo.substring(ageInfo.length -2);
        let userNameMatches = username === "" || (userNameInfo.indexOf(username) != -1)
        var genderMatches = selectedGenders.length === 0 || selectedGenders.some(gender => genderInfo.indexOf(gender) != -1)
        // var ageMatches = age 
        
        var ageLessThanMax =  age < maxAge; // (age is between minAge and maxAge)
        var ageGreaterThanMin = age > minAge;// age is greater than minAge

        var ageMatches = ageLessThanMax && ageGreaterThanMin; 

        // find profile children 3 inner text and call it genderInfo
        // if (userNameInfo.indexOf(username) != -1)  && ()
        if (userNameMatches && genderMatches && ageMatches /* && ageMatches */) {
            profile[i].parentNode.style.display = "block";
        } else {
            profile[i].parentNode.style.display = "none";
        }
    }
}

$(document).ready(function(){
	var $age = $('#age');
    $age.css('color', 'blue');
    var $agesRange = $('#ages-range');

    $("#ages-range").slider({
        range: true,
        min: 25,
        max: 90,
        values: [25, 90],
        slide: function(event, ui) {
            $age.val(ui.values[0] + ' - ' + ui.values[1]);
        }
    });
    $age
        .val($agesRange.slider('values', 0) +
            ' - ' + $agesRange.slider('values', 1));

});



