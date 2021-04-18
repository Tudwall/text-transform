// Selectors
const input = document.querySelector("#input");
const submit = document.querySelector(".submit");
const result = document.querySelector("#result");
const offset = document.querySelector("#offset");

// Functions
function transformText(str, decalage) {
  return str
    .toUpperCase()
    .split("")
    .map((char) => {
      const code = char.charCodeAt(char);
      // let decalage = offset.value.parseFloat();
      // Scans array to find the character's code.
      if (code < 65 || code > 90) {
        // Return an unconverted character.
        return String.fromCharCode(code);
      } else if (code < 78) {
        // Forward 13.
        return String.fromCharCode(code + decalage);
      } else {
        // Backward 13.
        return String.fromCharCode(code - decalage);
      }
    })
    .join(""); // To get it back as a string.
}

// Get textarea content, modify it and inject it in a result div.

// Event Listeners
submit.addEventListener("click", function () {
  result.value = transformText(input.value, parseFloat(offset.value));
});

// Test texts
// URYYB JBEYQ
// BCRAPYNFFEBBZF
// PRPV RFG ZBA PBQR FRPERG
