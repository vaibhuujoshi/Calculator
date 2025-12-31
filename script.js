function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function operator(oprt,num1, num2) {
    if (oprt === "+") {
        add(num1, num2)
    } else if (oprt === "-") {
        subtract(num1,num2)
    } else if (oprt === "*") {
        multiply(num1, num2)
    } else if (oprt === "/") {
        divide(num1, num2)
    }
}

let btns = document.querySelector("button");

btns.addEventListener("click", (item) => {
    return alert(btns.textContent)
} );
