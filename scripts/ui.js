function UI(){
    this.startBtn = document.querySelector(".btn");
    this.quizBox = document.querySelector(".quiz_box");
    this.optionList = document.querySelector(".option_list");
    this.nextButton = document.querySelector("#next_btn");
    this.correctIcon = '<i class="fas fa-check"></i>';
    this.incorrectIcon = '<i class="fas fa-times"></i>';
    this.questionOrder = document.querySelector(".question-order");
    this.scoreBox = document.querySelector(".score-box");
    this.scoreText = document.querySelector(".score-text");
    this.replayButton = document.querySelector(".btn-replay");
    this.quitButton = document.querySelector(".btn-quit");
    this.second = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");
}
UI.prototype.showQuestion = function(q){
    let question = `<span>${q.questionText}</span>`;
    let options="";
    for(let answer in q.answerOptions){
        options +=`
        <div class="option">
            <span><b>${answer}</b>-${q.answerOptions[answer]}</span>
        </div>
        `;
    }
    document.querySelector(".question_text").innerHTML=question;
    this.optionList.innerHTML = options;

    const option = this.optionList.querySelectorAll(".option");
    for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)");
    }
}
UI.prototype.questionCount=function(questionOrder,totalQuestion){
    let tag =`
        <span id="order-span" class="bg-warning">${questionOrder}/${totalQuestion}</span>
    `;
    this.questionOrder.innerHTML = tag;
}
UI.prototype.showScore=function(totalQuestion,correctAnswer,incorrectAnswer,markedAnswer){
    let unmarkedQuestion = totalQuestion - markedAnswer;
    let scoreTag =`
    <h2>
    Doğru Cevap: <b style="color:green">${correctAnswer}</b><br>
    Yanlış Cevap: <b style="color:red">${incorrectAnswer}</b><br>
    Boş Bırakılan: <b style="color:gray">${unmarkedQuestion}</b>
    </h2>
    
`;
    this.scoreText.innerHTML=scoreTag;
}