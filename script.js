var form = document.getElementById("form")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var cpassword = document.getElementById("cpassword")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
})


function validateInputs(){
    var usernameVal = username.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();
    var cpasswordVal = cpassword.value.trim();

    let success = true

    if(usernameVal === ''){
        success = false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailVal === ''){
        success = false
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success = false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false
        setError(password,'Password should be 8 characters')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal === ''){
        success = false
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false
        setError(cpassword,"Password does not match")
    }
    else{
        setSuccess(cpassword)
    }

    if (success) {
        alert("Registration successful!");
        document.getElementById("form").reset();
      }
}

function setError(element,message){
    var formgroup = element.parentElement;
    var errorElement = formgroup.querySelector('.error')

    errorElement.innerText = message;
    formgroup.classList.add('error')
    formgroup.classList.remove('success')
}

function setSuccess(element,message){
    var formgroup = element.parentElement;
    var errorElement = formgroup.querySelector('.error')

    errorElement.innerText = '';
    formgroup.classList.add('success')
    formgroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
