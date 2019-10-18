// Assigning global variables
let rightAnswers = 0;
let wrongAnswers = 0;
let timer = 15;
let currentQuestion = 0;
let intervalId;
let guess;
let gameStart = false;
let unansweredQuestions = 0;
let questions = [
     {
          title: "Which character in the Big Bang Theory does NOT have a doctorate?",
          answers: ["Raj", "Sheldon", "Howard", "Leonard"],
          correct: 2,
     },
     {
          title: "What has Sheldon wanted to do his whole life",
          answers: ["Get Married", "Have a child", "Learn to drive", "Win the Nobel Prize"],
          correct: 3,
     },
     {
          title: "What state is Penny from?",
          answers: ["California", "Florida", "Ohio", "Nebraska"],
          correct: 3,
     },
     {
          title: "Who does Howard end up marrying",
          answers: ["Bernadette", "Amy", "Leslie", "Priya"],
          correct: 0,
     },
     {
          title: "What job does Raj have?",
          answers: ["Physicist", "Engineer", "Astrologist", "Biologist"],
          correct: 2,
     },
     {
          title: "What is Sheldon's catch phrase?",
          answers: ["Ohh Yeah!!", "Yeah Baby", "Sweet", "Bazinga"],
          correct: 3,
     },
     {
          title: "What is Penny's dream job?",
          answers: ["Doctor", "Actress", "Nurse", "Event Planner"],
          correct: 1,
     },
     {
          title: "What does Sheldon call his grandmother?",
          answers: ["Mee maw", "Grammy", "Nanna", "Grandma"],
          correct: 0,
     },
];

$(document).ready(function () {


     $("#startgame").on("click", function () {
          console.log("start game")
          gameStart = true;
          $("#startgame").hide();
          $("#quiz").show();
          $("#timer").show();
          showQuestion();
          
     })

     $(".answer").on("click", checkAnswer);
     showQuestion();
     stopCounter();
    
     $("#restart").on("click", restartGame);
     stopCounter();



     function showQuestion() {
          if( gameStart){

          
          
          $("#quiz h2").text(questions[currentQuestion].title);
          
          $("#quiz .answerA").text(questions[currentQuestion].answers[0]);
          $("#quiz .answerB").text(questions[currentQuestion].answers[1]);
          $("#quiz .answerC").text(questions[currentQuestion].answers[2]);
          $("#quiz .answerD").text(questions[currentQuestion].answers[3]);
          timer = 15;
          countDown = setInterval(counter, 1000);
          console.log(questions[currentQuestion].answers);
          }
     }


     function checkAnswer() {
          if(gameStart === false){
               return false;
          }
          stopCounter();
          console.log("clicked")
          guess = parseInt($(this).attr("value"))

          if (guess === questions[currentQuestion].correct) {
               // $("#quiz .box").text("<img src='assets/images/sheldonright.gif'/>" + "Right Answer");
               rightAnswers++;
          } else {
               // $("#quiz .box").text("<img src='assets/images/pennywrong.gif'/>" + "Sorry, that answer was wrong.");
               wrongAnswers++;
          }

          currentQuestion++;
          
         
          // hideImg();
          setTimeout(showQuestion, 2000);
          if (currentQuestion >= questions.length) {
               showResults();
               
          
          } else {
               showQuestion();
          }
     }



     function counter() {

          $("#timer").html("Time Remaining: " + timer);
          timer--;
          if (timer === 0) {
               stopCounter();
               unansweredQuestions++;
               currentQuestion++;
               // $("#quiz .box").html("<img src= 'assets/images/outoftime.gif'/>");
               showQuestion();
          }
     }

     function stopCounter() {
          countDown = setInterval(counter, 1000);
          clearInterval(countDown);
     }


     function showResults() {
          $("#quiz").hide();
          $("#timer").hide();
          $("#summary").show();
          $("#summary p").text("You scored " + rightAnswers + " out of " + questions.length + " correct!");
          
     }

     function restartGame() {
          
          $("#startgame").hide();
          $("#summary").hide();
          $("#quiz").show();
          $("#timer").show();
          currentQuestion = 0;
          showQuestion();
          counter();
          timer = 15;

     }
     
});