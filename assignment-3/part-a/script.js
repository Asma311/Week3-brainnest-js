let integerOne = prompt("Enter interger 1");
let intOne = parseInt (integerOne);
let integerTwo = prompt("Enter interger 2");
let intTwo = parseInt (integerTwo);

if (isNaN(intOne) || isNaN(intTwo)) {
    console.log("Invalid input. Please enter two numbers.");
}
else if (intOne > intTwo) {
    console.log(intOne + " is larger");
} else if (intOne < intTwo) {
    console.log(intTwo + " is larger");
} else { 
    console.log("Both numbers are equal");
}

