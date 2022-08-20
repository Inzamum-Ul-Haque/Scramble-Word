const word = document.querySelector(".word");
const hint = document.getElementById("hint");
const timeLeft = document.getElementById("time-left");
const typedWord = document.querySelector(".typed-word");
let correctWord, timer;

function initTimer(maxtime) {
  clearInterval(timer);
  timer = setInterval(function () {
    if (maxtime > 0) {
      maxtime--;
      return (timeLeft.innerText = maxtime);
    }
    clearInterval(timer);
    alert(`Time off!! ${correctWord.toUpperCase()} was the correct word!!`);
    initGame();
  }, 1000);
}

function initGame() {
  initTimer(30);
  //getting random object
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  //shuffling the characters of the word array
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  word.innerText = wordArray.join("");
  hint.innerText = "Hint: " + randomObj.hint;
  correctWord = randomObj.word;
  typedWord.value = "";
}

document.getElementById("refresh").addEventListener("click", initGame);

document
  .getElementById("check")
  .addEventListener("click", function checkWord() {
    if (typedWord.value.toLowerCase() === correctWord.toLowerCase()) {
      alert(`Congrats!! ${typedWord.value.toUpperCase()} is the correct word`);
    } else if (typedWord.value === "") {
      alert(`Please enter a word check`);
    } else {
      alert(`Ooops!! ${typedWord.value} is not the correct word`);
    }
    initGame();
  });
