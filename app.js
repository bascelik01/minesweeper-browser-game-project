const music = document.querySelector('#bg-music');
const ba = new Audio('A Lonely Cherry Tree.mp3');

document.getElementById("music-btn").addEventListener("click", function (event) {
    if (ba.paused) {
        ba.volume = 0.2;
        ba.play();
    } else {
        ba.pause();
    }
});

let mines = 10;

const gameContainer = document.getElementById("game-container");
for (let i = 0; i < 81; i++) {
    let hasBomb = Math.random() * 100;
    const tile = document.createElement('div');
    if (hasBomb >= 80 && mines > 0) {
        tile.className = 'game-tile bomb';
        mines--;
        tile.addEventListener('click', function () {
            document.getElementById("score-board").style.display = 'block';
            document.getElementById("final-score").innerText = "Game Over! Your score is " + parseInt(document.getElementById("score").innerText);
            document.getElementById("final-score").style.display = 'block';

            document.querySelectorAll(".game-tile-cover").forEach(function (cover) {
                cover.style.display = 'none';
            })
        });
    } else {
        tile.className = 'game-tile';
        tile.addEventListener('click', function () {
            document.getElementById("score").innerText = parseInt(document.getElementById("score").innerText) + 1;
        });

    }
    const tileCover = document.createElement('div');
    tileCover.className = 'game-tile-cover';
    tileCover.addEventListener('click', function () {
        tileCover.style.display = 'none';
    });
    tile.appendChild(tileCover);
    gameContainer.appendChild(tile);
}
const gameResetBtn = document.getElementById("reset-button");
gameResetBtn.addEventListener('click', function () {
    location.reload();
});



