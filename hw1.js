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






