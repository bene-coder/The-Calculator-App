const display = document.querySelector(".screen");
const buttons = Array.from(document.querySelectorAll(".button"));
const range = document.querySelector(".range-slider");
const root = document.querySelector(":root");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case ".":
        if (display.innerText.includes(".")) return;
      case "/":
        if (display.innerText.includes("/")) return;
      case "*":
        if (display.innerText.includes("*")) return;
      case "+":
        if (display.innerText.includes("+")) return;
      case "-":
        if (display.innerText.includes("-")) return;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
