document.addEventListener("DOMContentLoaded", function (e) {
  fetch("https://opentdb.com/api.php?amount=10&category=9")
    .then((response) => response.json())
    .then(async (response) => {
      const quizData = response.results;
      console.log(quizData);
      // const quizData = [
      //   {
      //     question: "How old is Florin?",
      //     a: "10",
      //     b: "10",
      //     c: "26",
      //     d: "110",
      //     correct: "c",
      //   },
      //   {
      //     question: "What is the most used programming language in 2019?",
      //     a: "Java",
      //     b: "C",
      //     c: "Python",
      //     d: "javaScript",
      //     correct: "a",
      //   },
      //   {
      //     question: "Who is the President of Pakistan?",
      //     a: "Imran Khan",
      //     b: "Tarik Jamil",
      //     c: "Arif Alvi",
      //     d: "Altaf Hussain",
      //     correct: "a",
      //   },
      //   {
      //     question: "What does HTML stand for?",
      //     a: "Cascading Style Sheet",
      //     b: "Hypertext Markup Language",
      //     c: "Jason Object Notation",
      //     d: "Helicopter Terminals Motorboats Lamborginis",
      //     correct: "b",
      //   },
      //   {
      //     question: "What year was JavaScript Lanuched",
      //     a: "1994",
      //     b: "1960",
      //     c: "1970",
      //     d: "none of the above",
      //     correct: "d",
      //   },
      // ];

      const quiz = document.getElementById("quiz");
      const answerEls = document.getElementById("choices-list");
      const questionEl = document.getElementById("question");
      const a_text = document.getElementById("a_text");
      const b_text = document.getElementById("b_text");
      const c_text = document.getElementById("c_text");
      const d_text = document.getElementById("d_text");
      const submitBtn = document.getElementById("submit");

      let currentQuiz = 0;
      let score = 0;

      loadQuiz();

      function loadQuiz() {
        deselectAnswers();

        const currentQuizData = quizData[currentQuiz];

        questionEl.textContent = currentQuizData.question;
        const choices = [
          ...currentQuizData.incorrect_answers,
          currentQuizData.correct_answer,
        ];
        console.log(choices);
        const ul = document.getElementById("choices-list");
        choices.forEach((choice) => {
          const li = document.createElement("li");
          const input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.name = "answer";
          const label = document.createElement("label");
          label.htmlFor = "answer";

          input.classList.add("answer");
          label.textContent = choice;
          li.append(input);
          li.append(label);
          ul.append(li);
        });
        // a_text.textContent = currentQuizData.i;
        // b_text.textContent = currentQuizData.b;
        // c_text.textContent = currentQuizData.c;
        // d_text.textContent = currentQuizData.d;
      }

      function getSelected() {
        let answer = undefined;

        answerEls.childNodes.forEach((answerEl) => {
          if (answerEl.checked) {
            answer = answerEl.id;
          }
        });

        return answer;
      }

      function deselectAnswers() {
        answerEls.childNodes.forEach((answerEl) => {
          answerEl.checked = false;
        });
      }

      submitBtn.addEventListener("click", () => {
        //check to see the answer
        const answer = getSelected();

        console.log(answer);

        if (answer) {
          if (answer === quizData[currentQuiz].correct_answer) {
            score++;
          }

          currentQuiz++;
          if (currentQuiz < quizData.length) {
            loadQuiz();
          } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
          }
        }
      });
    });
});
