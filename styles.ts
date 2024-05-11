document.addEventListener("DOMContentLoaded", function() {

  let contactsList = document.getElementById('contactsList') as HTMLUListElement;
  let personName = document.getElementById('personName') as HTMLInputElement;
  let personLastname = document.getElementById('personLastname') as HTMLInputElement;
  let personPhone = document.getElementById('personPhone') as HTMLInputElement;
  let sendButton = document.getElementById('sendButton') as HTMLButtonElement;

  sendButton.addEventListener('click', handlePersonValue);

  function handlePersonValue(event: Event) {
    event.preventDefault();
    let name = personName.value.trim();
    let lastname = personLastname.value.trim();
    let phone = personPhone.value.trim();

    let deleteButton = document.createElement('button') as HTMLButtonElement;
    let editButton = document.createElement('button') as HTMLButtonElement;
    let li = document.createElement('li') as HTMLLIElement;
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
  };
});


function deletePerson() {
  this.parentElement.remove();
};

function editPerson() {
  let personValue = this.parentElement.firstChild.textContent;;
};


