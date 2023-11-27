// single comment

/*
multiple Comment
*/


console.log("console.log");
console.info("console.info");
console.warn("console.warn");
console.error("console.error");

document.writeln("Ekranda göster<br/>");
window.document.writeln("Ekranda göster-2");

// alert("Pop-up data");

/////////////////////////////////////////////////////
// Variable Global 

var pencil="Digital Pencil";
var pencil="Digital Pencil-1";
document.writeln(pencil+"<br/>");

// Variable local 
let pencil2="Digital Pencil-2";
pencil2="Digital Pencil-22";
document.writeln(pencil2+"<br/>");

const pencil3="Digital Pencil-3";
// pencil3="Digital Pencil-22"; yazamazsınız.
document.writeln(pencil3+"<br/>");

/////////////////////////////////////////////////////
// Operatörler
// + - * / 
// &&=AND(VE) ||=OR(VEYA)
// ! DEĞİL

// Inceredement
// DeInceredement
// x++
// ++x
// x--
// --x

/////////////////////////////////////////////////////
// Hoisting
number=44;
var number;

/////////////////////////////////////////////////////
// Prompt
// const uname=prompt("Adınız nedir?");
// document.writeln(uname+"<br/>");

// // Prompt
// const usurname=prompt("Soyadınız nedir?");
// document.writeln(usurname+"<br/>");

/////////////////////////////////////////////////////
// Cast
let number1=10;
let number2=String(Number("20")) ;// cast çevirdi
document.writeln(number1+number2+"<br/>");

/////////////////////////////////////////////////////
// typeof
let number3=20;
document.writeln(typeof number3+" <br/>");
let number4="Merhabalar";
document.writeln(typeof number4+" <br/>");
let number5=true;
document.writeln(typeof number5+" <br/>");

/////////////////////////////////////////////////////
// null
// new
// instance
// zero

// undefined
let data;
document.writeln(data+" <br/>");

// Infinity
let data2=4/0;
document.writeln(data2+" <br/>");

/////////////////////////////////////////////////////
