const displayBox = document.querySelector(".displayBox");
const question = document.querySelector(".question");
let displayString = "";
const answer = document.querySelector(".answer");

// clear
const clearTag = document.querySelector(".clear");
clearTag.addEventListener("click",() => {
    question.value = "";
    displayString = "";
    answer.innerHTML = "";
})

// numbersAndOperation
const numbersAndOperation = document.querySelectorAll(".numbersAndOperation");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiple = document.querySelector(".multiple");
const operatorsCheck =  plus.textContent+minus.textContent+divide.textContent+multiple.textContent ;
let firstLocation ,secondLetter;

for (let i = 0; i < numbersAndOperation.length ; i++) {
    numbersAndOperation[i].addEventListener("click", () => {
       displayString += numbersAndOperation[i].textContent;
       question.value = "";
       question.value = displayString;
       //the following for-loop is for typeing same operators like that 10++15 and 10+-15
       for(let j= 0; j < displayString.length; j++) {
        let firstLetter =  displayString.slice(-2,-1)
        secondLetter =  displayString.slice(-1,displayString.length)
        if (operatorsCheck.indexOf(secondLetter) != -1 && operatorsCheck.indexOf(firstLetter) != -1) {
            displayString = displayString.slice(0,-2);
            displayString += secondLetter;
            question.value = "";
            question.value = displayString;
        }
       }
    })
}

// the following is for the answer

const calculate = document.querySelector(".calculate");
let readyToDisplay = "";

calculate.addEventListener("click", () => {
    if (displayString == "" ) {
        return;
    }
   let temp1 =  displayString.replace(divide.textContent,"/");
   let temp2 =  temp1.replace(multiple.textContent, "*");
   readyToDisplay = eval(temp2);
   answer.append(readyToDisplay)
})


//backspace
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    displayString = displayString.slice(0,-1);
    question.value = "";
    question.value = displayString;
    answer.innerHTML = "";
})
