
//function that tests whether the rectangular hitboxes make a collision (args are player/enemy objects)
function rectangularCollision({rectangle1, rectangle2}) {
  return (rectangle1._attackBox._position.x + rectangle1._attackBox._width >= rectangle2._position.x
      && rectangle1._attackBox._position.x <= rectangle2._position.x + rectangle2._width
      && rectangle1._attackBox._position.y + rectangle1._attackBox._height >= rectangle2._position.y
      && rectangle1._attackBox._position.y <= rectangle2._position.y + rectangle2._height)
}

function clickButtonCollision({x, y, button}) {
  return (x > button._position.x
    && x < button._position.x + button._width
    && y > button._position.y
    && y < button._position.y + button._height)
}

function determineWinner({player, enemy, timerID}) {
  clearTimeout(timerID); //stops the timer when someone loses
  if (!gameSettings.gameOverToggle.toggle) {
    document.querySelector('#displayText').style.display = 'flex';
  }
  document.querySelector('#displayText').style.fontSize = '50px';
  if (player._health === enemy._health) {
    //timeout
    document.querySelector('#displayText').innerHTML = 'Tie';
  }
  else if (player._health > enemy._health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
  }
  else if (enemy._health > player._health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
  }
}

//
let timer = 61;
let timerID;
function decreaseTimer() {
  document.querySelector('#timer').style.fontSize = '50px';
  if (timer > 0) {
    timerID = setTimeout(decreaseTimer, 1000) //time in milliseconds
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }
  if (timer === 0) {
    determineWinner({player, enemy, timerID});
  }
}
