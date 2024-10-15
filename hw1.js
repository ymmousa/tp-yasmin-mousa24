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

// DOB //
function validateDob() {
    birth = document.getElementById("birth");
    let date = new Date(birth.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

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
function
        















        
    



