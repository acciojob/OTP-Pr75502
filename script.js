let inputBox = document.querySelectorAll(".code");

inputBox.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length=== 1 && index < inputBox.length - 1) {
            inputBox[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                inputBox[index - 1].focus();
            }
        }
        if (e.key === "Enter") {
            if (input.value.length > 0 && index < inputBox.length - 1) {
                inputBox[index + 1].focus();
            }
        }
    });
});
