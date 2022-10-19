import chik from "./src/imgs/chicken.gif";
import curs from "./src/imgs/cursor.png";
var start, stop, score, chicken, ready;
chicken = document.createElement("img");
score = document.createElement("input");

document.addEventListener("DOMContentLoaded", () => {
  chicken.style.position = "relative";
  start = document.createElement("button");
  start.classList.add("start");
  start.textContent = "press Start";
  stop = document.createElement("button");
  stop.classList.add("stop");
  stop.textContent = "Stop";
  score.classList.add("scrore");
  document.querySelector("#app").appendChild(score);
  document.querySelector("#app").appendChild(start);
  document.querySelector("#app").appendChild(stop);
  Events();
});

function Events() {
  start.addEventListener("click", () => {
    document.querySelector(".main").appendChild(chicken);
    chicken.src = chik;
    randomCounter(document.querySelector("body").clientHeight);
  });
  chicken.addEventListener("click", () => {
    score.value++;
    randomCounter(document.querySelector("body").clientHeight);
  });
  stop.addEventListener("click", () => {
    document.querySelector(".main").removeChild(chicken);
  });
}

function randomCounter(num) {
  chicken.style.top = `${Math.random() * num}px`;
  if (num > 1000) {
    num = 1000;
    chicken.style.left = `${Math.random() * num}px`;
  } else {
    chicken.style.left = `${Math.random() * num}px`;
  }

  ready = anima(chicken);
  ready.onfinish = function () {
    randomCounter(document.querySelector("body").clientHeight);
  };

  return ready;
}

function anima(chick) {
  var top = chick.style.top;
  var left = chick.style.left;

  var a = chick.animate(
    [
      {
        left: `-${left}`,
        top: `${top}`,
      },
      {},
    ],
    {
      duration: 5000,
      iterations: 1,
    }
  );
  return a;
}
