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
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML =
            "Date can not be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
            "Date can not be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
