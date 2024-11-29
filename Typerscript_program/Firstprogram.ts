var sname: string = "Swapnil";
let marks: number = 90;

console.log("Student name = " + sname);

var test: any = 5;
console.log(test);

test = "Mayur";
test = 8.9;
console.log(test);

// Correct Date class usage
var joindate: Date = new Date(2025, 3, 29); // Month is 0-indexed, so 3 represents April
console.log("Join Date = " + joindate.toDateString());

// Current Date Example
var currentDate: Date = new Date();
console.log("Current Date = " + currentDate.toDateString());
