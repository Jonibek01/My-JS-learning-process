var elFizzBuzzForm = document.querySelector(".fizzbuzz-form");                   
var elFizzBuzzInput = elFizzBuzzForm.querySelector(".fizzbuz-input");                    
var elFizzBuzzResult = elFizzBuzzForm.querySelector(".result");

elFizzBuzzForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var num = parseFloat(elFizzBuzzInput.value.trim(), 10);

    // var message = '';

    // if (num % 3 === 0) {
    //     message += 'Fizz';
    // }
    // if (num % 5 === 0) {
    //     message += 'Buzz';
    // }
    
    // elFizzBuzzResult.textContent = message || num;
    
    if (num % 3 === 0 && num % 5 === 0) {
        elFizzBuzzResult.textContent = 'FizzBuzz';
    } else if (num % 3 === 0) {
        elFizzBuzzResult.textContent = 'Fizz';
    } else if  (num % 5 ===0) {
        elFizzBuzzResult.textContent = 'Buzz';
    }
    else {
        elFizzBuzzResult.textContent = num;
    }
    elFizzBuzzResult.classList.remove('d-none');
    




})