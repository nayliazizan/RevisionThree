//Create an object named person with the following properties: 
//name (a string), age (a number), and job (a string). 
//Write a function named printPersonDetails that takes 
//a person object and prints "Name: [name], Age: [age], Job: [job]".

const person1 = {};
person1.name = "Nayli";
person1.age = 23;
person1.job = "Web Developer";

const person2 = {
    name: "Farhana",
    age: 21,
    job: "Cyber Strategy Lead"
  };

let printPersonDetails = obj => {
    console.log(`Name: ${obj.name}, Age: ${obj.age}, Job: ${obj.job}`);
}

printPersonDetails(person1);
printPersonDetails(person2);