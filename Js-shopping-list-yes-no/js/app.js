var shoppingList = [];
var elAddFormListProduct = document.querySelector('.add-shopping-list');
var elAddFormListProductInput = document.querySelector('.add-shopping-list-input');
var elCheckFormListProduct = document.querySelector('.check-shopping-list');
var elCheckFormListProductInput = document.querySelector('.check-shopping-list-input');

elAddFormListProduct.addEventListener('submit', function(evt){
    evt.preventDefault();

    shoppingList.push(elAddFormListProductInput.value);
    elAddFormListProductInput.value = '';
    console.log(shoppingList);
})

