$(document).ready(() => {

    var gameQuestion = [{
                question: "What do you call people who are 18+ ?",
                num: "Question: 1",
                A: "Baby",
                B: "Adult",
                C: "Person",
                answer: "b"
        },
        {
                num: "Question: 2",
                question: "What color is the tree?",
                A: "Red",
                B: "Brown",
                C: "Green",
                answer: "c"
        },
        {
                num: "Question: 3",
                question: "What do you call someone who has a wife?",
                A: "Wife",
                B: "Husband",
                C: "Married",
                answer: "c"
        },
        {
                num: "Question: 4",
                question: "Which is the most us level in English?",
                A: "B1",
                B: "C2",
                C: "A2",
                answer: "b"
        },
        {
                num: "Question: 5",
                question: "What color is the sky?",
                A: "Blue",
                B: "Yellow",
                C: "Green",
                answer: "a"
        }
    ];

    var arr = gameQuestion.length;

    questionPage = $("#questionPage");
    questionPage.hide();

    startButton = $("#startButton");
    totalPoint = $("#totalPoint");
    exitButton = $("#exitButton");
    OpenPage = $(".OpenPage");
    

    startButton.on("click", () => {
        OpenPage.hide();
        questionPage.show();
    })

    exitButton.on("click", () => {
        window.close();
    })

    class Dom {
        questionNum = $("#questionNum");
        questionTitle = $("#questionTitle");
        choiseA = $("#choiseA");
        choiseB = $("#choiseB");
        choiseC = $("#choiseC");
    }

    class QuestionGame extends Dom {
        nextQuestion = 0;
        point = 0;
        questions = [];

        constructor(cavab) {
            super();
            this.questions = cavab;
        }

        startGame() {
            this.questionNum.html(this.questions[this.nextQuestion].num)
            this.questionTitle.html(this.questions[this.nextQuestion].question)
            this.choiseA.html(this.questions[this.nextQuestion].A)
            this.choiseB.html(this.questions[this.nextQuestion].B)
            this.choiseC.html(this.questions[this.nextQuestion].C)
        }

        correctOrWrong(cb) {
            if (["a", "b", "c"].indexOf(cb) === -1) {
                alert("A B C hərflərindən birini seçin");
                return;
            }
            if (this.questions[this.nextQuestion].answer === cb) {
                this.point++;
            }
            this.nextQuestion++;
            
            if (this.nextQuestion === arr) {
                OpenPage.show();
                questionPage.hide();
                this.nextQuestion -=arr ;
                totalPoint.html(`Total Point: ${this.point}`);
                this.point = 0;
            }
            this.startGame();
        }
    }

    var myGame = new QuestionGame(gameQuestion);

    myGame.startGame();

    window.onkeydown = function (e) {
        myGame.correctOrWrong(e.key);
    };
})
