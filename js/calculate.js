var C = 0;
var F;
function Calculate() { 
    var inpCtrl = document.getElementById("C");
    C = inpCtrl.value;
    F = (C * 9 / 5) + 32; 
    display(); }
function display() {
    var outCtrl = document.getElementById("F");
    outCtrl.value = F;
}