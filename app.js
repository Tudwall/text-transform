// Selectors
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const offset = document.querySelector("#offset");

// Functions
function transformText(str, offset) {
  return str
    .toUpperCase()
    .split("")
    .map((char) => {
      // To check every character in the array.
      const code = char.charCodeAt(char);
      if (code > 65 || code < 90) {
        return String.fromCharCode(code + offset);
      } else if (code + offset > 90) {
        return String.fromCharCode((code = 65 + offset));
      } else if (code + offset < 65) {
        return String.fromCharCode((code = 90 - offset));
      }
    })
    .join(""); // To get it back as a string.
}

submit.addEventListener("click", function () {
  result.value = transformText(input.value, parseFloat(offset.value));
});
