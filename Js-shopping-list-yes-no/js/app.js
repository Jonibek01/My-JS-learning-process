var shoppingList = [];
var elAddFormListProduct = document.querySelector('.add-shopping-list');
var elAddFormListProductInput = document.querySelector('.add-shopping-list-input');
var elCheckFormListProduct = document.querySelector('.check-shopping-list');
var elCheckFormListProductInput = document.querySelector('.check-shopping-list-input');
var elShopList = document.querySelector('.shop-list')

elAddFormListProduct.addEventListener('submit', function(evt){
    evt.preventDefault();

    shoppingList.push(elAddFormListProductInput.value);
    elAddFormListProductInput.value = '';
    console.log(shoppingList);

    // for (var product of elShopList){
    //     var elProduct = document.createElement('li');
    //     elProduct.classList.add('list-group-item');
    //     elProduct.textContent = product;
    // }
    // elShopList.appendChild(elProduct);
})

elCheckFormListProduct.addEventListener('submit', function(evt){
    evt.preventDefault(); 

    // making much easier to take the var of this input value if its big
    var isThereAnything = shoppingList.includes(elCheckFormListProductInput.value);

    if (isThereAnything) {
        console.log('We already wrote that');

    } else {
        console.log('Thanks for remainding');
        // taking the value from check input and putting to add input 
        elAddFormListProductInput.value = elCheckFormListProductInput.value;
        // remaining nothing into check input
        elCheckFormListProductInput.value = '';
        // giving focus to the add input
        elAddFormListProductInput.focus()
    }
})

