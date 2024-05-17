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
        deleteButton.textContent = 'Del';
        editButton.textContent = 'Edit';
        // let li = makePersonContacts(name, lastname, phone);
        var li = makePersonContacts({ name: name, lastname: lastname, phone: phone });
        function makePersonContacts(contact) {
            var li = document.createElement('li');
            li.textContent = contact.name + ' ' + contact.lastname + ' ' + contact.phone;
            return li;
        }
        ;
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
    // for(let i = 0; i < getPersonValues.length; i++) {
    //   let input = document.createElement('input') as HTMLInputElement;
    //   input.placeholder = arrFormValues[i];
    //   form.appendChild(input);
    // }
    arrFormValues.forEach(function (value, index) {
        var input = document.createElement('input');
        input.placeholder = value;
        input.value = getPersonValues[index] || '';
        form.appendChild(input);
        inputs.push(input);
    });
    form.appendChild(formButton);
    this.parentElement.appendChild(form);
    // let li = this.parentElement;
    // let newValue = '';
    formButton.addEventListener('click', function (event) {
        event.preventDefault();
        // let editForm = this.parentNode as HTMLFormElement;
        // for(let i = 0; i < editForm.length - 1; i++) {
        //   let inputEl = editForm[i] as HTMLInputElement;
        //   newValue += inputEl.value + ' ';
        // }
        var obj = {
            name: inputs[0].value.trim(),
            lastname: inputs[1].value.trim(),
            phone: inputs[2].value.trim()
        };
        // personElement.firstChild.textContent = newValue.trim();
        personElement.firstChild.textContent = obj.name + ' ' + obj.lastname + ' ' + obj.phone;
        form.remove();
    });
    personElement.appendChild(form);
}
;
