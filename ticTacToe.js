//////////DECLARATIONS///////

var oneA = document.getElementById('1a');
var oneB = document.getElementById('1b');
var oneC = document.getElementById('1c');

var twoA = document.getElementById('2a');
var twoB = document.getElementById('2b');
var twoC = document.getElementById('2c');

var threeA = document.getElementById('3a');
var threeB = document.getElementById('3b');
var threeC = document.getElementById('3c');
/////////////CLEAR BOARD///////////
//!!//!!  ALERT, ONCE BOARD IS CLEARED, EVENTS ARE NOT HEARD  //!!//!!//
var clear = document.getElementById('clearbutton');
clear.addEventListener('click', clearBoard, false);

function clearBoard() {
  oneA.innerHTML = "?";
  oneB.innerHTML = "?";
  oneC.innerHTML = "?";

  twoA.innerHTML = "?";
  twoB.innerHTML = "?";
  twoC.innerHTML = "?";

  threeA.innerHTML = "?";
  threeB.innerHTML = "?";
  threeC.innerHTML = "?";
}

////////////ROW ONE EVENT LISTENER/////
oneA.addEventListener('dblclick', oneAfillX, false);
oneA.addEventListener('click', oneAfillO, false);

oneB.addEventListener('dblclick', oneBfillX, false);
oneB.addEventListener('click', oneBfillO, false);

oneC.addEventListener('dblclick', oneCfillX, false);
oneC.addEventListener('click', oneCfillO, false);
/////////  ONLY ROW ONE FUNCTIONS AS EXPECTED =( ////////
////////////ROW TWO EVENT LISTENER/////
twoA.addEventListener('dblclick', twoAfillX, false);
twoA.addEventListener('click', twoAfillO, false);

twoB.addEventListener('dblclick', twoBfillX, false);
twoB.addEventListener('click', twoBfillO, false);

twoC.addEventListener('dblclick', twoCfillX, false);
twoC.addEventListener('click', twoCfillO, false);

////////////ROW THREE EVENT LISTENER/////
threeA.addEventListener('dblclick', threeAfillX, false);
threeA.addEventListener('click', threeAfillO, false);

threeB.addEventListener('dblclick', threeBfillX, false);
threeB.addEventListener('click', threeBfillO, false);

threeC.addEventListener('dblclick', threeCfillX, false);
threeC.addEventListener('click', threeCfillO, false);

///////////ROW ONE FUNCTIONS///////
function oneAfillX() {
  oneA.innerHTML = "x";
}

function oneAfillO() {
  oneA.innerHTML = "o";
}

function oneBfillX() {
  oneB.innerHTML = "x";
}

function oneBfillO() {
  oneB.innerHTML = "o";
}

function oneCfillX() {
  oneC.innerHTML = "x";
}

function oneCfillO() {
  oneC.innerHTML = "o";
}

///////////ROW TWO FUNCTIONS//////


function twoAfillX() {
  twoA.innerHTML = "x";
}

function twoAfillO() {
  twoA.innerHTML = "o";
}

function twoBfillX() {
  twoB.innerHTML = "x";
}

function twoBfillO() {
  twoB.innerHTML = "o";
}

function twoCfillX() {
  twoC.innerHTML = "x";
}

function twoCfillO() {
  twoC.innerHTML = "o";
}

//////////ROW THREE FUNCTIONS///////

function threeAfillX() {
  threeA.innerHTML = "x";
}

function threeAfillO() {
  threeA.innerHTML = "o";
}

function threeBfillX() {
  threeB.innerHTML = "x";
}

function threeBfillO() {
  threeB.innerHTML = "o";
}

function threeCfillX() {
  threeC.innerHTML = "x";
}

function threeCfillO() {
  threeC.innerHTML = "o";
}