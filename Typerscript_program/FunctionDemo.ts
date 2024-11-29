// function without parameter
function displaydata() {
    console.log("Hello, I am a function without parameter");
}
function stringData():string{
    console.log("Hello world");
    return "Hello, I am a function with return type string";
}


// function with parameter
function displaydata2(name) {
    console.log("Hello, I am a function with parameter and my name is " + name);
}


export function add(num:number, num1:number){
console.log(num+num1)
}

/// var args (num num num...............) type
export function add2(num:number, num1:number, num2?:number){
    console.log(num+num1)
    }

// calling the function
displaydata();
displaydata2("John");
add(5,6)
stringData();

