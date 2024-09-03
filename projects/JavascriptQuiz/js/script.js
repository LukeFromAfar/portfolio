
let currentQuestion = 0;
let score = 0;
let alreadyChecked = false;
let targetedId;
document.getElementById("nameInput").style.display = "none";


const quizContent = [
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["a) South Korea", "b) Ukraine", "c) Japan", "d) China"],
      correctAnswer: "c) Japan"
    },
    {
      question: "Which river is the longest in the world?",
      options: ["a) Nile", "b) Amazon", "c) Yangtze", "d) Mississippi"],
      correctAnswer: "a) Nile"
    },
    {
      question: "Which country is known as the 'Land of a Thousand Lakes'?",
      options: ["a) Canada", "b) Finland", "c) Sweden", "d) Norway"],
      correctAnswer: "b) Finland"
    },
    {
      question: "Which mountain range spans across seven countries, including India and Nepal?",
      options: ["a) Andes", "b) Rocky Mountains", "c) Alps", "d) Himalayas"],
      correctAnswer: "d) Himalayas"
    },
    {
      question: "Which city is located on two continents, Europe and Asia?",
      options: ["a) Cairo", "b) Istanbul", "c) Moscow", "d) Athens"],
      correctAnswer: "b) Istanbul"
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      options: ["a) Gobi Desert", "b) Karakum Desert", "c) Sahara Desert", "d) Arabian Desert"],
      correctAnswer: "c) Sahara Desert"
    },
    {
      question: "Which ocean is the largest and covers more than one-third of the Earth's surface?",
      options: ["a) Indian Ocean", "b) Atlantic Ocean", "c) Southern Ocean", "d) Pacific Ocean"],
      correctAnswer: "d) Pacific Ocean"
    },
    {
      question: "Which country is home to the famous ancient city of Machu Picchu?",
      options: ["a) Peru", "b) Mexico", "c) Colombia", "d) Ecuador"],
      correctAnswer: "a) Peru"
    },
    {
      question: "Which river flows through the Grand Canyon in the United States?",
      options: ["a) Mississippi River", "b) Colorado River", "c) Amazon River", "d) Thames River"],
      correctAnswer: "b) Colorado River"
    },
    {
      question: "Which African country is known as the 'Pearl of Africa'?",
      options: ["a) Nigeria", "b) Uganda", "c) Kenya", "d) South Africa"],
      correctAnswer: "b) Uganda"
    }
];
  
// You can use this array for shuffling questions if needed
// const shuffledQuiz = geographyQuiz.sort(() => Math.random() - 0.5);
  


// // Accessing questions from the geography quiz
// const firstQuestion = quizContent[0];
// console.log("First Question:", firstQuestion.question);
// console.log("Options:", firstQuestion.options);
// console.log("Correct Answer:", firstQuestion.correctAnswer);

// // Accessing another question
// const thirdQuestion = quizContent[2];
// console.log("Third Question:", thirdQuestion.question);
// console.log("Options:", thirdQuestion.options);
// console.log("Correct Answer:", thirdQuestion.correctAnswer);

document.getElementById("nextQuestion").style.display = "none";

function nextStage() {
  alreadyChecked = false;

  if (quizContent.length - currentQuestion <= 0 && document.getElementById("nameInput").value != "") {
    var nameOfUser = document.getElementById("nameInput").value;
  }

  if (quizContent.length - currentQuestion <= 1) {
    document.getElementById("nextQuestion").innerText = "End quiz and save result";
    document.getElementById("nameInput").style.display = "inline-block";
  }
  if (quizContent.length - currentQuestion <= 0) {
    document.getElementById("nameInput").style.display = "none";
  }
    

  document.getElementById("startQuiz").style.display = "none";
  document.getElementById("nextQuestion").style.display = "inline-block";

  if (currentQuestion < quizContent.length) {
    console.log(quizContent[currentQuestion].options);
  
    document.getElementById("question").innerHTML = `<p class="fade-in" >${quizContent[currentQuestion].question}</p>`
    document.getElementById("alternatives").innerHTML = `
    <button id="a" onclick="pointCheck(answer = 0);">${quizContent[currentQuestion].options[0]}</button>
    <button id="b" onclick="pointCheck(answer = 1);">${quizContent[currentQuestion].options[1]}</button>
    <button id="c" onclick="pointCheck(answer = 2);">${quizContent[currentQuestion].options[2]}</button>
    <button id="d" onclick="pointCheck(answer = 3);">${quizContent[currentQuestion].options[3]}</button>
    `
    
    console.log("Current question is:", currentQuestion);
  
    currentQuestion++;
    document.getElementById("score").innerHTML = `${score*10} of ${currentQuestion*10} points`;
  }
  else {
      document.getElementById("question").innerHTML = `<p>The quiz is finished</p>`;
      document.getElementById("alternatives").innerHTML = ``;
      document.getElementById("alternatives").style.display = "none";
      document.getElementById("nextQuestion").style.display = "none";

      if (nameOfUser != undefined) {
        let leaderboard = [{userName: nameOfUser, score: score}]
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
      }

  }

  
}

function pointCheck() {
  
  userAnswer = quizContent[currentQuestion-1].options[answer];
  console.log(quizContent[currentQuestion-1].correctAnswer);
  
  let targetedId; 

  switch (answer) {
    case 0:
      targetedId = "a";
      break;
    case 1:
      targetedId = "b";
      break;
    case 2:
      targetedId = "c";
      break;    
    case 3:
      targetedId = "d";
      break;   
    default:
      break;
  }

  if (alreadyChecked == false) {
    
    if (quizContent[currentQuestion-1].correctAnswer == userAnswer) {
      console.log("answer is correct");
      score++;

      document.getElementById(`${targetedId}`).style.background = "#00ca28";

    }
    else {
      console.log("answer is not correct");
      document.getElementById(`${targetedId}`).style.background = "#fa1c1c";
    }
    
  }
  document.getElementById("score").innerHTML = `${score*10} of ${currentQuestion*10} points`;
  console.log(answer);
  alreadyChecked = true;
}


function triggerFadeIn() {
  const element = document.getElementById('question');
  
  // Remove the class to reset the animation
  element.classList.remove('fade-in');
  
  // Trigger reflow to reset animation
  void element.offsetWidth;
  
  // Add the class again to start the animation
  element.classList.add('fade-in');
}