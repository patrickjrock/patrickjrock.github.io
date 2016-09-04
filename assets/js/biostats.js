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

function getPPVQuestion() {
  tp = getRandomInt(1,100);
  fp = getRandomInt(1,100);
  var q = "What is the positive predictive value of a test with " + tp + " true positivies and " + fp  + " false positives?";
  var a = tp/(tp+fp);
  return new Question(q,a);
}

function getNPVQuestion() {
  tn = getRandomInt(1,100);
  fn = getRandomInt(1,100);
  var q = "What is the negative predictive value of a test with " + tn + " true negatives and " + fn + " false negatives?";
  var a = tn/(tn+fn);
  return new Question(q,a);
}

function getincidenceQuestion() {
  newcases = getRandomInt(1,100);
  risk = getRandomInt(100,200);
  var q = "What is the incidence of a disease with " + newcases + " new cases in a population of " + risk + "?";
  var a = newcases/risk;
  return new Question(q,a);
}

function getprevalanceQuestion() {
  existingcases = getRandomInt(1,100);
  population = getRandomInt(100,200);
  var q = "What is the prevalance of a disease with " + existingcases + " existing cases in a population of " + population + "?";
  var a = existingcases/population;
  return new Question(q,a);
}

function getORQuestion() {
}

function getRRQuestion() {
}

function getARQuestion() {
}

function getRRRQuestion() {
}

function getARRQuestion() {
}

function getNNTQuestion() {
}

function getNNHQuestion() {
}

var q = getSpecificityQuestion();

function show() {
  $("p#answer").html(q.answer);
}

function unshow() {
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>"');
}

function setQuestion(qid) {
  switch(qid) {
    case 0:
      q = getSensitivityQuestion();
      break;
    case 1:
      q = getSpecificityQuestion();
      break;
    case 2:
      q = getPPVQuestion();
      break;
    case 3:
      q = getNPVQuestion();
      break;
    case 4:
      q = getincidenceQuestion();
      break;
    case 5:
      q = getprevalanceQuestion();
  }
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>"');
  $("p#question").html(q.question);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
