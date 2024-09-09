const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function submit() {
  if (!textInput.value) {
    alert("Please input a value");
  } else {
    result.classList.remove("hidden");
    let textInputValue = textInput.value;

    if (textInputValue.length >= 1) {
      setTimeout(() => {
			    textInput.value = "";
		    }, 0);

      if (textInputValue.length === 1) {
        result.textContent = `${textInputValue} is a palindrome`;
      } else if (textInputValue.length > 1) {
        const formattedStr = textInputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reverseStr = formattedStr.split('').reverse().join('');
        if (formattedStr === reverseStr) {
          result.textContent = `${textInputValue} is a palindrome`;
        } else {
          result.textContent = `${textInputValue} is not a palindrome`;
        }
      }
    }
  }
}

textInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault;
    checkButton.click();
  }
});
