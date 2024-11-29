var string:string[]=["abc","xyz","asd"]

console.log("using simple for loop")
for (let i = 0; i < string.length; i++) {

    console.log(string[i]);
}

// use for..of
console.log("using  for of loop")
for (let i of string) {

    console.log(i)
}

//use for..in
console.log("using  for_in loop")
for (let i in string) {

    console.log(i)
}


// var strings: string[] = ["abc", "xyz", "asd"]; // Correct variable name for better readability

// // Using simple for loop
// console.log("Using simple for loop:");
// for (let i = 0; i < strings.length; i++) {
//     console.log(strings[i]); // Access each element using index
// }

// // Using for..of loop
// console.log("Using for..of loop:");
// for (let element of strings) {
//     console.log(element); // Directly iterates over values in the array
// }

// // Using for..in loop
// console.log("Using for..in loop:");
// for (let index in strings) {
//     console.log(index + ": " + strings[index]); // Iterates over indices, use to access elements
// }
