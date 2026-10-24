const students = ["omar","ahmed","mohamed","abdulrahman","ismail"]
const studentslist = document.getElementById("list");
students.forEach((student) => {
    const li = document.createElement("li")
    li.textContent = student;
    studentslist.appendChild(li)
})
