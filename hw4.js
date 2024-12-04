/*
    File: hw4.js
    Name: Yasmin Mousa  
    Date Created: 2024-09-04
    Date Updated: 2024-12-04
    Version: 4.0
    Purpose: MIS 3371 Homework 4 JS File
*/

//this is the dynamic date js code//
window.onload = function() {
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;
}

//this is the range slider js code//
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validation js code//
function validateFname(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name field is empty//
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (fname != "") {
          if (!fname.match(namePattern)) { //checks if first name matches pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { //checks if name is at least 1 character
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 2 characters.";
        return false;
     } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
     } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//middle name initial validation js code//
function validateMname(){
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]+$/;

    //makes middle initial uppercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    
    //checks if middle initial is one character//
  if (!mname.match (namePattern)) {
      document.getElementById("mname-error").innerHTML = "Middle initial must be one single uppercase letter.";
      return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//last name validation js code//
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if last name field is empty//
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) { //checks if last name matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks if name is at least 1 character
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 2 characters.";
        return false;
     } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
     } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

// DOB //
function validateDob() {
    birth = document.getElementById("birth");
    let date = new Date(birth.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear()-120);

    if (date > new Date()) {
        document.getElementById("birth-error").innerHTML =
            "Date can not be in the future.";
        birth.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("birth-error").innerHTML =
            "Date can not be more than 120 years ago.";
        birth.value = "";
        return false;
    } else {
        document.getElementById("birth-error").innerHTML = "";
        return true;
    }
}

// SSN //
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

// Regex expression that validates ssn//
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML =
        "Please enter a valid Social Security Number. (e.g 123-45-6789)";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// UserID //
function validateUserId() {
    uid = document.getElementById("uid").value;
    
    // Convert UserID to lowercase //
    uid = uid.toLowerCase();

    // Redisplay UserID in lowercase //
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
    document.getElementById("uid-error").innerHTML = "UserID can not be empty.";
    return false;
    }

// Check that UserID does not start with number //
    if (!isNaN(uid.charAt(0))) {
    document.getElementById("uid-error").innerHTML = "UserID can not start with a number.";
    return false;
    }

    // Check that UserID only contains letters, numbers, or underscores //
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uid)) {
    document.getElementById("uid-error").innerHTML = "UserID can only contain letters, numbers, or underscores.";
    return false;
    } else if (uid.length < 5) {
    document.getElementById("uid-error").innerHTML = "UserID must be at least 5 characters.";
    return false;
    } else if (uid.length > 30) {
    document.getElementById("uid-error").innerHTML = "UserID must not exceed 30 characters.";
    return false;
    } else {
        // If all requirements are satisfied, UserID is valid //
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

// Email validation //
function validateEmail() {
    email = document.getElementById("email").value;
    // var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address."
        return false;
    } else {
         document.getElementById("email-error").innerHTML = "";
         return true;
    }
}


// Password validation //
function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const uid = document.getElementById("uid").value;
    
// sets up and initializes array //
    const errorMessage = [];
    
    // Check password for lowercase letters //
    if (!pwd.match(/[a-z]/)) {
    errorMessage.push("Enter at least 1 lowercase letter.");
    }

    // Check for uppercase letters //
    if (!pwd.match(/[A-Z]/)) {
    errorMessage.push("Enter at least 1 uppercase letter.");
    }

    // Check for numbers //
    if (!pwd.match(/[0-9]/)) {
    errorMessage.push("Enter at least 1 number.");
    }

    // Check for special characters //
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
    errorMessage.push("Enter at least 1 special character.");
    }

    // Check for length //
    if (pwd.length <8) {
    errorMessage.push("Enter a minimum of 8 characters.");
    }

    // Check that password does not equal UserID //
    if (pwd == uid || pwd.includes(uid)) {
    errorMessage.push("Password cannot equal UserID.");
    }

    //When there are no errors, display nothing // 
    const errorContainer = document.querySelector(".pwd-message");
    errorContainer.innerHTML = errorMessage
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
    }

/// Confirm Password validation ///
function confirmPassword() {
    const pwd = document.getElementById("pwd").value;
    const cpwd = document.getElementById("cpwd").value;

    const confirmError = document.getElementById("cpwd-error");
    if (pwd !== cpwd) {
        confirmError.innerHTML = "Passwords do not match.";
        return false;
    } else {
        confirmError.innerHTML = "Passwords match.";
        return true;
    }
}

// Address 1 Validation //
function validateAddress1() {
    var addr1 = document.getElementById("addr1").value;
    console.log(addr1);
    console.log(addr1.length);

    if (addr1.length <2) {
        document.getElementById("addr1-error").innerHTML = "Please enter address on address line.";
        return false;
    } else {
        document.getElementById("addr1-error").innerHTML = "";
        return true;
    }
}

// City validation code //
function validateCity() {
    city = document.getElementById("city").value.trim();

    if(!city) {
       document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Zipcode validation code // 
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,""); // removes non-number and non-dash characters

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Enter valid zip code.";
        return false;
    } 
    if (zip.length > 5) {
        zip = zip.slice(0,5); //removes all digits after first 5
    }
        zipInput.value = zip;
        document.getElementById("zip-error").innerHTML = "";
    return true;
}

// Phone validation //
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/[^\d-]/g,""); //

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}
    
// Re-display user input back to user aka review button //
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
           let datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class = 'outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align = 'right'" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
            
                    
         }
     }
    if (formoutput.length > 0) {
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

// remove user input //
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when necessary js code//
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

//validate all the information on the form //
function validateInfo() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
     if (!validateMname()) {
        valid = false;
    }
     if (!validateLname()) {
        valid = false;
    }
     if (!validateDob()) {
        valid = false;
    }
     if (!validateSsn()) {
        valid = false;
    }
     if (!validateUserId()) {
        valid = false;
    }
     if (!validateEmail()) {
        valid = false;
    }
     if (!validatePassword()) {
        valid = false;
    }
     if (!confirmPassword()) {
        valid = false;
    }
     if (!validateAddress1()) {
        valid = false;
    }
     if (!validateCity()) {
        valid = false;
    }
     if (!validateZip()) {
        valid = false;
    }
     if (!validatePhone()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

//cookie for automatic info input on form//
function setCookie (name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt (0) == ' ' {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0 {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return " ";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "mname", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "birth", cookieName: "dob"},
    {id: "ssn", cookieName: "ssn"},
    {id: "uid", cookieName: "userID"},
    {id: "email", cookieName: "email"},
    {id: "addr1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zip", cookieName: "zipCode"},
    {id: "phone", cookieName: "phone"},
]

inputs.forEach(function(input)) {
    var inputElement = document.getElementbyId(input.id);

    //prefill input fields with value from the cookie
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !==" ") {
        inputElement.value = cookieValue;
    }

    //set a cookie with the input value when the input field changes
    inputElement.addEventListener("input", function(){
        setCookie(input.cookieName, inputElement.value, 30);
    });

    //welcome user with name + message when cookie is set
    var firstName = getCookie("firstName");
    if (firstName !== " ") {
        document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!" </br>";
        document.getElementById("welcome2").innerHTML = 
            "<a href= '#' id='new-user'> Not " + firstName + "? Click here to start a new form. </a>";
         document.getElementById("new-user").addEventListener = ("click", function() {
             inputs.forEach(function(input) {
                 setCookie(input.cookieName, "", -1);
             })
             location.reload();
         })
    }
    
        
            
    

    

                        












        
    



