const display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value) || "0";
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});