// VARIABLES

var correct = 0;
var incorrect = 0;

var roundCount = 2;

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

// FUNCTIONS


// FUNCTION 1

function Question () {

    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + questionArr[roundCount].question + "</h2>");
    var answerText = $("<h3>");

    for (i = 0 ; i < questionArr[roundCount].answerArr.length; i++) {

        var answerButton = $("<button type='button' class='btn-light m-2'>" + questionArr[roundCount].answerArr[i] +"</button><"); 
        answerButton.attr("data-value", questionArr[roundCount].answerArr[i]);
        answerText.append(answerButton);  
    };

    $("#displayText").append(displayText);
    $("#displayText").append(answerText);
};

// FUNCTION 2

function Correct () {

    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + "You got it!" + "</h2>");
    displayText.append("<h4>" + questionArr[roundCount].question + "</h4>");
    displayText.append("<h2><strong>" + questionArr[roundCount].correctAnswer + "</strong></h2>");
    $("#displayText").append(displayText);
};

// FUNCTION 3

function Incorrect () {

    $("#displayText").empty ();
    displayText = $("<div>");

    displayText.append("<h2>" + "Sorry! The correct answer was:" + "</h2>");
    displayText.append("<h4>" + questionArr[roundCount].question + "</h4>");
    displayText.append("<h2><strong>" + questionArr[roundCount].correctAnswer + "</strong></h2>");
    $("#displayText").append(displayText);
};




// PROCESS

$("#startButton").on("click", Question);

$("#displayText").on("click", ".btn-light", function(event) {
    event.preventDefault();
    var buttonValue = $(this).attr("data-value");
    
    console.log("Button value is: " + buttonValue);

    if ($(this).attr("data-value") === questionArr[roundCount].correctAnswer){
        Correct ();
        correct++;
        roundCount--;
    
        console.log ("The correct count is: "+correct+"The round count is: "+roundCount);

        setTimeout(Question, 1000 * 3);
        
    }else{
        Incorrect ();
        incorrect++;
        roundCount--;
        setTimeout(Question, 1000 * 3);
    };

});
