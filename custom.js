let fromEl = document.getElementById("fromUserInput");
let toEl = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let button = document.getElementById("startBtn");
button.onclick = function() {
    let fromElval = parseInt(fromEl.value);
    let toElval = parseInt(toEl.value);
    if (fromElval === "") {
        alert("Please enter inputs");
    }
    if (toElval === "") {
        alert("Please enter inputs");
    }
    counterText.textContent = fromElval;
    let intervalId = setInterval(function() {
        if (fromElval <= toElval) {
            counterText.textContent = fromElval;
            fromElval = fromElval + 1;


        } else {
            clearInterval(intervalId);
        }
    }, 1000);

}