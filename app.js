var symbol = "#";
var len = 7;
function generateRandomId() {
    return symbol + Math.random().toString(36).substr(2, len);
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        app.innerHTML = generateRandomId();
    }, 1000);
}
