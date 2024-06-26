//Write a function named checkAge that takes an age as an argument and prints:
//"You are a minor." if the age is less than 18.
//"You are an adult." if the age is 18 or older.

let checkAge = age => {
    if (age < 18) {
        console.log("You are a minor");
    } else {
        console.log("You are an adult");
    }
}

checkAge(13);
checkAge(18);
checkAge(23);