var bill=Number(prompt("What is your total bill?"));

var taxedbill=bill*1.07;
var tip=taxedbill*.05;
var finalbill=taxedbill+tip;

document.body.querySelector("#cool").innerHTML=finalbill;