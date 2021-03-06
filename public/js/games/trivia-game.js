$(document).ready(function() {

  var qArray;
  var right;
  var wrong;
  var unanswered;
  var currentIndex;
  var timeIsUp;

  var questionTimer = {
    time: 10,

  reset: function() {
        questionTimer.time = 10;
  },
  start: function() {
    $("#time").html("Time Remaining: " + questionTimer.time);
    counter = setInterval(questionTimer.count, 1000);
  },
  stop: function() {
        clearInterval(counter);
  },
  count: function() {
        questionTimer.time--;
        $("#time").html("Time Remaining: " + questionTimer.time);
  },
}

function startTrivia() {
  qArray = [{
    question: "In CSS, what color does this hex code represent: #000000?",
    answers: ["White", "Red", "Blue", "Black"],
    correctanswer: 3
  }, {
    question: "What software must you master to become a full stack developer(MERN)?",
    answers: ["MySql, Excess, Rascal, Napster", "Mongo, Express, React, Node", "Mongrol, Ex-lax, Nostril", "Monster, Expedia, Romel, Nerd"],
    correctanswer: 1
  }, {
    question: "To submit data to github in terminal what command must you run?",
    answers: ["git add", "git out", "git push", "git commit"],
    correctanswer: 2
  }, {
    question: "What do the letters in html stand for?",
    answers: ["hypertext markup language", "hard type manipulation lettering", "higher test mocha listener", "hanging top modified language"],
    correctanswer: 0
  }]

  right = 0;
  wrong = 0;
  unanswered = 0;

  currentIndex = -1;

  $('#questions').html("<button class='button' id='start'>Start</button>");
  $('#answer0, #answer1, #answer2, #answer3').hide().off('click');

  $('#start').on("click", function() {
    advance();
  });
}

  function askQuestions() {
    questionTimer.start();
    $('#questions').html(qArray[currentIndex].question);
    $('#answer0').show().html(qArray[currentIndex].answers[0]);
    $('#answer1').show().html(qArray[currentIndex].answers[1]);
    $('#answer2').show().html(qArray[currentIndex].answers[2]);
    $('#answer3').show().html(qArray[currentIndex].answers[3]);
    $('#result').hide().off('click');

    onClickAnswer();
  }

  function onClickAnswer() {
    $('.button').on("click", function() {
      var buttonClick = parseInt($(this).attr("value"));
      if(buttonClick === qArray[currentIndex].correctanswer) {
        rightAnswer();
      }
      else {
        wrongAnswer();
      }
    });
  }

function rightAnswer(){
  clearTimeout(timeIsUp);
  right++;
  questionTimer.stop();
  questionTimer.reset();
  $("#time").empty();
  $("#questions").html("<h3>Correct!</h3>");
  $('#answer0, #answer1, #answer2, #answer3').hide().off('click');
  $('#result').show().html("You have chosen... Wisely! You will now advance to the next question.");

  timeIsUp = setTimeout(advance, 8 * 1000);
}

function wrongAnswer() {
  clearTimeout(timeIsUp);
  wrong++;
  questionTimer.stop();
  questionTimer.reset();
  $("#time").empty();
  $("#questions").html("<h3>Incorrect!</h3>");
  $('#answer0, #answer1, #answer2, #answer3').hide().off('click');
  $('#result').show().html("You have chosen... Poorly! You have lost a life, prepare for the next question.");

  timeIsUp = setTimeout(advance, 8 * 1000);
}

function timesUp() {
  clearTimeout(timeIsUp);
  unanswered++;
  questionTimer.stop();
  questionTimer.reset();
  $("#time").empty();
  $("#question").html("<h2>Time's Up!</h2>");
  $('#answer0, #answer1, #answer2, #answer3').hide().off('click');
  $('#result').show().html("Your time is up! you have lost a life, prepare for the next question.");

  timeIsUp = setTimeout(advance, 8 * 1000);
}

function endScreen() {
  $("#time").html("<h2>Great job!</h2>");
  $("#questions").html("Your Results <br><br>Right: " + right + "<br>Wrong: " + wrong + "<br>Unanswered: " + unanswered);

  $("#result").html("<button class='button' id='advance'>Advance to the next level!</button>");

  $("#advance").on("click", function() {
    startTrivia();
    advance();
  });
}

function advance() {
  currentIndex++;

  if(currentIndex < qArray.length) {
    askQuestions();
    timeIsUp = setTimeout(timesUp, 10 * 1000);
  } else {
    endScreen();
  }
}

startTrivia();

});
