const quiz = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "None of these"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        answer: "Sun Microsystems"
    }
];
index = 0
function renderQuiz() {
    var quizContainer = document.getElementById("cont")
    console.log(quizContainer);
    quizContainer.innerHTML = `<div class="card m-5 w-50 mx-auto violet">
    <h5 class="card-header">${quiz[index].question}</h5>
    <div class="card-body">
     
       <ul class="list-group list-group-flush">
      <li class="list-group-item"><label for="opt1"><input type="radio" name="option" id="opt1"> ${quiz[index].options[0]}</label></li>
      <li class="list-group-item"><label for="opt2"><input type="radio" name="option" id="opt2"> ${quiz[index].options[1]}</label></li>
      <li class="list-group-item"><label for="opt3"><input type="radio" name="option" id="opt3"> ${quiz[index].options[2]}</label></li>
      <li class="list-group-item"><label for="opt4"><input type="radio" name="option" id="opt4"> ${quiz[index].options[3]}</label></li>
      <button class="btn btn-success text-center mt-3 mx-auto w-25" onclick = "renderQuiz()">Next</button>
     
    </ul>
    </div>
  </div>`
    index++
}
renderQuiz()

function next() {

}