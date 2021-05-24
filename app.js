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
      if (code > 65 && code < 95) {
        return String.fromCharCode(code); // Returns unchanged character.
      } else if (code < 78) {
        return String.fromCharCode(code + offset);
      } else {
        return String.fromCharCode(code - offset);
      }
    })
    .join(""); // To get it back as a string.
}

// Event Listeners
