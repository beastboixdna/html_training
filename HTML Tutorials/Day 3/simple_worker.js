var num = 0;

function startCounter() {
    num = num + 1;
    postMessage(num);
    setTimeout("startCounter()", 450);
}

startCounter();