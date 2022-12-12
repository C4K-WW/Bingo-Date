(function () {
  var bio      = document.getElementById('membershipAboutMe');      // <textarea> element
      bioCount = document.getElementById('about-count');  // Character count el

  addEvent(bio, 'focus', updateCounter);       // Call updateCounter() on focus
  addEvent(bio, 'input', updateCounter);       // Call updateCounter() on input

  addEvent(bio, 'blur', function () {          // On leaving the element
    if (bio.value.length <= 250) {             // If bio is not too long
      bioCount.className = 'hide';             // Hide the counter
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;      // Get the target of the event
    var count = 250 - target.value.length;      // How many characters are left
    if (count < 0) {                            // If less than 0 chars free
      bioCount.className = 'error';             // Add class of error
    } else if (count <= 15) {                   // If less than 15 chars free
      bioCount.className = 'warn';              // Add class of warn
    } else {                                    // Otherwise
      bioCount.className = 'good';              // Add class of good
    }
    var charMsg = '<b>' + count + '</b>' + ' characters'; // Message to display
    bioCount.innerHTML = charMsg;               // Update the counter element
  }

}());

(function () {
  var bio      = document.getElementById('membershipIlikeToMeet'),        // <textarea> element
      bioCount = document.getElementById('meet-count');  // Character count el

  addEvent(bio, 'focus', updateCounter);       // Call updateCounter() on focus
  addEvent(bio, 'input', updateCounter);       // Call updateCounter() on input

  addEvent(bio, 'blur', function () {          // On leaving the element
    if (bio.value.length <= 250) {             // If bio is not too long
      bioCount.className = 'hide';             // Hide the counter
    }
  });




  function updateCounter(e) {
    var target = e.target || e.srcElement;      // Get the target of the event
    var count = 250 - target.value.length;      // How many characters are left
    if (count < 0) {                            // If less than 0 chars free
      bioCount.className = 'error';             // Add class of error
    } else if (count <= 15) {                   // If less than 15 chars free
      bioCount.className = 'warn';              // Add class of warn
    } else {                                    // Otherwise
      bioCount.className = 'good';              // Add class of good
    }
    var charMsg = '<b>' + count + '</b>' + ' characters'; // Message to display
    bioCount.innerHTML = charMsg;               // Update the counter element
  }

}());






