function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function CalculateOperation(oprt, num1, num2) {
    if (oprt === "+") {
        return add(num1, num2)
    } else if (oprt === "-") {
        return subtract(num1, num2)
    } else if (oprt === "*") {
        return multiply(num1, num2)
    } else if (oprt === "/") {
        return divide(num1, num2)
    }
}

let allowedOperators = ["+", "-", "*", "/"]

let allowedValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"]

let btns = document.querySelectorAll("button");

const display = document.querySelector("#display");

btns.forEach((btn) => {
    if (allowedValue.includes(btn.textContent)) {
        btn.addEventListener("click", () => display.textContent += btn.textContent)
    }

    else if (btn.textContent === "clr") {
        btn.addEventListener("click", () => display.textContent = "")

    }

    else if (btn.textContent === "=") {
        btn.addEventListener("click", () => {
            let operationData = display.textContent
            let splitedOperation = operationData.split("");

            let operator = [];

            for (let i of splitedOperation) {
                if (allowedOperators.includes(i)) {
                    operator.push(i)
                }
            }
            alert(operator);

            let operationValues = operationData.split(operator[0]);

            let oprt = operator[0];
            alert(operationValues[1]);

            let num1 = parseInt(operationValues[0]);
            let num2 = parseInt(operationValues[1]);

            let result = CalculateOperation(oprt, num1, num2);

            display.textContent = result;

        })
    }
})