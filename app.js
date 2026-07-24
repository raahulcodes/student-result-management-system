let students = [
    { name: "Rahul", marks: 85, course: "JavaScript" },
    { name: "Priya", marks: 72, course: "Python" },
    { name: "Amit", marks: 91, course: "JavaScript" },
    { name: "Sneha", marks: 64, course: "Java" }
];

// 1. Displaying Every Student's Complete Information
students.forEach(student=>
{
    console.log("Name: " + student.name + " Marks: " + student.marks + " Course: " + student.course);
}
)

// 2. Creating a new Array that consist of only student's name
let studentsName = students.map(student=>student.name);
console.log(studentsName);

// 3. Creating another array where i will increase marks by 5
let studentMarks = students.map(student=>student.marks+5);
console.log(studentMarks);

// 4. Creating an array that consists of only course names
let studentCourses = students.map(student=>student.course);
console.log(studentCourses);

// 5. Now creating an array object with pass and fail field for a student 
let studentFinal = students.map(student=>
{
    return{
        name: student.name,
        marks: student.marks,
        result: student.marks>70? "Pass" : "Fail"
    }
}
)
console.log(studentFinal);

// 6. Creating an array of strings
let studentResult = students.map(student=>
{
    return student.name + " scored " + student.marks + " marks.";
}
)
console.log(studentResult);

// 7. Converting Student Name to uppercase
let studentNames = students.map(student=>student.name.toUpperCase());
console.log(studentNames);

// 8. now adding a grade
let studentGrades = students.map(student=>
{
        let grade;
        if(student.marks>=90)
        {
            grade = "A";
        }

        else if(student.marks<90 && student.marks>=80)
        {
            grade = "B";
        }

        else if(student.marks<80 && student.marks>=70)
        {
            grade = "C";
        }

        else 
        {
            grade = "D";
        }

        return {
            name: student.name,
            marks: student.marks,
            course: student.course,
            grade: grade
        };
}
)

console.log(studentGrades);

// 9. creating a new array with only marks and course fields
let studentFields = students.map(student=>
{
    return {
        marks:student.marks,
        course:student.course
    }
}
)

console.log(studentFields);
