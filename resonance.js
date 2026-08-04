// Load user's answers
const answers = JSON.parse(localStorage.getItem("answers")) || {};

let score = 0;

// ==============================
// My Answers (110 Reflections)
// ==============================

const myAnswers = {

    // ---------- Chapter 1 ----------
    "chapter1":"C",
    "chapter1-2":"B",
    "chapter1-3":"A",
    "chapter1-4":"C",
    "chapter1-5":"A",
    "chapter1-6":"B",
    "chapter1-7":"D",
    "chapter1-8":"B",
    "chapter1-9":"A",
    "chapter1-10":"D",

    // ---------- Chapter 2 ----------
    "chapter2":"B",
    "chapter2-2":"A",
    "chapter2-3":"B",
    "chapter2-4":"B",
    "chapter2-5":"A",
    "chapter2-6":"A",
    "chapter2-7":"B",
    "chapter2-8":"D",
    "chapter2-9":"A",
    "chapter2-10":"D",

    // ---------- Chapter 3 ----------
    "chapter3":"A",
    "chapter3-2":"A",
    "chapter3-3":"C",
    "chapter3-4":"B",
    "chapter3-5":"D",
    "chapter3-6":"C",
    "chapter3-7":"A",
    "chapter3-8":"B",
    "chapter3-9":"D",
    "chapter3-10":"C",

    // ---------- Chapter 4 ----------
    "chapter4":"C",
    "chapter4-2":"D",
    "chapter4-3":"C",
    "chapter4-4":"C",
    "chapter4-5":"A",
    "chapter4-6":"C",
    "chapter4-7":"C",
    "chapter4-8":"A",
    "chapter4-9":"B",
    "chapter4-10":"C",

    // ---------- Chapter 5 ----------
    "chapter5":"C",
    "chapter5-2":"C",
    "chapter5-3":"B",
    "chapter5-4":"C",
    "chapter5-5":"A",
    "chapter5-6":"A",
    "chapter5-7":"C",
    "chapter5-8":"D",
    "chapter5-9":"B",
    "chapter5-10":"C",

    // ---------- Chapter 6 ----------
    "chapter6":"B",
    "chapter6-2":"C",
    "chapter6-3":"D",
    "chapter6-4":"D",
    "chapter6-5":"D",
    "chapter6-6":"C",
    "chapter6-7":"B",
    "chapter6-8":"C",
    "chapter6-9":"D",
    "chapter6-10":"B",

    // ---------- Chapter 7 ----------
    "chapter7":"D",
    "chapter7-2":"B",
    "chapter7-3":"D",
    "chapter7-4":"D",
    "chapter7-5":"C",
    "chapter7-6":"B",
    "chapter7-7":"C",
    "chapter7-8":"D",
    "chapter7-9":"C",
    "chapter7-10":"D",

    // ---------- Chapter 8 ----------
    "chapter8":"C",
    "chapter8-2":"D",
    "chapter8-3":"A",
    "chapter8-4":"C",
    "chapter8-5":"C",
    "chapter8-6":"C",
    "chapter8-7":"D",
    "chapter8-8":"A",
    "chapter8-9":"C",
    "chapter8-10":"C",

    // ---------- Chapter 9 ----------
    "chapter9":"C",
    "chapter9-2":"D",
    "chapter9-3":"B",
    "chapter9-4":"B",
    "chapter9-5":"A",
    "chapter9-6":"A",
    "chapter9-7":"C",
    "chapter9-8":"B",
    "chapter9-9":"D",
    "chapter9-10":"B"
// ---------- Chapter 10 ----------

"chapter10":"D",
"chapter10-2":"B",
"chapter10-3":"A",
"chapter10-4":"C",
"chapter10-5":"D",
"chapter10-6":"B",
"chapter10-7":"C",
"chapter10-8":"D",
"chapter10-9":"A",
"chapter10-10":"C",

"chapter10-11":"B",
"chapter10-12":"D",
"chapter10-13":"A",
"chapter10-14":"C",
"chapter10-15":"B",
"chapter10-16":"D",
"chapter10-17":"A",
"chapter10-18":"D",
"chapter10-19":"D",
"chapter10-20":"D",
};

// ==============================
// Calculate Resonance
// ==============================

for (let question in myAnswers) {
    if (answers[question] === myAnswers[question]) {
        score++;
    }
}

// ==============================
// Score Animation
// ==============================

const scoreBox = document.getElementById("score");
const status = document.getElementById("status");
const unlock = document.getElementById("unlock");
const locked = document.getElementById("locked");

const messages = [
    "Comparing your reflections...",
    "Finding shared memories...",
    "Listening to your heart...",
    "Looking for resonance...",
    "Done."
];

let msg = 0;

const messageTimer = setInterval(() => {
    status.innerText = messages[msg];
    msg++;

    if (msg >= messages.length) {
        clearInterval(messageTimer);
        showScore();
    }
}, 800);

// ==============================
// Show Score
// ==============================

function showScore() {

    scoreBox.style.display = "block";

    let current = 0;

    const timer = setInterval(() => {

scoreBox.innerHTML = current + " / 110";

        current++;

        if (current > score) {

            clearInterval(timer);

if (score >= 85) {
                showHearts();
            } else {
                locked.style.display = "block";
            }

        }

    }, 30);

}

// ==============================
// Hearts Animation
// ==============================

function showHearts() {

    unlock.style.display = "block";

   const heart = document.getElementById("heartAnimation");

    const hearts = [
        "🖤",
        "🖤🩷",
        "🖤🩷💛",
        "🖤🩷💛💜"
    ];

    let i = 0;

    const heartTimer = setInterval(() => {

        heart.innerHTML = hearts[i];

        i++;

        if (i >= hearts.length) {
            clearInterval(heartTimer);
        }

    }, 500);

}