const initialValueOfDisplay = 0;

const display = document.querySelector(".display");
display.value = initialValueOfDisplay;

let operationsToDo = "";

const btnsContainer = document.querySelectorAll(".button-row");

btnsContainer.forEach((row) => {
    row.addEventListener("click", (event) => {
        if (event.target.tagName !== "BUTTON") return;

        const value = event.target.textContent;
        if (value === "clr") {
            display.value = initialValueOfDisplay;
            operationsToDo = "";
            return;
        }

        if (value === "del") {
            operationsToDo = operationsToDo.slice(0, -1);
            display.value = operationsToDo || initialValueOfDisplay;
            return;
        }

        if (value === "=") {
            try {
                display.value = eval(operationsToDo);
                operationsToDo = display.value.toString();
            } catch {
                display.value = "0";
                operationsToDo = "";
            }
            return;
        }

        operationsToDo += value;
        display.value = operationsToDo;

    });
});
