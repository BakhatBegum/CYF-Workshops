// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
    const cyfLocations = ["Birmingham", "Cape Town", "Glasgow", "London", "Manchester"];
    return cyfLocations.includes(person.location);
}

const mo = {
    "name": "Mo",
    "city": "Glasgow",
    "focus": "React",
};

const sayed = {
    "name": "Sayed",
    "city": "Edinburgh",
    "focus": "SQL",
}

console.assert(checkLivesNearCYF(mo)); //true
console.assert(!checkLivesNearCYF(sayed)); //false


//ANS1; As because the code is look correct for me. So the output of the log for 'mo' will be true and 'sayed' will be false. 
//ANS2; it will bring an output of true for mo and false to sayed.