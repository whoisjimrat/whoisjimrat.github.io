const dino = document.getElementById("dino");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function createCactus() {
  const cactus = document.createElement("div");
  cactus.id = "cactus";
  document.body.appendChild(cactus);

  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  const moveCactus = setInterval(() => {
    cactusLeft -= 10;
    cactus.style.left = cactusLeft + "px";

    if (cactusLeft < -20) {
      clearInterval(moveCactus);
      cactus.remove();
    }

    // Collision detection
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert("Game Over!");
      clearInterval(moveCactus);
    }
  }, 10);
}

// Initial cactus
createCactus();

// Create new cactuses randomly
function randomCactusInterval() {
  const randomDelay = Math.random() * 2000 + 500; // Delay between 0.5 and 2.5 seconds
  setTimeout(createCactus, randomDelay);
}

randomCactusInterval(); // Start the random cactus generation

document.addEventListener("keydown", function (event) {
  jump();
});