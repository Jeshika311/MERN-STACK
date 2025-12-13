document.querySelector("#convertBtn").addEventListener("click", function () {
    const input = document.querySelector("#TempInC").value.trim();
    const output = document.querySelector("#TempInF");

    if (input === '' || isNaN(input)) {
        alert("Please enter a valid numeric temperature.");
        output.value = '';
    } else {
        const fahrenheit = (parseFloat(input) * 9 / 5) + 32;
        output.value = `${fahrenheit.toFixed(2)} °F`;
    }
});