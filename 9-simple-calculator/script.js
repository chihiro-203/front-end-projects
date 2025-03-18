
document.addEventListener("DOMContentLoaded", function () {
    const equationField = document.querySelector(".equation");
    const resultField = document.querySelector(".result");
    const buttons = document.querySelectorAll(".btn");

    let equation = "";
    let result = "";
    let isCalculated = false;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "=") {
                if (!isCalculated) {
                    try {
                        result = eval(equation).toString();
                        equation += "=";
                        equationField.value = equation;
                        resultField.value = result;
                        isCalculated = true;
                    } catch {
                        resultField.value = "Error";
                    }
                }
            } else if (value === "C") {
                equation = "";
                result = "";
                equationField.value = "";
                resultField.value = "";
                isCalculated = false;
            } else {
                if (isCalculated) {
                    if (isNaN(value)) {
                        equation = result + value;
                    } else {
                        equation = value;
                        result = "";
                        resultField.value = "";
                    }
                    isCalculated = false;
                } else {
                    equation += value;
                }
            }

            equationField.value = equation;
        });
    });
});