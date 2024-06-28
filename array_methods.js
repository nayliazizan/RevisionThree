//Create an array named numbers with the values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
//Write a function named filterEvens that returns a new array containing only 
//the even numbers from the numbers array. Use the filter method.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvens = arr => {
    const newArr = numbers.filter((number) => number % 2 === 0);
    console.log(newArr);
}

filterEvens(numbers);