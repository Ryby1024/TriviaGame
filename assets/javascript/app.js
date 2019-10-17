// Assigning global variables
let rightAnswers = 0;
let wrongAnswers = 0;
let timer = 15;
let currentQuestion = 0;
let intervalId;
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
$(document).ready(function(){
     $("#startgame").click(function(e){
     $("#startgame").hide();
     $("#quiz").show();
     $("#timer").show();
     showQuestion();
     counter();
   })

   $("#quiz ul").on("click", "li", function(){
     $(".choice").removeClass("choice");
     $(this).addClass("choice");
     
   })
  
   $("#quiz ul").click(function(e){
     if($("li.choice").length){
          let guess = parseInt($("li.choice").attr("id"));
          checkAnswer(guess)
          console.log(guess)
     }
    document.getElementById("restart").onclick = function() {restartGame()};
    
     
   });
   
});  

    
function showQuestion(){
     let ques = questions[currentQuestion];
          $("#quiz h2").text(ques.title);
          $("#quiz ul").html("");
     for(var i = 0; i < ques.answers.length; i++){
          $("#quiz ul").append("<li id='"+ i +"'>" + ques.answers[i]+"</li>");
          timer = 15;
          console.log(ques.answers)
     }
}
   
function checkAnswer(guess){
     let ques = questions[currentQuestion];
     if(ques.correct === guess){
          $("#quiz ul").html("<img src='assets/images/sheldonright.gif'/>" + "Right Answer");  
          rightAnswers++;
     } else if(ques.correct !== guess)  {
          $("#quiz ul").html("<img src='assets/images/pennywrong.gif'/>" + "Sorry, that answer was wrong.");
          wrongAnswers++;
     } 

          currentQuestion++;
          stopCounter();
          setTimeout(showQuestion, 2000);
          if(currentQuestion >= questions.length){
               showResults();
          
            
          }   
}

     
          var countDown = setInterval(counter, 1000)
          function counter(){
              $("#timer").html("Time Remaining: " + timer);
              timer--;
              } if(timer === 0){
               $("#quil ul").html("<img src= 'assets/images/outoftime.gif'/>")
                   showQuestion();
              }
          
          function stopCounter(){
               clearInterval(counter);
          }
      

function showResults(){
     $("#quiz").hide();
     $("#timer").hide();
     $("#summary").show();
     $("#summary p").text("You scored " + rightAnswers + " out of " + questions.length + " correct!");
     
}

function restartGame(){
     $("#startgame").hide();
     $("#summary").hide();
     $("#quiz").show();
     $("#timer").show();
     currentQuestion = 0;
     showQuestion();
     counter();
     timer = 15;

}

     