// taking html elements 
var elInfoForm = document.querySelector('.js-form-info');
var elNameInput = elInfoForm.querySelector('.js-fname-input');
var elSurnameInput = elInfoForm.querySelector('.js-surname-input');
var elNumInput = elInfoForm.querySelector('.js-num-input');
var elContactInput = elInfoForm.querySelector('.js-contact-input');
var elSendButton = elInfoForm.querySelector('.js-send-btn');
var elResult = document.querySelector('.js-result')

var listOfInfos = [];

elInfoForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var InputName = elNameInput.value.trim();
    var InputSurname = elSurnameInput.value.trim();
    var InputNum = elNumInput.value.trim();
    var InputContact = elContactInput.value.trim();
    
    listOfInfos.push({
        name: InputName,
        surname: InputSurname,
        number: InputNum,
        contact: InputContact
    })

    elResult.innerHTML = '';

    for(var i = 0; i < listOfInfos.length; i++) {
        var Listli = document.createElement('li');
        Listli.textContent = 1
        var text = `name: ${listOfInfos[i].name},
        surname: ${listOfInfos[i].surname},
        number: ${listOfInfos[i].number}, 
        contact: ${listOfInfos[i].contact}`;
        Listli.textContent = text;
        elResult.appendChild(Listli);
    }

})
