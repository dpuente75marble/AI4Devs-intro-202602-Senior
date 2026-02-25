// Cache DOM elements
const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const result = document.getElementById("result");

/**
 * Unicode-safe reverse
 * @param {string} str
 * @returns {string}
 */
const reverseString = (str) => [...str].reverse().join("");

const handleInput = () => {
  const value = input.value;

  // Enable button only if input length > 3
  button.disabled = value.length <= 3;

  // Real-time reverse
  result.textContent = reverseString(value);
};

const handleClick = () => {
  result.textContent = reverseString(input.value);
};

input.addEventListener("input", handleInput);
button.addEventListener("click", handleClick);
