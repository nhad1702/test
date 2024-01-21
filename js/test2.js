function pyramid() {
    const numLine = document.getElementById("numLine");
    const numLineVal = parseInt(numLine.value);
    const pyramidDiv = document.getElementById("pyramidDiv");
    const span = document.createElement("span");
    const brEl = document.createElement("br");
    var line = "";
    for (let i = 0; i < numLineVal; i++) {
        for (let j = 0; j <= i; j++) {
            line += "*" + " ";
            span.innerHTML += "*";
        }
        line += "\n";
        span.innerHTML += "\r";
        for (let k = 0; k < span.length; i++) {
            pyramidDiv.insertBefore(brEl, span[i]);
        }
    }
    console.log(line + "\n");
    pyramidDiv.appendChild(span);
}