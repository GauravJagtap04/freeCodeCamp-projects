const input = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const romanMap = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]);

const converter = (elem) => {
  output.innerHTML = "";

  const value = Number(elem);
  let outputStr = "";

  if (!value) {
    output.textContent = "Please enter a valid number";
    output.style.background = "#e44a4a7c";
    return;
  } else if (value <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.style.background = "#e44a4a7c";
    return;
  } else if (value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.style.background = "#e44a4a7c";
    return;
  } else {
    output.style.background = "rgba(255, 255, 255, 0.25)";
  }

  let returnVal = value;

  for (let [key, val] of romanMap) {
    while (returnVal >= val) {
      returnVal -= val;
      outputStr += key;
    }
    if (returnVal === 0) break;
  }

  output.innerText = `${outputStr}`;
};

convertBtn.addEventListener("click", () => {
  output.classList.remove("hidden");
  converter(input.value);
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault;
    convertBtn.click();
  }
});
