//Diagonal of a square
let squareRootOfTwo = 1.414;
let oneSide = 9;
let diagonal = squareRootOfTwo*oneSide;
console.log("a. DIAGONAL OF A SQUARE");
console.log("   Diagonal of a square with 9 units of length = " + diagonal);
console.log("    ");

//Area of triangle 
console.log("b. AREA OF A TRIANGLE");
let a = 5;
let b = 6;
let c = 7;
let s = (a+b+c)/2;
let area =  Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log("The area of a triangle = " + area);
console.log("  ");

//Circumference and surface area of a circle
let r = 4;
let circumference = 2 * Math.PI * r;
console.log("c. CIRCUMFERENCE AND SURFACE AREA OF A CIRCLE");
console.log("Circumference of the circle having radius 4 = " + circumference);
let surfaceArea = Math.PI * Math.pow(r,2);
console.log("Surface area of the circle having radius of 4 = " + surfaceArea);





