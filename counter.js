let displayCount = document.querySelector('[data-element="displayValue"]');
const addOne = document.querySelector("#addOneButton");
const addTwo = document.querySelector("#addTwoButton");
const deductOne = document.querySelector("#deductOneButton");
const deductTwo = document.querySelector("#deductTwoButton");
const reset = document.querySelector("#resetButton");

// data-attributes example
// console.log(displayCount.dataset);
// console.log(addOne.dataset);
// console.log(addTwo.dataset);

const COUNTER_INIT_VALUE = 0;
let counter = COUNTER_INIT_VALUE;
displayCount.innerText = counter;

addOne.addEventListener('click', function() {
    counter = counter + parseInt(addOne.dataset.button);
    displayCount.innerText = counter;
    // console.log(counter);
});

addTwo.addEventListener('click', function() {
    counter = counter + parseInt(addTwo.dataset.button);
    displayCount.innerText = counter;
    // console.log(counter);
});

deductOne.addEventListener('click', function() {
    counter = counter - parseInt(addOne.dataset.button);
    displayCount.innerText = counter;
    // console.log(counter);
});

deductTwo.addEventListener('click', function() {
    counter = counter - parseInt(addTwo.dataset.button);
    displayCount.innerText = counter;
    // console.log(counter);
});

reset.addEventListener('click', function() {
    counter = COUNTER_INIT_VALUE;
    displayCount.innerText = counter;
    // console.log(counter);
});

// console.log(document);