document.addEventListener("DOMContentLoaded", () => {
    let inputBox = document.querySelectorAll(".code"); // Initialize only inside event
    let firstInput = inputBox[0];

    if (firstInput) firstInput.focus(); // First input pe focus

    inputBox.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < inputBox.length - 1) {
                inputBox[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                inputBox[index - 1].focus();
            }
            if (e.key === "Enter" && input.value.length > 0 && index < inputBox.length - 1) {
                inputBox[index + 1].focus();
            }
        });
    });
});

