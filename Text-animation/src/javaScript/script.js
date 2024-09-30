const containerEl = document.querySelector(".heading");
const carrer = ["Abhishek Yadav",'Student',"Programmer","Chess Player"];
let carrerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
   containerEl.innerHTML = ` <h1>I am ${carrer[carrerIndex].slice(0,1) === 'A'? ' ':"a "} <span>${carrer[carrerIndex].slice(0,characterIndex)}</span></h1>`;
    if (characterIndex === carrer[carrerIndex].length) {
        carrerIndex++;
        characterIndex = 0;
    }
    if(carrerIndex === carrer.length){
        carrerIndex = 0
    }

    setTimeout(updateText,400)
}