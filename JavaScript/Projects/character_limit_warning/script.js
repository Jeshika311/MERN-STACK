const textarea = document.getElementById("feedback");
const warning = document.getElementById("warning");

textarea.addEventListener("input", () => {
  if (textarea.value.length > 150) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
})