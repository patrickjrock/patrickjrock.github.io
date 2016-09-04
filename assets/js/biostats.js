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
  return new Question(q, a);
}

function getSensitivityQuestion() {
  tp = getRandomInt(1,100);
  fn = getRandomInt(1,100);
  var q = "What is the sensitivity of a test with " + tp + " true positives and " + fn + " false negatives?";
  var a = tp/(tp+fn);
  return new Question(q,a);
}

function getSpecificityQuestion() {
  tn = getRandomInt(1,100);
  fp = getRandomInt(1,100);
  var q = "What is the specificity of a test with " + tn + " true negatives and " + fp + " false positives?";
  var a = tn/(tn+fp);
  return new Question(q,a);
}

var q = getSpecificityQuestion();

function show() {
  $("p#answer").html(q.answer);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
