const greetings = [
  "Hello!",
  "How are you?",
  "Welcome to the site!",
  "Hope you are doing great!",
  "Have a nice day!"
];

const greetBox = document.getElementById("greet-box");
const startBtn = document.getElementById("start-btn");

function startGreeting() {
  greetings.forEach((msg, index) => {
    setTimeout(() => {
      greetBox.innerText = msg;
    }, index * 1500);
  });
}

startBtn.addEventListener("click", startGreeting);