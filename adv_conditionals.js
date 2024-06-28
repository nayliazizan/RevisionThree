//Write a function named gradeClassifier that takes a score as an argument 
//and returns:
//"A" for scores 90 and above.
//"B" for scores between 80 and 89.
//"C" for scores between 70 and 79.
//"D" for scores between 60 and 69.
//"F" for scores below 60.

//cant use switch statement as it typically work with discrete values rather 
//than ranges

const gradeClassifier = score => {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(`You got ${grade} for your test!`);
}

gradeClassifier(76);
gradeClassifier(46);
gradeClassifier(96);
gradeClassifier(84);
gradeClassifier(62);