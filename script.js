const button = document.getElementsByClassName("stack_button");
const buttonArray = Array.from(button[0].querySelectorAll("button"));
const stackDiv = document.getElementsByClassName("stack_place")[0];
const topValue = document.querySelector("#stack_size_size");

let top_ = -1;
let ArrayMember_ = [
  "카스밍",
  "시즈쿠",
  "리나",
  "아유무",
  "세츠나",
  "아이",
  "카나타",
  "카린",
  "엠마",
];
let Color = [
  "#fdfd96",
  "#add8e6",
  "#a1a5a4",
  "#ffb6c1",
  "#f76865",
  "#ffa359",
  "#d5ace7",
  "#000080",
  "#adec92",
];
function push() {
  if (top_ >= ArrayMember_.length - 1) {
    alert("스택이 가득 찼습니다.");
  } else {
    var newDiv = document.createElement("div");
    top_ = top_ + 1;
    newDiv.innerText = ArrayMember_[top_];
    newDiv.style.color = Color[top_];
    newDiv.setAttribute("id", top_);
    stackDiv.appendChild(newDiv);
  }
}
function pop() {
  if (top_ === -1) {
    alert("스택이 비었습니다.");
  } else {
    console.log(top_);
    const memberArray = Array.from(stackDiv.querySelectorAll("div"));
    stackDiv.removeChild(memberArray[top_]);
    top_ = top_ - 1;
  }
}
function peek() {
  if (top_ === -1) {
    alert("스택이 비었습니다.");
  } else {
    console.log(top_);
    const memberArray = Array.from(stackDiv.querySelectorAll("div"));
    alert(`스택 맨위값: ${memberArray[top_].innerText}`);
  }
}
function isFull() {
  if (top_ >= ArrayMember_.length - 1) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}
function isEmpty() {
  if (top_ === -1) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}

function handleLowClick(e) {
  switch (e.target.id) {
    case "push":
      console.log("hi");
      push();
      break;
    case "pop":
      pop();
      break;
    case "peek":
      peek();
      break;
    case "isFull":
      isFull();
      break;
    case "isEmpty":
      isEmpty();
      break;
  }
  topValue.innerText = top_;
}
buttonArray.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});
