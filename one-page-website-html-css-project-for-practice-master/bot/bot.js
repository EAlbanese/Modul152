var questionNum = 0;

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
        output.innerHTML = '<h1>Hallo ' + input + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Wie alt sind Sie?</h1>';
        setTimeout(timedQuestion, 2000);
    } else if (questionNum == 1) {
        output.innerHTML = '<h1>Das bedeutet Sie wurden im ' + (2022 - input) + ' geboren</h1>';
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        bot();
        questionNum++;
    }
});