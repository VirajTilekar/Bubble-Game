document.querySelector(".newGame").addEventListener("click", function () {
  let timer = 60;
  let ran = 0;
  let score = 0;

  function bubble() {
    let clutter = "";

    for (let i = 1; i <= 168; i++) {
      let ran = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${ran}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
  }

  function runTimer() {
    let timerInterval = setInterval(() => {
      if (timer > 0) {
        timer--;
        document.querySelector(".timer").innerText = timer;
      } else {
        clearInterval(timerInterval);
        document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
      }
    }, 1000);
  }

  function newHit() {
    ran = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = ran;
  }

  function increaseScore() {
    score += 10;
    document.querySelector(".score").textContent = score;
  }

  document.querySelector("#pbtm").addEventListener("click", function (details) {
    let hit = Number(details.target.textContent);
    if (hit === ran) {
      increaseScore();
      bubble();
      newHit();
    }
  });

  newHit();

  runTimer();

  bubble();
});
