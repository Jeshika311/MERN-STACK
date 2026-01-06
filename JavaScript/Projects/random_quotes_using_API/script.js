const apiUrl = "https://api.example.com/quotes";
const apiKey = "pynpbxIii2l70nFxN249qw==1JKm1PYJ8cDss1uM";

const url = `${apiUrl}?apikey=${apiKey}`;

fetch(apiUrl, {
  headers: {
    "Authorization": `Bearer ${apiKey}`
  }
});

async function getQuote() {
  const response = await fetch("https://zenquotes.io/api/random");
  const data = await response.json();
  console.log(data); // See what the API returns

  // ZenQuotes returns an array of quotes
  document.getElementById("quote").innerText = `"${data[0].q}" — ${data[0].a}`;
}

document.getElementById("new-quote-btn").addEventListener("click", getQuote);
