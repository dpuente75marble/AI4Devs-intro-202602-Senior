const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const result = document.getElementById("result");

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Mostrar botón solo si hay más de 3 caracteres
input.addEventListener("input", () => {
  const value = input.value;

  if (value.length > 3) {
    button.style.display = "inline";
  } else {
    button.style.display = "none";
  }

  // Reverse en tiempo real
  result.textContent = reverseString(value);
});

// Reverse también al pulsar botón
button.addEventListener("click", () => {
  result.textContent = reverseString(input.value);
});
