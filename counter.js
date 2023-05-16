let displayCount = document.querySelector('[data-element="displayValue"]');
let addOne= document.querySelector("addOneButton");
let addTwo= document.querySelector("addTwoButton");
let deductOne = document.querySelector("deductOneButton");
let deductTwo = document.querySelector("deductTwoButton");
let reset = document.querySelector("resetButton");

console.log(displayCount.dataset);

let counter = 0;

addOne.addEventListener('click', function() {
    counter = counter + 1;
    displayCount.innerText = counter;
    console.log(counter);
});

addTwo.addEventListener('click', function() {
    counter = counter + 2;
    displayCount.innerText = counter;
    console.log(counter);
});

deductOne.addEventListener('click', function() {
    counter = counter - 1;
    displayCount.innerText = counter;
    console.log(counter);
});

deductTwo.addEventListener('click', function() {
    counter = counter - 2;
    displayCount.innerText = counter;
    console.log(counter);
});

reset.addEventListener('click', function() {
    counter = 0;
    display.innerText = counter;
});

// console.log(document);