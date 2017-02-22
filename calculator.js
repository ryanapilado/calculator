var evalArray = [];

function takeInput(element) {
    if (element === -2) {
        evalArray = [];
    } else if (element == -1) {
        evalArray.pop();
    } else {
        evalArray.push(element);
    }
    updateDisplay();
}

function updateDisplay() {
    var displayString = '';
    for (var i = 0; i < evalArray.length; i++) {
        var code = evalArray[i];
        if (code < 10) {
            displayString += code;
        } else {
            switch (code) {
                case 10: displayString += ' + '; break;
                case 11: displayString += ' - '; break;
                case 12: displayString += ' * '; break;
                case 13: displayString += ' / '; break;
                case 14: displayString += '('; break;
                case 15: displayString += ')'; break;
                case 16: displayString += '^'; break;
                default: alert("error! code not recognized"); break;
            }
        }
    }
    document.getElementById("usr").value = displayString;
}

function calculate() {
    var mathString = '';
    for (var i = 0; i < evalArray.length; i++) {
        var code = evalArray[i];
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
    evalArray = [];
}