
// VARIABLES
var intervalID;
var clock = 11;

var correct = 0;
var incorrect = 0;

var questionArr = [
    {
        question: "What is the composer Vivaldi's first name?",
        answerArr: ["Maricio", "Pietro", "Antonio", "Laurice"],
        correctAnswer: "Antonio",
        image: '<iframe src="https://giphy.com/embed/5B3YANolB1LFK" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },
    {
        question: "Who made the highly rated 1959 jazz album 'Kind Of Blue?'",
        answerArr: ["John Coltrane", "Miles Davis", "Ornette Coleman", "Duke Ellington"],
        correctAnswer: "Miles Davis",
        image: '<iframe src="https://giphy.com/embed/l2JdYt9xSuzWW2Aus" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },
    {
        question: "In which American city was Elvis discovered in?",
        answerArr: ["Nashville", "Macom", "Charleston", "Memphis"],
        correctAnswer: "Memphis",
        image: '<iframe src="https://giphy.com/embed/PVJ29hwRF1DsQ" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },
];

var roundCount = (questionArr.length - 1);

// FUNCTIONS

// FUNCTION 1
function Timer() {
    intervalId = setInterval(decrement, 1000);
}

// FUNCTION 2
function decrement() {
    clock--;
    $("#clockText").html(clock);

    if (clock === -1) {
        timeOut();
    }
}

// FUNCTION 3
function Question() {

    if (roundCount < 0) {
        Reset();
    } else {
        $("#displayText").empty();
        displayText = $("<div>");

        Timer();

        displayText.append("<h3><strong>" + questionArr[roundCount].question + "</strong></h3>");

        var answerText = $("<h4>");

        for (i = 0; i < questionArr[roundCount].answerArr.length; i++) {

            var answerButton = $("<button type='button' class='btn-light m-2'>" + questionArr[roundCount].answerArr[i] + "</button><");
            answerButton.attr("data-value", questionArr[roundCount].answerArr[i]);
            answerText.append(answerButton);
        };

        $("#displayText").append(displayText);
        $("#displayText").append(answerText);
    };
};

// FUNCTION 4
function Correct() {

    $("#clockText").empty();
    $("#displayText").empty();
    displayText = $("<div>");

    displayText.append("<h3>" + "You got it!" + "</h3>");
    displayText.append("<h5>" + questionArr[roundCount].question + "</h5>");
    displayText.append("<h3><strong>" + questionArr[roundCount].correctAnswer + "</strong></h3>");
    displayText.append(questionArr[roundCount].image);
    
    $("#displayText").append(displayText);

    correct++;
    roundCount--;
    console.log("Round count is: " + roundCount);
    setTimeout(Question, 1000 * 3);
    clearInterval(intervalId);
    clock = 11;
};

// FUNCTION 5
function Incorrect() {

    $("#clockText").empty();
    $("#displayText").empty();
    displayText = $("<div>");

    displayText.append("<h3>" + "Sorry! The correct answer was:" + "</h3>");
    displayText.append("<h5>" + questionArr[roundCount].question + "</h5>");
    displayText.append("<h3><strong>" + questionArr[roundCount].correctAnswer + "</strong></h3>");
    displayText.append(questionArr[roundCount].image);

    $("#displayText").append(displayText);

    incorrect++;
    roundCount--;

    console.log("Round count is: " + roundCount);
    setTimeout(Question, 1000 * 3);
    clearInterval(intervalId);
    clock = 11;
};

// FUNCTION 6
function timeOut() {

    $("#clockText").empty();
    $("#displayText").empty();
    displayText = $("<div>");

    displayText.append("<h3>" + "You ran out of time!" + "</h3>");
    displayText.append("<h3>" + "The correct answer was:" + "</h3>");
    displayText.append("<h5>" + questionArr[roundCount].question + "</h5>");
    displayText.append("<h3><strong>" + questionArr[roundCount].correctAnswer + "</strong></h3>");
    displayText.append(questionArr[roundCount].image);

    $("#displayText").append(displayText);

    incorrect++;
    roundCount--;

    setTimeout(Question, 1000 * 3);
    clearInterval(intervalId);
    clock = 11;
};

// FUNCTION 7

function Reset() {

    $("#clockText").empty();
    $("#displayText").empty();
    displayText = $("<div>");

    displayText.append("<h3>" + "Game Over" + "</h3>");
    displayText.append("<h4>" + "You got " + correct + " right & you missed " + incorrect + " !" + "</h4>");

    $("#displayText").append(displayText);

    roundCount = (questionArr.length - 1);
    correct = 0;
    incorrect = 0;

    var resetButton = $("<button type='button' class='btn btn-outline-primary btn-lg'>" + "Press To Play Again" + "</button><");
    resetButton.attr("data-value", "resetButton");
    displayText.append(resetButton);

    clearInterval(intervalId);
    clock = 11;


    $("#displayText").on("click", ".btn-outline-primary", function (event) {
        event.preventDefault();
        
        Question ();

    });





};

// PROCESS

$("#startButton").on("click", Question);

$("#displayText").on("click", ".btn-light", function (event) {
    event.preventDefault();

    if ($(this).attr("data-value") === questionArr[roundCount].correctAnswer) {
        Correct();
    } else {
        Incorrect();
    };

});

