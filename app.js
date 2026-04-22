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
score = 0
function renderQuiz() {
    var quizContainer = document.getElementById("cont")
    var options = document.getElementsByName("option")
    let isSelected = false;
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            isSelected = true;
            selectedValue = options[i].value;
       
        }
    } if (index !== 0 && !isSelected) {
        Swal.fire({
            icon: "warning",
            title: "No Option Selected!",
            text: "Please select an option before proceeding to the next question."
        });
        return;
    }
    if (index > 0 && selectedValue === quiz[index - 1].answer) {
        score++;
    }
    let buttonText = (index === quiz.length - 1) ? "Submit" : "Next";
    var percentage = (score / quiz.length) * 100
    if (!quiz[index]) {
        if (score < 3) {
            Swal.fire({
                title: "Failed!🚩",
                text: "  keep trying ❤️ "+ "Your Score is: " + score + " (" + percentage.toFixed(2) + "%)", 
                textColor: "#FE62D7",
                background: "#F4E0EC",
                color: "#FE62D7",
                showCancelButton: true,
                cancelButtonText: "Close",
                cancelButtonColor: "rgb(228, 161, 161)",
                confirmButtonColor: "#b879c0",
                confirmButtonText: "Retry",
                  customClass: {
    popup: 'my-custom-popup' //
  },
                borderRadius: "50px",
                imageUrl: "https://cdn-icons-png.flaticon.com/128/12533/12533051.png",
                imageWidth: 80,
                imageHeight: 80

            }).then((result) => {

                if (result.isConfirmed) {
                    Swal.fire({
                        imageUrl: "https://cdn-icons-png.flaticon.com/128/12533/12533051.png",
                        imageWidth: 80,
                        imageHeight: 80,
                    title: "Quiz Reset!",
                        text: "The quiz has been reset. You can now start over.",
                        background: "#F4E0EC",
                        color: "#FE62D7",
                        confirmButtonColor: "#b879c0", confirmButtonText: "Start Quiz"
                    });
                    index = 0;
                    score = 0;
                    renderQuiz();
                }
            });
        } else {
            Swal.fire({
                title: "Passed!",
                text: "Well done 🎉" + "Your Score is: " + score + " (" + percentage.toFixed(2) + "%)",
                background: "#F4E0EC",
                color: "#FE62D7",
                showCancelButton: true,
                cancelButtonText: "Close",
                cancelButtonColor: "rgb(228, 161, 161)",
                confirmButtonColor: "#b879c0",
                confirmButtonText: "Retry",
                imageUrl: "https://cdn-icons-png.flaticon.com/128/18749/18749874.png",
                imageWidth: 80,
                imageHeight: 80

            }).then((result) => {

                if (result.isConfirmed) {
                    Swal.fire({
                        imageUrl: "https://cdn-icons-png.flaticon.com/128/12533/12533051.png",
                        imageWidth: 80,
                        imageHeight: 80,
                        title: "Quiz Reset!",
                        text: "The quiz has been reset. You can now start over.",
                          background: "#F4E0EC",
                        color: "#FE62D7",
                        confirmButtonColor: "#b879c0", confirmButtonText: "Start Quiz"
                    });
                    index = 0;
                    score = 0;
                    renderQuiz();
                }
            });
        }


        return;
    }
    console.log(quizContainer);
    quizContainer.innerHTML = `<div class="card m-5 w-50 mx-auto violet">
    <h5 class="card-header">${quiz[index].question}</h5>
    <div class="card-body">
     
       <ul class="list-group list-group-flush">
      <li class="list-group-item"><label for="opt1"><input type="radio" name="option" id="opt1" value="${quiz[index].options[0]}"> ${quiz[index].options[0]}</label></li>
      <li class="list-group-item"><label for="opt2"><input type="radio" name="option" id="opt2" value="${quiz[index].options[1]}"> ${quiz[index].options[1]}</label></li>
      <li class="list-group-item"><label for="opt3"><input type="radio" name="option" id="opt3" value="${quiz[index].options[2]}"> ${quiz[index].options[2]}</label></li>
      <li class="list-group-item"><label for="opt4"><input type="radio" name="option" id="opt4" value="${quiz[index].options[3]}"> ${quiz[index].options[3]}</label></li>
      <button class="btn btn-success text-center mt-3 mx-auto w-25" onclick = "renderQuiz()">Next</button>
     
    </ul>
    </div>
  </div>`
    index++
}
renderQuiz()
