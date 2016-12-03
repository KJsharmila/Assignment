function UserValidator() {

 jQuery.validator.addMethod("pswd_match",function (value,element){
  return $("#signup_password").val() == $('#password_confirmation').val();
});

 jQuery.validator.addMethod("alpha", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z ]+$/);
});

 $('#register').validate({
  debug: true,
  rules: {
  "user[name]": {
    required:true,
    minlength: 2,
    alpha:true
  },
  "user[email]": {
     email: true,
     required: true,
     remote:"/users/check_email"
  },
  "user[password]" : {
    required: true,
    minlength: 6,
    maxlength: 10
  },
  "user[password_confirmation]": {
    required:true,
    equalTo: "#user_password",
    pswd_match: true
  }
},

errorElement: "span",

errorClass: "help-block",

messages: {
 "user[name]":{
  required: "Name is required",
  alpha:"Should contain only alphabets"
},
"user[email]": {
  required: "Email is required",
  email: "Please enter a valid E-Mail address!",
  remote: "Email has been already taken"
},
"user[password]": {
  required:"Password is required",
  minlength:"Enter minimum 6 characters!",
  maxlength: "Exceeded length!"
},
"user[password_confirmation]": {
  required: "Password confirmation is required",
  equalTo:"Passwords do not match!",
  pswd_match: "Bingo! It's a match"
}
},

highlight: function(element) {
 $(element).parent().parent().addClass("has-error");
},

unhighlight: function(element) {
 $(element).parent().parent().removeClass("has-error");
},

invalidHandler: function(event, validator) {
        // 'this' refers to the form
        var errors = validator.numberOfInvalids();
        if (errors) {

          // Populating error message
          var errorMessage = errors == 1
          ? 'You missed 1 field. It has been highlighted'
          : 'You missed ' + errors + ' fields. They have been highlighted';

          // Removing the form error if it already exists
          $("#div_user_js_validation_error").remove();

          errorHtml = "<div id='div_user_js_validation_error' class=\"alert alert-danger\" data-alert=\"alert\" style=\"margin-bottom:5px;\">"+ errorMessage +"</div>"
          //$("#div_user_details").prepend(errorHtml);
          $("#div_modal_generic div.modal-body-main").prepend(errorHtml);

          // Show error labels
          $("div.error").show();

        } else {
          // Hide error labels
          $("div.error").hide();
          // Removing the error message
          $("#div_user_js_validation_error").remove();
        }

      },
      submitHandler: function(form) {
      
       form.submit();
      }
     });

}

// Util functions
 
function updatePreview(title, description){
   $("#title_span").html("<b>Title: </b>" + title);
   $("#description_span").html("<b>Description: </b>"+description);
 }
 function generalPreview(title, description){
   $("#title_span").html("<b>Title: </b>" + title);
   $("#description_span").html("<b>Description: </b>"+description);
 }
