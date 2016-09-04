var Question = function(q, a){
    this.question = q;
    this.answer = a;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeTable(a,b,c,d) {
  var t = '<table class="pure-table pure-table-bordered"><tbody> <tr> <td>Status</td> <td >Infected</td> <td >Uninfected</td> </tr> <tr>';
  t = t + '<td>Exposed</td> <td>A</td> <td>B</td> </tr><tr><td>Unexposed</td> <td>C</td> <td>D</td> </tr> </tbody></table>';
  return t.replace("A",a).replace("B",b).replace("C",c).replace("D",d);
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
  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the odds ratio."
  var ans = (a*d)/(b*c);
  return new Question(q,ans);
}

function getRRQuestion() {
  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the relative risk."
  var ans = (a/(a+b))/(c/(c+d));
  return new Question(q,ans);
}

function getARQuestion() {
  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the attributable risk."
  var ans = (a/(a+b)) - (c/(c+d));
  return new Question(q,ans);
}

function getRRRQuestion() {
  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the relative risk reduction."
  var ans = 1 - (a/(a+b))/(c/(c+d));
  return new Question(q,ans);
}

function getARRQuestion() {
  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the absolute risk reduction."
  var ans = (c/(c+d)) - (a/(a+b));
  return new Question(q,ans);
}

function getNNTQuestion() {

  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the number needed to treat."
  var ans = 1 / ( (c/(c+d)) - (a/(a+b)));
  return new Question(q,ans);
}

function getNNHQuestion() {

  a = getRandomInt(1,100);
  b = getRandomInt(1,100);
  c = getRandomInt(1,100);
  d = getRandomInt(1,100);
 
  var q = makeTable(a,b,c,d)
  q = q + "Calculate the number needed to harm."
  var ans = 1 / ( (a/(a+b)) - (c/(c+d)));
  return new Question(q,ans);
}

var q = getSpecificityQuestion();

function show() {
  $("p#answer").html(q.answer);
}

function unshow() {
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>');
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
      break;
    case 6:
      q = getORQuestion();
      break;
    case 7:
      q = getRRQuestion();
      break;
    case 8:
      q = getARQuestion();
      break;
    case 9:
      q = getRRRQuestion();
      break;
    case 10:
      q = getARRQuestion();
      break;
    case 11:
      q = getNNTQuestion();
      break;
    case 12:
      q = getNNHQuestion();
  }
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>');
  $("p#question").html(q.question);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
