(function(){
  var form      = document.getElementById('newPwd'); 
  var password  = document.getElementById('pwd');    
  var submit    = document.getElementById('submit');

  var submitted = false;                          
  submit.disabled = true;                           
  // submit.className = 'disabled';                   
  console.log(submit.className);
  
  // On input: Check whether or not to enable the submit button
  addEvent(password, 'input', function(e) {         
    var target = e.target || e.srcElement;        
    submit.disabled = submitted || !target.value;   
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 

  // On submit: Disable the form so it cannot be submitted again
  addEvent(form, 'submit', function(e) {           
    if (submit.disabled || submitted) {             
      e.preventDefault();                           
      return;                                     
    }                                           
    submit.disabled = true;                      
    submitted = true;                              
    submit.className = 'disabled';                  

    // Demo purposes only: What would have been sent & show submit is disabled
    e.preventDefault();                            
    alert('Password is ' + password.value);  
    console.log(password.value)      
  });
}());