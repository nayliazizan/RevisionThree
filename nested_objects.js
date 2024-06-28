//Create an object named student with the following properties:
//- name (a string)
//- age (a number)
//- grades (an object with properties math, science, and english, 
//each containing a number)
//Write a function named printStudentGrades that takes a student object and 
//prints "Math: [math grade], Science: [science grade], English: [english grade]".

const student = {
    name: "Nayli",
    age: 23,
    grades: {
        math: 90,
        science: 65,
        english: 80
    }
};

const printStudentGrades = obj => {
    console.log(`Card Report for ${obj.name}: `)
    console.log(`Math: ${obj.grades.math}, Science: ${obj.grades.science}, English: ${obj.grades.english}`);
}

printStudentGrades(student);