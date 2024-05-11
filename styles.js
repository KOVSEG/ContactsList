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
        var deleteButton = document.createElement('button');
        var editButton = document.createElement('button');
        var li = makePersonContacts(name, lastname, phone);
        deleteButton.textContent = 'Del';
        editButton.textContent = 'Edit';
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        contactsList.append(li);
        personName.value = '';
        personLastname.value = '';
        personPhone.value = '';
        deleteButton.addEventListener('click', deletePerson);
        editButton.addEventListener('click', editPerson);
    }
    ;
});
function makePersonContacts(name, lastname, phone) {
    var li = document.createElement('li');
    li.textContent = name + ' ' + lastname + ' ' + phone;
    return li;
}
;
function deletePerson() {
    this.parentElement.remove();
}
;
function editPerson() {
    var personValue = this.parentElement.firstChild.textContent;
    var getPersonValues = personValue.split(' ');
    var formWindow = document.createElement('form');
    var formButton = document.createElement('button');
    formButton.textContent = 'Save';
    var arrFormValues = ['Имя', 'Фамилия', 'Телефон'];
    var arrId = ['name', 'lastname', 'phone'];
    for (var i = 0; i < getPersonValues.length; i++) {
        var formInput = document.createElement('input');
        formInput.placeholder = arrFormValues[i];
        formInput.setAttribute('id', arrId[i]);
        formWindow.appendChild(formInput);
    }
    formWindow.appendChild(formButton);
    this.parentElement.appendChild(formWindow);
    var li = this.parentElement;
    var newValue = '';
    formButton.addEventListener('click', function (event) {
        event.preventDefault();
        var editForm = this.parentNode;
        for (var i = 0; i < editForm.length - 1; i++) {
            var inputEl = editForm[i];
            newValue += inputEl.value;
            console.log(inputEl.value);
        }
        li.firstChild.textContent = newValue;
        formWindow.remove();
    });
}
;
