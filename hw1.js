/*
    File: hw1.js
    Name: Yasmin Mousa  
    Date Created: 2024-09-04
    Date Updated: 2024-09-21
    Version: 1.0
    Purpose: MIS 3371 Homework 1 JS File
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


// DOB //
function validateDob() {
    birth = document.getElementById("birth");
    let date = new Date(birth.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear()-120);

    if (date > new Date()) {
        document.getElementById("birth-error").innerHTML =
            "Date can not be in the future";
        birth.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("birth-error").innerHTML =
            "Date can not be more than 120 years ago";
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
        "Please enter a valid Social Security Number (e.g 123-45-6789)";
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
    document.getElementById("uid-error").innerHTML = "UserID can not be empty";
    return false;
    }

// Check that UserID does not start with number //
    if (!isNaN(uid.charAt(0))) {
    document.getElementById("uid-error").innerHTML = "UserID can not start with a number";
    return false;
    }

    // Check that UserID only contains letters, numbers, or underscores //
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uid)) {
    document.getElementById("uid-error").innerHTML = "UserID can only contain letters, numbers, or underscores";
    return false;
    } else if (uid.length < 5) {
    document.getElementById("uid-error").innerHTML = "UserID must be at least 5 characters";
    return false;
    } else if (uid.length > 30) {
    document.getElementById("uid-error").innerHTML = "UserID must not exceed 30 characters";
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
        document.getElementById("email-error").innertHTML = "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innertHTML = "Please enter a valid email address"
        return false;
    } else {
         document.getElementById("email-error").innertHTML = "";
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
    errorMessage.push("Enter at least 1 lowercase letter");
    }

    // Check for uppercase letters //
    if (!pwd.match(/[A-Z]/)) {
    errorMessage.push("Enter at least 1 uppercase letter");
    }

    // Check for numbers //
    if (!pwd.match(/[0-9]/)) {
    errorMessage.push("Enter at least 1 number");
    }

    // Check for special characters //
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
    errorMessage.push("Enter at least 1 special character");
    }

    // Check for length //
    if (pwd.length <8) {
    errorMessage.push("Enter a minimum of 8 characters");
    }

    // Check that password does not equal UserID //
    if (pwd == uid || pwd.includes(uid)) {
    errorMessage.push("Password cannot equal UserID");
    }

    //When there are no errors, display nothing // 
    const errorContainer = document.querySelector(".pwd-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => '<span>{$message}</span><br/>')
    .join("");
    }

/// Confirm Password validation ///
function confirmPassword() {
    pwd1 = document.getElementById("pwd").value;
    pwd2 = document.getElementById("cpwd").value;

    if (pwd1 != pwd2) {
    document.getElementById("cpwd-error").innerHTML = "Password does not match";
    return false;
    } else {
    document.getElementById("cpwd-error").innerHTML = "Passwords match";
    return true;
    }
}

// Address 1 Validation //
function validateAddress1() {
    var addr1 = document.getElementById("addr1").value;
    console.log(addr1);
    console.log(addr1.length);

    if (addr1.length <2) {
        document.getElementId("addr1-error").innerHTML = "Please enter something on address line";
        return false;
    } else {
        document.getElementId("addr1-error").innerHTML = "";
        return true;
    }
}


// Zipcode validation code // 
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,""); // removes non-number and non-dash characters

    if (!zip) {
        document.getElementId("zip-error").innerHTML = "Zip code cannot be left blank.";
        return false;
    } 
    if (zip.length > 5) {
        zip = zip.slice(0,5); //removes all digits after first 5
    }
        zipInput.value = zip;
        document.getElementId("zip-error").innerHTML = "";
    return true;
}

// Phone validation //
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/[^\d-]/g,""); //

    if (phone.length !== 10) {
        document.getElementId("phone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "=" + phone.slice(3,6) + "=" + phone.slice(6)
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
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox";
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio";
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align = 'right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
            
                    
         }
     }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

// remove user input //
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

                        












        
    



