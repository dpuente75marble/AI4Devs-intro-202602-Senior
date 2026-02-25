/**
 * Unicode-safe reverse
 * @param {string} str
 * @returns {string}
 */
const reverseString = (str) => [...str].reverse().join("");

// DOM
const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");
const charCount = document.getElementById("charCount");
const hint = document.getElementById("hint");
const badge = document.getElementById("statusBadge");

const render = (value) => {
  const len = value.length;

  // Show button only if > 3 chars
  button.style.display = len > 3 ? "inline-block" : "none";

  charCount.textContent = `${len} chars`;

  if (len === 0) {
    badge.textContent = "Ready";
    hint.textContent = "Enter at least 4 characters";
    result.textContent = "—";
    return;
  }

  if (len <= 3) {
    badge.textContent = "Typing…";
    hint.textContent = "Button appears at 4+ characters";
  } else {
    badge.textContent = "Active";
    hint.textContent = "Reverse updates in real time";
  }

  // Real-time reverse
  result.textContent = reverseString(value);
};

input.addEventListener("input", (e) => render(e.target.value));

button.addEventListener("click", () => {
  // Optional: still works if user clicks
  render(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  input.focus();
  render("");
});

// Initial state
render("");
