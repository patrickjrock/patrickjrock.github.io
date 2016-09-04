var Question = function(q, a){
    this.question = q;
    this.answer = a;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function getMeanQuestion() {
  v1 = getRandomInt(1,100);  
  v2 = getRandomInt(1,100);  
  v3 = getRandomInt(1,100);  
  v4 = getRandomInt(1,100);  
  v5 = getRandomInt(1,100);  
  var q = "What is the mean of the sequence: " + v1 + ", " + v2 + ", " + v3 + ", " + v4 + ", " + v5 + " ?";
  var a = (v1+v2+v3+v4+v5)/5;
  return new Question(q, a)
}

var q = getMeanQuestion();

function show() {
  $("p#answer").html(q.answer);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
