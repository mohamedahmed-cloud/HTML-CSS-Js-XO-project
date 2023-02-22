let inputOne = document.querySelector(".one input");
let inputTwo = document.querySelector(".two input");
let submit = document.querySelector(".submit");

console.log(inputOne);
console.log(inputTwo);
console.log(submit);
submit.onclick = () => {
  localStorage.setItem("playerOne", inputOne.value);
  localStorage.setItem("playerTwo", inputTwo.value);
};
window.onload = () => {
  inputOne.value = "";
  inputTwo.value = "";
};
