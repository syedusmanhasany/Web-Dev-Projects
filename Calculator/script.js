let buttons = document.querySelectorAll(".cal-btn");
let input_screen = document.querySelector("#cal-scrn");
let inputString = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            inputString = eval(inputString);
            input_screen.value = inputString;
        } else if (e.target.innerHTML === "AC") {
            inputString = "";
            input_screen.value = inputString;
        } else if (e.target.innerHTML === "DEL") {
            inputString = inputString.substring(0, inputString.length - 1);
            input_screen.value = inputString;
        } else {
            inputString += e.target.innerHTML;
            input_screen.value = inputString;
        }
    });
});
