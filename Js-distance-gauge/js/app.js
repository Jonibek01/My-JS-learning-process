var foot = 3.6;
var bicycle = 20;
var car = 70;
var plane = 800;

var elFormDist = document.querySelector(".form-dist");
var elInputDist = elFormDist.querySelector(".input-distance");
var elBtnResult = elFormDist.querySelector(".btn-result");
var elOutput = elFormDist.querySelector(".result");

elFormDist.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var userInput = parseFloat(elInputDist.value.trim(), 10);

    var output = `${foot * userInput} hours by foot, 
    ${bicycle * userInput} hours by bicycle,
    ${car * userInput} hours by car, 
    ${plane * userInput} hours by plane`;

    elOutput.classList.remove('d-none', 'alert', 'success');
    elOutput.textContent = output;
    elOutput.classList.add('alert-success');
})

