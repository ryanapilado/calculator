var inputArray = [];
var lastAnswer = null;

function takeInput(element) {
    if (element === -2) {
        inputArray = [];
    } else if (element == -1) {
        inputArray.pop();
    } else {
        inputArray.push(element);
    }
    updateDisplay();
}

function updateDisplay() {
    var displayString = '';
    var element;
    for (var i = 0; i < inputArray.length; i++) {
        element = inputArray[i];
        if (element < 10) {
            displayString += element;
        } else {
            switch (element) {
                case 10: displayString += ' + '; break;
                case 11: displayString += ' - '; break;
                case 12: displayString += ' \u00D7 '; break;
                case 13: displayString += ' \u00F7 '; break;
                case 14: displayString += '('; break;
                case 15: displayString += ')'; break;
                case 16: displayString += '^'; break;
                case 17: displayString += lastAnswer; break;
                default: alert("error! code not recognized"); break;
            }
        }
    }
    document.getElementById("usr").value = displayString;
}

function calculate() {
    var mathString = '';
    for (var i = 0; i < inputArray.length; i++) {
        var code = inputArray[i];
        if (code < 10) {
            mathString += code;
        } else {
            switch (code) {
                case 10: mathString += '+'; break;
                case 11: mathString += '-'; break;
                case 12: mathString += '*'; break;
                case 13: mathString += '/'; break;
                case 14: mathString += '('; break;
                case 15: mathString += ')'; break;
                case 16: mathString += '**'; break;
                default: alert("error! code not recognized"); break;
            }
        }
    }
    var result = eval(mathString);
    document.getElementById("usr").value = result;
    lastAnswer = result;
    inputArray = [];
}