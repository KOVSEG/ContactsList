document.addEventListener("DOMContentLoaded", function () {
    var contactsList = document.getElementById('contactsList');
    var personName = document.getElementById('personName');
    var personLastname = document.getElementById('personLastname');
    var personPhone = document.getElementById('personPhone');
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', handlePersonValue);
    function handlePersonValue(event) {
        event.preventDefault();
        var name = personName.value.trim();
        var lastname = personLastname.value.trim();
        var phone = personPhone.value.trim();
        var personContacts = new RegExp(/^[а-яА-Яa-zA-Z]+$/);
        var personContactPhone = new RegExp(/^[\+]?[0-9]{1}[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/im);
        var deleteButton = document.createElement('button');
        var editButton = document.createElement('button');
        deleteButton.textContent = 'Del';
        editButton.textContent = 'Edit';
        if (name === '' && lastname === '' && phone === '') {
            alert('Невозможно добавить пустые строки');
        }
        else {
            if (!name.match(personContacts) && (name.length < 15 && name.length > 2)) {
                alert('Имя должно содержать от 3 до 15 букв без посторонних символов');
            }
            else if (!lastname.match(personContacts) && (lastname.length < 15 && lastname.length > 2)) {
                alert('Фамилия должна содержать от 3 до 15 букв без посторонних символов');
            }
            else if (!phone.match(personContactPhone)) {
                alert('Поверьте правильность введеного номера телефона');
            }
            else {
                var li = makePersonContacts({ name: name, lastname: lastname, phone: phone });
                li.appendChild(deleteButton);
                li.appendChild(editButton);
                contactsList.append(li);
            }
        }
        personName.value = '';
        personLastname.value = '';
        personPhone.value = '';
        deleteButton.addEventListener('click', deletePerson);
        editButton.addEventListener('click', editPerson);
    }
    ;
});
function makePersonContacts(contact) {
    var li = document.createElement('li');
    li.textContent = contact.name + ' ' + contact.lastname + ' ' + contact.phone;
    return li;
}
;
function deletePerson() {
    this.parentElement.remove();
}
;
function editPerson() {
    var personElement = this.parentElement;
    var personValues = personElement.firstChild.textContent;
    var getPersonValues = personValues.split(' ');
    var form = document.createElement('form');
    var formButton = document.createElement('button');
    formButton.textContent = 'Save';
    var arrFormValues = ['Имя', 'Фамилия', 'Телефон'];
    var inputs = [];
    arrFormValues.forEach(function (value, index) {
        var input = document.createElement('input');
        input.placeholder = value;
        input.value = getPersonValues[index] || '';
        form.appendChild(input);
        inputs.push(input);
    });
    form.appendChild(formButton);
    formButton.addEventListener('click', function (event) {
        event.preventDefault();
        var obj = {
            name: inputs[0].value.trim(),
            lastname: inputs[1].value.trim(),
            phone: inputs[2].value.trim()
        };
        personElement.firstChild.textContent = obj.name + ' ' + obj.lastname + ' ' + obj.phone;
        form.remove();
    });
    personElement.appendChild(form);
}
;
