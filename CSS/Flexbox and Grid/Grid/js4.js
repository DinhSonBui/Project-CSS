// JavaScript Document
var radios = document.querySelector("#gridAutoFlow");
var grid = document.querySelector("#cuadricula");
radios.addEventListener("change",function(evt){
  var val = evt.target.value; 
  grid.style.gridAutoFlow = val;
}, false);