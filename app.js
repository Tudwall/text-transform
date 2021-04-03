// Selectors
const input = document.querySelector("#input");

// Event Listeners
// Functions
function transformText(str) {
  // Get a new var with the string, turn it into an array
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(char);
      // Scans array to find the character's code
      if (code < 65 || code > 90) {
        // Return a converted character
        return String.fromCharCode(code);
      } else if (code < 78) {
        // Forward 13
        return String.fromCharCode(code + 13);
      } else {
        // Backward 13
        return String.fromCharCode(code - 13);
      }
    })
    .join(""); // To get it back as a string
}

// Get textarea content, modify it and inject it in a result div.
