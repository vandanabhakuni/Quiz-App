const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

document.querySelectorAll('.quiz-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const subject = btn.getAttribute('data-subject');
    window.location.href = `quiz.html?subject=${subject}`;
  });
});

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
  });
}

let questions = quizData[subject];
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionTitle").innerText = q.question;
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.addEventListener("click", () => checkAnswer(div, idx));
    optionsContainer.appendChild(div);
  });

  document.getElementById("prevBtn").style.display = currentQuestion > 0 ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = currentQuestion < 9 ? "inline-block" : "none";
  document.getElementById("submitBtn").style.display = currentQuestion === 9 ? "inline-block" : "none";
}

function checkAnswer(element, idx) {
  const options = document.querySelectorAll(".option");
  options.forEach((opt, i) => {
    opt.classList.remove("correct", "incorrect");
    if (i === questions[currentQuestion].answer) {
      opt.classList.add("correct");
    } else if (i === idx) {
      opt.classList.add("incorrect");
    }
  });
  if (idx === questions[currentQuestion].answer) {
    score++;
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentQuestion < 9) {
    currentQuestion++;
    showQuestion();
  }
});

document.getElementById("submitBtn").addEventListener("click", () => {
  document.getElementById("quizSection").innerHTML = "<h2>Your Score: " + score + "/10</h2><button id='homeBtn' class='quiz-btn'>← Back to Home</button>";
  document.getElementById("homeBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

showQuestion();
