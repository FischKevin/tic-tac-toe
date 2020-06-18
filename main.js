function init() {
    activePlayer = 1;

};

function gameOver() {
    document.querySelector('.message').textContent='Game Over';
}

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    let case1 = document.querySelector('.case-1').textContent;
    let case2 = document.querySelector('.case-2').textContent;
    let case3 = document.querySelector('.case-3').textContent;
    let case4 = document.querySelector('.case-4').textContent;
    let case5 = document.querySelector('.case-5').textContent;
    let case6 = document.querySelector('.case-6').textContent;
    let case7 = document.querySelector('.case-7').textContent;
    let case8 = document.querySelector('.case-8').textContent;
    let case9 = document.querySelector('.case-9').textContent;


    if (case1 != '' && case2 != '' && case3 != '' && case4 != '' && case5 != '' && case6 != '' && case7 != '' && case8 != '' && case9 != '') {
     gameOver();   
    }

    /*if ('.case-1' === 'O') {
        gameOver();
    } */

};




init();

document.querySelector('.case-1').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-1").textContent = 'X';
    } else {
        document.querySelector(".case-1").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-2').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-2").textContent = 'X';
    } else {
        document.querySelector(".case-2").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-3').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-3").textContent = 'X';
    } else {
        document.querySelector(".case-3").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-4').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-4").textContent = 'X';
    } else {
        document.querySelector(".case-4").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-5').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-5").textContent = 'X';
    } else {
        document.querySelector(".case-5").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-6').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-6").textContent = 'X';
    } else {
        document.querySelector(".case-6").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-7').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-7").textContent = 'X';
    } else {
        document.querySelector(".case-7").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-8').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-8").textContent = 'X';
    } else {
        document.querySelector(".case-8").textContent = 'O';
    }
    nextPlayer();
  });

  document.querySelector('.case-9').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-9").textContent = 'X';
    } else {
        document.querySelector(".case-9").textContent = 'O';
    }
    nextPlayer();
  });