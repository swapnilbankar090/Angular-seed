//calculateTotal()
//amt
//qty
//dis
/*

function calculateTotal(amt: number, qty: number, dis?: number) {
    let total = amt * qty;
    if (dis) {
        total = total - (total * dis / 100);
        console.log(total)
    }else{
        console.log(total)
    }
    
    return total;
}
//calculateTotal(100, 2, 10)
calculateTotal(100, 2)

*/
/*
 create a ts program that expores various feacture such as

1>  create an array that include a list of sport such as "cricket", "badminton ", "swimming","Tennis"
    ,"Football". write code to search a paricular sport in the array
2>  use the above created array to print each element in the array using for-of-loop.
3>  use the above created array to  add, modify and remove element in the array
4>  Define a function that finds sum and average of 3 number

*/
/*
   if (sports.indexOf(sportName) !== -1) {
       console.log(`${sportName} is available in the list`
       );
   } else {
       console.log(`${sportName} is not available in the list`
       );
   }
       */
/*
let sports = ["cricket", "badminton", "swimming", "Tennis", "Football"];

function searchSport(sportName: string) {
let found = false;
for (let i = 0; i < sports.length; i++) {
  if (sports[i] === sportName) {
      found = true;
      break;
  }
}
if (found) {
  console.log(`${sportName} is found in the array.`);
} else {
  console.log(`${sportName} is not found in the array.`);
}
}


searchSport("cricket");
searchSport("badminton");
searchSport("Football");
searchSport("basketball");
searchSport("Tennis");

// Using for-of loop to print each element in the array
console.log("\nList of sports:");
for (let sport of sports) {
console.log(sport);
}
sports.push("Rugby");
sports[0] = "Hockey";
sports.splice(1, 1);
console.log("\nUpdated sports list:");
console.log(sports);

function findSumAndAverage(num1: number, num2: number, num3: number) {
let sum = num1 + num2 + num3;
let average = sum / 3;
console.log(`\nSum of three numbers is ${sum} and average is ${average}`);
}

findSumAndAverage(10, 20, 30);
*/
/* */
//write a function to calculate total of 5 marks pass array of 5 (argyments,return)
function calculateTotal(marks) {
    var total = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var mark = marks_1[_i];
        total += mark;
    }
    return total;
}
/*  */
//write a funtion to calculate percentage of marks(argument,return)
function calculatePercentage(total, totalMarks) {
    return (total / (totalMarks * 5)) * 100;
}
/* */
//write a function to find out grades from percentage (argument,return)
function findGrade(percentage) {
    if (percentage >= 80) {
        return "A";
    }
    else if (percentage >= 60) {
        return "B";
    }
    else if (percentage >= 40) {
        return "C";
    }
    else {
        return "F";
    }
}
/*  */
// Function to display student details
function displayStudentDetails(name, rollNo, marks, totalMarksPerSubject) {
    var total = calculateTotal(marks);
    var percentage = calculatePercentage(total, totalMarksPerSubject);
    var grade = findGrade(percentage);
    console.log("Student Name: ".concat(name)
        + "\nRoll No: ".concat(rollNo)
        + "\nMarks: ".concat(marks.join(", "))
        + "\nTotal Marks: ".concat(total)
        + "\nPercentage: ".concat(percentage.toFixed(2), "%")
        + "\nGrade: ".concat(grade));
}
// Example usage
var marks = [45, 56, 78, 90, 23];
displayStudentDetails("Rahul", 1, marks, 100);
