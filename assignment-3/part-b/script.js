let num = parseInt(prompt("Enter an Integer"));

if (isNaN(num)) {
    console.log("Invalid input. Please enter an integer.");
} else if( num % 2 == 0){
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}