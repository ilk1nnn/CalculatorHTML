
var myInput = document.getElementById("mytextinput");
function InputNumbers(id) {
    if (myInput.value == "" && id == "0") {
        AC_Button();
    }
    else {
        myInput.value += String(id);
    }
}


function InputSymbols(symbol) {
    if ((myInput.value == "" && symbol == "00") || (myInput.value == "" && symbol == "+")
        || (myInput.value == "" && symbol == "-") || (myInput.value == "" && symbol == "*")
        || (myInput.value == "" && symbol == "/") || (myInput.value == "" && symbol == ".")) {
        AC_Button();
    }
    else {
        myInput.value += String(symbol);
    }

}




function ChangeMode() {
    var modebtn = document.getElementById("modebutton");
    let element = document.getElementById("mysection");
    if (modebtn.value == "Light") {
        modebtn.value = "Dark";
        element.classList.remove("calculator");
        element.classList.add("calculatorlight");
    }
    else if (modebtn.value == "Dark") {
        modebtn.value = "Light";
        element.classList.remove("calculatorlight");
        element.classList.add("calculator");
    }
}


function EqualButton() {
    myInput.value = eval(myInput.value);
}


function AC_Button() {
    myInput.value = "";
}

function DE_Button() {
    myInput.value = myInput.value.toString().slice(0, -1);
}


