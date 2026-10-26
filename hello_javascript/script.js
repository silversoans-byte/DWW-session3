console.log("Hello, JavaScript!");

// we target the button with the id of "button-name" and store it in a variable called "button"

// html elements related to the name/text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");
// html elements related to color
let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");
// html elements related to the target
let target = document.querySelector("#target");


console.log(button);
// we listen to the click of the button
button.addEventListener("click", function() {
    console.log(inputName.value);
// we replace the innerHTML of the target with the value of the inputName
    target.innerHTML = inputName.value; 





});
buttonColor.addEventListener("click", function() {
    console.log(inputColor.value);
    target.style.color = inputColor.value;
});


let buttonTodo = document.querySelector("#toDoButton");
let inputTodo = document.querySelector("#toDoInput");
let todoList = document.querySelector("#toD");

buttonTodo.addEventListener("click", function() {

    let currentToDo = inputTodo.value;
    
    
    console.log(currentToDo);
    let newTodo = document.createElement("li");
    newTodo.innerHTML = currentToDo;
    todoList.appendChild(newTodo);




    let buttonFont = document.querySelector("#button-font");
let inputFont = document.querySelector("#input-font");

buttonFont.addEventListener("click", function() {
    console.log(inputFont.value);
    target.style.fontFamily = inputFont.value;
});

});