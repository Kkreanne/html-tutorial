var num = 0;
function PlusOne() { num++; display(); }
function MinusOne() { num--; display(); }
function display() {
    var inpCtrl = document.getElementById("num");
    inpCtrl.value = num;

    if(num%3==0) {
        inpCtrl.style.color = "red";
    } 
    //inpCtrl.style.color = (num%3==0) ? "red":"black";
    else {
        inpCtrl.style.color = "black";
    }

    if(num%5==0) {
        inpCtrl.style.fontWeight = "bold";
    }
    else {
        inpCtrl.style.fontWeight = "normal";
    }

    if(num%7==0) {
        inpCtrl.style.fontStyle = "italic";
    }
    else {
        inpCtrl.style.fontStyle = "normal";
    }
}