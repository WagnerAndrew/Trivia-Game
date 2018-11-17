// VARIABLES

var correct = 0;
var incorrect = 0;

var roundCount = 0;

        var questionArr = [
            {
                question: "What is the composer Vivaldi's first name?",
                answerArr: ["Maricio","Pietro","Antonio","Laurice"],
                correctAnswer: "Antonio"
            },
            {
                question: "Who made the highly rated 1959 jazz album 'Kind Of Blue?'",
                answerArr: ["John Coltrane","Miles Davis","Ornette Coleman","Duke Ellington"],
                correctAnswer: "Antonio"
            },
            {
                question: "In which American city was Elvis discovered in?",
                answerArr: ["Nashville","Macom","Charleston","Memphis"],
                correctAnswer: "Memphis"
            },
        ];

// FUNCTIONS


// FUNCTION 1

function generateQuestion () {

    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + questionArr[roundCount].question + "</h2>");
    var answerText = $("<h3>");

    for (i = 0 ; i < questionArr[roundCount].answerArr.length; i++) {

        var answerButton = $("<button type='button' class='btn-light m-2'>" + questionArr[roundCount].answerArr[i] +"</button><"); 
        answerButton.attr("value", [i]);
        answerText.append(answerButton);  
    };

    $("#displayText").append(displayText);
    $("#displayText").append(answerText);
}

// FUNCTION 2




// PROCESS

$("#startButton").on("click", generateQuestion);

$("#displayText").on("click", ".btn-light", function(event) {
    event.preventDefault();
    var buttonValue = $(this).attr("value");
    buttonValue = parseInt(buttonValue);
    console.log("Button value is: " + buttonValue);

});
