
/* This is an array/for loop for Sex/Gender */
var document;
var i;
var sex1 = ["Male", "Female", "N/A"];
var question1 = document.getElementById("sex");
for (i = 0; i < sex1.length; i++) {
    var opt1 = document.createElement("option");
    opt1.innerHTML = sex1[i];
    opt1.value     = sex1[i];
    question1.appendChild(opt1);   
}

var states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];
var question8 = document.getElementById("united_states");
for (i = 0; i < states.length; i++) {
    var opt8 = document.createElement("option");
    opt8.innerHTML = states[i];
    opt8.value     = states[i];
    question8.appendChild(opt8);  
}


/* This is an array/for loop for previous employement */
var yesOrNo = ["Yes", "No"];
var question = document.getElementById("yesOrNoQuestion");
for (i = 0; i < yesOrNo.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = yesOrNo[i];
    opt.value     = yesOrNo[i];
    question.appendChild(opt);   
}

/* This is an array/for loop for relocation */
var relocation = ["Yes", "No"];
var question2 = document.getElementById("relocate");
for (i = 0; i < relocation.length; i++) {
    var opt2 = document.createElement("option");
    opt2.innerHTML = relocation[i];
    opt2.value     = relocation[i];
    question2.appendChild(opt2);   
}

/* This is an array/for loop for legal United */
var legal_united = ["Yes", "No"];
var question5 = document.getElementById("legal1");
for (i = 0; i < legal_united.length; i++) {
    var opt5 = document.createElement("option");
    opt5.innerHTML = legal_united[i];
    opt5.value     = legal_united[i];
    question5.appendChild(opt5);   
}
/* This is an array/for loop for legal Canda */
var legal_canada = ["Yes", "No"];
var question6 = document.getElementById("legal2");
for (i = 0; i < legal_united.length; i++) {
    var opt6 = document.createElement("option");
    opt6.innerHTML = legal_canada[i];
    opt6.value     = legal_canada[i];
    question6.appendChild(opt6);   
}




/* This is an array/for loop for education level */
var degreeEducation = ["Haven't been to School/College", "Below High School Level", "High School Diploma", "Some College", "Bachelor Degree", "Master Degree", "PhD Level"];
var question3 = document.getElementById("education");
for (i = 0; i < degreeEducation.length; i++) {
    var opt3 = document.createElement("option");
    opt3.innerHTML = degreeEducation[i];
    opt3.value     = degreeEducation[i];
    question3.appendChild(opt3);   
}