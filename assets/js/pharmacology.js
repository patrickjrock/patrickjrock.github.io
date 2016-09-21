var Question = function(q, a){
    this.question = q;
    this.answer = a;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getVDQuestion() {
  amount = getRandomInt(1,100);
  conc = getRandomInt(1,100);
  var q = "What is the Vd if " + amount + " mg or the drug are in the body with a plasma concentration of " + conc + " mg/dL"
  var a = amount/conc;
  return new Question(q,a);
}

var q = getVDQuestion();

function show() {
  $("p#answer").html(q.answer);
}

function unshow() {
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>');
}

function setQuestion(qid) {
  switch(qid) {
    case 0:
      q = getVDQuestion();
      break;
  }
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>');
  $("p#question").html(q.question);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
