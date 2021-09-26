var readlineSync=require("readline-sync");
var score=0
var highScore=[{name: "santhosh", score:3},{name: "Manish", score:2}]
var questions=[{question:"where do i live?", answer:"erode"},
{question:"My favorite actor would be?", answer:"Dhanush"},
{question:"Where do i work?", answer:"seppalai"}
]
function welcome(){
var userName= readlineSync.question("what's your name?")
console.log("welcome "+ userName +" to do know Nandha?");
}
function play(question,answer){
    console.log("hi");
var userAns= readlineSync.question(question)
if (userAns.toUpperCase()===answer.toUpperCase()){
    console.log("correct!");
    score+=1
}else{ console.log("wrong");}
console.log("current score: "+score);
console.log("------------------");
}
function game(){
for(i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer);
}
}
welcome();
game();
console.log("yay... you scored: "+score);
console.log("Checkout the high scores, if you should be there ping me & i will update it");
highScore.map((scr)=> console.log(scr.name+':'+scr.score));