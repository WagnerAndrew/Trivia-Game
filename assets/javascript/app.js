
// VARIABLES
var intervalID;
var clock = 11;

var correct = 0;
var incorrect = 0;

    var questionArr = [
        {
            question: "What is the composer Vivaldi's first name?",
            answerArr: ["Maricio","Pietro","Antonio","Laurice"],
            correctAnswer: "Antonio"
        },
        {
            question: "Who made the highly rated 1959 jazz album 'Kind Of Blue?'",
            answerArr: ["John Coltrane","Miles Davis","Ornette Coleman","Duke Ellington"],
            correctAnswer: "Miles Davis"
        },
        {
            question: "In which American city was Elvis discovered in?",
            answerArr: ["Nashville","Macom","Charleston","Memphis"],
            correctAnswer: "Memphis"
        },
        ];

var roundCount = (questionArr.length - 1);
console.log ("Round count is: " + roundCount);        
 
// FUNCTIONS

// FUNCTION 1

function Timer() {
    
    // clearInterval (intervalId);
    intervalId = setInterval(decrement, 1000);
}

// FUNCTION 2

function decrement() {
    clock--;
    $("#clockText").html(clock);
    
    if (clock === -1) {
    
      alert("Time Up!");
      Incorrect();
      
    }
}

// FUNCTION 3
 
function Question () {

    if (roundCount < 0){
        Reset ();
    } else{
        $("#displayText").empty ();
        displayText = $("<div>");

        Timer();

        displayText.append("<h2><strong>" + questionArr[roundCount].question + "</strong></h2>");
        
        var answerText = $("<h3>");

        for (i = 0 ; i < questionArr[roundCount].answerArr.length; i++) {

            var answerButton = $("<button type='button' class='btn-light m-2'>" + questionArr[roundCount].answerArr[i] +"</button><"); 
            answerButton.attr("data-value", questionArr[roundCount].answerArr[i]);
            answerText.append(answerButton);  
        };

        $("#displayText").append(displayText);
        $("#displayText").append(answerText);
    };
};

// FUNCTION 3

function Correct () {

    $("#clockText").empty ();
    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + "You got it!" + "</h2>");
    displayText.append("<h4>" + questionArr[roundCount].question + "</h4>");
    displayText.append("<h2><strong>" + questionArr[roundCount].correctAnswer + "</strong></h2>");
    $("#displayText").append(displayText);

    correct++;
    roundCount--;
    console.log ("Round count is: " + roundCount);
    setTimeout(Question, 1000 * 3);
    clearInterval (intervalId);
    clock = 11;
};

// FUNCTION 4

function Incorrect () {

    $("#clockText").empty ();
    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + "Sorry! The correct answer was:" + "</h2>");
    displayText.append("<h4>" + questionArr[roundCount].question + "</h4>");
    displayText.append("<h2><strong>" + questionArr[roundCount].correctAnswer + "</strong></h2>");
    $("#displayText").append(displayText);

    incorrect++;
    roundCount--;
    
    console.log ("Round count is: " + roundCount);
    setTimeout(Question, 1000 * 3);
    clearInterval (intervalId);
    clock = 11;
};

// FUNCTION 5

function Reset () {

    $("#clockText").empty ();
    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + "Game Over" + "</h2>");
    displayText.append("<h3>" + "You got " + correct + " right & you missed " + incorrect + " !" + "</h3>");

    $("#displayText").append(displayText);

    
    roundCount = (questionArr.length -1);
    correct = 0;
    incorrect = 0;

    setTimeout(Question, 1000 * 3);
    clearInterval (intervalId);
    clock = 11;
};




// PROCESS

$("#startButton").on("click", Question);

$("#displayText").on("click", ".btn-light", function (event) {
    event.preventDefault();
    var buttonValue = $(this).attr("data-value");

        if ($(this).attr("data-value") === questionArr[roundCount].correctAnswer) {
            Correct();
        } else {
            Incorrect();
        };

});

