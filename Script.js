function add(value){
document.getElementById("screen").value += value;
}

function clearScreen(){
document.getElementById("screen").value = "";
}

function back(){
let s = document.getElementById("screen");
s.value = s.value.slice(0,-1);
}

function calculate(){
try{
let result = eval(document.getElementById("screen").value);
document.getElementById("screen").value = result;
}
catch{
alert("خطأ في العملية");
}
}

function power(){
let s = document.getElementById("screen");
s.value = "(" + s.value + ")**2";
}

function plot(){

let canvas = document.getElementById("graph");
let ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 200;

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.beginPath();

for(let x=-10; x<10; x+=0.1){

let expr = document.getElementById("screen").value;

try{

let y = eval(expr.replace(/x/g,x));

let px = (x+10)*16;
let py = 100 - y*16;

ctx.lineTo(px,py);

}
catch{}

}

ctx.stroke();

}
