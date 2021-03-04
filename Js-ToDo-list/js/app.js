var todo = [];
var elFormList = document.querySelector('.form-list');
var elFormInput = document.querySelector('.form-list-input');
var elTodoList = document.querySelector('.todo-list');

elFormList.addEventListener('submit', function(evt){
    evt.preventDefault();


    if (!elFormInput.value.trim()){
        alert.log("Enter Text");
        elFormInput.value = '';
        return;
    



})