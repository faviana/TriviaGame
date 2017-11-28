$(document).ready(function () {

    //Trivia questions
    var questions = [{
        question: "What is the complimentary color of red?",
        options: ["Yellow", "Pink", "Green", "Blue"],
        correct: 2,
    }, {
        question: "What is the complimentary color of blue?",
        options: ["Orange", "Yellow", "Brown", "Green"],
        correct: 0,
    }, {
        question: "What is the complimentary color of yellow?",
        options: ["Pink", "Red", "Blue", "Purple"],
        correct: 3,
    }];

    //-----------ANSWER BUTTONS-----------//

    //declare variables
    var optionsArray = questions[0].options[0];
    
    //iterate through the options array
    for (var i = 0; i < optionsArray.length[i]; i++) {

        //button variable
        var answerBtn = $("<button>");
        ///answerBth gets an attribute
        answerBtn.attr("data-answere", i);
        //each answerBtn gets text of optionsArray
        answerBtn.text(optionsArray[i]);
        //append to #button div
        $("#buttons").append(answerBtn);

    }



    
});