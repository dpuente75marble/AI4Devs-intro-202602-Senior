// ==========================
// Pure business logic
// ==========================

/**
 * Reverses a string in a Unicode-safe way
 * @param {string} str
 * @returns {string}
 */
const reverseString = (str) => [...str].reverse().join("");

// ==========================
// UI Layer
// ==========================

const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const result = document.getElementById("result");

/**
 * Updates UI state
 * @param {string} value
 */
const render = (value) => {
  button.disabled = value.length <= 3;
  result.textContent = reverseString(value);
};

input.addEventListener("input", (e) => render(e.target.value));
button.addEventListener("click", () => render(input.value));
