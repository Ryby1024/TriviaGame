// Assigning global variables
let rightAnswers = 0;
let wrongAnswers = 0;
let timer = 30;
let questionCount = 0;

let questions = [
    {
         title: "Which character in the Big Bang Theory does NOT have a doctorate?", 
         answers: ["Raj", "Sheldon", "Howard", "Leonard"],
         correct: 2
    },
    {
         title: "What has Sheldon wanted to do his whole life",
         answers: ["Get Married", "Have a child", "Learn to drive", "Win the Nobel Prize"],
         correct: 3
    },
     
];
$(document).ready(function(){
     $("#startgame").click(function(e){
     $("#startgame").hide();
     $("#quiz").show();
     showQuestion();
   })
   $("#quiz ul").on("click", "li", function(){
     $(".choice").removeClass("choice");
     $(this).addClass("choice");

   })
  
   $("#quiz ul").click(function(e){
     if($("li.choice").length){
          let guess = $("li.choice").attr("id");
          checkAnswer(guess)
     }else {
          alert("Please select an answer")
     }
     
     
   });
   
});  

function start() {
    
    }
    
function showQuestion(){
     let ques = questions[questionCount];
          $("#quiz h2").text(ques.title);
          $("#quiz ul").html("");
     for(var i = 0; i < ques.answers.length; i++){
          $("#quiz ul").append("<li id='"+ i +"'>" + ques.answers[i]+"</li>");
     }
}
   
function checkAnswer(guess){
     let ques = questions[questionCount];
     if(ques.correct === guess){

          $("#quiz ul").html("<img src=assets/images/howard.gif " + "Right Answer")    
          rightAnswers++;
     } else    {
          $("#quiz ul").html("<img src='assets/images/howard.gif' " + "Wrong answer, the answer was Howard")  
          wrongAnswers++;
}
     questionCount++;
     setTimeout(showQuestion, 3000);    
}

     


function showResults(){

}


