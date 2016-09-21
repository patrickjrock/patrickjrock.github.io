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
  var q = "What is the volume of distribution of a drug if " + amount + " mg or the drug are in the body with a plasma concentration of " + conc + " mg/dL?"
  var a = amount/conc;
  return new Question(q,a);
}

function getTIQuestion() {
  TD = getRandomInt(1, 100);
  ED = getRandomInt(1, 100);
  var q = "What is the theraputic index of a drug with a TD of " + TD + " mg and an ED of " + ED  + " mg?"
  var a = TD/ED
  return new Question(q,a);
}

function getClearanceQuestion() {
// clearance equals Vd times Ke
  Vd = getRandomInt(1, 100);
  Ke = getRandomInt(1, 100);
  var q = "What is the clearance of a drug with a Vd of " + Vd + " L and a Ke of " + Ke + "?"
  var a = Vd*Ke
  return new Question(q,a);
}

function getHLQuestion() {
// Half life equals 0.7* (Vd/Cl)
// this is equal to 1/Ke
  Cl = getRandomInt(1, 100);
  Vd = getRandomInt(1, 100);
  var q = "What is the half life of a drug with a clearance of " + Cl + " mg/L and a Vd of " + Vd + " L ?";
  var a = 0.7*Vd/Cl
  return new Question(q,a)
}

function getLDQuestion() {
// Loading dose equals target concentration times Vd divided by bioavailability
  target = getRandomInt(1, 100);
  Vd = getRandomInt(1, 100);
  bio = getRandomInt(1, 100);
  var q = "What is the loading does of a drug with a target concentration of " + target + " mg/L, a Vd of " + Vd + " L and a bioavailability of " + bio + "%?"
  var a = (target*Vd)/bio;
  return new Question(q,a);
}

function getMDQuestion() {
// Maintenance dose equans target concentration times clearance divided by bioavailability
  target = getRandomInt(1,100);
  Cl = getRandomInt(1,100);
  bio = getRandomInt(1,100);
  var q = "What is the maintenance dose of a drug with a target concentration of " + target + " mg/L, a clearance of " + Cl + " mg/L and a bioabailability of " + bio + "%?"
  var a = (target*Cl)/bio;
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
    case 1:
      q = getTIQuestion();
      break;
    case 2:
      q = getClearanceQuestion();
      break;
    case 3:
      q = getHLQuestion();
      break;
    case 4:
      q = getLDQuestion();
      break;
    case 5:
      q = getMDQuestion();
      break;
 }
  $("p#answer").html('<button class="pure-button" onclick="show()">Show Answer</button>');
  $("p#question").html(q.question);
}

$(document).ready(function() {
  $("p#question").html(q.question);
})
