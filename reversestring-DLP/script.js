(() => {
  // Cache DOM elements
  const input = document.getElementById("textInput");
  const button = document.getElementById("reverseBtn");
  const result = document.getElementById("result");

  /**
   * Safely reverses a string using Unicode-safe spread operator
   * @param {string} str
   * @returns {string}
   */
  const reverseString = (str) => {
    return [...str].reverse().join("");
  };

  /**
   * Handles input changes
   */
  const handleInput = () => {
    const value = input.value;

    // Enable button only if input length > 3
    button.disabled = value.length <= 3;

    // Real-time reverse
    result.textContent = reverseString(value);
  };

  /**
   * Handles button click
   */
  const handleClick = () => {
    result.textContent = reverseString(input.value);
  };

  input.addEventListener("input", handleInput);
  button.addEventListener("click", handleClick);
})();
