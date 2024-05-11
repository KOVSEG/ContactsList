document.addEventListener("DOMContentLoaded", function () {
    var contactsList = document.getElementById('contactsList');
    var getPerson = document.getElementById('person');
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', handlePersonValue);
    function handlePersonValue(event) {
        event.preventDefault();
        var person = getPerson.value.trim();
        if (person.length >= 4) {
            var deleteButton = document.createElement('button');
            var editButton = document.createElement('button');
            var li = document.createElement('li');
            li.textContent = person;
            deleteButton.textContent = 'Del';
            editButton.textContent = 'Edit';
            li.append(deleteButton);
            li.append(editButton);
            deleteButton.addEventListener('click', deletePerson);
            contactsList.append(li);
        }
    }
    ;
    function deletePerson() {
        console.log(this.parentElement.remove());
    }
    ;
});
