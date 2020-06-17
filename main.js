function init() {
    activePlayer = 1;

};

init();

document.querySelector('.case-1').addEventListener('click', function() {

    if (activePlayer === 0) {
        document.querySelector(".case-1").textContent = 'X';
    } else {
        document.querySelector(".case-1").textContent = 'O';
    }

  });

