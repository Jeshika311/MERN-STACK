const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      display.value = eval(currentInput).tostring();
    } 
    else if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});