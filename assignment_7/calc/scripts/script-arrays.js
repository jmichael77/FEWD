var arr1 = [1, "javascript", false, []];
var students = ["Rosa", "Ali", "James", "Marine", "Luke", "Mia", "Virgina"];

// alert(students[1]);

function sayHelloToStudents() {
  for(var i=0; i < students.length; i++) {
    console.log("Hello " + students[i] + " index " + i)
  }
}

function addStudentsToClassroom() {
  var studentName = prompt("what is the student name?");
  students.push(studentName)
}

while(students.length < 10) {
  addStudentsToClassroom()
  sayHelloToStudents()
}
alert("class is too big");
