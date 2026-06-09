const form = document.getElementById('contactFormElement')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const phoneNumberInput = document.getElementById('phoneNumber')
const messageInput = document.getElementById('message')
const errorMessage = document.getElementById('error-message')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = firstNameInput.value;
    const lastNameInput = firstNameInput.value;
    const emailInput = firstNameInput.value;
    const phoneNumberInput = firstNameInput.value;

    errorMessage.textContent = ""



    var elements = document.querySelectorAll("form input[type=text]")
    console.log(elements)

    const elementFaultList = []
    for (var i = 0, element; element = elements[i++];) {
        if (element.value.length < 2) {
            elementFaultList.push(element.labels[0].textContent.replace(/:$/, '').trim())
            // errorMessage.textContent = element.labels[0].textContent.replace(/:$/, '').trim() + ' must me longer than 1 character';
        }
    }



    if (elementFaultList.length === 2) {
        errorMessage.textContent = elementFaultList[0] + 'and ' + elementFaultList[0] + 'must me longer than 1 character';
    } else if (elementFaultList.length === 1) {
        errorMessage.textContent = elementFaultList[0] + 'must be longer than 1 character';
    } else if (elementFaultList.length > 2) {
        let slicedArray = elementFaultList.slice(0, elementFaultList.length)
        let lastElement = "\"" + elementFaultList.slice(-1) + "\""
        let finalString = ""

        for (i = 0; i < slicedArray.length-1 ; i++) {
            finalString += "\"" + slicedArray[i] + "\"" + ", "
        }
        finalString += "and " + lastElement + ' must be longer than 1 character'
        errorMessage.textContent = finalString
    }
})