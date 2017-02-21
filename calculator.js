function addChar(char) {
    document.getElementById("usr").value += char;
}

function del() {
    var cur = document.getElementById("usr").value;
    if (cur.length > 0) {
        document.getElementById("usr").value = cur.slice(0, cur.length - 1);
    }
}

function reset() {
    document.getElementById("usr").value = '';
}

function calculate() {
    var result = eval(document.getElementById("usr").value);
    document.getElementById("usr").value = result;
}