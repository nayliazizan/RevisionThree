//Create an array named fruits that contains the following fruits: 
//"apple", "banana", "cherry". Write a function named printFruits 
//that loops through the array and prints each fruit.

const fruits = ["apple", "banana", "cherry"];
const cars = ["Saab", "Volvo", "BMW"];

let printFruits = arr => {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

printFruits(fruits);
printFruits(cars);