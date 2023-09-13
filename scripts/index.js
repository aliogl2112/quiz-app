const quiz = new Quiz(questions);
const ui = new UI();
let time=59;
ui.startBtn.addEventListener("click",startQuiz);
function startQuiz(){
    quizTimer(time);
    startTimerLine();
    ui.nextButton.style="display:none";
    document.querySelector(".btn_start").classList.add("disable");
    ui.quizBox.classList.remove("disable");
    ui.quizBox.classList.add("active");
    ui.showQuestion(quiz.getQuestion());
    ui.questionCount(quiz.questionIndex+1,quiz.questions.length)
}
ui.nextButton.addEventListener("click",nextQuestion)
function nextQuestion(){
    ui.nextButton.style="display:none";
    if(quiz.questionIndex+1 !== quiz.questions.length){
        quiz.questionIndex++;
        ui.showQuestion(quiz.getQuestion())
    }
    else
    {
        ui.showScore(quiz.questions.length,quiz.correctAnswer,quiz.incorrectAnswer,quiz.markedAnswer)
        ui.quizBox.classList.add("disable");
        ui.scoreBox.classList.remove("disable");
    }
    ui.questionCount(quiz.questionIndex+1,quiz.questions.length)
}

function optionSelected(option){
    quiz.markedAnswer++;
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();
    ui.nextButton.style="display:block"
    if(question.checkTheAnswer(answer)){
        quiz.correctAnswer++;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon)
    }
    else{
        quiz.incorrectAnswer++;
         option.classList.add("incorrect");
         option.insertAdjacentHTML("beforeend",ui.incorrectIcon)
    }
       
   
    for(let i=0;i<ui.optionList.children.length;i++){
        ui.optionList.children[i].classList.add("disabled")
    }
        
}

ui.replayButton.addEventListener("click",replayQuiz)
function replayQuiz(){
    quiz.questionIndex=0;
    quiz.correctAnswer=0;
    document.querySelector(".btn_start").classList.remove("disable");
    ui.quizBox.classList.add("disable");
    ui.scoreBox.classList.add("disable");
    ui.startBtn.click();
}

ui.quitButton.addEventListener("click",()=>{
    window.location.reload(false);
})

function quizTimer(time){
    ui.second.innerHTML = `${time}sn`;
    let t = setInterval(timer,1000)
    function timer(){
        time-=1;
        ui.second.innerHTML = `${time}sn`;
        if(time===0){
            ui.showScore(quiz.questions.length,quiz.correctAnswer,quiz.incorrectAnswer,quiz.markedAnswer)
            ui.quizBox.classList.add("disable");
            ui.scoreBox.classList.remove("disable");
            clearInterval(t)
        }
    }
}

function startTimerLine(){
    let line_width = 75;
    let line = setInterval(timer,100)
    function timer(){
        ui.timeLine.style.width=line_width+"rem";
        line_width-=0.127;
        if(line_width<0)
            clearInterval(line)
    }
}
