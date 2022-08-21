let display = document.querySelector(".wrapper__calculator--display");

let buttons = document.querySelectorAll(".button");

let decimalExists = false;

buttons.forEach(button => button.addEventListener("click", buttonClick));

document.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9) {
        display.textContent += e.key;
    } else if (e.key == '+') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            plus();

        }
    } else if (e.key == '-') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            minus();

        }
    } else if (e.key == '*') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            multiply();

        }
    } else if (e.key == '/') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            divide();

        }
    } else if (e.key == '.') {
        decimal();
    } else if (e.key == 'Enter') {
        equals();
    } else if (e.key == 'Backspace') {
        del();
    }
}

function buttonClick(e) {

    if (e.target.className === 'button number') {

        if (displayIsEmpty()) {
            display.textContent = '';
        }

        let number = e.target.textContent;
        display.textContent += number;



    } else if (e.target.className === 'button delete') {
        del();
    } else if(e.target.className === 'button clear'){
        clear();
    } else if (e.target.className === 'button decimal') {

        decimal();
    } else if (e.target.className === 'button plus') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            plus();

        }
    } else if (e.target.className === 'button minus') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            minus();
        }
    } else if (e.target.className === 'button multiply') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            multiply();
        }
    } else if (e.target.className === 'button divide') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            divide();
        }
    }
    else if (e.target.className === 'button equals') {
        equals();
    };


}

function clear(){
    display.textContent = '';
}

function multiply() {

    if (display.textContent === 'Display') {
        //do nothing
    } else {
        display.textContent += '*';
        decimalExists = false;

    }

}

function divide() {
    if (display.textContent === 'Display') {
        //do nothing
    } else {
        display.textContent += '\u00F7';
        decimalExists = false;


    }
}


function countNumbers() {

    return convertDisplayContentToArray().length;

}

function convertDisplayContentToArray() {

    return display.textContent.split('+').join(', ').split('-').join(', ').split('*').join(', ').split('\u00F7').join(', ').split(', ');

}

function equals() {

    //convert numbers to array
    let numbersInExpression = convertDisplayContentToArray();

    console.log(`numbersInExpression: ${numbersInExpression}`);

    //convert operators to array
    let operatorsInExpression = display.textContent.split('').filter(x => {

        return (x == '+' || x == '-' || x == '*' || x == '\u00F7');
    });
    let operatorsInExpressionIndex = 0;

    console.log(`operatorsInExpression: ${operatorsInExpression}`);
    console.log(`Index: ${operatorsInExpressionIndex}`);

    let result = numbersInExpression.reduce((sum, num) => {
        if (operatorsInExpression[operatorsInExpressionIndex] == '+') {

            operatorsInExpressionIndex++;
            return sum = Number(sum) + Number(num);

        } else if (operatorsInExpression[operatorsInExpressionIndex] == '-') {
            operatorsInExpressionIndex++;
            return sum = Number(sum) - Number(num);

        } else if (operatorsInExpression[operatorsInExpressionIndex] == '*') {

            operatorsInExpressionIndex++;
            return sum = Number(sum) * Number(num);

        } else if (operatorsInExpression[operatorsInExpressionIndex] == '\u00F7') {

            operatorsInExpressionIndex++;
            return sum = Number(sum) / Number(num);

        } else if (operatorsInExpression[operatorsInExpressionIndex++] == undefined) {
            console.log('undefined');
        };
    });

    display.textContent = result;
    return result;
};

function del() {

    if (display.textContent === 'Display') {
        //do nothing
    } else if (display.textContent === 'Infinity') {
        display.textContent = '';
    } else {

        let lastChar = display.textContent.length - 1;

        if (lastChar >= 1) {
            display.textContent = display.textContent.slice(0, lastChar);

        } else if (lastChar == 0) {

            display.textContent = '';

        }
    }

}

function plus() {

    if (display.textContent === 'Display') {
        //do nothing
    } else {
        display.textContent += '+';
        decimalExists = false;
    }
}

function minus() {
    if (display.textContent === 'Display') {
        //do nothing
    } else {
        display.textContent += '-';
        decimalExists = false;
    }
}

function isRepeatingOperations() {
    let lastCharIndex = display.textContent.length - 1;
    let lastCharOfDisplay = display.textContent.charAt(lastCharIndex);
    console.log(lastCharOfDisplay);

    if (lastCharOfDisplay == '+' || lastCharOfDisplay == '-' || lastCharOfDisplay == '*' || lastCharOfDisplay == '\u00F7') {
        return true;
    }

    return false;
};

function decimal() {
    if (decimalExists) {
        //do nothing
    } else {
        display.textContent += '.';
        decimalExists = true;
    };
};

function displayIsEmpty() {

    if (display.textContent == 'Display') {
        return true;
    }
    return false;
}