var ertekejobb = 0;
var ertekefel = 0
var ertekele = 0;
var negyzet = document.getElementById("negyzetdiv");
var jobb = document.getElementById("right");
var bal = document.getElementById("left");
var fel = document.getElementById("up");
var le = document.getElementById("down");
var y = document.getElementById("rangeY");
var ertek = y.value;
console.log("Az input range értéke: " + ertek);
var x = document.getElementById("rangeX");
if (negyzet) {
    negyzet.style.backgroundColor = "aqua";
    negyzet.style.height = y.value+"px";
    negyzet.style.width = x.value+"px";

} else {
    console.error("valami nem jo");
}

y.addEventListener("input", handleRangeChange);
x.addEventListener("input", handleRangeChange)
function handleRangeChange() {
    negyzet.style.backgroundColor = "aqua";
    negyzet.style.height = y.value+"px";
    negyzet.style.width = x.value+"px";
}
function balra(){
    ertekejobb -= 10
    negyzet.style.marginRight = ertekejobb +"px"
}
function jobbra(){
    ertekejobb += 10;
    negyzet.style.marginLeft = ertekejobb +"px"
}

function felfele(){
    ertekefel -= 10
    negyzet.style.marginBottom = ertekefel +"px"
}
function lefele(){
    ertekele += 10;
    negyzet.style.marginTop = ertekele +"px"
}