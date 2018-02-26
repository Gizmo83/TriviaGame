var questions = [
    ["Inside which HTML element do we put the JavaScript?", "&ltscripting&gt", "&ltscript&gt", "&ltjavascript&gt","&ltjs&gt", "B" ],
    ["How do you write 'Hello World' in an alert box?", "msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "C" ],
    ["How do you create a function in JavaScript?", "function:myFunction()", "function = myFunction()", "function myFunction()", "function myFunction{}", "C" ],
    ["How to write an IF statement in JavaScript?", "if i = 5 then", "if (i == 5)", "if i = 5","if i == 5 then", "B" ]
];
var timer = 60;
var arrayPos = 0;
var intervalId;
var correct = 0;
var options;
var choice;

function printQuestion(){
    // Checks for the last question
    if(arrayPos >= questions.length) {
        $("#quiz").html("<p>Quiz Completed!</p><p>You got " + correct + " of " + questions.length + " questions correct.</p>");
        $("#quiz-status").html("")
        arrayPos = 0;
        correct = 0;
        clearInterval(intervalId);
        return;
    }
    // Prints each question and answer
    $("#quiz-status").html("Question " + (arrayPos+1) + " of " + questions.length);
    var question = questions[arrayPos][0];
    var optionA = questions[arrayPos][1];
    var optionB = questions[arrayPos][2];
    var optionC = questions[arrayPos][3];
    var optionD = questions[arrayPos][4];
    $("#quiz").html("<h3>" + question + "</h3>");
    $("#quiz").append("<input type='radio' class='opt' name='options' value='A'> " + optionA + "<br>");
    $("#quiz").append("<input type='radio' class='opt' name='options' value='B'> " + optionB + "<br>");
    $("#quiz").append("<input type='radio' class='opt' name='options' value='C'> " + optionC + "<br>");
    $("#quiz").append("<input type='radio' class='opt' name='options' value='D'> " + optionD + "<br><br>");
    $("#quiz").append("<button onclick='checkAnswer()' id='submit' >Submit</button>");
};

function checkAnswer(){
    options = document.getElementsByName("options");
    for (var i=0; i < options.length; i++) {
        if (options[i].checked) {
            choice = options[i].value;
        }
    }
    if (choice == questions[arrayPos][5]) {
        correct++;
    }
    arrayPos++;
    printQuestion();
};

// Start Button - starts questions function and timer function
$("#startquiz").on("click",function(){
    startTimer();
    printQuestion();

});

// Timer - starts decrement function every 1 second
function startTimer() {
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    $("#timer").html("Time Left: " + timer);
    timer--;
    if (timer === 0) {
        arrayPos = questions.length + 1;
        $("#timer").html("Times Up!");
        printQuestion();
        clearInterval(intervalId);
    }
};

