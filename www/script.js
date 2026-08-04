let score = Number(localStorage.getItem("score")) || 0;
let answered = false;

function selectAnswer(button){

    if(answered) return;

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn=>{
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    answered = true;
if (button.dataset.correct === "true") {
    score++;
    localStorage.setItem("score", score);
}
// Save answer

const page = window.location.pathname
.split("/")
.pop()
.replace(".html","");

const answer =
button.textContent.trim().charAt(0);

let answers =
JSON.parse(localStorage.getItem("answers")) || {};

answers[page] = answer;

localStorage.setItem(
"answers",
JSON.stringify(answers)
);
    // Enable Next button
    document.getElementById("nextBtn").disabled = false;
}