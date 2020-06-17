function init() {
    activePlayer = 1;

};

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    if ('.case-1' != '' && '.case-2' != '' && '.case-3' != '' && '.case-4' != '' && '.case-5' != '' && '.case-6' != '' && '.case-7' != '' && '.case-8' != '' && '.case-9' != '') {
     gameOver();   
    }
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