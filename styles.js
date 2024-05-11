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
        var li = document.createElement('li');
        li.textContent = name + ' ' + lastname + ' ' + phone;
        deleteButton.textContent = 'Del';
        editButton.textContent = 'Edit';
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        deleteButton.addEventListener('click', deletePerson);
        editButton.addEventListener('click', editPerson);
        contactsList.append(li);
        personName.value = '';
        personLastname.value = '';
        personPhone.value = '';
    }
    ;
});
function deletePerson() {
    this.parentElement.remove();
}
;
function editPerson() {
    var personValue = this.parentElement.firstChild.textContent;
    ;
}
;
