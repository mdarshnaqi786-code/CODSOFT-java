let subjects = [];

// ADD SUBJECT
function addSubject() {
    let name = document.getElementById("subjectName").value;

    if (name === "") return;

    subjects.push(name);

    let div = document.createElement("div");
    div.className = "subject-item";
    div.innerText = name;

    document.getElementById("subjectList").appendChild(div);

    document.getElementById("subjectName").value = "";
}

// PROCEED
function proceed() {
    if (subjects.length === 0) {
        alert("Add at least one subject!");
        return;
    }

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");

    let container = document.getElementById("marksContainer");
    container.innerHTML = "";

    subjects.forEach((sub, index) => {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = `${sub} Marks`;
        input.id = "mark" + index;

        container.appendChild(input);
    });
}

// CALCULATE
function calculate() {
    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
        let mark = Number(document.getElementById("mark" + i).value);

        if (!mark) {
            alert("Enter all marks!");
            return;
        }

        total += mark;
    }

    let average = total / subjects.length;

    let grade;

    if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F";

    document.getElementById("total").innerText = total;
    document.getElementById("average").innerText = average.toFixed(2) + "%";
    document.getElementById("grade").innerText = grade;

    // Grade color
    let gradeEl = document.getElementById("grade");
    if (grade === "A+" || grade === "A") gradeEl.style.color = "#22c55e";
    else if (grade === "F") gradeEl.style.color = "#ef4444";
    else gradeEl.style.color = "#facc15";
}

// RESET
function resetGame() {
    subjects = [];

    document.getElementById("subjectList").innerHTML = "";
    document.getElementById("marksContainer").innerHTML = "";

    document.getElementById("total").innerText = "";
    document.getElementById("average").innerText = "";
    document.getElementById("grade").innerText = "";

    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step1").classList.remove("hidden");
}