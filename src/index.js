import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer - 이 함수만 state를 변경할 수 있다! 이것이 리덕스의 매력
const countModifier = (count = 0) => {
  // return your data
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
