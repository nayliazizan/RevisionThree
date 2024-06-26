//Write a function named sumArray that takes an array of numbers as an argument 
//and returns the sum of all the numbers in the array. Use a for loop to iterate 
//through the array and calculate the sum.

let sumArray = arr => {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([3,3,3]));
console.log(sumArray([4,3,3]));