const input = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultsList = document.querySelector("#results-div");

const regex = /1?[\s|-]?\(?\d{3}\)?[\s|-]?\d{3}[\s|-]?\d{4}/;

const validator = (elem) => {
  if (!elem) {
    alert("Please provide a phone number");
  } else if (regex.test(elem)) {
    resultsList.innerHTML += `
      <li>Valid US number: ${elem}</li>
    `;
  } else {
    resultsList.innerHTML += `
      <li>Invalid US number: ${elem}</li>
    `;
  }
};

checkBtn.addEventListener("click", () => validator(input.value));

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});

clearBtn.addEventListener("click", () => {
  resultsList.innerHTML = "";
});
