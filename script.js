function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

function equals(x=0, y=0, op){
    switch(op){
        case 'add':
        answer = add(x, y);
        break;
        case 'subtract':
        answer = subtract(x, y);
        break;
        case 'multiply':
        answer = multiply(x, y);
        break;
        case 'divide':
        if(y == 0){
            reset();
            screen.textContent = "NO LOOPS"
            return
        }
        answer = divide(x, y);
        break;
    }
    if(!Number.isInteger(answer)){
    answer = answer.toFixed(2);
    }
    if(answer.toString().length > 10){
        reset();
        screen.textContent = "ERROR";
        return
    }
    screen.textContent = answer;
    screenText = answer;
}

function populate(x){
    if(screenText.length > 10){
        screen.textContent = "ERROR";
    } else {
        screenText += x;
        screen.textContent = screenText;
    }    
}

function operator(op){
    numContainer1 = Number(screenText);
    opContainer = op;
    screenText = '';
}

function reset(){
    numContainer1 = undefined;
    numContainer2 = undefined;
    opContainer = undefined;
    screenText = "";
    screen.textContent = 0;
}

const screen = document.querySelector('.screen')
screen.textContent = 0;
let screenText = "";
let answer;
let numContainer1;
let numContainer2;
let opContainer;


const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.id == 'reset'){
            reset();
        }else if(button.id == 'equals'){
            numContainer2 = Number(screenText);
            equals(numContainer1, numContainer2, opContainer);
        }else if(isNaN(button.id)){
            operator(button.id);
        } else {
            populate(button.id);
        }
})})