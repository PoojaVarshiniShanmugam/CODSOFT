let screen = document.getElementById("txt");
let buttons = document.querySelectorAll("input");

buttons.forEach(el => {
    el.onclick = function() {
        if (el.value == 'C') {
            screen.value = '';
        } else if (el.value == '=') {
            try {
                screen.value = eval(screen.value);
            } catch(e) {
                screen.value = "error";
            }
        } else {
            screen.value += el.value; 
        }
    }
});
