

// let i: number = 5; // Number of rows

// while (i >= 1) {
//     let row: string = "";
//     let j: number = 5; // Start from 5
//     while (j >= 6 - i) { // Adjust the inner loop condition
//         row += j + " ";
//         j--;
//     }
//     console.log(row);
//     i--;   
// }


// *************************************


// array decelatrion 

var list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// using simple for loop
console.log("using simple for loop")
for (let i = 0; i < list.length; i++) {

    console.log(list[i]);
}

// use for..of
console.log("using  for of loop")
for (let i of list) {

    console.log(i)
}

//use for..in
console.log("using  for_in loop")
for (let i in list) {

    console.log(i)
}