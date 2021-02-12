// firtly should give correct names

var elExchangeForm = document.querySelector('.Exchange-form');
var elInputSumm = document.querySelector('.input-summ');
var elCurrencySelect = document.querySelector('.currency-select')
var elResultWrapper = document.querySelector('.result-wrapper');
var elResult = document.querySelector('.result');


elExchangeForm.addEventListener('submit' , function(evt){
    evt.preventDefault();

// take the input change to number, trim and fixed
    var summ = parseFloat(elInputSumm.value.trim(), 10);

    // if (isNaN(summ)) {
    //     console.log('plz, enter number');
    //     return;
    // }
// take the user selection
    var select = parseFloat(elCurrencySelect.value.trim(), 10);
// multiply the input by selecctions
    var result = (summ * select).toFixed(2);
    console.log(result)
// show the result in output
    elResultWrapper.classList.remove('d-none');
    elResult.textContent = result;

})
