/*
    File: hw1.js
    Name: Yasmin Mousa  
    Date Created: 2024-09-04
    Date Updated: 2024-09-21
    Version: 1.0
    Purpose: MIS 3371 Homework 1 JS File
*/

//this is the dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//this is the range slider js code//
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};



// SSN //
function validateSSN() {
    const ssn = document.getElementById("ssn").value;

// Expression that validates ssn//
    const ssn = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

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
function validateUserID() {
    uid = = document.getElementById("uid").value;
    
    // Convert UserID to lowercase //
    uid = uid.toLowerCase();

    // Redisplay UserID in lowercase //
    document.getElementById("uid").value = uid;

    if (uid.length === 0) {
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

// Password //
function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const uid = document.getElementById("uid").value;

    let errorFlag = 0;
    
    // Check password for lowercase letters //
    if (!pwd.match(/[a-z]/)) {
    document.getElementById("msg1").innerHTML = "Enter at least 1 lowercase letter";
    errorFlag = 1;
    } else {
    document.getElementById("msg1").innerHTML = "";
    }

    // Check for capital letters //
    if (!pwd.match(/[A-Z]/)) {
    document.getElementById("msg2").innerHTML = "Enter at least 1 capital letter";
    errorFlag = 1;
    } else {
    document.getElementById("msg2").innerHTML = "";
    }

    // Check for numbers //
    if (!pwd.match(/[0-9]/)) {
    document.getElementById("msg3").innerHTML = "Enter at least 1 number";
    errorFlag = 1;
    } else {
    document.getElementById("msg3").innerHTML = "";
    }

    // Check for special characters //
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
    document.getElementById("msg4").innerHTML = "Enter at least 1 special character";
    errorFlag = 1;
    } else {
    document.getElementById("msg4").innerHTML = "";
    }

    // Check for length //
    if (pwd.length <8) {
    document.getElementById("msg5").innerHTML = "Enter a minimum of 8 characters";
    errorFlag = 1;
    } else {
    document.getElementById("msg5").innerHTML = "";
    }

    // Check that password does not equal UserID //
    if (pwd == uid || pwd.includes(uid)) {
    document.getElementById("msg6").innerHTML = "Password cannot equal UserID";
    errorFlag = 1;
    } else {
    document.getElementById("msg6").innerHTML = "";
    }

    //When there are no errors, display nothing // 
    if (errorFlag === 0) {
    document.getElementById("msg3").innerHTML = "Valid Password";
    }
}

/// Confirm Password ///
function confirmPassword() {
    pwd = document.getElementById("pwd").value;
    cpwd = document.getElementById("cpwd").value;

    if (cpwd != pwd) {
    document.getElementById("cpwd-error").innerHTML = "Password does not match";
    return false;
    } else {
    document.getElementById("cpwd-error").innerHTML = "";
    return true;
    }
}














        
    



