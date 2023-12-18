function grading(studentMarks){
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
        return 'invalidMarks'
    }
}
console.log(grading(70))