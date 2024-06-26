//Write a function named calculateArea that takes two parameters: width and height. 
//Inside the function, declare a variable named area that stores the product of 
//width and height. Print the value of area and make sure it is accessible only 
//within the function.

let calculateArea = (width, height) => {
    let area = width * height;
    return area; // remove this "return" and it will prints undefined
}

console.log(calculateArea(2, 5));