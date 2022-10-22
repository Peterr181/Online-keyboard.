class Keyboard {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  appendLetterClicking(letter) {
    this.currentOperand = this.currentOperand + letter;
  }
  play() {
    audio.play();
  }
  // Updating value display
  updateDisplay() {
    this.currentOperandTextElement.innerHTML = this.currentOperand;
  }

  deleteValue() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.updateDisplay();
  }

  appendSpace() {
    this.currentOperand = this.currentOperand + " ";
  }
}


let i = 0;
let text = "Welcome to online keyboard!";
function typing() {
  if (i < text.length) {
    answer.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}


function changeKeyboard(count) {
  if (count % 2 != 0) {
    capit.forEach((key) => {
      key.style.textTransform = "capitalize";
    });
    key[0].innerHTML = "~";
    key[1].innerHTML = "!";
    key[2].innerHTML = "@";
    key[3].innerHTML = "#";
    key[4].innerHTML = "$";
    key[5].innerHTML = "%";
    key[6].innerHTML = "^";
    key[7].innerHTML = "&";
    key[8].innerHTML = "*";
    key[9].innerHTML = "(";
    key[10].innerHTML = ")";
    key[11].innerHTML = "_";
    key[12].innerHTML = "+";
    key[25].innerHTML = "{";
    key[26].innerHTML = "}";
    key[27].innerHTML = "|";
    key[38].innerHTML = ":";
    key[39].innerHTML = `"`;
    key[49].innerHTML = "<";
    key[50].innerHTML = `>`;
    key[51].innerHTML = `?`;
  } else {
    key[0].innerHTML = "`";
    key[1].innerHTML = "1";
    key[2].innerHTML = "2";
    key[3].innerHTML = "3";
    key[4].innerHTML = "4";
    key[5].innerHTML = "5";
    key[6].innerHTML = "6";
    key[7].innerHTML = "7";
    key[8].innerHTML = "8";
    key[9].innerHTML = "9";
    key[10].innerHTML = "0";
    key[11].innerHTML = "-";
    key[12].innerHTML = "=";
    key[25].innerHTML = "[";
    key[26].innerHTML = "]";
    key[27].innerHTML = "/";
    key[38].innerHTML = ";";
    key[39].innerHTML = `'`;
    key[49].innerHTML = ",";
    key[50].innerHTML = `.`;
    key[51].innerHTML = `/`;
    capit.forEach((key) => {
      key.style.textTransform = "lowercase";
    });
  }
}
//Input value
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

var audio = new Audio("click.mp3");

// Our keyboard elements
const num = document.querySelectorAll("[data-number]");
const backspace = document.getElementById("backspace");
const tab = document.getElementById("tab");
const letter = document.querySelectorAll("[data-letter]");
const caps = document.getElementById("caps");
const enter = document.getElementById("entero");
const shiftLeft = document.querySelector("[data-shift-left]");
const shiftRight = document.querySelector("[data-shift-right]");
const space = document.getElementById("space");
const capit = document.querySelectorAll(".capit");
const key = document.querySelectorAll(".key");

const keyboard = new Keyboard(currentOperandTextElement);
// By clicking
num.forEach((button) => {
  button.addEventListener("click", () => {
    keyboard.appendNumber(button.innerText);
    keyboard.updateDisplay();
  });
});
// By clicking
letter.forEach((letter) => {
  letter.addEventListener("click", () => {
    keyboard.appendLetterClicking(letter.innerText);
    keyboard.updateDisplay();
    counter1 = 0;
  });
});
// Appending keys to input
for (let i = 0; i < key.length; i++) {
  document.addEventListener("keydown", function (event) {
    if (event.key === key[i].textContent) {
      keyboard.appendLetterClicking(key[i].textContent);

      keyboard.updateDisplay();
    } else if (
      event.key === key[i].textContent.toUpperCase() &&
      event.key != "`"
    ) {
      keyboard.appendLetterClicking(key[i].textContent.toUpperCase());

      keyboard.updateDisplay();
    }
  });
}
// Deleting value
backspace.addEventListener("click", () => {
  keyboard.deleteValue();
});
let counter1 = 0;
// Spaces


//Activate welcome message
typing();

tab.addEventListener("click", function () {
  keyboard.appendSpace();
  keyboard.updateDisplay();
});

// Making capslock on click working
let counter = 0;
let counter2 = 0;
caps.addEventListener("click", () => {
  counter++;

  if (counter % 2 != 0) {
    capit.forEach((key) => {
      key.style.textTransform = "capitalize";
    });
  } else {
    capit.forEach((key) => {
      key.style.textTransform = "lowercase";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "CapsLock") {
    counter2++;
    if (counter2 % 2 != 0) {
      capit.forEach((key) => {
        key.style.textTransform = "capitalize";
      });
    } else {
      capit.forEach((key) => {
        key.style.textTransform = "lowercase";
      });
    }
  }
});

// Key events

// Getting light for all normal keys
key.forEach((key) => {
  document.addEventListener("keyup", function (event) {
    if (event.key === key.textContent) {
      key.style.background = "#fff";
    } else if (event.key === key.textContent.toUpperCase()) {
      key.style.background = "#fff";
    }
  });
});
// Getting dark for all normal chars
key.forEach((key) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === key.textContent) {
      key.style.background = "#C0C0C0";
    } else if (event.key === key.textContent.toUpperCase()) {
      key.style.background = "#C0C0C0";
    }
  });
});

let counteros = 0;
// Making shifts working
window.addEventListener("keydown", function (e) {
  if (e.code === "ShiftRight") {
    counteros++;
    shiftRight.style.background = "#C0C0C0";
    changeKeyboard(counteros);
  }
  if (e.code === "ShiftLeft") {
    counteros++;
    shiftLeft.style.background = "#C0C0C0";
    changeKeyboard(counteros);
  }
  if (e.code === "CapsLock") {
    caps.style.background = "#C0C0C0";
  }
  if (e.code === "Space") {
    space.style.background = "#C0C0C0";
    keyboard.appendLetterClicking(" ");
    keyboard.updateDisplay();
  }
});

// Making shift light
window.addEventListener("keyup", function (e) {
  if (e.code === "ShiftRight") {
    shiftRight.style.background = "#fff";
  }
  if (e.code === "ShiftLeft") {
    shiftLeft.style.background = "#fff";
  }
  if (e.code === "CapsLock") {
    caps.style.background = "#fff";
  }
  if (e.code === "Space") {
    space.style.background = "#fff";
  }
});

// Making other special keys working
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Enter":
      enter.style.background = "#C0C0C0";
      break;
    case "Backspace":
      backspace.style.background = "#C0C0C0";
      keyboard.deleteValue();
      break;
    case "Capslock":
      caps.style.background = "#C0C0C0";

      break;
    case "Tab":
      tab.style.background = "#C0C0C0";
      break;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "Enter":
      enter.style.background = "#fff";
      break;
    case "Backspace":
      backspace.style.background = "#fff";
      break;
    case "Capslock":
      caps.style.background = "#C0C0C0";
      break;
    case "Tab":
      tab.style.background = "#fff";
      break;
  }

  // if (event.key === "Enter") {
  //   enter.style.background = "#fff";
  // }
});
