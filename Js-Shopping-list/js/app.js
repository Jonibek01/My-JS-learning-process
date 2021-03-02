var elFormList = document.querySelector('.shopping-list-form');
var elShoppingListInput = elFormList.querySelector('.shopping-list-input');
var elShoppingList = document.querySelector('.shopping-list');

var shoppingList = [];

elFormList.addEventListener('submit', function(evt){
    evt.preventDefault();

    // taking the value
    if (!elShoppingListInput.value.trim()){
        alert.log("Enter Text");
        elShoppingListInput.value = '';
        return;
    }

    //pushing the values 
    shoppingList.push(elShoppingListInput.value.trim());
    elShoppingListInput.value = '';
    elShoppingListInput.focus()

    // there should be nothing in html
    elShoppingList.innerHTML = '';

    // showing in page
    for (var product of shoppingList) {
        
        var newElProduct = document.createElement('li');
        newElProduct.classList.add('list-group-item');
        newElProduct.textContent = product;

        elShoppingList.appendChild(newElProduct);   
    }

});
    elShoppingListInput.addEventListener('input', function () {
    console.log(elShoppingListInput.value);
     });