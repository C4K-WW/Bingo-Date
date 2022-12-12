(function () {
  var $birth = $('#membersDateOfBirth');      // D-O-B input
  var $ageConsent = $('#agesconsent');         // Consent checkbox
  var $ageConsentContainer = $('#agesConsentContainer');     // Checkbox container

  // Create the date picker using jQuery UI
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
    // dateFormat: 'dd-mm-yy'
  });

  $birth.on('blur change', checkDate);                 // D-O-B loses focus

  function checkDate() {                               // Declare checkDate()
    var dob = this.value.split('-');                   // Array from date
    // Pass toggleParentsConsent() the date of birth as a date object
    toggleAgeConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleAgeConsent(date) {                 // Declare function
    if (isNaN(date)) return;                            // Stop if date invalid
    var now = new Date();                               // New date obj: today
    // If diff less than 18 years (ms * seconds * mins * hours * days * years)
    // does not account for leap years!
    // if the user is less than 18 we show parents consent tickbox
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 18)) { 
      $ageConsentContainer.removeClass('hide');            // Remove hide class
      $ageConsent.focus();                          // Give it focus
    } else {                                            // Otherwise
      $ageConsentContainer.addClass('hide');               // Add hide to class
      $ageConsent.prop('checked', false);           // Set checked to false
    }
  }
}());