function Question(questionText,answerOptions,correctAnswer){
    this.questionText = questionText;
    this.answerOptions= answerOptions ;
    this.correctAnswer= correctAnswer;
}
Question.prototype.checkTheAnswer = function(correctAnswer){
    return correctAnswer === this.correctAnswer;
}

const questions=[
    new Question("1-Hangisi JavaScript paket yönetim uygulamasıdır?",{a:"Node.js",b:"NPM",c:"NuGet",d:"TypeScript"},"b"),
    new Question("2-Hangisi .Net paket yönetim uygulamasıdır?",{a:"Node.js",b:"NPM",c:"NuGet",d:"TypeScript"},"c"),
    new Question("3-Hangisi .Net kütüphanesidir?",{a:"Laravel",b:"Turtle",c:"Tailwind",d:"Entity"},"d"),
    new Question("4-Backend işlemlerinde hangisi veri gönderme metodudur?",{a:"GET",b:"POST",c:"DELETE",d:"INSERT"},"b"),
]