// Write your code below:
function handleButtonClick() {
    console.log("Hi there");
}
const button = document.getElementById("greetB");
if (button) {
    button.addEventListener("click", handleButtonClick);
}

module.exports = {handleButtonClick};
