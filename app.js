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

// Event Listeners
offset.addEventListener("input", function () {
  // RegEx tests if the string only contains numbers.
  if (/^\d+$/.test(offset.value)) {
    offset.style.color = "green";
  } else {
    offset.style.color = "red";
  }
});

submit.addEventListener("click", function () {
  result.value = transformText(input.value, parseFloat(offset.value));
});

// Test texts
// URYYB JBEYQ
// BCRAPYNFFEBBZF
// PRPV RFG ZBA PBQR FRPERG
