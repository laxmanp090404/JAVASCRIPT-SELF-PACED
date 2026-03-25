const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// track user choices
let userAnswers = [];
// Quiz Data
const quizData = [
  {
    question: "Who is the CEO of Presidio?",
    options: ["Sam Altman", "Bob Cagnazzi", "Sundhar Pichai", "Sridhar Ve,bu"],
    answer: "Bob Cagnazzi"
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "JS stands for?",
    options: ["JavaSource", "JavaScript", "JustScript", "None"],
    answer: "JavaScript"
  }
];

let currques = 0;
let score = 0;
let optSelect = null;


// Load question
function loadQuestion() {
  optSelect = null;
  const current = quizData[currques];

  question.textContent = current.question;
  options.innerHTML = "";

  current.options.forEach(option => {
    const optDiv = document.createElement("div");
    optDiv.textContent = option;
    optDiv.classList.add("option");

    optDiv.addEventListener("click", () => {
      selectOption(optDiv, option);
    });

    options.appendChild(optDiv);
  });
}


// Handle selection
function selectOption(element, option) {
  const allOptions = document.querySelectorAll(".option");
  // to handle changing option (bcos if not removed all options can be selected) 
  allOptions.forEach(opt =>{ opt.classList.remove("selected")
  });
  element.classList.add("selected");
  optSelect = option;
}


// Next button logic
nextBtn.addEventListener("click", () => {

  if (!optSelect) {
    alert("Please select an option!");
    return;
  }
   // Store user answer
   userAnswers.push(optSelect);
  // check ans and increase score
  if (optSelect === quizData[currques].answer) {
    score++;
  }

  currques++;

  if (currques < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});



function showResult() {
  question.textContent = `Your Score: ${score}/${quizData.length}`;
  options.innerHTML = "";

  // showing analysis to user
  quizData.forEach((q, index) => {
    const userAns = userAnswers[index];
    const correctAns = q.answer;

     // ui for showing analysis
    const div = document.createElement("div");
    div.classList.add("result-item");

    div.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      <p>Your Answer: <span class="${userAns === correctAns ? 'correct' : 'wrong'}">${userAns}</span></p>
      <p>Correct Answer: <span class="correct">${correctAns}</span></p>
      <hr>
    `;

    options.appendChild(div);
  });

  nextBtn.style.display = "none";
}
// Initialize
loadQuestion();