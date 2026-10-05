/* =========================================================
   CHALLENGE
   ========================================================= */


/* Seven questions */

const questions = [

    {
        shape: "squarePrism",

        question:
            "Which statement describes a prism?",

        options: [
            "It has 2 matching bases.",
            "It has 1 curved surface.",
            "It has no flat faces.",
            "Its faces meet at one point."
        ],

        answer: 0
    },


    {
        shape: "cylinder",

        question:
            "Why is a cylinder a non-prism?",

        options: [
            "It has no bases.",
            "It has a curved surface.",
            "It has 8 vertices.",
            "It has triangular bases."
        ],

        answer: 1
    },


    {
        shape: "triangularPrism",

        question:
            "How many matching bases does a triangular prism have?",

        options: [
            "1",
            "2",
            "3",
            "0"
        ],

        answer: 1
    },


    {
        shape: "pyramid",

        question:
            "Which shape has one base and side faces that meet at a point?",

        options: [
            "Sphere",
            "Cylinder",
            "Pyramid",
            "Rectangular prism"
        ],

        answer: 2
    },


    {
        shape: "sphere",

        question:
            "Which shape has no flat base?",

        options: [
            "Sphere",
            "Cone",
            "Pyramid",
            "Square prism"
        ],

        answer: 0
    },


    {
        shape: "rectangularPrism",

        question:
            "How many vertices does a rectangular prism have?",

        options: [
            "4",
            "6",
            "8",
            "12"
        ],

        answer: 2
    },


    {
        shape: "cone",

        question:
            "Which feature does a cone have?",

        options: [
            "2 matching rectangular bases",
            "1 circular base and 1 vertex",
            "No curved surface",
            "8 vertices"
        ],

        answer: 1
    }

];


/* =========================================================
   VARIABLES
   ========================================================= */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const questionNumber =
    document.getElementById(
        "questionNumber"
    );


const scoreElement =
    document.getElementById(
        "score"
    );


const quizShape =
    document.getElementById(
        "quizShape"
    );


const questionText =
    document.getElementById(
        "questionText"
    );


const answerOptions =
    document.getElementById(
        "answerOptions"
    );


const quizFeedback =
    document.getElementById(
        "quizFeedback"
    );


const nextButton =
    document.getElementById(
        "nextQuestion"
    );


const quizCard =
    document.getElementById(
        "quizCard"
    );


const resultCard =
    document.getElementById(
        "resultCard"
    );


/* =========================================================
   DISPLAY QUESTION
   ========================================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    answered = false;


    questionNumber.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            questions.length
        }`;


    scoreElement.textContent =
        `Score: ${score}`;


    quizShape.innerHTML =
        shapeSVG(
            question.shape
        );


    questionText.textContent =
        question.question;


    quizFeedback.textContent =
        "";


    quizFeedback.className =
        "feedback";


    nextButton.classList.add(
        "hidden"
    );


    answerOptions.innerHTML =
        "";


    /* Create answer buttons */

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () =>
                    checkAnswer(
                        index,
                        button
                    )
            );


            answerOptions.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer(
    selectedAnswer,
    selectedButton
) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        questions[currentQuestion];


    /* Disable all buttons */

    document
        .querySelectorAll(
            ".answer-options button"
        )
        .forEach(
            button => {
                button.disabled = true;
            }
        );


    /* Correct */

    if (
        selectedAnswer ===
        question.answer
    ) {

        score++;


        selectedButton.classList.add(
            "correct-answer"
        );


        quizFeedback.textContent =
            "✅ Correct! Great building!";


        quizFeedback.className =
            "feedback correct";

    }


    /* Wrong */

    else {

        selectedButton.classList.add(
            "wrong-answer"
        );


        const correctButton =
            document
                .querySelectorAll(
                    ".answer-options button"
                )[
                    question.answer
                ];


        correctButton.classList.add(
            "correct-answer"
        );


        quizFeedback.textContent =
            `💡 The correct answer is: ${
                question.options[
                    question.answer
                ]
            }`;


        quizFeedback.className =
            "feedback wrong";

    }


    scoreElement.textContent =
        `Score: ${score}`;


    /* Next button */

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "See My Result →";

    } else {

        nextButton.textContent =
            "Next Question →";

    }


    nextButton.classList.remove(
        "hidden"
    );

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            renderQuestion();

        }

        else {

            showResult();

        }

    }
);


/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult() {

    quizCard.classList.add(
        "hidden"
    );


    resultCard.classList.remove(
        "hidden"
    );


    let title;


    if (score === 7) {

        title =
            "🏆 Shape Master!";

    }

    else if (score >= 5) {

        title =
            "⭐ Shape Builder!";

    }

    else if (score >= 3) {

        title =
            "🔨 Junior Builder!";

    }

    else {

        title =
            "🧰 Shape Explorer!";

    }


    document
        .getElementById(
            "resultTitle"
        )
        .textContent =
        title;


    document
        .getElementById(
            "resultScore"
        )
        .textContent =
        `You scored ${
            score
        } out of ${
            questions.length
        }.`;

}


/* =========================================================
   RETRY
   ========================================================= */

document
    .getElementById(
        "retryButton"
    )
    .addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            score = 0;

            resultCard.classList.add(
                "hidden"
            );

            quizCard.classList.remove(
                "hidden"
            );

            renderQuestion();

        }
    );


/* =========================================================
   CERTIFICATE
   ========================================================= */

document
    .getElementById(
        "certificateButton"
    )
    .addEventListener(
        "click",
        createCertificate
    );


function createCertificate() {

    const nameInput =
        document.getElementById(
            "studentName"
        );


    const name =
        nameInput.value.trim() ||
        "Shape Builder";


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.width = 1200;

    canvas.height = 800;


    const ctx =
        canvas.getContext(
            "2d"
        );


    /* Background */

    ctx.fillStyle =
        "#c9f0df";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* Certificate */

    ctx.fillStyle =
        "#fff8df";

    ctx.fillRect(
        70,
        70,
        1060,
        660
    );


    /* Border */

    ctx.strokeStyle =
        "#1e4775";

    ctx.lineWidth = 10;

    ctx.strokeRect(
        70,
        70,
        1060,
        660
    );


    /* Text */

    ctx.fillStyle =
        "#1e4775";

    ctx.textAlign =
        "center";


    ctx.font =
        "bold 58px Trebuchet MS";

    ctx.fillText(
        "SHAPE BUILDER WORKSHOP",
        600,
        190
    );


    ctx.font =
        "bold 65px Trebuchet MS";

    ctx.fillText(
        "Certificate of Achievement",
        600,
        310
    );


    ctx.font =
        "bold 54px Trebuchet MS";

    ctx.fillText(
        name,
        600,
        430
    );


    ctx.font =
        "32px Trebuchet MS";

    ctx.fillText(
        `Completed the Shape Builder Challenge • Score: ${score}/7`,
        600,
        510
    );


    ctx.font =
        "42px Trebuchet MS";

    ctx.fillText(
        "🏆",
        600,
        620
    );


    /* Download */

    const link =
        document.createElement(
            "a"
        );


    link.download =
        "shape-builder-certificate.png";


    link.href =
        canvas.toDataURL(
            "image/png"
        );


    link.click();

}


/* =========================================================
   START QUIZ
   ========================================================= */

renderQuestion();
