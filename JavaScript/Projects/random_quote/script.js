const quotes = [
  "Be yourself; everyone else is already taken.",
  "In the middle of every difficulty lies opportunity.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Don't watch the clock; do what it does. Keep going.",
  "Everything you can imagine is real.",
  "Act as if what you do makes a difference. It does.",
  "It always seems impossible until it's done.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Believe you can and you're halfway there."
];

const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerHTML = quotes[randomIndex];
});