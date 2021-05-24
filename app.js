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
      if (code < 65 || code > 95) {
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
// offset.addEventListener("input", function () {
//   if (!/^\d+&/.test(offset.value)) {
//     alert("The offset must be only numbers");
//   }
// });

// submit.addEventListener("click", function () {
//   if (/^\d+&/.test(offset.value)) {
//     result.value = transformText(input.value, offset.value);
//   } else {
//     alert("The offset value must be numbers");
//   }
// });

submit.addEventListener("click", function () {
  result.value = transformText(input.value, parseFloat(offset.value));
});
