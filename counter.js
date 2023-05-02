let add = document.querySelector('.add');
let deduct = document.querySelector('.deduct');
let reset = document.querySelector('.reset');
let display = document.querySelector('.display');

let counter = 0;

add.addEventListener('click', function() {
    counter = counter + 1;
    display.innerText = counter;
    // console.log(counter);
});

deduct.addEventListener('click', function() {
    counter = counter - 1;
    display.innerText = counter;
});

reset.addEventListener('click', function() {
    counter = 0;
    display.innerText = counter;
});

// console.log(document);