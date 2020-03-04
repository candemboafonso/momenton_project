/*
Todo List
*/
windows.onload = function(){
//variables


let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let btnClr = document.getElementById("btnClr");
let id = 1;
// letItem = {item: "Todo item", checked: flase}
let listem = "";
let todolist = [];

btn.addEventListener("click", addTodoItem);

list.addEventListener("click", boxChecked);

btnClr.addEventListener("click", clearList);
