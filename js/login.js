var users = [{
    "fullname": "Beaty Love",
    "username": "beautylove",
    "email": "beautylove@gmail.com",
    "password": "password"
},

{
    "fullname": "Illia man",
    "username": "calculatorman",
    "email": "calculatorman@gmail.com",
    "password": "mylove12"   
}];


function onRegisterSubmit() {
    console.log("show text")
    var regFullName = document.getElementById("registerNameInput").value;
    var regUsername = document.getElementById("registerUsernameInput").value;
    var regEmail = document.getElementById("registerEmailInput").value;
    var regEmailConfirm = document.getElementById("registerEmailConfirmInput").value;
    var regPassword = document.getElementById("registerPasswordInput").value;
    console.log(regFullName);
    console.log(regUsername);
    console.log(regEmail);
    console.log(regEmailConfirm);
    console.log(regPassword);
    users.push({
        "fullname": regFullName,
        "username": regUsername,
        "email": regEmail,
        "email confirmation": regEmailConfirm,
        "password": regPassword,
    })
    console.log(users);
}

function onSignInSubmit() {
    console.log("example of text")
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    // var chk = document.getElementById("showPwd");
    console.log(username);
    // console.log(emailInput);
    console.log(password);
    for (i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password)
         {
            alert("login successful");
            location = ("file:///H:/Bingo-Date/profiles/" + username + ".html")
        }
    
       
    }
}

function onMembershipJoinNow() {
    
    var memberGender = document.getElementById("membersGender").value;
    var memberFullName = document.getElementById("membersfullname").value;
    var memberUsername = document.getElementById("membersUsername").value;
    var memberEmail = document.getElementById("membersEmail").value;
    var memberEmailConfirm = document.getElementById("membersEmailConfirm").value;
    var memberPass = document.getElementById("password").value;
    var memberPassConfirm = document.getElementById("PassConfirm").value;
    var memberDateOfBirth = document.getElementById("membersDateOfBirth").value;
    var memberEmployment = document.getElementById("membersemploy").value;
    var memberAboutMe = document.getElementById("membershipAboutMe").value;
    var memberILikeToMeet = document.getElementById("membershipIlikeToMeet").value;
    console.log(memberGender);
    console.log(memberFullName);
    console.log(memberUsername);
    console.log(memberEmail);
    console.log(memberEmailConfirm);
    console.log(memberPass);
    console.log(memberPassConfirm);
    console.log(memberDateOfBirth);
    console.log(memberEmployment);
    console.log(memberAboutMe);
    console.log(memberILikeToMeet);
}




/*Show Password code*/

(function() {
  console.log("hello");
  var pwd = document.getElementById('passwordInput');    
  var chk = document.getElementById('showPwd'); 
  
  addEvent(chk, 'change', function(e) {         
    var target = e.target || e.srcElement;      
    try {                                      
      if (target.checked) {                     
        passwordInput.type = 'text';                      
      } else {                                  
        passwordInput.type = 'password';                 
      }
    } catch(error) {                            
      alert('This browser cannot switch type'); 
    }
  });
}());

/*Submiting form code*/

(function(){ 
  var form = document.getElementById('login'); 
  var form = document.getElementById('register1');      // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.usernameInput.value;          // Select username entered
    var msg      = 'Welcome to Bingo Date ' + username;            // Create welcome message
    document.getElementById('signInTabContent').textContent = msg; // Write welcome message
  });
}());


/* Membership textarea counter code*/
// (function () {
//   var bio      = document.getElementById('membershipAboutMe'),        // <textarea> element
//       bioCount = document.getElementById('about-count');  // Character count el

//   addEvent(bio, 'focus', updateCounter);       // Call updateCounter() on focus
//   addEvent(bio, 'input', updateCounter);       // Call updateCounter() on input

//   addEvent(bio, 'blur', function () {          // On leaving the element
//     if (bio.value.length <= 250) {             // If bio is not too long
//       bioCount.className = 'hide';             // Hide the counter
//     }
//   });

//   function updateCounter(e) {
//     var target = e.target || e.srcElement;      // Get the target of the event
//     var count = 250 - target.value.length;      // How many characters are left
//     if (count < 0) {                            // If less than 0 chars free
//       bioCount.className = 'error';             // Add class of error
//     } else if (count <= 15) {                   // If less than 15 chars free
//       bioCount.className = 'warn';              // Add class of warn
//     } else {                                    // Otherwise
//       bioCount.className = 'good';              // Add class of good
//     }
//     var charMsg = '<b>' + count + '</b>' + ' characters'; // Message to display
//     bioCount.innerHTML = charMsg;               // Update the counter element
//   }

// }());