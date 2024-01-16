// Function to assign grades based on student marks
function grading(studentMarks){
    // Check the range of student marks and assign grades accordingly

    // If student marks are less than 0 or greater than 100, return 'invalidMarks'
    if (studentMarks < 40) {
        return 'E'
     }else if (studentMarks>= 40 && studentMarks <49){
        return 'D'
     } else if (studentMarks >=49 && studentMarks<59){
        return 'C'
     } else if (studentMarks >=59 && studentMarks<79){
        return 'B'
    }else if (studentMarks >=79 && studentMarks<=100){
        return 'A'
    }else{
        // Handle any unexpected case with a default return statement
        return 'invalidMarks'
    }
}// Example usage of the function and logging the result
console.log(grading(70))